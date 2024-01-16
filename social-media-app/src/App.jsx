import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import LeftBar from "./components/leftbar/LeftBar.jsx";
import RightBar from "./components/rightbar/RightBar.jsx";
import "./App.css";

function App() {
  const Layout = () => {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  // Checking if user is logged in. If not, login page is rendered
  const currentUser = true;

  const Protected = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected>
            <Layout />
          </Protected>
        }
      >
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

// Alternative approach

// import { createBrowserRouter, RouterProvider} from "react-router-dom";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/home",
//         element: <Home />,
//       },
//       {
//         path: "/profile/:id",
//         element: <Profile />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

// return <RouterProvider router={router} />;
