import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// <Metric
//             imgUrl="/icons/like.svg"
//             alt="like"
//             value={upvotes}
//             title=" Votes"
//             textStyles="small-medium text-dark400_light800"
//           />

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles?: string;
  imageClass?: string;
  titleStyles?: string;
  isAuthor?: boolean;
}
const Metric = ({
  imgUrl,
  alt,
  value,
  href,
  title,
  textStyles,
  imageClass,
  titleStyles,
  isAuthor,
}: Props) => {
  const content = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={20}
        height={20}
        className={cn("rounded-lg object-contain", imageClass)}
      />
      <p className={cn("flex items-center gap-1", textStyles)}>
        {value}
        {title ? (
          <span className={cn(`small-regular line-clamp-1`, titleStyles)}>
            {title}
          </span>
        ) : null}
      </p>
    </>
  );
  return href ? (
    <Link href={href} className="flex-center gap-1">
      {content}
    </Link>
  ) : (
    <div className="flex-center gap-1">{content}</div>
  );
};

export default Metric;
