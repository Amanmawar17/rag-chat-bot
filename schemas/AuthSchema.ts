import { z } from "zod";

export const SignInSchema = z.object({
    email: z.string().email().regex(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/, {message: "provide a valid email."}),
    password: z.string().min(8, {message: 'password must be atleast eight characters'})
})
export const SignUpSchema = z.object({
    email: z.string().email().regex(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/, {message: "provide a valid email."}),
    username: z.string().min(2,{message: "Atleast two letters are required."}),
    password: z.string().min(8, {message: 'password must be atleast eight characters'})
})