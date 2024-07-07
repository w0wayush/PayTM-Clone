import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        //@ts-ignore
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/user/signup`,
        {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          firstName: firstName,
          lastName: lastName,
          username: username,
        }
      );

      localStorage.setItem("token", response.data.token);

      // console.log("Response:", response.data);

      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      setUsername("");
      setConfirmPassword("");

      navigate("/dashboard");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your infromation to create an account"} />
          <InputBox
            placeholder="Ayush"
            label={"First Name"}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFirstName(e.target.value);
            }}
          />
          <InputBox
            placeholder="Pandey"
            label={"Last Name"}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLastName(e.target.value);
            }}
          />
          <InputBox
            placeholder="ayushw0w"
            label={"User Name"}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
          <InputBox
            placeholder="ayupandey@gmail.com"
            label={"Email"}
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <InputBox
            placeholder="123456"
            label={"Password"}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />
          <InputBox
            placeholder="123456"
            label={"Confirm Password"}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <div className="pt-4">
            <Button label={"Sign up"} onClick={handleSignUp} />
          </div>
          <BottomWarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
