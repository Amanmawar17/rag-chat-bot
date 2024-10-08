"use client"
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleAuthButton from "@/app/components/auth/GoogleAuthButton"
import GithubAuthButton from "@/app/components/auth/GithubAuthButton"
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { SignInSchema } from "@/schemas/AuthSchema";
import { signIn } from "next-auth/react";
import { z } from "zod";
import { ApiResponse } from '@/utils/ApiResponse';
import { AxiosError } from 'axios';

export default function LoginPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        if (result.error === "CredentialsSignin") {
          toast.error('Incorrect username or password')
        } else {
          toast.error(result.error)
        }
      }
      if (result?.url) {
        router.push("/chat");
        toast.success('User Login Succesfully!')
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };
  return (
    <div className='bg-card text-card-foreground p-10 shadow-2xl grid gap-y-4 max-w-3xl'>
      <div className='text-center grid gap-y-2 '>
        <h1 className='text-2xl font-semibold'>Login</h1>
        <h3 className=''>Are you a New User? <Link href="/signup" className='font-semibold underline-offset-1 text-foreground hover:text-primary ml-2'>Sign Up</Link></h3>
      </div>
      <div className='grid place-content-start my-3'>
        <h3>If you are the recuitor then use below credentials.</h3>
        <li>email: testuser@gmail.com</li>
        <li>password: 12345678</li>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='grid justify-center gap-y-8 w-full my-6'>
        <label className='grid'>Email
          <input type="email" placeholder='email' {...register("email", { required: true })} className='outline outline-1 p-2 w-80' />
        </label>
        <label className='grid'>Password
          <input type="password" placeholder='password' {...register("password", { required: true })} className='outline outline-1 p-2 w-80' />
        </label>
        <button type='submit' className='bg-blue-600 text-white text-xl font-nunito py-2 px-8 w-fit place-self-center rounded-sm' >Submit</button>
      </form>
      <hr className='' />
      <p className='text-center font-nunito'>Other Sign in option</p>
      <div className='flex justify-center items-center gap-x-8'>
        <GoogleAuthButton />
        <GithubAuthButton />
      </div>
    </div>
  )
}