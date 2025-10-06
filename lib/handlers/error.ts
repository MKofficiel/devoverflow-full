import { NextResponse } from "next/server";
import { RequestError, ValidationError } from "../http-errors";
import z, { ZodError } from "zod";
import logger from "../logger";

export type ResponseType = "api" | "server";
const formatResponse = (
  responseType: ResponseType,
  status: number,
  message: string,
  errors?: Record<string, string[]>
) => {
  const responseContent = {
    success: false,
    error: {
      message,
      details: errors,
    },
    status,
  };

  return responseType === "api"
    ? NextResponse.json(responseContent, { status })
    : responseContent;
};

const handleError = (error: unknown, responseType: ResponseType = "server") => {
  if (error instanceof RequestError) {
    logger.error(
      { err: error },
      `${responseType.toUpperCase()} Error: ${error.message}`
    );
    return formatResponse(
      responseType,
      error.statusCode,
      error.message,
      error.errors
    );
  }
  //   if (error instanceof ZodError) {
  //     const validationError = new ValidationError(error.flatten().fieldErrors as Record<string, string[]>); ;
  //   }
  if (error instanceof ZodError) {
    logger.error(
      { err: error },
      `${responseType.toUpperCase()} Validation Error: ${error.message}`
    );
    const { fieldErrors } = z.flattenError(error);
    const validationError = new ValidationError(
      fieldErrors as Record<string, string[]>
    );
    return formatResponse(
      responseType,
      validationError.statusCode,
      validationError.message,
      validationError.errors
    );
  }

  if (error instanceof Error) {
    logger.error(error.message);
    return formatResponse(responseType, 500, error.message);
  }
  logger.error({ err: error }, "Unknown error occurred");
  return formatResponse(responseType, 500, "An unknown error occurred");
};

export default handleError;
