import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative grid place-content-center gap-10 h-screen w-screen bg-background text-foreground md:items-center">
            <div className="absolute top-10 left-1/2 -translate-x-1/2 h-20">
                <h1 className="text-4xl font-semibold">Welcome to <span className="text-primary">RAG</span> Chat Bot</h1>
            </div>
            {children}
        </div>
    );
}