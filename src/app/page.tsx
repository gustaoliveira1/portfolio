"use client"

import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import { pageTypes } from "@/types/pagesTypes";

export default function Home() {
  const { setPage } = useCurrentPage()

  setPage(pageTypes.HOME)

  return (
    <main>
      <Hero />
      <Projects />
    </main>
  );
}
