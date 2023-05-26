import React from "react";
import Image from 'next/image';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

export default function MesProjetsComponents({titre, description, image, lien, icones, align, inverser}) {
    const handleImageClick = () => {
        window.open(lien, '_blank');
    };

    const alignmentClass = align === 'droite' ? 'text-right' : 'text-left';
    const orderClass = inverser ? 'flex-row-reverse' : 'flex-row';
    const marginClass = inverser ? 'ml-[-60px]' : 'mr-[-60px]';
    const iconsOrderClass = inverser ? 'flex-row-reverse' : 'flex-row';

    // ...

const handleIconClick = (iconLink) => {
    if (iconLink) {
        window.open(iconLink, '_blank');
    }
};

const imageVariants = {
    hover: { y: -10 },
}

const [ref, inView] = useInView({
    triggerOnce: true, // Change to true to trigger animation only once
});

const variants = {
    hidden: { opacity: 0, y: -50 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

return(
    <>
    <motion.div
        className={`flex items-center justify-center mt-20 ${orderClass}`}
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={variants}
    >
        <div className={`z-10 ${marginClass}`}>
            <div className={`flex items-baseline gap-5 drop-shadow-2xl ${iconsOrderClass}`}>
            {Array.isArray(icones) && icones.map((Icone, index) => {
                if (Icone.icon) {
                    const IconComponent = Icone.icon;
                    return (
                        <motion.div whileHover={{ color: 'black' }}>
                            <IconComponent className="text-2xl cursor-pointer text-gray-500 hover:text-black" key={index} onClick={() => handleIconClick(Icone.link)} />
                        </motion.div>
                    );
                } else {
                    console.warn(`Icone at index ${index} does not have an icon component.`);
                    return null;
                }
                })}
                <h4 className={`text-3xl font-bold pb-1 ${alignmentClass}`}>{titre}</h4>
                
            </div>
                <div className={`bg-gray-100 p-5 rounded-2xl mt-5 shadow-lg ${alignmentClass}`}>
                    <span>{description}</span>
                </div>
            <ul>
                
            </ul>
        </div>

            <motion.div 
            className="rounded-2xl cursor-pointer shadow-lg" 
            onClick={handleImageClick} 
            whileHover={{ scale: 1.05 }}
            >
                <Image src={image} alt="lien vers le projet" width={500} height={300} />
            </motion.div>

        
        </motion.div>
    </>
)

}