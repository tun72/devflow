"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { ROUTES } from "@/app/consts/Routes";
import { toast } from "sonner";

const SocialAuthForm = () => {
  const classButton =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 cursor-pointer";

  const handleOAuth = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        callbackUrl: ROUTES.home,
        redirect: true,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      toast.error(e.message);
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={classButton} onClick={() => handleOAuth("github")}>
        <Image
          src={"/icons/github.svg"}
          alt="Github logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={classButton} onClick={() => handleOAuth("google")}>
        <Image
          src={"/icons/google.svg"}
          alt="Github logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
