import React from "react";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact, FaSass } from "react-icons/fa";
import {SiTypescript, SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiAdobeaftereffects } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import TechnologiesBox from "@/components/TechnologiesBox";
import AnimationTechnologiesBox from "@/animations/AnimationTechnologiesBox";

export default function SectionTechnologies() {
  return (
    <>
      <div className="mes-techno">
        <h1 className="mes-techno__title">
          Mes technologies
        </h1>
        <AnimationTechnologiesBox>
          <div className="mes-techno__content">
            <TechnologiesBox
              title="Front-end"
              paragraph="Technologies que j&apos;ai appris au cours de ma formation et en autodidacte."
              icons={[
                { component: <FaReact />, color: "#61DBFB" },
                { component: <FaSass />, color: "#CD669A" },
                { component: <SiTypescript />, color: "#06B6D4" },
                { component: <TbBrandNextjs />, color: "#000000" },
              ]}
            />
            <TechnologiesBox
              title="Design"
              paragraph="Toute les applications que j&apos;ai utilisé lors de mes études et stages."
              icons={[
                { component: <SiAdobephotoshop />, color: "#4FCCFE" },
                { component: <SiAdobeillustrator />, color: "#FF992D" },
                { component: <SiFigma />, color: "#000000" },
                { component: <SiAdobeaftereffects />, color: "#525cf0" },
              ]}
            />
          </div>
        </AnimationTechnologiesBox>
      </div>
    </>
  );
}
