"use client";

import { AboutMe } from "@/components/AboutMe";
import { Expertise } from "@/components/Expertise";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import { pageTypes } from "@/types/pagesTypes";

export default function Page() {
  const { setPage } = useCurrentPage();

  setPage(pageTypes.ABOUT);

  return (
    <main className="min-h-full">
      <AboutMe />
      <Expertise />
    </main>
  );
}
