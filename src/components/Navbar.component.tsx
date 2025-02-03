import React from "react";
import Container from "./Container.component";
import Logo from "./Logo.component";
import Button from "./Button.component";

interface NavbarProps {
  isOpen: boolean;
  changeOpen: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, changeOpen }) => {
  return (
    <Container>
      <nav className="flex justify-between py-10 items-center relative">
        <Logo className="max-w-40 self-center" />
        <ul className="space-x-4 hidden lg:flex">
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
        <Button
          className="hidden lg:flex"
          configuration="STANDARD"
          text="Get Started"
        />
        <button onClick={() => changeOpen()} className="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="18"
            className={`${isOpen ? "hidden" : "block"}`}
          >
            <g fill="#242D52" fill-rule="evenodd">
              <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="22"
            className={`${isOpen ? "block" : "hidden"}`}
          >
            <path
              fill="#242D52"
              fill-rule="evenodd"
              d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
            />
          </svg>
        </button>
        {isOpen ? (
          <Container className="absolute bg-white top-full w-full rounded-md">
            <ul className="flex flex-col w-full space-y-4 py-6 items-center">
              <li>Pricing</li>
              <li>Product</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Community</li>
            </ul>
          </Container>
        ) : null}
      </nav>
    </Container>
  );
};

export default Navbar;
