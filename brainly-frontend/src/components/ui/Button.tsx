import { ReactElement } from "react";

interface PropTypes {
  variant: "Primary" | "Secondary";
  text: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  startIcon?: ReactElement;
}

const variantClass = {
  Primary: "bg-purple-600 text-white hover:bg-purple-300 hover:text-purple-500",
  Secondary:
    "bg-purple-300 text-purple-500 hover:bg-purple-600 hover:text-white",
};

const sizeClass = {
  sm: "px-2 py-1 text-sm ",
  md: "px-5 py-2",
  lg: "px-9 py-3",
};

const defaultClass =
  " rounded-lg m-2 mt-0 font-normal flex gap-2 items-center justify-center cursor-pointer transition-all duration-100 ease-in-out";

const Button = (props: PropTypes) => {
  return (
    <button
      onClick={props.onClick}
      className={`${variantClass[props.variant]} ${
        sizeClass[props.size ?? "md"]
      } ${defaultClass} `}
    >
      {props.startIcon} {props.text}
    </button>
  );
};

export default Button;
