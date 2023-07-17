"use client";
import ExperienceComponent from "@/components/ExperienceComponent";
import SchoolComponent from "@/components/SchoolComponent";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const SectionExpSchool = (props: Props) => {
  const [showExperience, setShowExperience] = React.useState(true);
  const [showSchool, setShowSchool] = React.useState(false);

  const handleExperienceClick = () => {
    setShowExperience(true);
    setShowSchool(false);
  };

  const handleSchoolClick = () => {
    setShowExperience(false);
    setShowSchool(true);
  };

  return (
    <aside className="exp_school-container">
      <div className="exp-school-buttons-container">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className={`exp-school-buttons ${
            showExperience === true ? "activated" : ""
          }`}
          onClick={handleExperienceClick}
        >
          Experience
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className={`exp-school-buttons ${
            showSchool === true ? "activated" : ""
          }`}
          onClick={handleSchoolClick}
        >
          Etude
        </motion.button>
      </div>

      {showExperience && <ExperienceComponent />}
      {showSchool && <SchoolComponent />}
    </aside>
  );
};

export default SectionExpSchool;
