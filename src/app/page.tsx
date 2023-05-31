import React from "react";
import "../scss/index.scss";
import Navbar from '@/sections/Navbar';
import SectionHero from "@/sections/SectionHero";
function Page() {
    return (
        <div className="app">
            <Navbar />
            <SectionHero />
        </div>
    );
}

export default Page;