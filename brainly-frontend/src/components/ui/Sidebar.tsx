import React from "react";
import TwitterIcon from "../../icons/TwitterIcon";
import SidebarItem from "./SidebarItem";
import YoutubeIcon from "../../icons/YoutubeIcon";
import LinkIcon from "../../icons/LinkIcon";
import TagIcon from "../../icons/TagIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import BrainIcon from "../../icons/BrainIcon";

export const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0  h-screen w-72 bg-white p-4 border-r-1 border-[#e4e6e7] flex flex-col ">
      <div className="flex gap-4 items-center  mb-6   text-xl font-semibold">
        <BrainIcon /> <h1>Brainly</h1>
      </div>
      <SidebarItem startIcon={<TwitterIcon />} text="Twitter"></SidebarItem>
      <SidebarItem startIcon={<YoutubeIcon />} text="Youtube"></SidebarItem>
      <SidebarItem startIcon={<DocumentIcon />} text="Documents"></SidebarItem>
      <SidebarItem startIcon={<LinkIcon />} text="Links"></SidebarItem>
      <SidebarItem startIcon={<TagIcon />} text="Tags"></SidebarItem>
    </div>
  );
};
