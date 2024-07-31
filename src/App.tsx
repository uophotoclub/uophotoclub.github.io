import React from "react";
import Links from "./components/Links";
import Title from "./components/Title";
import Background from "./components/Background";

const App: React.FC = () => {
  return (
    <div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black z-20">
        <Title />
        <Links />
      </div>
      <Background />
    </div>
  );
};

export default App;