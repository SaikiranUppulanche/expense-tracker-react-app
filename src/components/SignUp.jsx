import { useState } from "react";
import { useRef } from "react";

const SignUp = () => {
  const [loader, setLoader] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    setLoader(true);
    if (
      enteredPassword !== confirmPassword ||
      enteredEmail.indexOf("@") === -1 ||
      enteredPassword.length < 8
    ) {
      return <p>Please enter valid credentials</p>;
    }

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0K8p5KNVmMPUTOloxQXJ7omcZKn36EvI",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setLoader(false);
        if (res.ok) {
          console.log("User has successfully signed up");
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMsg = "Authentication Failed";
            if (data && data.error && data.error.message) {
              errorMsg = data.error.message;
            }
            throw new Error(errorMsg);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="p-2 w-1/2 flex max-w-sm flex-col items-center border-2 "
      >
        <h3 className="text-3xl p-5">Sign Up</h3>
        <input
          className="w-8/12 h-9 p-4 m-2 border-2 rounded-md"
          type="email"
          placeholder="Email"
          ref={emailInputRef}
        />
        <input
          className="w-8/12 h-9 p-4 m-2 border-2 rounded-md"
          type="password"
          placeholder="Password"
          ref={passwordInputRef}
        />
        <input
          className="w-8/12 h-9 p-4 m-2 border-2 rounded-md"
          type="password"
          placeholder="Confirm Password"
          ref={confirmPasswordRef}
        />

        <button
          className="bg-sky-500 text-white w-8/12 h-10 rounded-full my-8"
          type="submit"
        >
          {loader ? "Signing Up..." : "Sign Up"}
        </button>
      </form>

      <button
        className=" border mt-4 border-slate-700 bg-sky-100 rounded-md py-4 px-10"
        type="button"
      >
        Have an Account? Login
      </button>
    </div>
  );
};

export default SignUp;
