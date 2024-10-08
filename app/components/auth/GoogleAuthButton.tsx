"use client";

import { signIn } from "next-auth/react";

import Google from "@/public/icons/google.svg"

export default function GoogleAuthButton() {
  return (
    <button onClick={() => signIn("github")} className='p-[6px] border-2 border-solid rounded hover:shadow-md'><Google className="w-7 h-7" /></button>
  );
}