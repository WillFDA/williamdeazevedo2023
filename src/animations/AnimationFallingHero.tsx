'use client'
import React, { useEffect, useState } from 'react';

interface AnimationFallingHeroProps {
  text: string;
  delay?: number;
  startDelay?: number;
}

const AnimationFallingHero: React.FC<AnimationFallingHeroProps> = ({ text, delay = 0.15, startDelay = 0 }) => {
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        setAnimationClass('animate');
    }, []);

    // Ajouter une vérification pour s'assurer que 'text' est défini
    const words = text ? text.split(' ') : [];

    return (
        <div className="animation">
            {words.map((word, i) => (
                <span
                    key={i}
                    className={`animation__word ${animationClass}`}
                    style={{
                        animationDelay: `${startDelay + i * delay}s`,
                        WebkitAnimationDelay: `${startDelay + i * delay}s`,
                    }}
                >
                    {word}
                </span>
            ))}
        </div>
    );
};

export default AnimationFallingHero;
