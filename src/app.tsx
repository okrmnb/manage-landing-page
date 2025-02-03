import React, { useState } from "react";
import Navbar from "./components/Navbar.component";
import Hero from "./components/Hero.component";
import { twMerge } from "tailwind-merge";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className={twMerge(
        "w-full h-full relative overflow-y-scroll",
        isOpen ? "backdrop-brightness-90" : "",
      )}
    >
      <Navbar isOpen={isOpen} changeOpen={() => setIsOpen(!isOpen)} />
      <Hero />
    </div>
  );
};

export default App;
