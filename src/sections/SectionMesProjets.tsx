"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function SectionMesProjets() {
  const projectsData = [
    {
      image: "/singlepageportfolio.png",
      projectName: "Single page design Portfolio",
      projectLink: "https://single-page-design-portfolio-william.netlify.app/",
      projectDescription:
        "Ce projet, créé avec Next.js et Tailwind CSS, met en valeur les performances et l'optimisation d'image de Next.js. J'ai relevé le défi de Front End Mentor en alignant précisément les blocs du Hero et en gérant un slider. Le site est responsive et fidèle au design Figma fourni.",
      projectTech: ["Next JS", "Tailwind CSS", "SwiperJS"],
      projectExternalLinks: {
        github: "https://github.com/WillFDA/single-page-design-portfolio",
        externalLink:
          "https://single-page-design-portfolio-william.netlify.app/",
      },
      isNew: true,
      frontendmentor: true,
    },
    {
      image: "/kasa_app.png",
      projectName: "Kasa App - Site d'Agence Immobilière",
      projectLink: "https://willfda.github.io/kasa_app/",
      projectDescription:
        "En utilisant la puissance de React et la flexibilité du SCSS, j'ai créé un site web innovant pour une agence immobilière appelée Kasa App lors de mon cursus sur Openclassrooms.",
      projectTech: ["React", "SCSS"],
      projectExternalLinks: {
        github: "https://github.com/WillFDA/kasa_app",
        externalLink: "https://willfda.github.io/kasa_app/",
      },
      isNew: false,
      frontendmentor: false,
    },
    {
      image: "/ohmyfood.png",
      projectName: "Oh My Food - Restaurant à la Carte",
      projectLink: "https://willfda.github.io/Projet_4_ohmyfood/",
      projectDescription:
        "Mon rôle en tant que développeur était de structurer le site avec HTML, de créer des styles visuellement attrayants avec SASS et d'implémenter des animations fluides pour améliorer l'expérience utilisateur.",
      projectTech: ["HTML", "SCSS"],
      projectExternalLinks: {
        github: "https://github.com/WillFDA/Projet_4_ohmyfood",
        externalLink: "https://willfda.github.io/Projet_4_ohmyfood/",
      },
      isNew: false,
      frontendmentor: false,
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
            isNew,
            frontendmentor,
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
                        <p>{projectDescription}</p>
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
                        return <li key={index}>{tech}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="img-container">
                    {isNew || frontendmentor ? (
                      <div className="img-container-box">
                        {isNew ? (
                          <span className="img-container-new">Nouveau</span>
                        ) : null}
                        {frontendmentor ? (
                          <span className="img-container-mentor">
                            Front End Mentor
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                    <Link className="link-img" href={projectLink}>
                      <div className="overlay">
                        <span className="overlay-icon">
                          <FiExternalLink />
                        </span>
                      </div>
                      <Image
                        src={image}
                        alt={projectName}
                        style={{ objectFit: "cover" }}
                        fill={true}
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
