"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { pageTypes } from "@/types/pagesTypes";
import { useCurrentPage } from "@/hooks/useCurrentPage";

export function HeaderNav() {
  const [isActive, setIsActive] = useState(false);
  const { page } = useCurrentPage();

  const toggleMenu = () => setIsActive(!isActive);

  return (
    <nav className="flex gap-6 items-center">
      <button onClick={toggleMenu} className="md:hidden">
        <FiMenu className="text-2xl" />
      </button>

      <div className={`hidden md:flex gap-6 items-center`}>
        <Link
          href="/"
          className={
            page === pageTypes.HOME
              ? "text-secondary border-b-2 border-secondary"
              : ""
          }
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
        >
          Sobre mim
        </Link>
      </div>

      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: isActive ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className={`${
          isActive ? "flex" : "hidden"
        } flex-col gap-6 absolute h-screen w-[80vw] top-0 right-0 bg-white p-6 shadow-md`}
      >
        <button onClick={toggleMenu} className="self-end">
          <FiX className="text-2xl" />
        </button>

        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className={
              page === pageTypes.HOME
                ? "text-secondary border-b-2 border-secondary max-w-fit"
                : ""
            }
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              page === pageTypes.ABOUT
                ? "text-secondary border-b-2 border-secondary max-w-fit"
                : ""
            }
          >
            Sobre mim
          </Link>
        </div>
      </motion.aside>
    </nav>
  );
}
