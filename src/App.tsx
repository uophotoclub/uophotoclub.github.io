import React from "react";
import { FaDiscord } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';

const App: React.FC = () => {
  return (
    <div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-20">
        <div className="flex items-center mb-4 text-white text-8xl -mt-20">
          <img src="/logo.png" alt="Logo" className="h-32 w-32 mr-4" />
          <div>
            <div className="text-5xl"><i>uOttawa</i></div>
            <div className="underline decoration-4 underline-offset-4">Photography Club</div>
          </div>
        </div>
        <div className="mt-20 flex space-x-16 text-white">
        <div className="flex flex-col items-center">
          <a href="https://discord.gg/mqn6KBVzDk" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={120} className="hover:scale-110 transition-transform duration-300 ease-in-out" />
          </a>
          <p className="text-center">Click to Join!</p>
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