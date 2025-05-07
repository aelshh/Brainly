import { useRef, useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Input } from "./Input";
import Button from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../../config";
export const CreateContentModal = ({
  open,
  onClose,
}: {
  open: Boolean;
  onClose: () => void;
}) => {
  enum contentType {
    Youtube = "Youtube",
    Twitter = "Twitter",
  }
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState(contentType.Youtube);
  async function createContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    const type = content;
    await axios.post(
      BACKEND_URL + "/api/v1/content",
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }

  return (
    <div>
      {open && (
        <div className=" bg-gray-600/50 fixed top-0  left-0 w-screen h-screen z-10 flex justify-center items-center">
          <div className="bg-white  z-20 p-4 rounded-lg flex flex-col items-end gap-2">
            <div onClick={onClose} className="cursor-pointer">
              <CrossIcon size="md"></CrossIcon>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Input placeholder="Title" ref={titleRef}></Input>
              <Input placeholder="Link" ref={linkRef}></Input>
              <div className="flex">
                <Button
                  text="Youtube"
                  variant={
                    content == contentType.Youtube ? "Primary" : "Secondary"
                  }
                  size="sm"
                  onClick={() => {
                    setContent(contentType.Youtube);
                  }}
                ></Button>
                <Button
                  text="Twitter"
                  size="sm"
                  variant={
                    content == contentType.Twitter ? "Primary" : "Secondary"
                  }
                  onClick={() => {
                    setContent(contentType.Twitter);
                  }}
                ></Button>
              </div>
              <Button
                variant="Primary"
                text="Submit"
                onClick={createContent}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
