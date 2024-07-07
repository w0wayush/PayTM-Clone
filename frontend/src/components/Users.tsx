import { useCallback, useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type DebounceFunction = (...args: any[]) => void;

function debounce<T extends DebounceFunction>(func: T, delay: number): T {
  let timeoutId: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  }) as T;
}

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchUsers = useCallback(
    debounce(async (filter) => {
      try {
        const response = await axios.get(
          `${
            //@ts-ignore
            import.meta.env.VITE_APP_BASE_URL
          }/api/v1/user/bulk?filter=${filter}`
        );
        setUsers(response.data.user);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    }, 300),
    []
  );

  useEffect(() => {
    fetchUsers(filter);
  }, [filter, fetchUsers]);

  return (
    <>
      <div className="font-bold mt-7 text-lg px-10">Users</div>
      <div className="my-2 px-10">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
          onChange={(e) => setFilter(e.target.value)}
        ></input>
      </div>
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <User user={user} />
          </div>
        ))}
      </div>
    </>
  );
};

function User({ user }: any) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between px-10 mt-5">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button
          label={"Send Money"}
          onClick={() => {
            navigate(`/send?id=${user._id}&name=${user.firstName}`);
          }}
        />
      </div>
    </div>
  );
}

export default Users;
