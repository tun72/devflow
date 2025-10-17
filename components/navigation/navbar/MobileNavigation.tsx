import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/app/consts/Routes";
import { Button } from "@/components/ui/button";
import Navlinks from "./Navlinks";
const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src={"/icons/hamburger.svg"}
          alt="Menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetHeader>
          <SheetTitle className="hidden">Navigation</SheetTitle>
          <Link href="/" className="flex items-center gap-1">
            <Image
              src={"/images/site-logo.svg"}
              width={23}
              height={23}
              alt="Devflow logo"
            />
            <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
              Dev <span className="text-primary-500">Flow</span>
            </p>
          </Link>

          <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-6 pt-16">
                <Navlinks isMobileNav={true} />
              </section>
            </SheetClose>

            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href={ROUTES.SignIn}>
                  <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                    <span className="primary-text-gradient">Log in</span>
                  </Button>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={ROUTES.SignUp}>
                  <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                    <span className="text-dark400_light900">Sign up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
