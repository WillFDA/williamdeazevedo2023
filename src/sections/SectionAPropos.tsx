"use client"
import React from "react"
import Image from "next/image"
import {motion} from "framer-motion";
import SchoolComponent from "@/components/SchoolComponent";

const SectionAPropos = () => {
  return (
    <section id="abouts" className="about">
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
        <h3 className="about-title">A Propos de moi</h3>
    </motion.div>
    
    <motion.div
      className="about-box"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
          <div className="about-image">
            <Image
                src="/william-coeur.jpg" 
                alt="Photo de William vue de face et un font végétale verdoyant" 
                style={{objectFit: "cover"}}
                fill={true}
            />
          </div>
        <aside className="about-aside">
          <div className="about-me">
            <h4>Mon histoire</h4>
            <div className="about-me-paragraph">
  <p>Passionné par l&apos;informatique et la créativité visuelle depuis mon jeune âge,
  j&apos;ai commencé à explorer l&apos;univers de l&apos;infographie à seulement 11 ans.
  </p>
  <p className="paragraph_notessential">Mon voyage a commencé par la modélisation 3D, le montage vidéo et le traitement d&apos;image pour 
  créer des affiches et d&apos;autres matériaux graphiques. J&apos;ai ensuite approfondi mes connaissances 
  dans ces domaines en poursuivant des études universitaires en impression et plurimédia. </p>

  <p>Je n&apos;ai jamais cessé d&apos;être intrigué par le potentiel de l&apos;informatique. 
  C&apos;est pourquoi en 2022, j&apos;ai décidé de m&apos;orienter vers le développement web, 
  en commençant une formation d&apos;intégrateur web. Aujourd&apos;hui, je suis fier de dire que je suis diplômé,
  avec plusieurs mois d&apos;expérience dans le domaine, prêt à apporter ma passion et mes compétences à de nouveaux défis et projets.
  </p>
</div>
          </div>
        <SchoolComponent />
        </aside>
    </motion.div>
    
    
    </section>
  )
}

export default SectionAPropos