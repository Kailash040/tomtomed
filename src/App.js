import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "../src/pages/ErrorPage";
import Home from "../src/pages/Home";
// import UserLayout from "./pages/UserLayout";
import Ecommerce from '../src/pages/Ecommerce'
import Login from '../src/pages/Login';
import SignUp from "../src/pages/SignUp";
import ProfileLayout from "./pages/ProfileLayout";
// import Profile from '../src/pages/Profile'
import User from "../src/pages/User"
import Message from "./pages/Message";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        // { path: "users", element: <UserLayout /> },
      ],
    },
    {
      path: "/ecommerce",
      element: <Ecommerce />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/message",
      element: <Message />,
    },
    {
      path: "/user",
      element: <ProfileLayout />,
         children: [
        { path: "/user", element: <User /> },
      ],
    },
   ]);
  return <RouterProvider router={appRouter} />;
}

export default App;
