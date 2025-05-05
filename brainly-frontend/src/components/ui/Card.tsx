import React from "react";
import ShareIcon from "../../icons/ShareIcon";

interface CardPropsType {
  link: string;
  type: "Youtube" | "Twitter";
  title: string;
}

const Card = ({ link, type, title }: CardPropsType) => {
  return (
    <div>
      <div className="p-5 border-[#e4e6e7] border bg-white   rounded-md w-72 min-h-48">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="text-gray-500">
              <ShareIcon size="sm"></ShareIcon>
            </div>
            <p>{title}</p>
          </div>
          <div className="flex gap-2 items-center text-gray-500">
            <ShareIcon size="sm"></ShareIcon>
            <ShareIcon size="sm"></ShareIcon>
          </div>
        </div>
        <div className="w-full mt-6">
          {type == "Youtube" && (
            <iframe
              className="w-full rounded-md"
              src={link.replace("watch?v=", "embed/")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type == "Twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link.replace("x", "twitter")}></a>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
