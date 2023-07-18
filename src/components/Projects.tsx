import { ProjectPattern } from "./ProjectPattern";

import gelateriaTablet from "@/assets/gelateria-talblet.png";
import gelateriaSmartphone from "@/assets/gelateria-smartphone.png";
import jogoDaVelhaTablet from "@/assets/jogo-da-velha-tablet.png";
import jogoDaVelhaSmartphone from "@/assets/jogo-da-velha-smartphone.png";

export function Projects() {
  return (
    <section className="min-h-screen">
      <div className="w-full max-w-[1216px] mx-auto p-6 pt-20">
        <h2 className="text-secondary text-4xl font-semibold text-center mb-20">
          Projetos
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <ProjectPattern
            title="Gelateria"
            description="Landing page criada para exibir os deliciosos sorvetes artesanais da tradicional Gelateria."
            technologies={["React", "Javascript", "CSS"]}
            smartphoneImage={gelateriaSmartphone}
            tabletImage={gelateriaTablet}
          />
          <ProjectPattern
            title="Jogo da velha"
            description="Um simples jogo da velha para se divertir com os amigos!"
            technologies={["React", "Next", "Typescript", "TailwindCss"]}
            smartphoneImage={jogoDaVelhaSmartphone}
            tabletImage={jogoDaVelhaTablet}
          />
        </div>
      </div>
    </section>
  );
}
