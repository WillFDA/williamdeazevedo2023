// components/FallingTextAnimation.jsx
import React, { useEffect, useState } from 'react';

const AnimationFallingHero = ({ text, delay = 0.15, startDelay = 0 }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate');
  }, []);

  // Ajouter une vérification pour s'assurer que 'text' est défini
  const words = text ? text.split(' ') : [];

  return (
    <div className=" text-3xl flex-wrap space-x-2 font-bold md:flex xs:text-md md:mt-2 text-center text-md md:text-4xl lg:text-5xl xl:text-6xl sm:text-4xl">
      {words.map((word, i) => (
        <span
          key={i}
          className={`inline-block opacity-0 transform-gpu -translate-y-24 blur-md ${
            animationClass ? `animate-falling` : ''
          } md:ml-1 ml-2 xl:ml-4`}
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