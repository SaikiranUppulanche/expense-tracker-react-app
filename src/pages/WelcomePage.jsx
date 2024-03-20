import VerificationButton from "../components/VerificationButton";
import Welcome from "../components/Welcome";
import Expenses from "./Expenses";

const WelcomePage = () => {
  return (
    <>
      <Welcome />
      <VerificationButton />
      <Expenses />
    </>
  );
};

export default WelcomePage;
