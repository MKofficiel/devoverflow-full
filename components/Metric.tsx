import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  textStyles: string;
  isAuthor?: boolean;
  href?: string;
  imgStyles?: string;
}
const Metric = ({
  imgUrl,
  alt,
  href,
  value,
  title,
  textStyles,
  isAuthor,
  imgStyles,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`rounded-full object-cpntain ${imgStyles}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}

        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  return href ? (
    <Link href={href} className='flex-center gap-1'>
      {metricContent}
    </Link>
  ) : (
    <div className='flex-center gap-1'>{metricContent}</div>
  );
};

export default Metric;
