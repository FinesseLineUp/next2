import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Home222</h1>
      <Link href="/admin" className={buttonVariants()}>
        Open my admin
      </Link>
    </div>
  );
}
