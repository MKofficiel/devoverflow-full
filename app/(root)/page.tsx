import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";

const questions = [
  {
    _id: "1",
    title: "How to learn react",
    description: " i want to learn react, can anyone help me ?",
    tags: [
      {
        _id: "1",
        name: "react",
      },
      {
        _id: "2",
        name: "html",
      },
      {
        _id: "",
        name: "css",
      },
    ],

    author: {
      _id: "1",
      name: "John Doe",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to javascript",
    description: " i want to learn react, can anyone help me ?",
    tags: [
      {
        _id: "1",
        name: "react",
      },
      {
        _id: "2",
        name: "html",
      },
      {
        _id: "",
        name: "css",
      },
    ],

    author: {
      _id: "1",
      name: "John Doe",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query?.toLowerCase())
  );
  return (
    <>
      <section className='flex w-full justify-between flex-col-reverse sm:flex-row sm:items-center '>
        <h1 className='h1-bold text-dark100_light900'> All Questions</h1>
        <Button className='primary-gradient min-h-[46px] px-4 py-3 !text-light-900'>
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className='mt-11'>
        <LocalSearch
          route='/'
          imgSrc='/icons/search.svg'
          placeholder='Search questions...'
          otherClasses='flex-1'
        />
      </section>
      {/* HomeFilter */}
      <div className='mt-10 flex w-full flex-col gap-6'>
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
