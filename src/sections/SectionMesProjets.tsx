'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function SectionMesProjets() {
  const projectsData = [
    {
      image: "/kasa_app.png",
      projectName: "Kasa App - Site d'Agence Immobilière",
      projectLink: "https://github.com/WillFDA/kasa_app",
      projectDescription:
        "En utilisant la puissance de React et la flexibilité du SCSS, j'ai créé un site web innovant pour une agence immobilière appelée Kasa App lors de mon cursus sur Openclassrooms.",
      projectTech: [
        "React",
        "SCSS",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "https://willfda.github.io/kasa_app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Mes Projets</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-box">
                    <div className="project-content">

                    </div>
                    <div className="project-image">
                        <Image
                            src={image}
                            alt={projectName}
                            width={600}
                            height={300}
                        />
                    </div>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default SectionMesProjets;