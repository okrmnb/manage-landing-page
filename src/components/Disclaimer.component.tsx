import React from "react";
import Container from "./Container.component";
import Button from "./Button.component";

const Disclaimer: React.FC = () => {
  return (
    <section className="bg-orange-500 py-24 lg:py-16">
      <Container>
        <div className="flex w-full flex-col space-y-8 justify-center items-center text-center lg:flex-row lg:space-y-0 lg:space-x-10 lg:justify-between lg:text-left">
          <p className="text-white text-5xl lg:hidden">
            Simplify how your team works today.
          </p>
          <p className="text-white text-5xl hidden lg:block">
            Simplify how your team <br /> works today.
          </p>
          <Button text="Get Started" configuration="ALTERNATIVE" />
        </div>
      </Container>
    </section>
  );
};

export default Disclaimer;
