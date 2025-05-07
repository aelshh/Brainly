import { Input } from "../components/ui/Input";
import Button from "../components/ui/Button";
import { useRef } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signIn() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
      username: username,
      password: password,
    });

    console.log(response);
    const jwt = response.data.token;
    console.log(jwt);
    localStorage.setItem("token", jwt);
    navigate("/dashboard");
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-5  rounded-lg flex flex-col justify-center gap-4">
        <div>
          <Input ref={usernameRef} placeholder="Username"></Input>
          <Input ref={passwordRef} placeholder="Password"></Input>
        </div>
        <Button onClick={signIn} variant="Primary" text="Sign In"></Button>
      </div>
    </div>
  );
};

export default SignIn;
