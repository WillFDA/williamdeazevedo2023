import React from "react"
import AnimationFallingHero from '../animations/AnimationFallingHero'
import IconsHero from "@/components/IconsHero"
import Image from 'next/image'
import { FiChevronDown } from 'react-icons/fi';


function SectionHero() {
    return (
        <>
        <div className="hero--container">
        <section className="hero__section__aside">
        <div className="hero">
            <AnimationFallingHero text='Salut, moi c&apos;est' />
            <AnimationFallingHero startDelay={0.5} text='William Ferreira !' />
            <AnimationFallingHero startDelay={0.7} text='Developpeur Front-end' />
            <p className="hero__text">
                Autodidacte de 25 ans, je suis passionné par le développement web, le design et l&apos;accessibilité depuis mes 16 ans
            </p>
        </div>
        <aside className="aside">
          <div className="blob">
            <Image
            src="/william.jpg" 
            alt="Photo de William vue de face et un font végétale verdoyant" 
            width={500}
            height={500} 
            style={{ objectFit: 'cover' }}
            />
          </div>
        </aside>
        </section>
          <div className="hero--icons--arrow">
            <IconsHero />
          </div>
        </div>
        </>
    );
}

export default SectionHero;
