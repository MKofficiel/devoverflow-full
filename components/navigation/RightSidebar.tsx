import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How to learn React?" },
  { _id: "2", title: "What is TypeScript?" },
  { _id: "3", title: "Best practices for Node.js?" },
  { _id: " 4", title: "How to manage state in React?" },
  { _id: " 5", title: "What is the difference between var, let, and const?" },
];

const popularTags = [
  { _id: "1", name: "JavaScript", questions: 1200 },
  { _id: "2", name: "React", questions: 950 },
  { _id: "3", name: "TypeScript", questions: 800 },
  { _id: "4", name: "Node.js", questions: 700 },
  { _id: "5", name: "CSS", questions: 600 },
];

const RightSidebar = () => {
  return (
    <section className='background-light900_dark200 pt-36 custom-scrollbar text-dark200_light900 light-border sticky right-0 top-0 flex flex-col h-screen w-[350px] gap-6  border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden'>
      <div>
        <h3 className='h3-bold '>Top Questions</h3>

        <div className='mt-7 flex w-full flex-col gap-[30px] '>
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className='flex cursor-pointer items-center justify-between'
            >
              <p className='body-meduim text-dark500_light700'>{title}</p>

              <Image
                src='/icons/chevron-right.svg'
                alt='Chevron'
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className='mt-16'>
        <h3 className='h3-bold text-dark200_light900 '>Popular Tags</h3>
        <div className='mt-7 flex flex-col gap-4'>
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
