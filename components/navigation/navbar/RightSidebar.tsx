import { ROUTES } from "@/app/consts/Routes";
import TagCard from "@/components/cards/TagCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const hotQuestions = [
  { _id: "1", title: "How to create a custom hook in React ?" },
  { _id: "2", title: "How to manage global state with the Context API ?" },
  {
    _id: "3",
    title: "What's the difference between useEffect and useLayoutEffect ?",
  },
  {
    _id: "4",
    title: "How to optimize performance in large React applications ?",
  },
  { _id: "5", title: "How to implement server-side rendering with Next.js ?" },
  {
    _id: "6",
    title: "How to type React components properly with TypeScript ?",
  },
];

const popularTags = [
  { _id: "1", name: "react", questions: 124 },
  { _id: "2", name: "nextjs", questions: 98 },
  { _id: "3", name: "typescript", questions: 85 },
  { _id: "9", name: "tailwindcss", questions: 55 },
  { _id: "10", name: "nodejs", questions: 91 },
  { _id: "11", name: "express", questions: 28 },
  { _id: "12", name: "graphql", questions: 34 },
];
const RightSidebar = () => {
  return (
    <section className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light800">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((q) => (
            <Link
              href={ROUTES.profile(q._id)}
              key={q._id}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{q.title}</p>
              <Image
                src={"/icons/chevron-right.svg"}
                alt="chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <TagCard
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              questions={tag.questions}
              showCount={true}
              compact=""
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
