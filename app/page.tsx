import Image from 'next/image'
import home from '@/public/home.svg'
import Navbar from './components/NavBar'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'


export default async function Home() {

  return (
    <><div className='bg-herobackground bg-center bg-no-repeat bg-cover text-white'>
      <Navbar />
      <main className='flex flex-col justify-center items-center sm:min-h-screen lg:h-[calc(100vh-68px)] text-center gap-y-14'>
        <div className='grid place-content-center gap-y-5'>
            <h1 className='text-6xl font-serif font-semibold'>Hello, <span className='text-primary'>I</span> am Tango 🤖</h1>
            <p className=''>Ask me anything because I am friend of Google Gemini. 😎</p>
        </div>
        <Link href='/chat' className='bg-primary text-background px-3 py-2 rounded-sm flex gap-x-2'><ArrowRight/> Let`s Get Started</Link>
      </main>
    </div>
    </>
  )
}
