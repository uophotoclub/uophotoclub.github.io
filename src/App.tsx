import React from 'react';
import Background from './components/Background';
import Title from './components/Title';
import Links from './components/Links';
import { FiExternalLink } from 'react-icons/fi';

const App: React.FC = () => {
  const [language, setLanguage] = React.useState('en');
  const currentYear = new Date().getFullYear();

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <Background />
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="flex-grow overflow-auto">
          <div className="mt-4 ml-4 z-30 text-white text-lg md:text-xl">
            <button onClick={toggleLanguage} className="mr-2">
              <span className={language === 'en' ? 'underline' : ''}>En</span> / <span className={language === 'fr' ? 'underline' : ''}>Fr</span>
            </button>
          </div>
          <div className="md:mt-8 flex flex-col items-center justify-center text-black z-20 p-4">
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
        </div>
        <footer className="w-full text-white text-center p-4 z-10 mt-auto border-t-2 bg-white bg-opacity-20">
          <p>&copy; 2021 - {currentYear} | {language === 'en' ? 'uOttawa Photography Club' : 'Club de Photographie d\'uOttawa'}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;