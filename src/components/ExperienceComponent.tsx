"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
// le CSS de se fichier est dans SectionAPropos

const ExperienceComponent = () => {
  const [visibleContent, setVisibleContent] = useState("2020");
  return (
    <div className="about-container">
      <div className="about-container-list">
        <button
          className={`about-container-list-item ${
            visibleContent === "2020" ? "about-active" : ""
          }`}
          id="tab-0"
          tabIndex={0}
          onClick={() => setVisibleContent("2020")}
        >
          <span>2020</span>
        </button>
        <button
          className={`about-container-list-item ${
            visibleContent === "2018" ? "about-active" : ""
          }`}
          id="tab-1"
          tabIndex={1}
          onClick={() => setVisibleContent("2018")}
        >
          <span>2018</span>
        </button>
        <button
          className={`about-container-list-item ${
            visibleContent === "2016" ? "about-active" : ""
          }`}
          id="tab-2"
          tabIndex={2}
          onClick={() => setVisibleContent("2016")}
        >
          <span>2016</span>
        </button>
        <button
          className={`about-container-list-item ${
            visibleContent === "2015" ? "about-active" : ""
          }`}
          id="tab-3"
          tabIndex={3}
          onClick={() => setVisibleContent("2015")}
        >
          <span>2015</span>
        </button>
      </div>
      <div className="about-container-content">
        {visibleContent === "2020" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: visibleContent === "2020" ? 1 : 0,
              y: visibleContent === "2020" ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="about-content"
          >
            <h3 className="about-content-title">Freelance</h3>
            <p className="about-content-subtitle">Janvier 2020 - Aout 2022</p>
            <div>
              <ul className="about-content-ul">
                <li>
                  Réalisation de Maquettes: Conception et réalisation de
                  maquettes pour divers projets, y compris des sites web et des
                  matériaux imprimés, en utilisant des outils de design pour
                  visualiser et affiner les concepts avant la production.
                </li>
                <li>
                  Gestion de Projet: Gestion autonome de tous les aspects des
                  projets, de l&apos;initialisation à la livraison finale, tout
                  en maintenant une communication constante avec les clients
                  pour assurer leur satisfaction.
                </li>
              </ul>
            </div>
          </motion.div>
        )}
        {visibleContent === "2018" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: visibleContent === "2018" ? 1 : 0,
              y: visibleContent === "2018" ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="about-content"
          >
            <h3 className="about-content-title">
              Stagiaire graphiste chez{" "}
              <a
                id="icanschool"
                className="about-content-link"
                target="_blank"
                href="https://acnego.fr/"
              >
                @AC Nego
              </a>
            </h3>
            <p className="about-content-subtitle">16 semaines</p>
            <div>
              <ul className="about-content-ul">
                <li>
                  Création de Logos et Vecteurs Complexes: Développement de
                  plusieurs logos personnalisés en utilisant Adobe Illustrator,
                  mettant l&apos;accent sur la création de vecteurs complexes et
                  l&apos;intégration d&apos;éléments de design uniques pour
                  mieux refléter l&apos;identité de marque de l&apos;entreprise.
                </li>
                <li>
                  Impression Textile: Expérience pratique dans le processus
                  d&apos;impression textile, spécifiquement en supervisant la
                  &apos;sortie de four&apos; (aussi connu sous le nom de
                  &apos;curing&apos; en anglais), garantissant une qualité
                  d&apos;impression optimale sur différents types de textiles.
                </li>
                <li>
                  Développement de Site Web et SEO: Participation active au
                  développement et à la mise à jour du site web d&apos;Ac nego,
                  incluant la création de contenu, l&apos;amélioration du
                  référencement naturel (SEO) et l&apos;optimisation de
                  l&apos;expérience utilisateur..
                </li>
              </ul>
            </div>
          </motion.div>
        )}
        {visibleContent === "2016" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: visibleContent === "2016" ? 1 : 0,
              y: visibleContent === "2016" ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="about-content"
          >
            <h3 className="about-content-title">
              Stagiaire graphiste chez Hardi production
              <br />
            </h3>
            <p className="about-content-subtitle">8 semaines</p>
            <div>
              <ul className="about-content-ul">
                <li>
                  Création de Branding: Conception d&apos;une identité de marque
                  complète pour une ligne de bougies, incluant le développement
                  d&apos;un concept unique, le choix de la palette de couleurs
                  et la définition de la typographie.
                </li>
                <li>
                  Conception de Mockups: Utilisation approfondie de Photoshop et
                  Illustrator pour créer des maquettes visuelles (mockups)
                  réalistes de l&apos;ensemble des produits, permettant de
                  prévisualiser et d&apos;affiner le branding avant la
                  production.
                </li>
              </ul>
            </div>
          </motion.div>
        )}
        {visibleContent === "2015" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: visibleContent === "2015" ? 1 : 0,
              y: visibleContent === "2015" ? 0 : 50,
            }}
            transition={{ duration: 0.5 }}
            className="about-content"
          >
            <h3 className="about-content-title">
              Stagiaire graphiste chez{" "}
              <a
                id="Estienne"
                className="about-content-link"
                target="_blank"
                href="https://betcdesign.fr/"
              >
                @BETC Design
              </a>
            </h3>
            <p className="about-content-subtitle">4 semaines</p>
            <div>
              <ul className="about-content-ul">
                <li>
                  Création de Logo et Packaging: Participation à la conception
                  de logos et d&apos;emballages pour des marques de renommée
                  internationale comme Perrier, en utilisant des logiciels de
                  design graphique pour créer des visuels innovants qui
                  renforcent l&apos;identité de la marque.
                </li>
                <li>
                  Travail en Équipe: Acquisition d&apos;une expérience précieuse
                  en matière de travail en équipe au sein d&apos;une agence de
                  design bien établie, apprenant à collaborer efficacement avec
                  des professionnels de diverses disciplines pour atteindre les
                  objectifs de projet.
                </li>
                <li>
                  Expérience dans une Agence Renommée: Opportunité
                  d&apos;acquérir une compréhension approfondie du
                  fonctionnement d&apos;une agence de design renommée, y compris
                  le processus créatif, la gestion de projet, et
                  l&apos;interaction avec les clients.
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ExperienceComponent;
