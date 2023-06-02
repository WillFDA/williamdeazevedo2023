'use client'
import React from "react";
import { motion } from "framer-motion";
import TechnologiesIcons from "./TechnologiesIcons";

interface TechnologiesBoxProps {
  title: string;
  paragraph: string;
  icons: Array<{
    component: React.ReactElement;
    color: string;
  }>;
}

export default function TechnologiesBox({ title, paragraph, icons = [] }: TechnologiesBoxProps) {
  return (
    <motion.div
    className="techno-components"
      whileHover={{ scale: 1.02 }}
    > 
      <div className="techno-components__content">
        <h2 className="techno-components__title">{title}</h2>
        <p className="techno-components__paragraph">{paragraph}</p>
      </div>
      <div className="techno-components__icons">
        {icons.map((icon, index) => (
          <TechnologiesIcons key={index} component={icon.component} color={icon.color} />
        ))}
      </div>
    </motion.div>
  );
}
