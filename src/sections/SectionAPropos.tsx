'use client'
import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion';

const SectionAPropos = () => {
  return (
    <section className='about'>
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
        <h3 className='about-title'>A Propos de moi</h3>
    </motion.div>
    <motion.div
      className='about-box'
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
            width={400}
            height={400} 
            style={{ objectFit: 'cover' }}
            />
        </div>
        <div className='about-container'>
            <div className="about-container-list">
                <button className='about-container-list-item' id='tab-0' tabIndex={0}>
                    <span>2019</span>
                </button> 
                <div className="about-container-list-highlight"></div>
            </div>
            <div className="about-container-content">

            </div>
        </div>
    </motion.div>
    
    </section>
  )
}

export default SectionAPropos