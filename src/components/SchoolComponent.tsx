'use client'
import React, { useState } from 'react'
import {motion} from 'framer-motion';
// le CSS de se fichier est dans SectionAPropos

const SchoolComponent = () => {
    const [visibleContent, setVisibleContent] = useState('2023');
  return (
    <div className='about-container'>
            <div className="about-container-list">
            <button 
                    className={`about-container-list-item ${visibleContent === "2023" ? "about-active" : ""}`} 
                    id="tab-0" 
                    tabIndex={0} 
                    onClick={() => setVisibleContent("2023")}>
                    <span>2023</span>
                </button> 
                <button 
                    className={`about-container-list-item ${visibleContent === "2020" ? "about-active" : ""}`} 
                    id="tab-1" 
                    tabIndex={1} 
                    onClick={() => setVisibleContent("2020")}>
                    <span>2020</span>
                </button> 
                <button 
                    className={`about-container-list-item ${visibleContent === "2019" ? "about-active" : ""}`} 
                    id="tab-2" 
                    tabIndex={2} 
                    onClick={() => setVisibleContent("2019")}>
                    <span>2019</span>
                </button> 
                <button 
                    className={`about-container-list-item ${visibleContent === "2017" ? "about-active" : ""}`} 
                    id="tab-3" 
                    tabIndex={3} 
                    onClick={() => setVisibleContent("2017")}>
                    <span>2017</span>
                </button> 
                <div className="about-container-list-highlight"></div>
            </div>
            <div className="about-container-content">
                {visibleContent === "2023" && (
                    <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: visibleContent === "2023" ? 1 : 0, y: visibleContent === "2023" ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    className='about-content'
                  >
                      <h3 className="about-content-title">Formation Intégrateur Web <a id="openclassrooms" className="about-content-link" target="_blank" href="https://openclassrooms.com/fr/paths/594-integrateur-web">@OpenClassrooms</a></h3>
                      <p className="about-content-subtitle">Septembre 2022 - Juin 2023</p>
                      <div>
                        <ul className="about-content-ul">
                          <li>Maîtrise des langages de programmation essentiels (HTML, CSS, SASS, JavaScript, React & Redux) et des outils de développement web (Git & GitHub, responsive design).</li>
                          <li>Expérience pratique dans la création d&apos;applications web complètes et réactives, l&apos;optimisation de sites web existants et la gestion de projets web de A à Z.</li>
                        </ul>
                      </div>
                  </motion.div>
                )}
                {visibleContent === "2020" && (
                    <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: visibleContent === "2020" ? 1 : 0, y: visibleContent === "2020" ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    className="about-content"
                  >
                    <h3 className="about-content-title">Bachelor Web & Communication Visuelle <a id="icanschool" className="about-content-link" target="_blank" href="https://www.ican-design.fr/formation/bachelor-web-digital.html">@ICAN</a></h3>
                    <p className="about-content-subtitle">Septembre 2019 - Janvier 2020</p>
                    <div>
                      <ul className="about-content-ul">
                        <li>J&apos;ai débuté une formation en Web & Communication Visuelle, ce qui m&apos;a permis de commencer à découvrir le monde du web et de développer une première compréhension des fondamentaux du web design et de la conception graphique.</li>
                        <li>J&apos;ai acquis une certaine culture de l&apos;image, en explorant les principes du design graphique, les fondamentaux de l&apos;ergonomie et l&apos;introduction à la sémiologie.</li>
                        <li>J&apos;ai commencé à maîtriser des outils tels que Adobe Photoshop et Illustrator, ainsi que les langages de programmation HTML/CSS pour le développement web.</li>
                      </ul>
                    </div>
                    </motion.div>
                )}
                {visibleContent === "2019" && (
                    <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: visibleContent === "2019" ? 1 : 0, y: visibleContent === "2019" ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    className="about-content"
                  >
                    <h3 className="about-content-title">BTS Etude Etude et realisation d&apos;un projet de communication<br /><a id="Estienne" className="about-content-link" target="_blank" href="http://www.ecole-estienne.paris/formation/bts-industries-graphiques-etudes-de-realisation-de-produits-de-communication/presentation/">@Ecole Estienne</a></h3>
                    <p className="about-content-subtitle">Septembre 2017 - Aout 2019</p>
                    <div>
                      <ul className="about-content-ul">
                        <li>J&apos;ai un BTS en Études et Réalisation d&apos;un Projet de Communication, focalisé sur les produits graphiques et imprimés.</li>
                        <li>J&apos;ai appris à analyser et mettre en œuvre des moyens techniques pour répondre aux exigences du client, tout en respectant des critères spécifiques.</li>
                        <li>J&apos;ai développé des compétences relationnelles, agissant comme l&apos;interlocuteur principal des clients et collègues.</li>
                      </ul>
                    </div>
                    </motion.div>
                )}
                {visibleContent === "2017" && (
                    <motion.div
                    initial={{ opacity: 0}}
                    animate={{ opacity: visibleContent === "2017" ? 1 : 0, y: visibleContent === "2017" ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    className='about-content'
                  >
                    <h3 className="about-content-title">Bac PRO Réalisation d&apos;un Projet imprimé et Plurimédia<br /><a id="Estienne" className="about-content-link" target="_blank" href="https://www.lyceegaramont.fr/bac-pro-rpip/">Lycée Claude Garamont</a></h3>
                    <p className="about-content-subtitle">Septembre 2017 - Septembre 2014</p>
                    <div>
                      <ul className="about-content-ul">
                        <li>J&apos;ai complété ma formation avec l&apos;option graphique du baccalauréat professionnel en Réalisation d&apos;un Produit Imprimé et Plurimédia. Cela a permis d&apos;approfondir ma compréhension et ma compétence dans la création de projets graphiques sur divers supports de communication imprimés et multimédias.</li>
                        <li>Développement d&apos;un esprit méthodique et organisé, renforcé par des stages pratiques en entreprise.</li>
                        <li>Préparation à divers rôles dans le domaine graphique, y compris opérateur PAO, infographiste et intégrateur WEB.</li>
                      </ul>
                    </div>
                    </motion.div>
                )}
            </div>
        </div>
  )
}

export default SchoolComponent