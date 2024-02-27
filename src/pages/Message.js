import MainNavigation from "../components/MainNavigation";
import userimage from "../assets/postassets/userImage.webp";
import { useRef, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { Icon } from '@iconify/react';
import userImage from '../assets/Avatar (1).png'
const Message = () => {
  const [showDialogbox, setShowDialogBox] = useState(true)
  const handleShow = () => {
    setShowDialogBox(!showDialogbox)
  }
  return (
    <div className="font-roboto">

      <MainNavigation />
      <div className="message_group"   >


        {
          showDialogbox && <div className="mb-5   hidden">
            <div className="add_friends flex w-[80%] mx-auto">

              <p className="text-base  text-white hidden max-sm:block">Add friends</p>
            </div>
            <div className="dailogContainer mt-6 flex   justify-end flex-col pr-[60px] max-xl:pr-0 max-xl:mb-[80px]">
              <div className="dialogbox w-full flex flex-col items-end max-xl:items-center max-sm:relative ">


                <div className="searchContainer flex justify-between items-center w-[80%] bg-[#202020] px-6 pt-6  rounded-t-3xl  max-sm:absolute max-sm:bottom-0  max-sm:justify-center max-sm:pt-[10px]" >
                  <div className="relative max-sm:hidden ">
                    <input
                      type="text"
                      className="w-[580px]  bg-[#1B1C1B] p-5  rounded-[30px] text-[#8F8F8F] max-xl:w-[400px] max-lg:w-[250px] "
                      placeholder="Search Followers "
                    />
                    <div className="flex gap-6 absolute left-[92%]  max-xl:left-[86%] bottom-[22px]  max-lg:left-[80%] max-md:left-[73%] ">
                    <Icon icon="ep:search"  className="text-white w-5 h-5" />
                    </div>
                  </div>
                  <div className="search_button max-sm:w-full max-sm:z-10">
                    <button className="signUp text-white px-[104px] py-[20px] max-lg:px-[50px] max-lg:py-[16px] rounded-xl text-lg max-md:px-9 max-md:text-base max-sm:w-full">Create Group</button>
                  </div>
                </div>
                <div className="list_container  w-[80%] bg-[#202020] px-5 pb-6 rounded-b-3xl h-80 overflow-auto max-sm:rounded-t-3xl">
                  {/* list container . */}
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p>Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p>Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p>Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p>Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p className="">Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p>Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p>Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p>Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                  <div className="chat flex items-center justify-between  mt-3">
                    <div className="user_deatails flex gap-3">
                      <div>
                        {" "}
                        <img
                          src={userimage}
                          alt="message"
                          className="h-10 w-10 rounded-full "
                        />
                      </div>
                      <div className="text-white">
                        {" "}
                        <p>Amy Johnson</p>
                        <p className="text-sm text-[#8F8F8F]">@amyj_39!</p>
                      </div>
                    </div>
                    <div className="cheque_user">
                      <div class="inline-flex items-center">
                        <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                          <input type="checkbox"
                            class="before:content[''] peer relative  bg-white h-6 w-6 cursor-pointer appearance-none rounded-full border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                            id="check" />
                          <span
                            class="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                              stroke="currentColor" stroke-width="1">
                              <path fill-rule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clip-rule="evenodd"></path>
                            </svg>
                          </span>
                        </label>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <div className="message_container font-roboto mt-10 flex list-none  max-xl:mb-[60px] max-sm:justify-center max-sm:mt-2 ">
          <div className="left_section  bg-black   max-sm:hidden  ">
            <div className="message flex bg-black  px-[18px] py-[24px] justify-between items-center max-sm:px-[9px] max-sm:py-[12px] ">
              <p className="text-xl text-white font-semibold">Messages</p>
              <div className="search_message flex gap-[27px]">
                <button onClick={handleShow}>
                  <li className="p-1 bg-[#202020] rounded-full">

                    <AiOutlineMessage className="text-white w-5 h-5" />
                  </li>
                </button>
                <li className="p-1 bg-[#202020] rounded-full">
                  <Icon icon="ep:search" className="text-white w-5 h-5" />
                </li>

              </div>
            </div>
            <div className="w-[355px] bg-black overflow-y-scroll  scrollbar-thumb-rounded-full scrollbar-track-rounded-full h-screen   scrollbar scrollbar-thumb-[#DDDDDD] scrollbar-track-[#414141]  max-sm:bg-[#232323] max-sm:rounded-t-[30px] max-sm:mt-3" >

              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] border-y-[1px] border-[#232323]  ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="w-[54px] h-[54px]" >
                    {" "}
                    <img
                      src={userImage}
                      alt="message"
                      className="w-full  h-full rounded-full object-cover "
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p className=" font-semibold "  >Amy Johnson</p>
                    <p className="text-sm font-medium	">Alrighttt!</p>
                  </div>
                </div>
                <div className="user_time">
                  <p className="text-xs	text-white font-normal	 ">21:40 PM</p>
                </div>
              </div>

            </div>
          </div>
          <div className="right_section  bg-[#202020] rounded-t-xl  flex flex-col justify-between max-xl:px-[10px] ">
            <div>
              <div className="chat flex items-center justify-between  px-6 py-[18px] borderdiv1 max-xl:p-2 ">
                <div className="user_deatails flex gap-3 items-center">
                  <div className="flex items-center gap-4">
                    {" "}
                    <li className="rounded-full p-1 bg-[#202020] hidden  max-sm:block ">

                      <Icon icon="eva:arrow-back-fill" className=" w-6 h-6 hidden  max-sm:block  text-white" />
                    </li>
                    <img
                      src={userImage}
                      alt="message"
                      className="h-[60px] w-[60px] rounded-full  max-sm:w-6 max-sm:h-6"
                    />
                  </div>
                  <div className="text-white">
                    {" "}
                    <p>Amy Johnson</p>
                  </div>
                </div>
                <div className="user_time flex gap-6 cursor-pointer max-sm:hidden">
                  <li className="p-2 bg-[#202020] rounded-full">

                    <Icon icon="fluent:call-32-regular" className="w-6 h-6 text-white" />
                  </li>

                  <li className="p-2 bg-[#202020] rounded-full">

                    <Icon icon="tabler:video" className="w-6 h-6 text-white" />
                  </li>

                </div>
              </div>
            </div>
            {/*  */}
            <div className="chat mt-3 px-[1.5rem] max-xl:text-[16px] max-sm:px-0">
              <div className="chat_container mt-2">
                <img
                  src={userimage}
                  alt="message"
                  className="h-10 w-10 rounded-full max-sm:w-6 max-sm:h-6"
                />
                <p className="text-lg text-white px-3 py-[18px] border border-[#4879FA] inline-block rounded-b-3xl rounded-tr-3xl mt-2 max-xl:text-[16px] bg-[#101010]">Heyyy!! What is up? </p>
                <p className="text-sm text-[#8F8F8F] mt-2">10:39 AM</p>

              </div>
              <div className="chat_container text-end mt-2">

                <p className="text-lg text-white px-3 py-[18px] border border-[#4879FA] inline-block rounded-t-3xl rounded-bl-3xl mt-2 max-xl:text-[16px] bg-[#101010]">Hi!!! Nothing much just hanging around, supp??    </p>

              </div>
              <div className="chat_container mt-2">
                <img
                  src={userimage}
                  alt="message"
                  className="h-10 w-10 rounded-full max-sm:w-6 max-sm:h-6"
                />
                <p className="text-lg text-white px-3 py-[18px] border border-[#4879FA] inline-block rounded-b-3xl rounded-tr-3xl mt-2 max-w-lg  bg-[#101010] font-normal max-xl:text-[16px]">Nothing.. i was wondering if we could go to watch that movie
                  which i mentioned earlier tomorrow at 7pm...?  you up? </p>
                <p className="text-sm text-[#8F8F8F] mt-2">10:00 AM</p>

              </div>
            </div>
            {/*  */}
            <div className="input_container px-[1.5rem] mb-6 max-sm:px-0">
              <div className="mt-[30px] relative flex justify-center items-center ">
                <input
                  type="text"
                  className="w-full  bg-[#1B1C1B] p-6 rounded-[30px]  text-white "
                  placeholder="Write a message "
                />
                <div className="flex gap-6 absolute right-6  ">
                  <li className="p-1 bg-[#202020] rounded-full">

                    <Icon icon="lets-icons:mic-light" className="w-[30px] h-[30px] text-white" />
                  </li>
                  <li className="p-1 bg-[#202020] rounded-full">
                    <Icon icon="solar:gallery-wide-linear" className="w-[30px] h-[30px] text-white" />
                  </li>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Message;