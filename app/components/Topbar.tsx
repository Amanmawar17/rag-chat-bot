"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Separator } from '@/components/ui/separator'
import Github from "@/public/icons/github.svg"
import { Plus } from 'lucide-react'
import { Menu } from 'lucide-react'
import History from './History'
import LogoutButton from './auth/LogoutButton'

export default function Topbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='p-2 '>
            <div className='flex justify-between items-center shadow-md'>
                <Button className='p-2 w-20 cursor-pointer transition' onClick={toggleSidebar}>{isOpen ? <Plus className='w-8 h-8 rotate-45' /> : <Menu className='w-8 h-8' />}</Button>
                <h1 className='col-span-3 place-self-center text-4xl font-semibold'>RAG <span className='text-primary'> Chat </span>Bot</h1>
                <div className='py-5 flex justify-center items-center gap-5'>
                <Button className='place-self-end p-2 bg-background text-primary border-2 border-primary hover:bg-primary hover:text-background'><Github className="w-5 h-5 mr-2" />Github</Button>
                    <Avatar className=''>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {/* {data && <h3>{data?.user?.email}</h3>} */}
                    <LogoutButton />
                </div>
            </div>
            <div className={`fixed top-[96px] left-0 h-[calc(100vh-96px)] bg-card border-e-2 text-gray-400 w-48 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out`}>

                <div className='text-foreground gap-y-3'>
                    <h3 className='text-center text-2xl font-medium'>History</h3>
                    <Separator />
                    <History />
                </div>

            </div>
        </div>
    )
}
