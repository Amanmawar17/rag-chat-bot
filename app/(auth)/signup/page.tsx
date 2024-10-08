"use client"
import Link from 'next/link'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import GoogleAuthButton from "@/app/components/auth/GoogleAuthButton"
import GithubAuthButton from "@/app/components/auth/GithubAuthButton"
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { ApiResponse } from '@/utils/ApiResponse';
import { SignUpSchema } from '@/schemas/AuthSchema';

export default function RegisterPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    try {
      const result = await axios.post<ApiResponse>('api/signup', data, {
        method:"http"
      } )
      router.push("/login"); // Redirect to login page after signup
      toast.success('User Register Succesfully!')
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      let errorMessage = axiosError.response?.data.message || "An unexpected error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div className='bg-card text-card-foreground p-10 shadow-2xl grid gap-y-4 max-w-3xl'>
      <div className='text-center grid gap-y-2 '>
        <h1 className='text-2xl font-semibold'>SignUp</h1>
        <h3 className='mt-4'>Already have an account? <Link href="/login" className='font-semibold border-b-2 border-solid border-primary text-foreground hover:text-primary ml-2'>Login</Link></h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className='grid justify-center gap-y-8 w-full my-6'>
        <label className='grid'>Email
          <input type="email" placeholder='email' {...register("email", { required: true })} className='outline outline-1 p-2 w-80' />
        </label>
        <label className='grid'>Username
          <input type="text" placeholder='username' {...register("username", { required: true })} className='outline outline-1 p-2 w-80' />
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