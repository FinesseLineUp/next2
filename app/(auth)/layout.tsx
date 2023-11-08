import { ReactNode } from "react";

interface AuthProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthProps) => {
  return <div className="bg-slate-100 p-10 rounded-md">{children}</div>;
};

export default AuthLayout;
