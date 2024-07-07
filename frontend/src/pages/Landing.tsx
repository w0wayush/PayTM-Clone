import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Landing = ({}: Props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Button label="Create Account" onClick={() => navigate("/signup")} />
      <Button label="Log In" onClick={() => navigate("/signin")} />
    </div>
  );
};

export default Landing;
