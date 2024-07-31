import React, { useState } from "react";
import Links from "./components/Links";
import Title from "./components/Title";
import Background from "./components/Background";
import { FiExternalLink } from 'react-icons/fi';

const App: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="relative min-h-screen">
      <div className="absolute top-4 left-4 z-30 text-white text-lg md:text-xl">
        <button onClick={toggleLanguage} className="mr-2">
          <span className={language === 'en' ? 'underline' : ''}>En</span> / <span className={language === 'fr' ? 'underline' : ''}>Fr</span>
        </button>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-20 p-4">
        <Title language={language} />
        <Links language={language} />
        <a
          href="/Constitution_of_The_Photography_Club_Bilingual.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 md:mt-20 text-white underline flex items-center border-2 border-white rounded-lg p-2"
        >
          <span className="mr-2">{language === 'en' ? 'Club Constitution' : 'Constitution du Club'}</span>
          <FiExternalLink size={20} />
        </a>
      </div>
      <footer className="text-white text-center p-4" style={{ position: 'absolute', bottom: 0, width: '100%', zIndex: 10 }}>
        <p>&copy; 2021 - {currentYear} uOttawa Photography Club | Club de Photographie d'uOttawa</p>
      </footer>
      <Background />
    </div>
  );
};

export default App;