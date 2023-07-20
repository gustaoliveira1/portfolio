import { ProjectPattern } from "./ProjectPattern";

import gelateriaTablet from "@/assets/gelateria-talblet.png";
import gelateriaSmartphone from "@/assets/gelateria-smartphone.png";
import agenciaTablet from "@/assets/agencia-tablet.png";
import agenciaSmartphone from "@/assets/agencia-smartphone.png";
import alphatechTablet from "@/assets/alphatech-tablet.png";
import alphatechSmartphone from "@/assets/alphatech-smartphone.png";
import cmlifeTablet from "@/assets/cmlife-tablet.png";
import cmlifeSmartphone from "@/assets/cmlife-smatphone.png";

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
            title="Agência de viagens"
            description="Procure suas viagens de forma simples e intuitiva!"
            technologies={["HTML", "CSS", "Javascript"]}
            smartphoneImage={agenciaSmartphone}
            tabletImage={agenciaTablet}
          />
          <ProjectPattern
            title="Hospedagem Alphatech"
            description="Obtenha a melhor velocidade para o seu site. Não perca mais clientes por causa de lentidão na sua hospedagem."
            technologies={["HTML", "Javascript", "CSS"]}
            smartphoneImage={alphatechSmartphone}
            tabletImage={alphatechTablet}
          />
          <ProjectPattern
            title="Clínica Médica Life"
            description="Nossa clínica está pronta para receber nossos pacientes através de uma excelente estrutura, comodidade e com a segurança de que você precisam."
            technologies={["React", "Next", "Typescript", "TailwindCss"]}
            smartphoneImage={cmlifeSmartphone}
            tabletImage={cmlifeTablet}
          />
        </div>
      </div>
    </section>
  );
}
