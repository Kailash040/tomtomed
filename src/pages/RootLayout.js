import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <div className=" 3xl:w-[1400px]  mx-auto">
      <MainNavigation />
      <Outlet />
    </div>
  );
};
export default RootLayout;
