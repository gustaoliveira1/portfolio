"use client";

import Link from "next/link";
import { useCurrentPage } from "@/hooks/useCurrentPage";
import { pageTypes } from "@/types/pagesTypes";

export function HeaderNav() {
  const { page, setPage } = useCurrentPage();

  const handleChangePage = (value: pageTypes) => setPage(value);

  return (
    <nav className="flex gap-6 items-center">
      <Link
        href="/"
        className={
          page === pageTypes.HOME
            ? "text-secondary border-b-2 border-secondary"
            : ""
        }
        onClick={() => handleChangePage(pageTypes.HOME)}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          page === pageTypes.ABOUT
            ? "text-secondary border-b-2 border-secondary"
            : ""
        }
        onClick={() => handleChangePage(pageTypes.ABOUT)}
      >
        Sobre mim
      </Link>
    </nav>
  );
}
