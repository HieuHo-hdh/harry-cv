"use client";

import LayoutFooter from "@/components/layout/LayoutFooter";
import FloatingNav from "@/components/layout/FloatingNav";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <FloatingNav />
      <main className="flex-1 container mx-auto">
        {children}
      </main>
      <LayoutFooter />
    </div>
  );
}
