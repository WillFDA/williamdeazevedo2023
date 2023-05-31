import React from "react"
import { FiGithub, FiMail } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from "react-icons/bs"
import AnimationFallingHero from '../animations/AnimationFallingHero'
import IconsHero from "@/components/IconsHero"

function SectionHero() {
    return (
        <section className="hero__section">
            <AnimationFallingHero text='Salut, moi c&apos;est William Ferreira !' />
            <AnimationFallingHero startDelay={0.5} text='Front-end junior & designer d&apos;interface' />
            <p className="hero__text">
                Autodidacte de 25 ans, je suis passionné par le développement web, le design et l&apos;accessibilité depuis mes 16 ans
            </p>
            <IconsHero />
        </section>
    );
}

export default SectionHero;
