import { useNavigate } from "react-router-dom";

type Props = {};

export const Appbar = ({}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="shadow h-20 flex justify-between font-bold px-7">
      <div
        className="flex flex-col justify-center h-full ml-4 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        PayTM App
      </div>
      <div className="flex justify-center items-center cursor-pointer">
        <div className="flex flex-col justify-center h-full mr-4 text-xl">
          Hello
        </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
