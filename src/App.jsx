import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import WelcomePage from "./components/WelcomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
