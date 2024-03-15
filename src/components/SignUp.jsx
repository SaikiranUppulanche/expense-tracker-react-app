import { useContext, useState } from "react";
import { useRef } from "react";
import { authContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [loader, setLoader] = useState(false);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const userAuthCtx = useContext(authContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();

  const switchLoginHandler = () => {
    setLogin((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const confirmPassword = !login && confirmPasswordRef.current.value;
    setLoader(true);
    let url;
    if (
      !login &&
      (enteredPassword !== confirmPassword || enteredPassword.length < 8)
    ) {
      setLoader(false);
      return alert("Please enter correct password");
    } else {
      if (login) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0K8p5KNVmMPUTOloxQXJ7omcZKn36EvI";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0K8p5KNVmMPUTOloxQXJ7omcZKn36EvI";
      }
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setLoader(false);
          if (res.ok) {
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
        .then((data) => {
          userAuthCtx.login(data.idToken, enteredEmail);

          navigate("/welcome");
        })
        .catch((err) => {
          alert(err.message);
          setLoader(false);
        });
    }
    if (login) {
      emailInputRef.current.value = "";

      passwordInputRef.current.value = "";
    } else {
      emailInputRef.current.value = "";

      passwordInputRef.current.value = "";

      confirmPasswordRef.current.value = "";
    }
  };

  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="p-2 w-1/2 flex max-w-sm flex-col items-center border-2 "
      >
        <h3 className="text-3xl p-5">{login ? "Login" : "Sign Up"}</h3>
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
        {!login && (
          <input
            className="w-8/12 h-9 p-4 m-2 border-2 rounded-md"
            type="password"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
        )}

        <button
          className="bg-sky-500 text-white w-8/12 h-10 rounded-full mt-8 mb-4"
          type="submit"
        >
          {login ? "Login" : "Sign Up"}
          {loader && ""}
        </button>
        <button className=" text-blue-500 underline">
          {login && <a href="">Forget Password</a>}
        </button>
      </form>

      <button
        onClick={switchLoginHandler}
        className=" border mt-4 border-slate-700 bg-sky-100 rounded-md py-4 px-10"
        type="button"
      >
        {login ? "Don't have an account? Sign Up" : " Have an Account? Login"}
      </button>
    </div>
  );
};

export default SignUp;
