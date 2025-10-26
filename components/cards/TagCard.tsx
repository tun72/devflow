import { ROUTES } from "@/app/consts/Routes";
import Link from "next/link";
import React from "react";
import { id } from "zod/v4/locales";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";
import Image from "next/image";

interface Props {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact: string;
  isButton?: boolean;
  remove?: boolean;
  handelRemove?: () => void;
}
const TagCard = ({
  name,
  _id,
  questions = 0,
  showCount,
  compact,
  isButton,
  remove,
  handelRemove,
}: Props) => {
  const iconClass = getDeviconClassName(name);

  const tagContent = (
    <>
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>

          {remove && (
            <Image
              src={"/icons/close.svg"}
              width={12}
              height={12}
              alt="close icon"
              className="cursor-pointer object-contain invert-0 dark:invert"
              onClick={handelRemove}
            />
          )}
        </div>
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );
  return (
    <>
      {isButton ? (
        <button type="button">{tagContent}</button>
      ) : (
        <Link href={ROUTES.tags(_id)} className="flex justify-between gap-2">
          {tagContent}
        </Link>
      )}
    </>
  );
};

export default TagCard;
