import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className?: string;
  text: string;
  configuration: "STANDARD" | "ALTERNATIVE";
}

const Button: React.FC<ButtonProps> = ({ className, text, configuration }) => {
  return (
    <button
      type="button"
      className={twMerge(
        "rounded-full shadow-lg py-3 px-6 max-w-max",
        configuration === "STANDARD"
          ? "bg-orange-500 text-white  shadow-orange-500/40"
          : "bg-white text-orange-500",
        className,
      )}
    >
      {text}
    </button>
  );
};

export default Button;
