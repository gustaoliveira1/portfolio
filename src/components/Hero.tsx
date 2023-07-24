import { motion } from "framer-motion";
import { BiSolidChevronRight } from "react-icons/bi";
import Balance from "react-wrap-balancer";
import Link from "next/link";
import { HeroPattern } from "./HeroPattern";

export function Hero() {
  return (
    <motion.section
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center"
    >
      <div className="max-w-[1216px] w-full mx-auto p-6 flex flex-col gap-6 justify-center">
        <h3 className="text-xl">👋 Olá, eu sou o</h3>
        <h1 className="text-6xl tracking-wider font-bold">Gusta Oliveira</h1>
        <h2 className="text-3xl tracking-wide font-semibold">
          Desenvolvedor <span className="text-secondary">Fullstack</span>
        </h2>
        <p className="max-w-[510px] text-xl">
          <Balance>
            Desenvolvedor Fullstack e Designer de UX, transformando ideias em
            incríveis experiêcias digitais.
          </Balance>
        </p>
        <Link
          href="/about"
          className="bg-black text-white font-semibold flex gap-3 z-10 py-2 px-4 max-w-fit rounded-3xl items-center"
        >
          Mais sobre mim
          <BiSolidChevronRight />
        </Link>
      </div>
      <HeroPattern />
    </motion.section>
  );
}
