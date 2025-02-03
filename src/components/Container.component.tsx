import React from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({
  className,
  children,
}) => {
  return <div className={twMerge("px-10 lg:px-24", className)}>{children}</div>;
};

export default Container;
