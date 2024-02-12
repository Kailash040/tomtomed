import MainNavigation from "../components/MainNavigation";
import search from "../assets/ep_search.png";
import messageVector from "../assets/messageVector.png";
import userimage from "../assets/postassets/userImage.webp";
import call from "../assets/postassets/call.png";
import videcall from "../assets/postassets/video.png";
import mic from "../assets/postassets/mic.png";
import gallery from "../assets/postassets/gallery.png";
import backicon from   "../assets/postassets/backicon.png"
import {  useRef, useState } from 'react'

const Message = () => {
  const  [showDialogbox,setShowDialogBox] = useState(true)
  return (
    <>
    {/* {
showDialogbox && <>
    <div className="dailogContainer">
      <div className="searchContainer flex justify-center items-center">
      <div className="relative ">
              <input
                type="text"
                className="w-86  bg-[#1B1C1B] p-6 rounded-xl  "
                placeholder="Write a message "
              />
              <div className="flex gap-6 absolute left-[88%]  max-xl:left-[86%] bottom-[22px]  max-lg:left-[80%] max-md:left-[73%]">
                <img src={search} alt="search" className="" />
              </div>
            </div>
            <div className="search_button">
              <button className="signUp text-white px-[104px] py-[20px] rounded-xl text-lg">Create Group</button>
            </div>
      </div>
      <div className="list_container">
         </div>
    </div>
</>
    } */}
      <MainNavigation />
      <div className="message_container font-roboto mt-10 flex  max-xl:mb-[60px] max-sm:justify-center max-sm:mt-2">
        <div className="left_section  bg-black   max-sm:hidden ">
          <div className="message flex bg-black  px-[18px] py-[24px] justify-between items-center max-sm:px-[9px] max-sm:py-[12px] ">
            <p className="text-xl text-white">Messages</p>
            <div className="search_message flex gap-[27px]">
              <img src={messageVector} alt="message" />
              <img src={search} alt="search" />
            </div>
          </div>
            <div className="w-[360px] bg-black overflow-auto h-screen max-sm:bg-[#232323] max-sm:rounded-t-[30px] max-sm:mt-3" >
              
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
           <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div> <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          <div className="chat flex items-center justify-between  px-6 py-6 borderdiv max-md:p-3">
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
                <p className="text-sm">Alrighttt!</p>
              </div>
            </div>
            <div className="user_time">
              <p className="text-xs	text-white ">21:40 PM</p>
            </div>
          </div>
          
          </div>
        </div>
        <div className="right_section w-4/5 px-[30px] flex flex-col justify-between max-xl:px-[10px] ">
          <div>
            <div className="chat flex items-center justify-between  px-6 py-6 borderdiv1 max-xl:p-2">
              <div className="user_deatails flex gap-3 items-center">
                <div className="flex items-center gap-4">
                  {" "}
                  <img
                    src={backicon}
                    alt="message"
                    className=" w-4 h-4"
                  />
                  <img
                    src={userimage}
                    alt="message"
                    className="h-10 w-10 rounded-full  max-sm:w-6 max-sm:h-6"
                  />
                </div>
                <div className="text-white">
                  {" "}
                  <p>Amy Johnson</p>
                </div>
              </div>
              <div className="user_time flex gap-6 cursor-pointer max-sm:hidden">
                <img src={call} alt="message" className="call " />
                <img src={videcall} alt="videocall" className="videocall " />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="chat mt-8 px-[1.5rem] max-xl:text-[16px] max-sm:px-0">
            <div className="chat_container mt-2">
            <img
                    src={userimage}
                    alt="message"
                    className="h-10 w-10 rounded-full max-sm:w-6 max-sm:h-6"
                  />
                  <p className="text-lg text-white px-3 py-[18px] border border-[#4879FA] inline-block rounded-b-3xl rounded-tr-3xl mt-2 max-xl:text-[16px]">Heyyy!! What is up? </p>
                  <p className="text-sm text-[#8F8F8F] mt-2">10:39 AM</p>

            </div>
            <div className="chat_container text-end mt-2">
           
                  <p className="text-lg text-white px-3 py-[18px] border border-[#4879FA] inline-block rounded-t-3xl rounded-bl-3xl mt-2 max-xl:text-[16px]">Hi!!! Nothing much just hanging around, supp??    </p>

            </div>
            <div className="chat_container mt-2">
            <img
                    src={userimage}
                    alt="message"
                    className="h-10 w-10 rounded-full max-sm:w-6 max-sm:h-6"
                  />
                  <p className="text-lg text-white px-3 py-[18px] border border-[#4879FA] inline-block rounded-b-3xl rounded-tr-3xl mt-2 max-w-lg font-normal max-xl:text-[16px]">Nothing.. i was wondering if we could go to watch that movie 
which i mentioned earlier tomorrow at 7pm...?  you up? </p>
                  <p className="text-sm text-[#8F8F8F] mt-2">10:00 AM</p>

            </div>
          </div>
           {/*  */}
          <div className="input_container px-[1.5rem] mb-6 max-sm:px-0">
            <div className="mt-[30px] relative ">
              <input
                type="text"
                className="w-full  bg-[#1B1C1B] p-6 rounded-xl  "
                placeholder="Write a message "
              />
              <div className="flex gap-6 absolute left-[88%]  max-xl:left-[86%] bottom-[22px]  max-lg:left-[80%] max-md:left-[73%]">
                <img src={mic} alt="search" className="" />
                <img src={gallery} alt="search" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Message;