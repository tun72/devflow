import React from "react";
import Navlinks from "./Navlinks";
import { ROUTES } from "@/app/consts/Routes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = () => {
  return (
    <div className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex h-full flex-col gap-6">
        <Navlinks />
      </div>

      <div className="flex flex-col gap-3">
        <Button
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
          asChild
        >
          <Link href={ROUTES.SignIn}>
            <Image
              src={"/icons/account.svg"}
              alt="Account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient max-lg:hidden">Log in</span>
          </Link>
        </Button>

        <Button className="small-medium light-border-2 btn-tertiary min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
          <Link href={ROUTES.SignUp}>
            <Image
              src={"/icons/sign-up.svg"}
              alt="Account"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="text-dark400_light900 max-lg:hidden">Sign up</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LeftSidebar;
