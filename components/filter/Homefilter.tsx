"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { formUrlQuery, removeKeysformUrlQuery } from "@/lib/utl";
import { useRouter, useSearchParams } from "next/navigation";

const filters = [
  { name: "React", value: "react" },
  { name: "Popular", value: "popular" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recommeded", value: "recommended" },
];

const Homefilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterParams = searchParams.get("filter");
  const [active, setActive] = useState(filterParams || "");

  const handelFilter = (value: string) => {
    let newUrl = "";
    if (active === value) {
      newUrl = removeKeysformUrlQuery({
        params: searchParams.toString(),
        keys: ["filter"],
      });
      setActive("");
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: value.toLocaleLowerCase(),
      });

      setActive(value);
    }

    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="mt-10 sm:flex gap-3 hidden flex-wrap">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={cn(
            "body-medium rounded-lg shadow-none px-6 py-3 capitalize",
            active === filter.value
              ? "text-primary-500 bg-primary-100 dark:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          onClick={() => handelFilter(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default Homefilter;
