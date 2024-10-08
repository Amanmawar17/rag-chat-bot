import { ReactNode } from "react";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function Chat({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/login");
  }
  return (
    <div className="bg-background text-foreground">
      {children}
    </div>
  );
}