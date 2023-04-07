import React from "react";
import { motion } from "framer-motion";
import IconTechnoComponents from "./IconTechnoComponents";

export default function TechnoComponents(props) {
  const { title, paragraph, icons = [] } = props;

  const blurBackgroundVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  return (
    <motion.div
      className="p-10 bg-gray-200 rounded-3xl flex flex-col min-h-[16rem] justify-between relative overflow-hidden"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-#FF0081 via-transparent to-#00CAFF blur-lg"
        variants={blurBackgroundVariants}
        initial="initial"
        whileHover="hover"
      />
      <div className="flex flex-col gap-4 z-10">
        <h2 className="text-gray-800 font-semibold text-xl">{title}</h2>
        <p className="text-gray-600 font-regular text-base">{paragraph}</p>
      </div>
      <div className="flex justify-start content-end z-10">
        {icons.map((icon, index) => (
          <IconTechnoComponents key={index} component={icon.component} color={icon.color} />
        ))}
      </div>
    </motion.div>
  );
}
