import React from "react";
import "../scss/index.scss";
import Navbar from '@/sections/Navbar';
import SectionHero from "@/sections/SectionHero";
import SectionTechnologies from "@/sections/SectionTechnologies";
import LogoContour from '../components/LogoContour';
function Page() {
    return (
        <div className="app">
            <LogoContour />
            <Navbar />
            <SectionHero />
            <SectionTechnologies />
        </div>
    );
}

export default Page;