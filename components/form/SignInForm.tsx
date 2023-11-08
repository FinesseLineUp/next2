"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("invalid email"),
  password: z
    .string()
    .min(1, "Email is required")
    .min(8, "Password should have at least 8 characters"),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log("bla submitted", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-gray-600 mt-16">
            Sign in
          </Button>
        </div>
      </form>
      <div
        className="mx-auto my-4 flex w-full items-center justify-evenly 
      before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400
      after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400"
      >
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        if you don&apos;t have an account, please&nbsp;
        <Link href="/sign-up" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </Form>
  );
};

export default SignInForm;
