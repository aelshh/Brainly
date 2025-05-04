import { ReactElement } from "react";

type variantType = "Primary" | "Secondary";

type sizeType = {
  sm: string;
  md: string;
  lg: string;
};

interface ButtonProps {
  variant: variantType;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const variantStyles = {
  Primary: "bg-purple-600 text-white",
  Secondary: "bg-purple-300 text-purple-500",
};

const defaultStyles = " m-3 rounded-lg flex gap-1 justify-center items-center ";

const sizeStyle: sizeType = {
  sm: "py-1 px-2",
  md: "py-2 px-5",
  lg: "py-3 px-6",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[props.variant]} ${defaultStyles} ${
        sizeStyle[props.size]
      } `}
    >
      {props.startIcon} {props.text} {props.endIcon}
    </button>
  );
};
