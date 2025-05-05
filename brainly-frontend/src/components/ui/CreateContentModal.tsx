import React from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { Input } from "./Input";
import Button from "./Button";
export const CreateContentModal = ({
  open,
  onClose,
}: {
  open: Boolean;
  onClose: () => void;
}) => {
  return (
    <div>
      {open && (
        <div className=" bg-gray-600/50 fixed top-0  left-0 w-screen h-screen z-10 flex justify-center items-center">
          <div className="bg-white  z-20 p-4 rounded-lg flex flex-col items-end gap-2">
            <div onClick={onClose} className="cursor-pointer">
              <CrossIcon size="md"></CrossIcon>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Input placeholder="Title" onChange={() => {}}></Input>
              <Input placeholder="Link" onChange={() => {}}></Input>
              <Button
                variant="Primary"
                text="Submit"
                onClick={() => {}}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
