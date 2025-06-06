import { useState } from "react";
import banner from "../assets/postassets/signUpBanner.png";
import apple from "../assets/postassets/apple.png";
import google from "../assets/postassets/google.png";
import applestore from "../assets/postassets/applestore.png";
import playstore from "../assets/postassets/playstore.png";
import bg from '../assets/postassets/bgtom.png';
import bgBottom from '../assets/postassets/bgtombotton.png'
import global from '../assets/postassets/globaltwo.png'
import footer from '../assets/postassets/footerImage.png'
import { NavLink } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import slider from "../assets/postassets/slider.png"
import slider2 from "../assets/postassets/slider2.png"
import slider3 from "../assets/postassets/slider3.png"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from "../app/auth/signUpSlice";
import { useForm } from "react-hook-form"

const SignUp = () => {
  const userData = useSelector((state) => state?.signUpAuth);
  console.log(userData)
  const dispatch = useDispatch();
  // const [formData, setFormData] = useState({
  //   username: '',
  //   password: '',
  //   email: ''
  // });

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(signUpUser(formData))
  //   if (userData?.data?.success === "PENDING") {
  //     toast.success(userData.data.message)

  //   }

  //   // toast.success(userData)
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {

    dispatch(signUpUser(data));

  }
  // 
  const splideOptions = {
    type: 'slide',
    perPage: 1,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 2000,
  }
  // 

  return (
    <div className=" font-roboto  relative    h-[100vh]  mt-10 flex flex-col justify-between w-[1250px] max-xl:w-full  mx-[auto]" >
      <ToastContainer />

      <div className=" absolute ">
        <img src={bg} alt="" />
      </div>
      <div className="signUp_container flex bg-black  justify-around    flex-wrap  z-10	max-xl:justify-center max-xl:items-center  max-xl:pr-[0px] max-xl:pl-[0px] max-xl:pt-[100px] items-start">
        <div className="banner_container max-xl:hidden relative flex  justify-end items-center w-[572px] h-[600px]">
          <Splide aria-label="My Favorite Images" options={splideOptions} className=" z-[5] w-[350px] ">"
            <SplideSlide>
              <img src={slider} alt="Image 1" className="rounded-xl h-[550px] w-[300px]   " />
            </SplideSlide>

            <SplideSlide>
              <img src={slider2} alt="Image 1" className="rounded-xl h-[550px] w-[300px]   " />
            </SplideSlide>
            <SplideSlide>
              <img src={slider3} alt="Image 1" className="rounded-xl h-[550px] w-[300px]   " />
            </SplideSlide>
          </Splide>
          <img src={banner} className="w-[572px] h-[650px] absolute" alt="" />
        </div>

        <div className="form_container  z-10">
          <h1 className=" text-tom font-roboto font-semibold text-[40px]	text-center mb-[10px]  max-xl:hidden">
            TOM<span class="text-tomad ">TOMED</span>
          </h1>
          <div className="welcome_container">
            <p className="text-tom font-roboto font-semibold text-[24px]	text-center   hidden max-xl:block">Welcome to</p>
            <p className="text-tomad font-roboto font-semibold text-[24px]	text-center   hidden max-xl:block">TomTomed</p>

          </div>
          <div className="form_container bg-black pl-6  pr-6 max-xl:pl-[0px] max-xl:pr-[0px] rounded-3xl pb-4 max-xl:bg-[#101010]   max-xl:pb-0 max-xl:mx-auto">

            <p className="text-[24px] font-medium text-white mb-2 pt-2 text-center  max-xl:pt-[86px]   max-xl:mb-[60px] max-xl:mt-[0] ">

              Sign Up{" "}
            </p>
            <form onSubmit={handleSubmit(onSubmit)} >
              <div className="username mb-2 max-xl:mb-[18px] flex flex-col">
                <input
                  type="text"
                  class=" px-[18px] text-white py-5 rounded-xl bg-[#101010] w-[360px] max-xl:w-[340px] max-xl:h-[48px]  max-xl:bg-[#1B1C1B]"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
                {errors.username && <span className="text-[red]" >username is required</span>}
              </div>
              <div className="username mb-2 max-xl:mb-[18px] flex flex-col">
                <input type="email" id="contact" placeholder="Email" class="text-white px-[18px] py-5 rounded-xl bg-[#101010] w-[360px] max-xl:bg-[#1B1C1B] max-xl:w-[340px] max-xl:h-[48px]"
                  {...register("email", { required: true })}
                />
                {errors.email && <span className="text-[red]" >email is required</span>}
              </div>
              <div className="username flex flex-col ">
                <input
                  type="password"
                  class="px-[18px] py-5 text-white rounded-xl bg-[#101010] w-[360px] max-xl:bg-[#1B1C1B] max-xl:w-[340px] max-xl:h-[48px]"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
                {errors.password && <span className="text-[red]" >password is required</span>}
              </div>
              <div className="username mt-3 max-xl:mt-10 ">
                <button
                  type="submit"
                  class="border  px-[18px] py-5 rounded-xl   w-[360px] text-white max-xl:pt-[14px] max-xl:pb-[15px] max-xl:h-[48px] max-xl:w-[340px] signUp "

                >
                  {" "}
                  Sign up{" "}
                </button>
              </div>
              <div className="or_container flex justify-center mt-5 items-center gap-[21px] pl-[10px] pr-[10px]">
                <div className="line h-[1px] bg-[white] w-full"></div>
                <div className="line text-[grey] text-xs ">or</div>
                <div className="line h-[1px] bg-[white] w-full"></div>
              </div>
              <div className=" flex justify-center gap-5 list-none mt-2">
                <li>
                  {" "}
                  <img src={google} />
                </li>
                <li>
                  {" "}
                  <img src={apple} />
                </li>
              </div>

              <p className="text-[white] list-none text-center mt-3 text-lg max-xl:hidden max-xl:mt-[60px]">
                Already have an account?{" "}
                <span className="text-tom font-roboto font-semibold">
                  <NavLink to="/login">

                    Log in
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
      <div className="menu_container list-none flex justify-end max-xl:hidden bg-black	">
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
      <p className="text-[white] list-none text-center mt-6 text-base hidden max-xl:block mb-10">
        Already have an account?{" "}
        <span className="text-tom font-roboto font-semibold">
          <NavLink to="/login">

            login
          </NavLink>

        </span>
      </p>
      <div className=" absolute z-[-1] bottom-10 max-xl:hidden">
        <img src={bgBottom} alt="" />
      </div>
      <div className="hidden max-xl:block ">

        <img src={footer} alt="" className=" h-[92px] w-full" />
      </div>
    </div>
  );
};
export default SignUp;
