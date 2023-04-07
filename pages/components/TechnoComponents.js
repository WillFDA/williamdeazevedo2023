import React from "react";
import { motion } from "framer-motion";
import IconTechnoComponents from "./IconTechnoComponents";

export default function TechnoComponents(props) {
  const { title, paragraph, icons = [] } = props;

  return (
    <motion.div
      className="p-4 bg-gray-200 rounded-3xl flex flex-col justify-between relative overflow-hidden gap-4 hover:bg-gray-300 transition-colors duration-300 min-h-[12rem] sm:min-h-[14rem] md:min-h-[16rem] lg:min-h-[15rem] xl:min-h-[17rem] sm:p-6 md:p-8 w-full md:w-auto"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex flex-col gap-4 z-10">
        <h2 className="text-gray-800 font-semibold text-xl sm:text-2xl md:text-3xl">{title}</h2>
        <p className="text-gray-600 font-regular text-base sm:text-lg md:text-xl">{paragraph}</p>
      </div>
      <div className="flex justify-start content-end z-10 gap-0 lg:gap-3">
        {icons.map((icon, index) => (
          <IconTechnoComponents key={index} component={icon.component} color={icon.color} />
        ))}
      </div>
    </motion.div>
  );
}
