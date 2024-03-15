import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";

import ProfileForm from "./components/ProfileForm";
import WelcomePage from "./pages/WelcomePage";
import ForgetPassword from "./pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/profile",
    element: <ProfileForm />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
