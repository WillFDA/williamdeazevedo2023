import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export default function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, y: -100 });
    }
  }, [inView, animation]);

  return (
    <>
      <section className="container mx-auto mt-60">
        <div className="flex flex-col gap-20" ref={ref}>
          <motion.h2
            className="font-Inter font-bold text-3xl text-center mt-10 sm:text-4xl md:text-5xl"
            animate={animation}
          >
            A propos de moi
          </motion.h2>
          <div className='grid grid-cols-5 gap-16'>
            <motion.div
              className='bg-gray-600 h-[300px] rounded-2xl col-span-2'
              animate={animation}
            >
              <Image />
            </motion.div>
            <div className='flex flex-col items-start justify-between col-span-3'>
              <motion.p
                className="text-xs sm:text-md md:text-xl xl:text-lg text-gray-700 text-left"
                animate={animation}
              >
                Salut ! Je m'appelle William De Azevedo, j'ai 25 ans et je suis un développeur web junior spécialisé en React JS. <br />
                Mon voyage dans le monde de l'informatique a commencé très tôt, à l'âge de 11 ans. <br /> <br /> Fasciné par les technologies numériques, 
                j'ai exploré une multitude de logiciels et de domaines, allant de la 3D et de l'animation à la réalisation de montages vidéo. 
                <br /> Cette exploration précoce a semé les graines de ma passion pour la technologie et m'a permis d'acquérir une connaissance approfondie de diverses plateformes et outils.
                <br /> Après avoir obtenu un BAC Pro et un BTS, j'ai décidé en 2022 de canaliser ma passion et mes compétences dans le développement web. <br /> <br /> J'ai suivi une formation sur Openclassrooms et je suis aujourd'hui un développeur web junior, 
                armé de connaissances et d'expertise dans les technologies les plus récentes.

              </motion.p>

              <motion.button
                className='bg-black text-white py-3 rounded-lg w-[126px] mt-7'
                animate={animation}
              >
                Mon CV
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
