import { motion } from "framer-motion";
import React from "react";
import Kair from "../images/kair.jpg";
import Stephan from "../images/stephan.jpg";
import Vladimir from "../images/vladimir.jpg";
import PersonCard from "./PersonCard";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="md:h-screen flex flex-col text-center md:text-left max-w-7xl px-10 justify-center mx-auto items-center gap-12"
    >
      <h3 className="relative uppercase tracking-[20px] text-gray-500 text-2xl justify-self-start">
        О нас
      </h3>
      <div className="w-full flex justify-between md:gap-0 gap-5 items-center md:flex-row flex-col">
        <PersonCard
          name="Владимир"
          field="Дизайнер"
          image={Vladimir}
          socials={["https://vk.com/vovamalyshevq"]}
        />
        <PersonCard
          name="Каир"
          field="Создатель контента"
          image={Kair}
          socials={["https://vk.com/rkair"]}
        />
        <PersonCard
          name="Степан"
          field="Координатор"
          image={Stephan}
          socials={["https://vk.com/id432918644"]}
        />
      </div>
    </motion.div>
  );
}
