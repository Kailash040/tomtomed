import { useState, useEffect } from "react";
import postImage from "../assets/postassets/Rectangle 587.png";
import userImage from "../assets/postassets/Ellipse 3.png";
import verifyTik from "../assets/postassets/bluetik.svg";
import { BiMessageAlt } from "react-icons/bi";
import { Icon } from '@iconify/react';
import story from '../assets/story.png'
import story1 from '../assets/story1.png'
import imagesave from '../assets/Rectangle 599.png'
import suggestionImage from '../assets/Rectangle 600.png'
import group from '../assets/Rectangle 599 (1).png'
import Comments from "../components/Comments";
import repostFeedUser from "../assets/Rectangle 587.png";
// 
import { getPostData } from "../app/auth/getPostSlice";
import { useDispatch, useSelector } from 'react-redux';
const Home = () => {
  const userData = useSelector((state) => state?.getPost?.data?.post);
  console.log(userData);
  const dispatch = useDispatch(getPostData)
  useEffect(() => {
    dispatch(getPostData());

  }, [getPostData])
  console.log();
  const [showComment, setShowComment] = useState(false)

  const [showshareModal, setShowShareModal] = useState(false)
  const [showMuteModal, setShowMuteModal] = useState(false)

  const handleShowComment = () => {
    setShowComment(true);
  }
  const handleShareModal = () => {
    setShowShareModal(!showshareModal)
  }
  const handleShowMuteButton = () => {
    setShowMuteModal(!showMuteModal)
  }
  return (
    <>

      <div class="  flex pl-[60px] pr-[60px]   font-roboto min-[1440px]:justify-between  max-xl:justify-center max-xl:p-3  mt-10 max-xl:mt-1 ">
        <div className="left_section flex   ">
          <div className="news_savePost_group_section 	max-xl:hidden">
            <div className="w-[220px]" >
              <div className="Premium_buutton mb-9">
                <div class="rounded-xl	 bg-gradient-to-r from-[#4879FA]  to-[#7D4CFF] p-[1px]">
                  <div class="flex   items-center justify-center bg-[#202020] rounded-xl h-[60px] ">
                    <button class="text-base  	 text-[#B68FE7]">Premium</button>
                  </div>
                </div>
              </div>
              <div className="news_section flex justify-between items-center">
                <p className="text-xl text-white font-semibold">News</p>
                <button className="text-[#B68FE7] text-base	 font-medium">
                  See All
                </button>
              </div>
              <div className="news_post bg-newbgcolor p-2 rounded-lg mt-2 mb-2 pb-6">
                <p className="text-[#F5F5F5] text-base font-normal">@abc_news</p>
                <p className="text-[#B39DCF] text-[15px] font-normal ">
                  Hiring at Indian IT companies drops to 20-year low.
                </p>
              </div>
              <div className="news_post bg-newbgcolor p-2 rounded-lg mt-2 mb-2 pb-6">
                <p className="text-[#F5F5F5] text-base font-normal">@abc_news</p>
                <p className="text-[#B39DCF] text-[15px] font-normal">
                  Hiring at Indian IT companies drops to 20-year low.
                </p>
              </div>
              <div className="news_post bg-newbgcolor p-2 rounded-lg mt-2 mb-2 pb-6">
                <p className="text-[#F5F5F5] text-base font-normal">@abc_news</p>
                <p className="text-[#B39DCF] text-[15px] font-normal">
                  Hiring at Indian IT companies drops to 20-year low.
                </p>
              </div>
            </div>
            <div className="w-[220px] mt-10" >

              <div className="news_section flex justify-between items-center">
                <p className="text-xl text-white font-semibold">Saved Posts</p>
                <button className="text-[#B68FE7] text-base	 font-medium">
                  See All
                </button>
              </div>
              <div className="savepostCard flex justify-between rounded-xl	  bg-[#202020] p-2 mt-3">
                <div className="img_name flex items-center gap-3 ">
                  <div className="img w-[76px] h-[84px]"> <img src={imagesave} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >@jamie_c03</p>
                    <p className="text-[#8F8F8F] text-base " >Photo</p>
                  </div>
                </div>
                <div className="save"> <Icon icon="solar:bookmark-bold" className="text-[white]" /></div>
              </div>
              <div className="savepostCard flex justify-between rounded-xl	  bg-[#202020] p-2 mt-3">
                <div className="img_name flex items-center gap-3 ">
                  <div className="img w-[76px] h-[84px]"> <img src={imagesave} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >@jamie_c03</p>
                    <p className="text-[#8F8F8F] text-base " >Photo</p>
                  </div>
                </div>
                <div className="save"> <Icon icon="solar:bookmark-bold" className="text-[white]" /></div>
              </div>
              <div className="savepostCard flex justify-between rounded-xl	  bg-[#202020] p-2 mt-3">
                <div className="img_name flex items-center gap-3 ">
                  <div className="img w-[76px] h-[84px]"> <img src={imagesave} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >@jamie_c03</p>
                    <p className="text-[#8F8F8F] text-base " >Photo</p>
                  </div>
                </div>
                <div className="save"> <Icon icon="solar:bookmark-bold" className="text-[white]" /></div>
              </div>
            </div>
            <div className="w-[220px] mt-10" >

              <div className="news_section flex justify-between items-center">
                <p className="text-xl text-white font-semibold">Groups</p>
                <button className="text-[#B68FE7] text-base	 font-medium">
                  See All
                </button>
              </div>
              <div className="savepostCard flex justify-between rounded-xl flex-col	  bg-[#202020] p-2 mt-3">
                <div className="img_name flex items-center gap-3  ">
                  <div className="img w-[42px] h-[42px]"> <img src={group} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >School friendss</p>
                  </div>
                </div>
                <div className="save flex text-[#8F8F8F] mt-[13px] mb-[17px] ml-1"> <p>@sammy_03   </p>  <p>+4 more</p></div>
              </div>
              <div className="savepostCard flex justify-between rounded-xl flex-col	  bg-[#202020] p-2 mt-3">
                <div className="img_name flex items-center gap-3  ">
                  <div className="img w-[42px] h-[42px]"> <img src={group} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >School friendss</p>
                  </div>
                </div>
                <div className="save flex text-[#8F8F8F] mt-[13px] mb-[17px] ml-1"> <p>@sammy_03   </p>  <p>+4 more</p></div>
              </div>
              <div className="savepostCard flex justify-between rounded-xl flex-col	  bg-[#202020] p-2 mt-3">
                <div className="img_name flex items-center gap-3  ">
                  <div className="img w-[42px] h-[42px]"> <img src={group} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >School friendss</p>
                  </div>
                </div>
                <div className="save flex text-[#8F8F8F] mt-[13px] mb-[17px] ml-1"> <p>@sammy_03   </p>  <p>+4 more</p></div>
              </div>
            </div>
          </div>
          <div className="post_container pl-[80px] max-xl:pl-0 ">
            {/*  */}
            {
              showComment === false ? <div className="post_item">

                <div className="post  pl-[50px] pr-[50px] max-xl:pl-0 max-xl:pr-0 border-x-2 border-[#171717] border-b-2 pb-5 max-xl:border-0 ">
                  <div className="post_name_userName_pic flex justify-between">
                    <div className="name_username">
                      <p className="text-[#FFFFFF] max-xl:text-sm flex items-center gap-1 font-bold	">
                        {" "}
                        Amy Roy{" "}
                        <span>
                          {" "}
                          <img src={verifyTik} alt="photo" />{" "}
                        </span>{" "}
                      </p>
                      <p className="text-[#8F8F8F] max-xl:text-sm">@amy_roy</p>
                    </div>
                    <div className="photo flex items-center gap-6">
                      <img src={userImage} alt="photo" className="w-[48px] h-[48px]" />
                      {/*  */}
                      <div className="account_section_item  relative" >
                        <button className="" onClick={handleShowMuteButton} >

                          <Icon icon="mingcute:more-2-line" className="w-5 h-6 text-white " />
                        </button>
                        {
                          showMuteModal && <div className="report_block_mute absolute  list-none bg-[#141414] w-[200px] flex flex-col items-center py-6 px-[31px] rounded-xl	right-2 top-10">
                            <div className="user_div_image flex   gap-[18px] items-center">
                              <img src={userImage} alt="user" className="w-[60px] h-[60px]" />
                              <div className="name_username">
                                <p className="text-[#FFFFFF] max-xl:text-sm flex items-center gap-1 font-bold	">
                                  {" "}
                                  Amy Roy{" "}

                                </p>
                                <p className="text-[#8F8F8F] max-xl:text-sm">@amy_roy</p>
                              </div>
                            </div>
                            <div className="option_div mt-10 flex flex-col gap-6">

                              <div className="flex gap-[18px]">
                                <Icon icon="basil:notification-off-outline" className="w-6 h-6 text-white" />
                                <li className="text-lg text-white">Mute</li>
                              </div>
                              <div className="flex gap-[18px]">
                                <Icon icon="material-symbols:report-outline" className="w-6 h-6 text-white" />
                                <li className="text-lg text-white">Report</li>
                              </div>
                              <div className="flex gap-[18px]">
                                <Icon icon="material-symbols-light:block" className="w-6 h-6 text-[#FB6363]" />
                                <li className="text-lg text-[#FB6363]">Block</li>
                              </div>
                            </div>

                          </div>
                        }

                      </div>
                      {/*  */}
                    </div>
                  </div>
                  <div className="post">
                    <p className="description  text-[#FFFFFF] font-normal mt-4 mb-4 max-xl:text-sm max-xl:mt-3 max-xl:mb-3">
                      {" "}
                      I wish I loved anything as much as my cat loves catnip :p
                    </p>
                    <p className="text-[#B39DCF] mb-3 max-xl:text-sm">
                      #cats #lovecats #adorable{" "}
                    </p>
                  </div>
                  <div className="main_image">
                    <img
                      src={postImage}
                      alt="photo"
                      className="w-[520px] h-[554px] max-xl:w-96 max-xl:max-h-80"
                    />
                  </div>
                  <div className="post_status flex  justify-between  mt-3">
                    <div className="post_status flex gap-4">
                      <div className="like_status flex  gap-1 items-center">
                        <button
                          onClick={handleShowComment}
                        >

                          <BiMessageAlt className="w-6 h-6 text-white	" />
                        </button>
                        {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                        <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                      </div>
                      <div className="like_status  flex  gap-1 items-center">
                        {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                        <Icon icon="icon-park-outline:like" className="w-6 h-6 text-white	" />
                        <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                      </div>

                      <div className="like_status flex gap-1 items-center relative">
                        {/*  */}
                        <button onClick={handleShareModal} className="flex gap-1 items-center" >

                          <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-white	" />
                          <p className="text-[#8F8F8F] text-sm font-medium">4</p>
                        </button>
                        {
                          showshareModal === true ? <div className="absolute top-8 flex flex-col gap-5 items-baseline rounded-xl	max-sm:p-3 max-sm:w-[157px]  text-lg w-[185px]	 bg-[#141414] text-white py-[18px] px-3 " >
                            {/*  */}
                            <div className="mb-5  hidden ">
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
                                        <Icon icon="ep:search" className="text-white w-5 h-5" />
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
                                            src={userImage}
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
                            <button className="max-sm:text-sm	" onClick={() => document.getElementById('my_modal_share_with_friend').showModal()}>Share with Friends</button>
                            <dialog id="my_modal_share_with_friend" className="modal">
                              <div className="modal-box p-0 bg-[#202020] w-11/12 max-w-4xl  max-sm:bg-black  max-sm:w-[100%] max-sm:max-h-[100%]">
                                {/*  */}

                                <div className="dailogContainer flex   justify-end flex-col">
                                  <div className="dialogbox  flex flex-col    ">
                                    <div className="flex_container flex   flex-col max-sm:flex-row items-center  max-sm:px-5  ">


                                      <form method="dialog" className="hidden max-sm:block"  >
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="p-2 rounded-full bg-[#1B1C1B] mt-[10px]">   <Icon icon="eva:arrow-back-fill" className="w-4 h-4 text-white" /></button>
                                      </form>




                                      <div className="searchContainer flex justify-between items-center gap-10   px-6 pt-6  rounded-t-3xl    max-sm:justify-center max-sm:pt-[10px]  w-full max-sm:pr-0 max-sm:w-full" >
                                        <div className="relative  w-full  flex justify-end items-center max-sm:w-full  ">
                                          <input
                                            type="text"
                                            className="  bg-[#1B1C1B] p-5  max-sm:p-3 max-sm:text-sm	 max-sm:w-full rounded-[30px] text-[#8F8F8F] w-full"
                                            placeholder="Search Friends "
                                          />
                                          <div className="flex gap-6 absolute p-1 bg-[#1B1C1B] right-[18px] ">
                                            <Icon icon="ep:search" className="text-white w-5 h-5" />
                                          </div>
                                        </div>
                                        <div className="search_button max-sm:w-full max-sm:z-10 max-sm:hidden">
                                          <button className="signUp text-white   px-[135px] py-5 max-lg:px-[50px] max-lg:py-[16px] rounded-xl text-lg max-md:px-9 max-md:text-base max-sm:w-full">Share</button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="list_container  max-sm:h-[100%]  px-5 pb-6 rounded-b-3xl h-95 overflow-y-scroll  scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar scrollbar-thumb-[#DDDDDD] scrollbar-track-[#414141] max-sm:rounded-t-3xl">
                                      {/* list container . */}
                                      {/* carousel item */}
                                      <div className="chat flex items-center justify-between  mt-3 ">
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                      <div className="chat flex items-center justify-between  mt-3 ">
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                      <div className="chat flex items-center justify-between  mt-3 ">
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                      <div className="chat flex items-center justify-between  mt-3 ">
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                      <div className="chat flex items-center justify-between  mt-3 ">
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                      <div className="chat flex items-center justify-between  mt-3 ">
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base" >Amy Johnson</p>
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
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                        <div className="user_deatails flex gap-3  items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base"> Amy Johnson</p>
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
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                        <div className="user_deatails flex gap-3 items-center">
                                          <div>
                                            {" "}
                                            <img
                                              src={userImage}
                                              alt="message"
                                              className="h-10 w-10 rounded-full "
                                            />
                                          </div>
                                          <div className="text-white">
                                            {" "}
                                            <p className="max-sm:text-base">Amy Johnson</p>
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
                                      <div className="search_button max-sm:w-full max-sm:z-10 hidden max-sm:block  max-sm:bg-[#101010]">
                                        <button className="signUp text-white   px-[135px] py-5 max-lg:px-[50px] max-lg:py-[16px] rounded-xl text-lg max-md:px-9 max-md:text-base max-sm:w-full">Share</button>
                                      </div>
                                    </div>

                                  </div>
                                </div>

                                {/*  */}
                              </div>
                              <form method="dialog" className="modal-backdrop max-sm:hidden">
                                <button>close</button>
                              </form>
                            </dialog>
                            {/*  */}
                            {/* repost on feed */}
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="max-sm:text-sm" onClick={() => document.getElementById('my_modal_repost_on_feed').showModal()}>   Repost with caption</button>
                            <dialog id="my_modal_repost_on_feed" className="modal  ">
                              <div className="modal-box bg-transparent  max-md:bg-black  w-11/12 max-w-5xl p-0  max-md:max-h-[100%] max-md:w-[100%]	"  >
                                <div className="user_deatails  justify-between items-center mt-5 hidden max-sm:block mb-2 ">
                                  <div className="left_section flex items-center gap-5  ">
                                    <form method="dialog">
                                      {/* if there is a button in form, it will close the modal */}
                                      <button className="p-1 rounded-full bg-[#1B1C1B] ml-[27px]"> <Icon icon="eva:arrow-back-fill" className="w-5 h-5 text-white" /></button>
                                    </form>

                                    <div className="item flex gap-2">
                                      <p className="text-lg max-sm:text-base	" >Repost from Amy Ray</p>
                                      <p className="text-[#8F8F8F] text-base	"  >@amy_ray</p>
                                    </div>
                                  </div>

                                </div>
                                <div className="flex_container flex gap-[30px] max-xl:justify-center max-md:flex-col max-md:items-center max-md:gap-6">

                                  <div className="img_container w-[520px] h-[520px] max-xl:w-[320px] max-xl:h-[320px] max-[860px]:w-[250px] max-[860px]:h-[250px] max-md:w-[350px] max-md:h-[300px] ">

                                    <img src={repostFeedUser} alt="user" className="w-full h-full object-cover rounded-xl" />
                                  </div>
                                  <div className="right_div_container">


                                    <div className="right_container w-[470px] rounded-xl max-[860px]:w-[350px]	 max-xl:w-[400px]  h-[400px] bg-[#1B1C1B]  max-md:bg-black">

                                      <div className="user_deatails flex justify-between items-center p-6 max-sm:hidden ">
                                        <div className="left_section flex items-center gap-5">
                                          <Icon icon="eva:arrow-back-fill" className="w-5 h-5 text-white" />
                                          <div className="item">
                                            <p className="text-lg	" >Repost from Amy Ray</p>
                                            <p className="text-[#8F8F8F] text-base	"  >@amy_ray</p>
                                          </div>
                                        </div>
                                        <div className="right_section">
                                          <Icon icon="ph:smiley" className="w-[30px] h-[30px] " />
                                        </div>
                                      </div>
                                      <div className="input_box px-6 w-full  max-sm:px-0">
                                        <textarea type="text" className="w-full rounded-xl p-6 bg-[#000000] max-sm:text-sm		max-sm:bg-[#1B1C1B]" placeholder="Write a caption here..." />
                                      </div>
                                      <div className="search_friends px-6 max-sm:px-0 relative flex justify-between items-center">
                                        <input type="text" className="  max-sm:text-sm w-full py-[14px] px-[18px] bg-[#000000] rounded-xl	text-lg max-sm:bg-[#1B1C1B] 	" placeholder="Search Friends..." />
                                        <button className="text-base bg-[#1B1C1B] absolute  max-sm:bg-black px-[15px] right-10 py-[10px] rounded-xl max-sm:right-2	">Tag People</button>
                                      </div>
                                    </div>
                                    <div className="button_div  mt-10 ">

                                      <button className="w-full signUp py-5  max-sm:py-[15px] rounded-xl	 max-sm:text-base ">Post</button>
                                    </div>
                                  </div>
                                </div>

                              </div>


                              <form method="dialog" className="modal-backdrop max-sm:hidden">
                                <button>close</button>
                              </form>


                            </dialog>
                            {/* <button>Repost on feed</button> */}
                            <button className="max-sm:text-sm">Repost on feed</button>
                          </div> : ""
                        }

                      </div>
                      <div className="like_status flex  gap-1 items-center">
                        {/* <Icon icon="grommet-icons:view" /> */}
                        <Icon icon="grommet-icons:view" className="w-6 h-6 text-white	" />
                        <p className="text-[#8F8F8F] text-sm font-medium">34</p>
                      </div>
                    </div>
                    <div className="post_status">
                      <Icon icon="solar:bookmark-outline" className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <p className="time text-sm text-[#8F8F8F] mt-3 max-lg:text-sm" >29 mins ago</p>
                </div>


              </div> : <Comments value={showComment} onClick={handleShowComment} setShowComment={setShowComment} />
            }
            {/*  */}

          </div>
        </div>
        <div className="right_section flex pl-[60px]  max-xl:pl-0">

          <div className="trending w-[320px]	 max-xl:hidden">
            <div className="mb-10">
              <div className="news_section flex justify-between rounded-xl ">
                <p className="text-xl text-white font-semibold">Stories</p>
                <button className="text-[#B68FE7] text-base	 font-medium">
                  See All
                </button>
              </div>
              <div className="news_trend rounded-xl  mt-2 flex gap-[19px] flex-wrap">
                <div className="story_item flex justify-center items-center flex-col relative">
                  <div className="img">
                    <img src={story} alt="story" className="w-[94px] h-[60px]" />
                  </div>
                  <div className="name absolute bottom-2">
                    <p className="text-sm text-white ">@amy_ray</p>
                  </div>
                </div>
                <div className="story_item flex justify-center items-center flex-col relative">
                  <div className="img">
                    <img src={story1} alt="story" className="w-[94px] h-[60px]" />
                  </div>
                  <div className="name absolute bottom-2">
                    <p className="text-sm text-white">@emma</p>
                  </div>
                </div>
                <div className="story_item flex justify-center items-center flex-col relative">
                  <div className="img">
                    <img src={story1} alt="story" className="w-[94px] h-[60px]" />
                  </div>
                  <div className="name absolute bottom-2">
                    <p className="text-sm text-white">@emma</p>
                  </div>
                </div>
                <div className="story_item flex justify-center items-center flex-col relative">
                  <div className="img">
                    <img src={story} alt="story" className="w-[94px] h-[60px]" />
                  </div>
                  <div className="name absolute bottom-2">
                    <p className="text-sm text-white">@emma</p>
                  </div>
                </div>
                <div className="story_item flex justify-center items-center flex-col relative">
                  <div className="img">
                    <img src={story} alt="story" className="w-[94px] h-[60px]" />
                  </div>
                  <div className="name absolute bottom-2">
                    <p className="text-sm text-white">@emma</p>
                  </div>
                </div>
                <div className="story_item flex justify-center items-center flex-col relative">
                  <div className="img">
                    <img src={story1} alt="story" className="w-[94px] h-[60px]" />
                  </div>
                  <div className="name absolute bottom-2">
                    <p className="text-sm text-white">@emma</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="news_section flex justify-between rounded-xl ">
                <p className="text-xl text-white font-semibold">Trending</p>
                <button className="text-[#B68FE7] text-base	 font-medium">
                  See All
                </button>
              </div>
              <div className="news_trend rounded-xl bg-newbgcolor mt-2">
                <div className="news_trend   pt-3 pb-3 pl-3 pr-3  border-b-2 border-[#313131]">
                  <div className="new_trend flex justify-between items-center ">
                    <p className="text-base font-normal text-white">
                      #Cristiano_Ronaldos
                    </p>
                    <p className="text-sm text-[#8F8F8F] font-normal	">
                      {" "}
                      10K Posts
                    </p>
                  </div>
                  <div className="new_trend">
                    <p className="text-base font-normal text-[#8F8F8F]">
                      Sports{" "}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="news_trend   pt-3 pb-3 pl-3 pr-3 border-b-2 border-[#313131]">
                  <div className="new_trend flex justify-between items-center">
                    <p className="text-base font-normal text-white">
                      #Cristiano_Ronaldos
                    </p>
                    <p className="text-sm text-[#8F8F8F] font-normal	">
                      {" "}
                      10K Posts
                    </p>
                  </div>
                  <div className="new_trend">
                    <p className="text-base font-normal text-[#8F8F8F]">
                      Sports{" "}
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="news_trend   pt-3 pb-3 pl-3 pr-3 ">
                  <div className="new_trend flex justify-between items-center">
                    <p className="text-base font-normal text-white">
                      #Cristiano_Ronaldos
                    </p>
                    <p className="text-sm text-[#8F8F8F] font-normal	">
                      {" "}
                      10K Posts
                    </p>
                  </div>
                  <div className="new_trend">
                    <p className="text-base font-normal text-[#8F8F8F]">
                      Sports{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-[320px] mt-10" >

              <div className="news_section flex justify-between items-center">
                <p className="text-xl text-white font-semibold">Suggestions</p>
                <button className="text-[#B68FE7] text-base	 font-medium">
                  See All
                </button>
              </div>
              <div className="savepostCard flex justify-between rounded-xl	  bg-[#202020] p-2 mt-3 items-center">
                <div className="img_name flex items-center gap-3 ">
                  <div className="img w-[76px] h-[84px]"> <img src={imagesave} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >James Carter</p>
                    <p className="text-[#8F8F8F] text-base " >@jamie_c03</p>
                  </div>
                </div>
                <div className="save"> <button className="text-lg	text-[#85C6E1] " >Follow</button> </div>
              </div>
              <div className="savepostCard flex justify-between rounded-xl	  bg-[#202020] p-2 mt-3 items-center">
                <div className="img_name flex items-center gap-3 ">
                  <div className="img w-[76px] h-[84px]"> <img src={suggestionImage} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >James Carter</p>
                    <p className="text-[#8F8F8F] text-base " >@Emilyy__</p>
                  </div>
                </div>
                <div className="save"> <button className="text-lg	text-[#85C6E1] " >Follow</button> </div>
              </div>
              <div className="savepostCard flex justify-between rounded-xl	  bg-[#202020] p-2 mt-3 items-center">
                <div className="img_name flex items-center gap-3 ">
                  <div className="img w-[76px] h-[84px]"> <img src={imagesave} alt="" className="w-full h-full object-cover" /> </div>
                  <div className="name_photo">
                    <p className="text-[#F5F5F5] font-normal	" >James Carter</p>
                    <p className="text-[#8F8F8F] text-base " >@jamie_c03</p>
                  </div>
                </div>
                <div className="save"> <button className="text-lg	text-[#85C6E1] " >Follow</button> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
