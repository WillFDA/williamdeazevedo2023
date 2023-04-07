import React from 'react';

const hexToRGBA = (hex, alpha) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const IconTechnoComponents = ({ component, color }) => {
  if (!component) return null; // Ajout de la vérification pour éviter les erreurs

  const modifiedIcon = React.cloneElement(component, {
    width: '',
    height: '',
    className: 'w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6 transition-colors duration-300 xl:w-8 xl:h-8',
  });

  return (
    <div
      className="w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mr-4 cursor-pointer transition-all duration-300"
      style={{
        backgroundColor: hexToRGBA(color, 0.1),
        color: color,
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hexToRGBA(color, 1);
        e.target.style.color = '#ffffff';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = hexToRGBA(color, 0.1);
        e.target.style.color = color;
      }}
    >
      {modifiedIcon}
    </div>
  );
};

export default IconTechnoComponents;
