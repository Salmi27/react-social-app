import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h4>Home Sweet Home...!</h4>
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;
