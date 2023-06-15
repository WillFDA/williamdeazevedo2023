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
                          <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nemo reprehenderit hic laboriosam iusto dicta.</li>
                          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium nulla dolor?</li>
                          <li>Lorem ipsum dolor sit amet.</li>
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
                    <h3 className="about-content-title">Web design <a id="icanschool" className="about-content-link" target="_blank" href="https://openclassrooms.com/fr/paths/594-integrateur-web">@ICAN</a></h3>
                    <p className="about-content-subtitle">Septembre 2019 - Janvier 2020</p>
                    <div>
                      <ul className="about-content-ul">
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nemo reprehenderit hic laboriosam iusto dicta.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium nulla dolor?</li>
                        <li>Lorem ipsum dolor sit amet.</li>
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
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nemo reprehenderit hic laboriosam iusto dicta.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium nulla dolor?</li>
                        <li>Lorem ipsum dolor sit amet.</li>
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
                        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, nemo reprehenderit hic laboriosam iusto dicta.</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni praesentium nulla dolor?</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                      </ul>
                    </div>
                    </motion.div>
                )}
            </div>
        </div>
  )
}

export default SchoolComponent