import { useRef } from "react";
import WelcomePage from "./WelcomePage";

const ProfileForm = () => {
  const nameInputRef = useRef();
  const urlInputRef = useRef();

  const handleProfileDetails = async (e) => {
    e.preventDefault();
    const name = nameInputRef.current.value;
    const url = urlInputRef.current.value;

    const profile = {
      name,
      url,
    };

    const res = await fetch(
      "https://react-auth-3257e-default-rtdb.firebaseio.com//userProfile.json",
      {
        method: "POST",
        body: JSON.stringify(profile),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) return;
    nameInputRef.current.value = "";
    urlInputRef.current.value = "";
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
