import React, { useState } from "react";
import Links from "./components/Links";
import Title from "./components/Title";
import Background from "./components/Background";

const App: React.FC = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <div>
      <div className="absolute top-8 text-xl left-8 z-30 text-white">
        <button onClick={toggleLanguage} className="mr-2">
          <span className={language === 'en' ? 'underline' : ''}>En</span> / <span className={language === 'fr' ? 'underline' : ''}>Fr</span>
        </button>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-20">
        <Title language={language} />
        <Links language={language}/>
      </div>
      <Background />
    </div>
  );
};

export default App;