import { Button, buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { HandMetalIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { FC } from "react";
import UserAccountNav from "./UserAccountNav";

const Navbar: FC = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <HandMetalIcon />
        </Link>

        {session?.user ? (
          <UserAccountNav />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
