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
        github: "https://github.com/WillFDA/kasa_app",
        externalLink: "https://willfda.github.io/kasa_app/",
      },
    },
    {
      image: "/ohmyfood.png",
      projectName: "Oh My Food - Restaurant à la Carte",
      projectLink: "https://github.com/WillFDA/Projet_4_ohmyfood",
      projectDescription:
        "Mon rôle en tant que développeur était de structurer le site avec HTML, de créer des styles visuellement attrayants avec SASS et d'implémenter des animations fluides pour améliorer l'expérience utilisateur.",
      projectTech: [
        "HTML",
        "SCSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/WillFDA/Projet_4_ohmyfood",
        externalLink: "https://willfda.github.io/Projet_4_ohmyfood/",
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
                      <div className="project-content-text">
                        <h3 className="project-title">{projectName}</h3>
                        <div className="project-description">
                          <p>
                            {projectDescription}
                          </p>
                        </div>
                        <div className="project-links">
                          <Link href={projectExternalLinks.github}>
                            <FiGithub />
                          </Link>
                          <Link href={projectExternalLinks.externalLink}>
                            <FiExternalLink />
                          </Link>
                        </div>
                      </div>
                      <ul className="project-tech">
                        {projectTech.map((tech, index) => {
                          return <li key={index}>{tech}</li>
                        })}
                      </ul>
                        
                    </div>
                    <div className="img-container">
                        <Link className="link-img" href={projectLink} alt={'Redirection vers le github pages du projet'}>
                        <div className="overlay">
                          <span className="overlay-icon">
                            <FiExternalLink />
                          </span>
                        </div>
                            <Image
                                src={image}
                                alt={projectName}
                                width={500}
                                height={300}
                                style={{objectFit: 'cover'}}
                            />
                        </Link>
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