"use client";

import { signIn } from "next-auth/react";
import Github from "@/public/icons/github.svg"


export default function GithubAuthButton() {
  return (
    <button onClick={() => signIn("github")}  className='p-[6px] border-2 border-solid rounded hover:shadow-md'><Github className="w-7 h-7"/></button>  
  )
}