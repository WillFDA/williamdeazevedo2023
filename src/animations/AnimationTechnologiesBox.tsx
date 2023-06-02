'use client'
import { motion } from "framer-motion";
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}


const AnimationTechnologiesBox = ({ children }: Props) => {
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3, // Augmenter le décalage entre les éléments pour un effet moins brusque
        delayChildren: 1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Augmenter la durée de l'animation pour la rendre plus douce
        ease: [0.5, 1, 0.8, 1], // Modifier la courbe d'accélération pour un effet d'amortissement
      },
    },
  };

  return (
    <motion.div
      className="animation-mes-techno"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(children, (child) => (
        <motion.div className="animation-mes-techno__item" variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default AnimationTechnologiesBox;
