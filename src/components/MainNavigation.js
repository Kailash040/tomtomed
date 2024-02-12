import { NavLink } from "react-router-dom";
import homeVector from "../assets/homeVector.png";
import mediaVector from "../assets/mediaVector.png";
import formAddVector from "../assets/formAddVector.png";
import messageVector from "../assets/messageVector.png";
import userVector from "../assets/userVector.png";
import shoppingCart from "../assets/ph_shopping-cart.png";
import search from "../assets/ep_search.png";
import notification from "../assets/basil_notification-outline.png";
import setting from "../assets/solar_settings-outline.png";
import Ads from "../assets/postassets/Ads.png";
import userimage from "../assets/postassets/userImage.webp"
const userNavigation = () => {
  return (
    <div class="  flex items-center justify-between   pl-[60px] pr-[60px] pt-[60px] max-xl:p-4 font-roboto w-full max-xl:gap-0 max-xl:justify-between ">
      <div className="tomtomad w-1/5
 ">
        <NavLink to="/">
          <h1 className=" text-tom font-roboto font-semibold text-3xl	 ">
            TOM<span class="text-tomad ">TOMED</span>
          </h1>
        </NavLink>
      </div>
      <div className="nav_container bg-black flex w-4/5  justify-end rounded-lg max-xl:bg-[#101010] ml-[40px] max-xl:ml-[0px] font-semibold">
        <div className="list-none flex justify-evenly  gap-[40px]  p-[10px] rounded-lg max-xl:gap-4">
          <div className="mobile_desktop_view flex gap-[40px] items-center  max-xl:fixed  max-xl:bottom-0  max-xl:left-0  max-xl:w-full  max-xl:flex  max-xl:justify-center  max-xl:bg-[#101010]  max-xl:pb-2 max-xl:pt-2  max-xl:gap-8 max-xl:rounded-none">
            <div className="navlink_list flex items-center flex-col">
    
              <NavLink  to="/" className="rounded-full bg-grey "
               style={({ isActive }) => {
                return {
                  padding: isActive ? "20px" : "",
                  
                }
              }}
              >
                <img src={homeVector} alt="home" className="h-5 w-5" />
              </NavLink>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden	">Home</p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={mediaVector} alt="media" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff]	mt-1 max-xl:hidden">Videos</p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={formAddVector} alt="form" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Add post
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              
              <NavLink  to="/message" className="rounded-full bg-grey "
               style={({ isActive }) => {
                return {
                  padding: isActive ? "20px" : "",
                  
                }
              }}
              >
                <img src={messageVector} alt="home" className="" />
              </NavLink>
              
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Messages
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className="rounded-full bg-grey p-2 ">
                {" "}
                <img src={shoppingCart} alt="home" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">E-Commerce</p>
            </div>
            <div className="navlink_list  items-center flex-col hidden max-xl:flex">
              <li className="rounded-full bg-grey p-2">
                <img src={userVector} alt="message" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Profile
              </p>
            </div>
          </div>
          <div className="desktop_view flex gap-[40px]  items-center max-xl:gap-6 ">
            
            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className="rounded-full bg-grey p-3 flex items-center max-xl:hidden">
                {" "}
                <img src={Ads} alt="ads" className="h-[10px] w-[22px] " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">Ads</p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={search} alt="media" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Search
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={notification} alt="form" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Notifications
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col  max-xl:hidden">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={setting} alt="form" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Settings
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className=" ">
                <img src={userimage} alt="message" className="h-10 w-10 rounded-full " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">Das</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default userNavigation;
