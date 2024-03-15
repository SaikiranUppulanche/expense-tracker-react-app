const VerificationButton = () => {
  //   const authCtx = useContext(authContext);
  const token = localStorage.getItem("token");
  const handleVerification = () => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA0K8p5KNVmMPUTOloxQXJ7omcZKn36EvI",
      {
        method: "POST",
        body: JSON.stringify({ requestType: "VERIFY_EMAIL", idToken: token }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          alert("Verification link sent to your email");
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage;
            if (data && data.error) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="flex w-1/2 justify-center m-5 p-5 bg-slate-400 rounded-xl">
      <button
        onClick={handleVerification}
        className="p-3 bg-red-600 rounded text-stone-50 font-semibold"
      >
        Verify Email
      </button>
    </div>
  );
};

export default VerificationButton;
