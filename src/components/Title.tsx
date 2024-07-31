import React, { useState } from 'react';

interface TitleProps {
  language: string;
}

const Title: React.FC<TitleProps> = ({ language }) => {

  return (
    <div>
      <div className="flex items-center mb-4 text-white text-8xl -mt-20">
        <img src="/logo.png" alt="Logo" className="h-32 w-32 mr-4" />
        <div>
          <div className="text-5xl"><i>uOttawa</i></div>
          <div className="underline decoration-4 underline-offset-4">
            {language === 'en' ? 'Photography Club' : 'Club de Photographie'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;