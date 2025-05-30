import { useRef } from "react";
import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signUp() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    await axios.post(BACKEND_URL + "/api/v1/signup", {
      username: username,
      password: password,
    });
    navigate("/signin");
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-5  rounded-lg flex flex-col justify-center gap-4">
        <div>
          <Input ref={usernameRef} placeholder="Username"></Input>
          <Input ref={passwordRef} placeholder="Password"></Input>
        </div>
        <Button variant="Primary" text="Sign Up" onClick={signUp}></Button>
      </div>
    </div>
  );
};

export default Signup;
