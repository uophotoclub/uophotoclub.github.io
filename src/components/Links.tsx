import React, { useState } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdMail, MdContentCopy } from 'react-icons/md';

interface LinksProps {
  language: string;
}

const Links: React.FC<LinksProps> = ({ language }) => {
  const [popup, setPopup] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleIconClick = (text: string) => {
    copyToClipboard(text);
    setPopup(text);
    setTimeout(() => setPopup(null), 1000);
  };

  return (
    <div className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 text-white">
      <div className="flex flex-col items-center">
        <a href="https://discord.gg/cT4fxxc5kr" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <FaDiscord size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <p className="text-center mt-2">
            {language === 'en' ? 'Join our Community!' : 'Joignez notre communauté!'}
            <br />
            <span onClick={(e) => { e.preventDefault(); handleIconClick('discord.gg/cT4fxxc5kr'); }} className="cursor-pointer">
              discord.gg/cT4fxxc5kr <MdContentCopy className={`inline-block ml-1 ${popup === 'discord.gg/cT4fxxc5kr' ? 'popup' : ''}`} />
            </span>
          </p>
        </a>
      </div>
      <div className="flex flex-col items-center">
        <a href="https://www.instagram.com/uophotography_club/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
          <AiFillInstagram size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <p className="text-center mt-2">
            {language === 'en' ? 'Follow us on Instagram!' : 'Suivez-nous sur Instagram!'}
            <br />
            <span onClick={(e) => { e.preventDefault(); handleIconClick('@uophotography_club'); }} className="cursor-pointer">
              @uophotography_club <MdContentCopy className={`inline-block ml-1 ${popup === '@uophotography_club' ? 'popup' : ''}`} />
            </span>
          </p>
        </a>
      </div>
      <div className="flex flex-col items-center">
        <a href="mailto:uophotoclub@gmail.com" className="flex flex-col items-center">
          <MdMail size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          <p className="text-center mt-2">
            {language === 'en' ? 'Contact us!' : 'Contactez-nous!'}
            <br />
            <span onClick={(e) => { e.preventDefault(); handleIconClick('uophotoclub@gmail.com'); }} className="cursor-pointer">
              uophotoclub@gmail.com <MdContentCopy className={`inline-block ml-1 ${popup === 'uophotoclub@gmail.com' ? 'popup' : ''}`} />
            </span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default Links;