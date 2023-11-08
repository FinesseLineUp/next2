import { buttonVariants } from "@/components/ui/button";
import { HandMetalIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <HandMetalIcon />
        </Link>
        <Link href="/sign-in" className={buttonVariants()}>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
