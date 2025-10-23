import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ROUTES } from "../consts/Routes";
import LocalSearch from "@/components/search/LocalSearch";
import Homefilter from "@/components/filter/Homefilter";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2021-09-01"),
  },
];
// q
interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}
const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filterQuestions = questions.filter((question) => {
    const q = query?.toLowerCase?.() ?? "";
    const f = filter?.toLowerCase?.() ?? "";
    const filterTags = f
      ? f
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      : [];

    const matchesQuery =
      !q ||
      question.title.toLowerCase().includes(q) ||
      (question.description?.toLowerCase().includes(q) ?? false);

    const matchesFilter =
      filterTags.length === 0 ||
      question.tags?.some((tag) => filterTags.includes(tag.name.toLowerCase()));

    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
          <Link href={ROUTES.ask_questuon}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route={"/"}
          imgSrc={"/icons/search.svg"}
          placeholder={"Search question ..."}
          otherClasses={"flex-1"}
        />
      </section>
      <Homefilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filterQuestions.map((q) => (
          <QuestionCard key={q._id} question={q} />
        ))}
      </div>
    </>
  );
};

export default Home;
