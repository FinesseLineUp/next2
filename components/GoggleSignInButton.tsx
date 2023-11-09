import React, { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

interface GoogleSignInButtonProps {
  children: ReactNode;
}

const GoggleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const googleSignInHandler = () => {
    signIn("google", { callbackUrl: "http://localhost:3000/admin" });
  };
  return (
    <Button onClick={googleSignInHandler} className="w-full bg-gray-600">
      {children}
    </Button>
  );
};

export default GoggleSignInButton;
