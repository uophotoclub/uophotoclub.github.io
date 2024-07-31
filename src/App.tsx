import React from "react";
import { FaDiscord } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';

const App: React.FC = () => {
  return (
    <div>
      <div className="absolute inset-0 flex items-center justify-center text-white z-20">
        uOttawa Photography Club d'uOttawa
      </div>
      <div className="absolute inset-0 flex items-center justify-center space-x-4 text-black z-20">
        <FaDiscord size={100} />
        <AiFillInstagram size={100} />
        <MdMail size={100} />
      </div>
      <div className="gradient-bg">
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
};

export default App;