import { ReactNode } from "react";


export default function Chat({ children }: { children: ReactNode }) {

  return (
    <div className="bg-background text-foreground">
      {children}
    </div>
  );
}