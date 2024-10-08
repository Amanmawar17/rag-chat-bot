import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative grid place-content-center gap-10 bg-background text-foreground md:items-center py-20">
                <h1 className="text-4xl font-semibold">Welcome to <span className="text-primary">RAG</span> Chat Bot</h1>
            {children}
        </div>
    );
}