import React from "react"
import {FiGithub, FiMail} from 'react-icons/fi'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsTwitter} from "react-icons/bs"
import AnimatedText from "./animation/AnimationFallingHero"
import AnimationFallingHero from "./animation/AnimationFallingHero"
import IconLinks from "./IconsLinks"
function HeroSection() {
    return (
      <section className="max-w-screen-xl mx-auto pt-20 flex flex-col items-center">
        <AnimationFallingHero text='Salut, moi c’est William Ferreira !' />
        <AnimationFallingHero startDelay={0.5} text='Front-end junior & designer d’interface' />
          <p className="text-xs sm:text-md md:text-xl xl:text-2xl w-4/5 mt-5 text-gray-500 text-center mx-auto xl:mt-10">
            Autodidacte de 25 ans, je suis passionné par le développement web, le design et l'accessibilité depuis mes 16 ans
          </p>
          <IconLinks />
      </section>
    );
  }
  
  export default HeroSection;