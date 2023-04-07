import React from "react";
import AboutCube from "./components/AboutCube";
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className="mx-auto">
        <div className="flex flex-col gap-20 container pt-32">
          <h2 className="font-Inter font-bold text-4xl text-center mb-10">
            A propos de moi
          </h2>

          <div className="flex justify-between gap-10">
            <div className="w-1/3 h-[405px] rounded-2xl relative">
              <Image
                src="/photoWilliam.png"
                alt="Photo William"
                className="object-cover rounded-2xl"
                layout="fill"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between">
              <p className="text-2xl">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Nesciunt consectetur maxime nostrum cupiditate quibusdam minus.
              </p>
              <AboutCube />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}