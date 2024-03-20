import { useRef, useState } from "react";
import Loader from "../components/Loader";

const ForgetPassword = () => {
  const emailInputRef = useRef();
  const [loading, setLoading] = useState(null);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const userEmail = emailInputRef.current.value;
      console.log(userEmail);
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA0K8p5KNVmMPUTOloxQXJ7omcZKn36EvI",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: String(userEmail),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();

      if (!res.ok) {
        let errorMessage = data.error.message;
        throw new Error(errorMessage);
      } else {
        setLoading(false);
      }
    } catch (error) {
      alert(error.message);
    }
    alert("Reset Link has been sent to your email address");
  };
  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
      {loading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handlePasswordReset}
          className="p-2 w-1/2 flex max-w-md flex-col items-center border-2 "
        >
          <h3 className="text-3xl p-5">Enter the registered email</h3>
          <input
            className="w-8/12 h-9 p-4 m-2 border-2 rounded-md"
            type="email"
            placeholder="Email"
            ref={emailInputRef}
          />
          <button
            className="bg-sky-500 text-white w-8/12 h-10 rounded-full mt-8 mb-4"
            type="submit"
          >
            Send Link
          </button>
        </form>
      )}
    </div>
  );
};

export default ForgetPassword;
