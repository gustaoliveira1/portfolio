import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiFastify,
  SiTailwindcss,
  SiFigma,
  SiGithub,
} from "react-icons/si";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { Technology } from "./Technology";

const technologies = [
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: GrReactjs, name: "React.js" },
  { icon: AiFillHtml5, name: "HTML5" },
  { icon: IoLogoCss3, name: "CSS3" },
  { icon: SiJavascript, name: "Javascript" },
  { icon: SiTypescript, name: "Typescript" },
  { icon: IoLogoNodejs, name: "Node.js" },
  { icon: GrMysql, name: "MySQL" },
  { icon: SiFastify, name: "Fastify" },
  { icon: SiTailwindcss, name: "TailwindCSS" },
  { icon: SiGithub, name: "Git/Github" },
  { icon: SiFigma, name: "Figma" },
];

export function Expertise() {
  return (
    <section className="max-w-[1216px] mx-auto px-6 py-36 flex flex-col justify-center">
      <h2 className="text-3xl text-secondary font-semibold mb-10 tracking-wide text-center">
        Minha expertise
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {technologies.map((tech) => {
          return (
            <Technology
              key={tech.name}
              icon={tech.icon}
              technology={tech.name}
            />
          );
        })}
      </div>
    </section>
  );
}
