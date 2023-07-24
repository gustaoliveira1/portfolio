"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";

interface TecnologyProps {
  technology: string;
  icon: ElementType;
}

export function Technology({ technology, icon: Icon }: TecnologyProps) {
  return (
    <motion.div
      initial={{ y: "10%", opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 bg-white shadow-md p-6 w-full rounded-lg"
    >
      <Icon className="text-2xl" />
      <p>{technology}</p>
    </motion.div>
  );
}
