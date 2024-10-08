'use client'

import { signOut } from "next-auth/react"
import { FiLogOut } from "react-icons/fi";

export default function LogoutButton() {
    return (
        <button onClick={() => signOut()} className="text-base rounded-sm flex gap-x-2 items-center font-medium text-primary outline p-2">
          <FiLogOut />  Logout
        </button>
    )
}