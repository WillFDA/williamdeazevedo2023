import React from "react"
import AboutCube from "./components/AboutCube"
export default function AboutSection() {
    return (
        <>
        <section className="bg-black w-screen h-[1500px] rounded-[5rem] mt-40">
            <div className="container max-w-7xl mx-auto pt-32">
               <h2 className="text-white text-7xl font-bold">A propos de moi</h2>

               <div>
                <div className="">

                </div>
                <div className="flex">
                    <AboutCube />
                </div>
               </div>
            </div>
        </section>
        </>
    )
}