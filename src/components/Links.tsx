import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';

interface LinksProps {
  language: string;
}

const Links: React.FC<LinksProps> = ({ language }) => {
  return (
    <div className="mt-20 flex space-x-16 text-white">
      <div className="flex flex-col items-center">
        <a href="https://discord.gg/mqn6KBVzDk" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
        </a>
        <p className="text-center">
          {language === 'en' ? 'Click to Join!' : 'Cliquez pour joindre!'}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <a href="https://www.instagram.com/uophotography_club/" target="_blank" rel="noopener noreferrer">
          <AiFillInstagram size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
        </a>
        <p className="text-center">@uophotography_club</p>
      </div>
      <div className="flex flex-col items-center">
        <a href="mailto:uophotoclub@gmail.com">
          <MdMail size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
        </a>
        <p className="text-center">uophotoclub@gmail.com</p>
      </div>
    </div>
  );
}

export default Links;