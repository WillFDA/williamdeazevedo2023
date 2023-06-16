import React from "react";
import "../scss/index.scss";
import Navbar from '@/sections/Navbar';
import SectionHero from "@/sections/SectionHero";
import SectionTechnologies from "@/sections/SectionTechnologies";
import LogoContour from '../components/LogoContour';
import SectionMesProjets from "@/sections/SectionMesProjets";
import SectionAPropos from "@/sections/SectionAPropos";
import Footer from "@/sections/Footer";
function Page() {
    return (
        <div className="app">
            <LogoContour />
            <Navbar />
            <SectionHero />
            <SectionTechnologies />
            <SectionMesProjets />
            <SectionAPropos />
            <Footer />
        </div>
    );
}

export default Page;