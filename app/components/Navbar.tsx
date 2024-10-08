"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Menu } from 'lucide-react'
import { X } from "lucide-react";

const navdata = [
    {
        links: 'Chat',
        pathname: 'chat'
    },
    {
        links: 'About',
        pathname: 'about'
    },
    {
        links: 'Login',
        pathname: 'login'
    },
]

function Navbar() {
    const path = usePathname();
    const param = useSearchParams();
    const url = `${path}${param}`;
    const isActive = (pathname: string) => pathname === url;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-center max-lg:p-4 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-7xl m-auto backdrop-blur-lg backdrop-filter bg-opacity-30 sticky top-0 z-10">
                <div className="rounded-xl flex flex-col lg:flex-row justify-between items-center relative w-full">
                    <div className="flex justify-between lg:justify-start w-full">
                        <div className="flex items-baseline">
                            <h1 className="font-semibold font-Noto text-lg md:text-2xl lg:text-3xl">
                                Rag <span className="text-primary">Chat</span> Bot
                            </h1>{" "}
                        </div>

                        <div className="block lg:hidden">
                            {isOpen ? (
                                <X
                                    className="h-6 w-6"
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                            ) : (
                                <Menu
                                    className="h-6 w-6"
                                    onClick={() => setIsOpen(!isOpen)}
                                />
                            )}
                        </div>
                    </div>
                    <div
                        className={`flex flex-col lg:flex-row justify-center lg:justify-end md:text-lg text-sm items-center font-normal my-1 ${isOpen
                            ? "py-4 absolute top-10 h-[92vh] w-screen bg-black text-white opacity-85 z-40"
                            : "hidden lg:flex"
                            }`}
                    >
                        {navdata.map((item, index) => (
                            <Link
                                key={index}
                                href={`/${item.pathname}`}
                                onClick={() => setIsOpen(isOpen)}
                                className={`p-4 max-lg:text-3xl max-lg:font-medium hover:text-primary hover:border-b-primary hover:border-b-2 
                  ${isActive(`/${item.pathname}`)
                                        ? "text-primary border-b-2 border-b-primary"
                                        : ""
                                    }`}
                            >
                                {item.links}
                            </Link>
                        ))}
                        <Link href='https://github.com/Amanmawar17/rag-chat-bot' className="p-4 max-lg:text-3xl max-lg:font-medium hover:text-primary hover:border-b-primary hover:border-b-2" >Github</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;