// import { useContext } from "react";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../store/AuthContext";
// import { authContext } from "../store/AuthContext";

const Welcome = () => {
  const authCtx = useContext(authContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    authCtx.logout();
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-row m-5 p-5 bg-slate-200 justify-between rounded-xl ">
        <h1 className=" text-3xl">Welcome to Expense Tracker!!!</h1>
        <span className=" bg-orange-300 py-1 px-3 rounded-lg">
          Your Profile is Incomplete.{" "}
          <span className=" text-sky-700">
            <Link to="/profile">Complete Now</Link>
          </span>{" "}
        </span>
        <button
          onClick={handleLogout}
          className="px-3 bg-red-600 rounded text-stone-50 font-semibold"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Welcome;
