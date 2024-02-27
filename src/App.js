import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "../src/pages/ErrorPage";
import Home from "../src/pages/Home";
// import UserLayout from "./pages/UserLayout";
import Login from '../src/pages/Login';
import SignUp from "../src/pages/SignUp";
import ProfileLayout from "./pages/ProfileLayout";
// import Profile from '../src/pages/Profile'
import User from "../src/pages/User"
import Message from "./pages/Message";
import ForgetPassword from  "../src/pages/ForgetPassword"
import ResetPassword from '../src/pages/ResetPassword'
import Notification from "./pages/Notification";
import NotificationLayout from '../src/pages/NotificationLayout'
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
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/notification",
      element: <NotificationLayout />,
      children: [
        { path: "/notification", element: <Notification /> },
      ],
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />,
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
