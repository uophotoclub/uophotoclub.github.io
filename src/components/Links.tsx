import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';

interface LinksProps {
  language: string;
}

const Links: React.FC<LinksProps> = ({ language }) => {
  return (
    <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 text-white">
      <div className="flex flex-col items-center">
        <a href="https://discord.gg/mqn6KBVzDk" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <FaDiscord size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <p className="text-center mt-2">
            {language === 'en' ? 'Join our Community!' : 'Joignez notre communauté!'}
          </p>
        </a>
      </div>
      <div className="flex flex-col items-center">
        <a href="https://www.instagram.com/uophotography_club/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <AiFillInstagram size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <p className="text-center mt-2">@uophotography_club</p>
        </a>
      </div>
      <div className="flex flex-col items-center">
        <a href="mailto:uophotoclub@gmail.com" className="flex flex-col items-center">
          <MdMail size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <p className="text-center mt-2">uophotoclub@gmail.com</p>
        </a>
      </div>
    </div>
  );
}

export default Links;