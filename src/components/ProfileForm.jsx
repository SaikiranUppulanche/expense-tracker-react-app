import { useEffect, useRef } from "react";
import WelcomePage from "./Welcome";
// import { authContext } from "../store/AuthContext";

const ProfileForm = () => {
  const nameInputRef = useRef();
  const urlInputRef = useRef();

  //   const userCtx = useContext(authContext);
  //   const email = userCtx.email;
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA0K8p5KNVmMPUTOloxQXJ7omcZKn36EvI",
        {
          method: "POST",
          body: JSON.stringify({ idToken: token }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        return alert("Can't fetch user data");
      } else {
        const data = await res.json();
        if (data.users[0].displayName && data.users[0].photoUrl) {
          nameInputRef.current.value = data.users[0].displayName;
          urlInputRef.current.value = data.users[0].photoUrl;
        } else {
          return;
        }
      }
    };
    fetchData();
  }, [token]);

  const handleProfileDetails = async (e) => {
    e.preventDefault();

    const name = nameInputRef.current.value;
    const url = urlInputRef.current.value;

    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA0K8p5KNVmMPUTOloxQXJ7omcZKn36EvI",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: token,
          displayName: name,
          photoUrl: url,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) return;
    else {
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <>
      <WelcomePage />
      <div className=" ms-80 me-10 mt-10 flex flex-col">
        <div className="flex flex-row justify-between">
          <h4 className="text-2xl font-semibold">Contact Details</h4>
          <button className=" font-medium text-red-500 border rounded-md px-3 py-1 border-red-500">
            Cancel
          </button>
        </div>
        <form
          onSubmit={handleProfileDetails}
          className="flex flex-row flex-wrap justify-between my-10 py-6 bg-slate-200 rounded-lg"
        >
          <div className="basis-1/2">
            <label className="ms-10 font-bold text-lg" htmlFor="name">
              Full Name:
            </label>{" "}
            <input
              className="mx-10 w-72 border border-black rounded-md"
              type="text"
              name="name"
              id="name"
              ref={nameInputRef}
            />
          </div>
          <div className="basis-1/2">
            <label className="ms-10 font-bold text-lg" htmlFor="url">
              Profile photo url:
            </label>{" "}
            <input
              className="mx-10 w-72 border border-black rounded-md"
              type="url"
              name="url"
              id="url"
              ref={urlInputRef}
            />
          </div>
          <button
            className="mx-10 mt-5 bg-red-400 text-white px-5 py-1 rounded-sm"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
