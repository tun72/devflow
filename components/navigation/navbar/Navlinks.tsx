"use client";
import { sidebarLinks } from "@/app/consts";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navlinks = ({ isMobileNav = false }: { isMobileNav: boolean }) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const LinkComponent = (
          <Link
            href={item.route}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center p-4 gap-4 justify-start bg-transparent"
            )}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={cn({ "inverted-colors": !isActive })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={item.label}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.label}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default Navlinks;
