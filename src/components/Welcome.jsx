// import { useContext } from "react";

import { Link } from "react-router-dom";
// import { authContext } from "../store/AuthContext";

const Welcome = () => {
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
      </div>
    </>
  );
};

export default Welcome;
