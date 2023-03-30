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
    className: 'w-8 h-8',
  });

  return (
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center mr-4"
      style={{
        backgroundColor: hexToRGBA(color, 0.1),
        color: color,
      }}
    >
      {modifiedIcon}
    </div>
  );
};

export default IconTechnoComponents;
