import { prisma } from "@/utils/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

// Export the POST handler as a named function
export async function POST(request: Request) {
  const { email, password, username } = await request.json();

  if (!email || !password || !username) {
    return NextResponse.json({ message: "Email, username, and password are required." }, { status: 400 });
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: "User already exists." }, { status: 400 });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Create the new user in the database
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username,
      },
    });

    return NextResponse.json({ message: "User created successfully.", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Error creating user." }, { status: 500 });
  }
}
