import React from "react";
import TechnoComponents from "../components/TechnoComponents";
import AnimationMesTechno from "../animation/AnimationMesTechno";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiAdobeaftereffects } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function MesTechno() {
  return (
    <>
      <div className="my-10 mx-auto">
        <h1 className=" font-Inter font-bold text-3xl text-center mb-14 mt-24 sm:text-4xl md:text-5xl">
          Mes technologies
        </h1>
        <AnimationMesTechno>
          <div className="flex flex-col md:flex-row gap-10">
            <TechnoComponents
              className="flex-1 w-full md:w-1/2"
              title="Front-end"
              paragraph="Technologies que j’ai appris au cours de ma formation et en autodidacte."
              icons={[
                { component: <IoLogoCss3 />, color: "#264DE4" },
                { component: <FaReact />, color: "#61DBFB" },
                { component: <FaSass />, color: "#CD669A" },
                { component: <SiTailwindcss />, color: "#06B6D4" },
                { component: <TbBrandNextjs />, color: "#000000" },
              ]}
            />
            <TechnoComponents
              className="flex-1 w-full md:w-1/2"
              title="Design"
              paragraph="Toute les applications que j’ai utiliser lors de mes études et stages."
              icons={[
                { component: <SiAdobephotoshop />, color: "#4FCCFE" },
                { component: <SiAdobeillustrator />, color: "#FF992D" },
                { component: <SiFigma />, color: "#000000" },
                { component: <SiAdobeaftereffects />, color: "#525cf0" },
              ]}
            />
          </div>
        </AnimationMesTechno>
      </div>
    </>
  );
}
