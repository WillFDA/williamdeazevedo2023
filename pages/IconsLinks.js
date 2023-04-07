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

const IconLinks = () => {
  return (
    <div className="xl:gap-x-5 sm:gap-x-1 flex space-x-4">
      {iconsData.map(({ IconComponent, href }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className=" mt-10 group w-10 h-10 rounded-full flex items-center justify-center bg-gray-200"
        >
          <IconComponent className="w-6 h-6 text-gray-900 opacity-50 group-hover:opacity-100 transform transition-opacity duration-200 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
};

export default IconLinks;