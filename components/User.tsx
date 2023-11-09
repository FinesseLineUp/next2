"use client";

import { useSession } from "next-auth/react";
import React from "react";

const User = () => {
  const { data: session } = useSession();
  console.log("bla xession", session);

  // return <pre>{JSON.stringify(session)}</pre>;
};

export default User;
