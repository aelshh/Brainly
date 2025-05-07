import React from "react";

interface inputProps {
  ref?: any;
  placeholder: string;
}

export const Input = ({ ref, placeholder }: inputProps) => {
  return (
    <div>
      <input
        type="text"
        ref={ref}
        className="border  border-gray-300 px-5 pl-3 py-2 rounded-lg m-2"
        placeholder={placeholder}
      />
    </div>
  );
};
