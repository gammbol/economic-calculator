import { motion } from "framer-motion";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";

export default function Hero() {
  return (
    <div className="h-screen text-white flex flex-col items-center justify-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <h1 className="text-center md:text-7xl text-xl font-bold max-w-6xl z-20">
          Проектная работа по теме «Веб-сайт с калькулятором разных
          экономических формул»
        </h1>
      </motion.div>
    </div>
  );
}
