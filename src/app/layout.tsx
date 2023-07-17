import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans as OpenSans } from "next/font/google";
import { CurrentPageProvider } from "@/contexts/CurrentPage";
import { Header } from "@/components/Header";

const openSans = OpenSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} bg-primary`}>
        <CurrentPageProvider>
          <Header />
          {children}
        </CurrentPageProvider>
      </body>
    </html>
  );
}
