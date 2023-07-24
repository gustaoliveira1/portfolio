"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { AiOutlineLink } from "react-icons/ai";

interface ProjectPatternProps {
  title: string;
  link: string;
  description: string;
  technologies: string[];
  tabletImage: StaticImageData;
  smartphoneImage: StaticImageData;
}

export function ProjectPattern({
  title,
  link,
  description,
  technologies,
  smartphoneImage,
  tabletImage,
}: ProjectPatternProps) {
  const technologiesToString = () => {
    let techString = "";

    for (const tech of technologies) {
      if (tech === technologies[0]) {
        techString += tech;
      } else {
        techString += ` - ${tech}`;
      }
    }

    return techString;
  };

  return (
    <motion.div
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="mx-0 xm:mx-auto lg:mx-0 mb-10"
    >
      <div className="sm:h-[520px] h-[360px] sm:max-w-[360px] max-w-[240px] relative rounded-2xl bg-tertiary p-1 shadow-md">
        <div className="w-1/5 h-2 bg-tertiary absolute rounded-b-full z-10 top-0 left-1/2 -translate-x-1/2" />
        <Image src={tabletImage} alt="" className="rounded-2xl h-full w-full" />

        {/*Smartphone Device*/}
        <div className=" sm:h-[360px]  sm:max-w-[200px] h-[240px] max-w-[150px] absolute rounded-2xl bg-tertiary p-2 shadow-md bottom-[5%] right-[-25%]">
          <div className="w-1/5 h-2 bg-tertiary absolute rounded-full z-10 overflow-hidden left-1/2 -translate-x-1/2" />
          <Image
            src={smartphoneImage}
            alt=""
            className="rounded-2xl h-full w-full object-cover top-1/2 left-1/2"
          />
        </div>

        {/*Project texts*/}
      </div>
      <div className="space-y-5 mt-10 max-w-md">
        <a
          href={link}
          target="_blank"
          className="uppercase font-semibold flex items-center gap-3 text-2xl tracking-tight after:block after:absolute after:w-0 after:h-[3px] relative after:bg-black/70 after:transition-transform hover:after:w-full hover:hover after:bottom-0 hover:after:animate-underline"
        >
          {title}
          <AiOutlineLink />
        </a>
        <p className="text-black/80">{description}</p>
        <p className=" text-secondary">{technologiesToString()}</p>
      </div>
    </motion.div>
  );
}
