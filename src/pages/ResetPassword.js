import React, { useState, useEffect } from "react";
import applestore from "../assets/postassets/applestore.png";
import playstore from "../assets/postassets/playstore.png";
import bg from '../assets/postassets/bgtom.png';
import bgBottom from '../assets/postassets/bgtombotton.png'
import footer from '../assets/postassets/footerImage.png'
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'
import forgetPassword from '../assets/Group 34044.png'
import resetPassword from '../assets/Rectangle 23985 (1).png'

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    password: "",
    cpassword: ""
  })
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const token = urlParams.get('token');
  useEffect(() => {
    if (!token) {
      console.log("No token");
    } else {
      verifyToken(token, userId);
    }
  }, []);

  const verifyToken = async (token, userId) => {

    const response = await axios.put("https://tomtomed.onrender.com/api/v1/user/resetpassword", { userId: userId, token: token }, { withCredentials: true });
    console.log(response)
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const response = await axios.put("https://tomtomed.onrender.com/api/v1/user/changePassword", { userId, data }, { withCredentials: true })
    if (response.status === 201) {
      navigate("/login")
    }
  }
  return (
    <div className=" font-roboto  relative  h-[100vh]  mt-10 flex flex-col justify-between w-[1250px] max-xl:w-full  mx-[auto]  ">
      <div className=" absolute ">
        <img src={bg} alt="" />
      </div>
      <div className="signUp_container  m-[auto] flex  flex-row-reverse justify-between   flex-wrap  z-10	max-xl:justify-center max-xl:items-center  max-xl:pr-[0px] max-xl:pl-[0px] max-xl:pt-[100px] items-start">
        <div className="banner_container max-xl:hidden relative flex  justify-start items-center w-[572px] h-[600px]">

          <img src={resetPassword} className="w-[410px]  h-[338px] absolute" alt="" />
        </div>
        <div className="form_container z-10">
          <h1 className=" text-tom font-roboto font-semibold text-[40px]	text-center mb-[10px]  max-xl:hidden">
            TOM<span class="text-tomad ">TOMED</span>
          </h1>

          <div className="form_container  pl-6  pr-6 max-xl:pl-[0px] max-xl:pr-[0px] rounded-3xl pb-5    max-xl:pb-0 max-xl:mx-auto   max-xl:flex max-xl:flex-col justify-center items-center">

            <p className="text-[24px] font-medium text-white mb-2 pt-2 text-center  max-xl:pt-[86px]    max-xl:mt-[0] ">

              Reset Password{" "}
            </p>
            <p className="w-[400px]  text-center mb-5 mt-5 text-[#8F8F8F]	 ">Please enter your new password below. Make sure it's strong and unique to keep your account secure.</p>
            <div className="banner_container hidden max-xl:block max-xl:mb-[60px]  max-xl:w-[260px] max-xl:h-[214px] mb-5">

              <img src={resetPassword} className="w-full h-full object-cover " alt="" />
            </div>
            <form className="flex flex-col justify-between  items-center
            ">


              <div className="username ">
                <input
                  type="password"
                  class="text-white px-[18px] py-5 rounded-xl bg-[#101010] w-[360px] max-xl:bg-[#1B1C1B] max-xl:w-[340px] max-xl:h-[48px]"
                  placeholder="Enter New Password "
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
              </div>
              <div className="username mt-3 ">
                <input
                  type="password"
                  class="text-white px-[18px] py-5 rounded-xl bg-[#101010] w-[360px] max-xl:bg-[#1B1C1B] max-xl:w-[340px] max-xl:h-[48px]"
                  placeholder="Re-enter New Password "
                  name="cpassword"
                  value={data.cpassword}
                  onChange={handleChange}
                />
              </div>
              <div className="username mt-3 max-xl:mt-6 ">
                <button
                  onClick={handlePasswordReset}
                  type="submit"
                  class="border  px-[18px] py-5 rounded-xl   w-[360px] text-white max-xl:pt-[14px] max-xl:pb-[15px] max-xl:h-[48px] max-xl:w-[340px] signUp "
                >
                  Confirm
                </button>
              </div>



              <p className=" list-none text-center mt-3 text-lg max-xl:mt-[60px] max-xl:mb-[60px]  max-xl:text-base">
                <span className="text-tom font-roboto font-semibold">
                  <NavLink to="/login">

                    Back to login
                  </NavLink>
                </span>
              </p>
            </form>
          </div>
          {/* app container */}
          <div className="get_app_container max-xl:hidden">
            <div className="get_app_item flex flex-col items-center">
              <p className="text-base text-white mt-2 ">Get App</p>
              <div className="media_logo flex gap-[13px] mt-[14px]">
                <li className="list-none">
                  <a href="">
                    {" "}
                    <img
                      src={playstore}
                      className="w-[130px] h-[46px]"
                      alt=""
                    />
                  </a>
                </li>
                <li className="list-none">
                  <a href="">
                    {" "}
                    <img src={applestore} className="" alt="" />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu_container list-none flex justify-end max-xl:hidden	">
        <div className="list-none flex justify-between gap-[239px] text-[#8F8F8F] pb-[18px] mt-5 ">
          <div className="menu_item flex gap-10 text-[13px]">
            <li>
              {" "}
              <a href="">TOMTOMAD</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">About</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Help</a>
            </li>
            <li>
              <a href="">API</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Location</a>
            </li>
          </div>
          <div className="menu_item flex pr-[25px] text-[13px]">
            <li> © 2024 TOMTOMED</li>
          </div>
        </div>
      </div>

      <div className=" absolute  bottom-10 max-xl:hidden">
        <img src={bgBottom} alt="" />
      </div>
      <div className="hidden max-xl:block ">

        <img src={footer} alt="" className=" h-[92px] w-full" />
      </div>
    </div>
  );
};
export default SignUp;
