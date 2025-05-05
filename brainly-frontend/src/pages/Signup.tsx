import React from "react";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";

const Signup = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-5  rounded-lg flex flex-col justify-center gap-4">
        <div>
          <Input onChange={() => {}} placeholder="Username"></Input>
          <Input onChange={() => {}} placeholder="Password"></Input>
        </div>
        <Button variant="Primary" text="Sign UP"></Button>
      </div>
    </div>
  );
};

export default Signup;
