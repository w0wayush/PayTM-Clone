import { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import axios from "axios";

type Props = {};

const Dashboard = ({}: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchAccountBalance = async () => {
      const response = await axios.get(
        //@ts-ignore
        `${import.meta.env.VITE_APP_BASE_URL}/api/v1/account/balance`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      const formattedBalance = parseFloat(response.data.balance).toFixed(2);
      setValue(formattedBalance);
      // setValue(response.data.balance);
      // console.log("balance - ", response.data);
    };

    fetchAccountBalance();
  }, []);

  return (
    <div>
      <Appbar />
      <Balance value={value} />
      <Users />
    </div>
  );
};

export default Dashboard;
