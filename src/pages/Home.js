import React from "react";
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
const Home = () => {
  return (
    <>

      <div class="  flex pl-[60px] pr-[60px]   font-roboto   justify-between max-xl:justify-center max-xl:p-3  mt-10 max-xl:mt-1 ">
        <div className="left_section flex  gap-[80px] max-[1285]:gap-[75px]">
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
          <div className="post_container ">

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
                  <Icon icon="mingcute:more-2-line" className="w-5 h-6 text-white " />
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
                    <BiMessageAlt className="w-6 h-6 text-white	" />
                    {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                    <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                  </div>
                  <div className="like_status  flex  gap-1 items-center">
                    {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                    <Icon icon="icon-park-outline:like" className="w-6 h-6 text-white	" />
                    <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                  </div>

                  <div className="like_status flex gap-1 items-center">
                    <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-white	" />

                    <p className="text-[#8F8F8F] text-sm font-medium">4</p>
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

            <div className="post  pl-[50px] pr-[50px] max-xl:pl-0 max-xl:pr-0 border-x-2 border-[#171717] border-b-2 pb-5  pt-5">
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
                  <Icon icon="mingcute:more-2-line" className="w-5 h-6 text-white " />
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
                    <BiMessageAlt className="w-6 h-6 text-white	" />
                    {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                    <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                  </div>
                  <div className="like_status  flex  gap-1 items-center">
                    {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                    <Icon icon="icon-park-outline:like" className="w-6 h-6 text-white	" />
                    <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                  </div>

                  <div className="like_status flex gap-1 items-center">
                    <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-white	" />

                    <p className="text-[#8F8F8F] text-sm font-medium">4</p>
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

          </div>
        </div>
        <div className="right_section flex  ">
        
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
