import React from 'react';

interface TitleProps {
  language: string;
}

const Title: React.FC<TitleProps> = ({ language }) => {
  return (
    <div className="flex flex-col items-center mb-4 text-white">
      <div className="flex flex-col md:flex-row items-center mb-4 text-4xl md:text-8xl">
        <img src="/logo.png" alt="Logo" className="h-32 w-32 mb-2 md:mb-0 md:mr-4" />
        <div>
          <div className="text-3xl md:text-5xl"><i>uOttawa</i></div>
          <div className="underline decoration-4 underline-offset-4">
            {language === 'en' ? 'Photography Club' : 'Club de Photographie'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;