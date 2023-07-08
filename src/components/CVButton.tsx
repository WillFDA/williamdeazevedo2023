"use client";
import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CVButton = () => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="hero__button"
      target="_blank"
      href="/CV.pdf"
    >
      <span>Voir mon CV</span>
      <FaAngleRight />
    </motion.a>
  );
};

export default CVButton;
