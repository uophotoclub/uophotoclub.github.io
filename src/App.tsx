import React from "react";
import { FaDiscord } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';
import './index.css';

import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation';


function App() {
  return (
    <BackgroundGradientAnimation>
    <div>
      <h1>Photography Club of the University of Ottawa
      </h1>
      <div>
        <FaDiscord size={80} />
        <AiFillInstagram size={80} />
        <MdMail size={80} />
      </div>
    </div>
    </BackgroundGradientAnimation>
  );
}

export default App;