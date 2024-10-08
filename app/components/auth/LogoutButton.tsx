'use client'

import { signOut } from "next-auth/react"
import { LogOut } from "lucide-react"

export default function LogoutButton() {
    return (
        <button onClick={() => signOut()} className="text-base rounded-sm flex gap-x-2 items-center font-medium text-primary outline p-2">
          <LogOut />  Logout
        </button>
    )
}