import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Open_Sans as OpenSans } from "next/font/google";
import { CurrentPageProvider } from "@/contexts/CurrentPage";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const openSans = OpenSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Gustavo Oliveira Araujo | Desenvolvedor Fullstack Web & Designer de UX",
  description:
    "Sou um desenvolvedor Fullstack web e designer de UX apaixonado por transformar ideias em realidade. Confira meu portfólio para ver como crio interfaces intuitivas e funcionais, combinando habilidades de codificação e design.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} bg-primary`}>
        <CurrentPageProvider>
          <Header />
          {children}
          <Footer />
        </CurrentPageProvider>
      </body>
    </html>
  );
}
