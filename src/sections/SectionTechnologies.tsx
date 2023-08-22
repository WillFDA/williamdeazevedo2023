"use client";
import React from "react";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
  SiAdobeaftereffects,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import TechnologiesBox from "@/components/TechnologiesBox";
// import AnimationTechnologiesBox from "@/animations/AnimationTechnologiesBox";
import { motion } from "framer-motion";

export default function SectionTechnologies() {
  return (
    <>
      <div id="technos" className="mes-techno">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <h1 className="mes-techno__title">Mes technologies</h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          variants={{
            visible: { opacity: 1, y: -50 },
            hidden: { opacity: 0, y: 0 },
          }}
        >
          <div className="mes-techno__content">
            <TechnologiesBox
              title="Front-end"
              paragraph="Technologies que j'ai appris au cours de ma formation et en autodidacte."
              icons={[
                { component: <FaReact />, color: "#61DBFB" },
                { component: <SiTypescript />, color: "#06B6D4" },
                { component: <TbBrandNextjs />, color: "#000000" },
                { component: <SiRedux />, color: "##764ABC" },
                { component: <SiTailwindcss />, color: "##38BDF8" },
              ]}
            />
            <TechnologiesBox
              title="Design"
              paragraph="Toute les applications que j'ai utilisé lors de mes études et stages."
              icons={[
                { component: <SiAdobephotoshop />, color: "#4FCCFE" },
                { component: <SiAdobeillustrator />, color: "#FF992D" },
                { component: <SiFigma />, color: "#000000" },
                { component: <SiAdobeaftereffects />, color: "#525cf0" },
              ]}
            />
          </div>
        </motion.div>
      </div>
    </>
  );
}
