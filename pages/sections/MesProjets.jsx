import React from "react";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
  
import MesProjetsComponents from "../components/MesProjetsComponents";
export default function MesProjets() {
    return(
        <>
        <section className="container mx-auto mt-60 ">
            <h1 className="font-Inter font-bold text-3xl text-center sm:text-4xl md:text-5xl">Mes Projets</h1>
            <MesProjetsComponents 
            icones={[{icon: FiGithub, link: 'https://github.com/WillFDA/Projet_4_ohmyfood'}]}
            titre="Oh my food"
            description={
                <>
                Projet concu lors de ma formation chez <span className="text-violet-600">Openclassrooms</span>.<br />Le but étant de découvrir les animations et sass
                </>
            }
            image="/ohmyfood.png"
            lien="https://willfda.github.io/Projet_4_ohmyfood/"
            align="droite"
            inverser
            />
            <MesProjetsComponents 
            icones={[{icon: FiGithub, link: 'https://github.com/WillFDA/kasa_app'}]}
            titre="Kasa APP"
            description={
                <>
                Projet concu lors de ma formation chez <span className="text-violet-600">Openclassrooms</span>.<br />Fait avec React j'ai appris à utiliser les props et react router.
                </>
            }
            image="/kasa_app.png"
            lien="https://willfda.github.io/kasa_app/"
            />
        </section>
        </>
    )
}