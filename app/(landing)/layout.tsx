import LayoutFooter from "@/components/layout/LayoutFooter";
import LayoutHeader from "@/components/layout/LayoutHeader";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <LayoutHeader />
      <main className="flex-1 container mx-auto">
        {children}
      </main>
      <LayoutFooter />
    </div>
  );
}
