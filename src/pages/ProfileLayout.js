import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from "react-router-dom";
const ProfileLayout = () => {
  return (
    <div className=" 3xl:w-[1400px]  mx-auto">
      <MainNavigation className="max-xl:hidden" />
      <Outlet />
    </div>
  );
};
export default ProfileLayout;
