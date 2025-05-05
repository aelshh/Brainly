import React from "react";

export const Input = ({
  onChange,
  placeholder,
}: {
  onChange: () => void;
  placeholder: string;
}) => {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        className="border  border-gray-300 px-5 pl-3 py-2 rounded-lg m-2"
        placeholder={placeholder}
      />
    </div>
  );
};
