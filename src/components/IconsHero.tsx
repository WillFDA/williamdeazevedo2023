import React from 'react';
import { FiMail, FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const iconsData = [
  {
    IconComponent: FiMail,
    href: 'mailto:william.deazevedopro@gmail.com',
  },
  {
    IconComponent: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/william-ferreira-de-azevedo',
  },
  {
    IconComponent: FiGithub,
    href: 'https://github.com/WillFDA',
  },
  {
    IconComponent: BsTwitter,
    href: 'https://twitter.com/Williamdazevedo',
  },
];

const IconsHero = () => {
  return (
    <div className='icon-container'>
      <div className="icon-links">
        {iconsData.map(({ IconComponent, href }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-links__item"
          >
            <IconComponent className="icon-links__icon" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default IconsHero;
