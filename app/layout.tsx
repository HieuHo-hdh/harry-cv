import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ho Dac Hieu (Harry) | Software Engineer | Front-end Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="author" content="Ho Dac Hieu" />
        <meta name="keywords" content="Software Engineer, Frontend Engineer" />
        <meta
          name="description" 
          content="Ho Dac Hieu (Harry) - Software Engineer, Frontend Engineer. 4+ years of experience building modern web applications." 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-[320px]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
