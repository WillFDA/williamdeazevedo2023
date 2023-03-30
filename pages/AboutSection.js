import React from "react"
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
                    <div className="rounded-xl bg-[#060606] p-5 flex flex-col text-center h-[187px] justify-between border border-white/10">
                        <span className="text-white text-2xl">2017</span>
                        <p className="text-[#8D0C0C]">BAC PRO<br />Production<br />graphique</p>
                        <span className="text-gray-600">Lycée<br />Claude Garamont</span>
                    </div>
                </div>
               </div>
            </div>
        </section>
        </>
    )
}