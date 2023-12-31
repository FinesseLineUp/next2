import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

const userSchema = z.object({
  email: z.string().min(1, "Email is required").email("invalid email"),
  username: z.string().min(1, "Username is required").max(100),
  password: z
    .string()
    .min(1, "Email is required")
    .min(8, "Password should have at least 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // const { email, username, password } = userSchema.parse(body);
    const { email, username, password } = body;

    console.log("bl post");

    //check if email already exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        {
          user: null,
          message: "user with this email already exists",
        },
        { status: 409 }
      );
    }

    //check if username already exists
    const existingUserByUsername = await db.user.findUnique({
      where: { username: username },
    });

    if (existingUserByUsername) {
      return NextResponse.json(
        {
          user: null,
          message: "user with this username already exists",
        },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "User created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
