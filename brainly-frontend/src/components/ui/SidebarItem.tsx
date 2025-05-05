import React, { ReactElement } from "react";

const SidebarItem = ({
  startIcon,
  text,
}: {
  startIcon: ReactElement;
  text: string;
}) => {
  return (
    <div className="flex gap-4 items-center text-[#32323d] p-3 hover:bg-gray-200 rounded-lg cursor-pointer transition-all duration-100 ease-in-out">
      <div className="text-[#2a343e]">{startIcon}</div>
      {text}
    </div>
  );
};

export default SidebarItem;
