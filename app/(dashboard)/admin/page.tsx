import User from "@/components/User";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import * as auth from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log("blz session", session);
  console.log("blz auth", auth);

  if (session?.user) {
    return (
      <div>
        <User />
        <h2 className="text-2xl">welcome {session.user?.username}</h2>
      </div>
    );
  }

  return <div className="text-2xl">please login to see this page</div>;
};

export default page;
