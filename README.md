
### RAG Chat Bot

Utilising Vercel AI SDK and NEXT JS and Gemini AI for building a Retrieval Augmented Generation chat bot.
Learn about thses from docs.

## Features Rag chat bot 
- Atuhentication with Supabase Auth 
- more secured session as we give request to supabase to get user which actually check for the user as per the documentation, not utilizing session.
- Using Gemini ai for chat bot and curretly giving raw user prompts to the gemini ai to get response as per the user interaction with the bot.
- History is not saved in the databse but going to add in future.
Below is some documentation about the tool that i used in this project.

- [RAG](https://vercel.com/guides/retrieval-augmented-generation) 
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Vercel docs](https://vercel.com/docs) 
- [Vercel Ai SDK](https://sdk.vercel.ai/docs/introduction) 
- [Vercel Ai SDK with Google Gemini](https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai) 
- [Supabase Auth with Next JS](https://supabase.com/docs/guides/auth/server-side/nextjs) 
- [supabase Docs](https://supabase.com/docs) 

## Getting Started

First, fork this repo and then clone it in your directory:

## Now API's Key

If you want to use this chat bot, you need to have Gemini AI key as your environment variable.
Supabase Auth and DATABASE keys also required to get Auth and Database from Supabase.


```bash
npm i

npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Deploy on Vercel

Push your repo on you github and then go to vercel add project in it. give your keys and environment variables and wait for build to finish and you got your own chat.
