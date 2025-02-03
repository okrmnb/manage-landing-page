import React from "react";
import Container from "./Container.component";
import Button from "./Button.component";

const Hero: React.FC = () => {
  return (
    <Container>
      <section className="flex flex-col w-full h-full pt-10 pb-20 lg:flex-row lg:items-stretch">
        <div className="flex flex-col w-full space-y-5 justify-between text-center items-center lg:-order-1 lg:justify-center lg:text-left lg:items-start">
          <h1 className="text-5xl">
            Bring everyone together to build better products.
          </h1>
          <p className="text-gray-400">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger teams goals in view.
          </p>
          <Button configuration="STANDARD" text="Get Started" />
        </div>
      </section>
    </Container>
  );
};

export default Hero;
