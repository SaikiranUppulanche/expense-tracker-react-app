import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";

import ProfileForm from "./components/ProfileForm";
import WelcomePage from "./pages/WelcomePage";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
