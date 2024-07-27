import Link from "next/link"

export default function ErrorPage() {
    return (
    <div className="h-screen grid place-content-center">
      <p>something went wrong, please visit <Link href="/login" className="text-primary underline">Login</Link></p>
    </div>
  )}