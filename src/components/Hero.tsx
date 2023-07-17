import { HeroPattern } from "./HeroPattern";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-[1216px] w-full mx-auto p-6 flex flex-col gap-6 justify-center">
        <h3 className="text-xl">👋 Olá, eu sou o</h3>
        <h1 className="text-6xl tracking-wider font-bold">Gusta Oliveira</h1>
        <h2 className="text-3xl tracking-wide font-semibold">
          Desenvolvedor <span className="text-secondary">Fullstack</span>
        </h2>
        <p className="max-w-[510px] text-xl">
          Desenvolvedor Fullstack e Designer de UX, transformando ideias em
          incríveis experiêcias digitais.
        </p>
      </div>
      <HeroPattern />
    </section>
  );
}
