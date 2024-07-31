import React from 'react';

interface TitleProps {
  language: string;
}

const Title: React.FC<TitleProps> = ({ language }) => {
  return (
    <div className="flex flex-col items-center mb-4 text-white">
      <div className="flex items-center mb-4 text-4xl md:text-8xl -mt-10 md:-mt-20">
        <img src="/logo.png" alt="Logo" className="h-16 w-16 md:h-32 md:w-32 mr-2 md:mr-4" />
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