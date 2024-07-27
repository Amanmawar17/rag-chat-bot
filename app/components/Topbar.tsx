"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import { FaGithub } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import History from './History'
import Logout from './Logout'
import AuthButton from './AuthButton'

export default function Topbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='p-2 '>
            <div className=' grid place-content-center grid-cols-5 shadow-md'>
                <Button className='p-2 w-20 cursor-pointer transition' onClick={toggleSidebar}>{isOpen ? <FaPlus className='w-8 h-8 rotate-45' /> : <LuMenu className='w-8 h-8'/>}</Button>
                <h1 className='col-span-3 place-self-center text-4xl font-semibold'>RAG <span className='text-primary'> Chat </span>Bot</h1>
                <Button className='place-self-end p-2 bg-background text-primary border-2 border-primary hover:bg-primary hover:text-background'><FaGithub className="w-5 h-5 mr-2" />Github</Button>
            </div>
            <div className={`fixed top-14 left-0 h-full bg-card border-e-2 text-white w-48 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}>
                <div className='py-5 flex flex-col justify-center items-center gap-5'>
                    <Avatar className=''>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* {data && <h3>{data?.user?.email}</h3>} */}
                    <AuthButton/>
                </div>
                <Separator />
                <div className='text-foreground'>
                    <h3>History</h3>
                    <History />
                </div>

            </div>
        </nav>
    )
}
