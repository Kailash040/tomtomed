import { useState } from "react";
import like from "../assets/postassets/profilelike.png";
import comment from "../assets/postassets/profilecomment.png";
import view from "../assets/postassets/profileeye.png";
import share from "../assets/postassets/profileshare.png";
import userimage from "../assets/postassets/userImage.webp";
import verifyTik from "../assets/postassets/bluetik.svg";
import edit from "../assets/postassets/profileedit.png";
import profileshare from "../assets/postassets/share.png";
import more from "../assets/postassets/profileseemore.png";
//
import postImage from "../assets/postassets/Rectangle 587.png";
import userImage from "../assets/postassets/Ellipse 3.png";
import group from '../assets/Group.png'


import artimg from "../assets/postassets/artimage.png";
import media from "../assets/postassets/media.png";
import kababmenu from "../assets/postassets/kabab.png";
// import { NavLink } from "react-router-dom";
import search from "../assets/ep_search.png";
import likepost from "../assets/postassets/like.png";
import commentpost from '../assets/postassets/comment.png'
import sharePost from '../assets/postassets/sharepost.png'
import viewpost from "../assets/postassets/views.png";

import savePost from '../assets/postassets/savepost.png'
// import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
const Profile = () => {
  //
  const [showPost, setShowPost] = useState(true);
  const [showArticle, setShowArticle] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const [showFollower, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  //
  const handleShowPost = () => {
    setShowPost(true);
    setShowArticle(false);
    setShowMedia(false);
    setShowFollowers(false);
    setShowFollowing(false);
  };
  const handleShowArticle = () => {
    setShowPost(false);
    setShowArticle(true);
    setShowMedia(false);
    setShowFollowers(false);
    setShowFollowing(false);
  };
  const handleShowMedia = () => {
    setShowPost(false);
    setShowArticle(false);
    setShowMedia(true);
    setShowFollowers(false);
    setShowFollowing(false);
  };
  const handleShowFollowers = () => {
    setShowPost(false);
    setShowArticle(false);
    setShowMedia(false);
    setShowFollowers(true);
    setShowFollowing(false);
  };
  const handleShowFollowing = () => {
    setShowPost(false);
    setShowArticle(false);
    setShowMedia(false);
    setShowFollowers(false);
    setShowFollowing(true);
  };
  return (
    <div className="profile_container mt-10 pl-[60px] pr-[60px] font-roboto flex gap-[50px]  max-xl:gap-0 max-xl:justify-center   max-xl:pr-0 max-xl:pl-0">
      {/*  */}

      {/*  */}
      <div className="left_section w-1/5 max-xl:hidden">
        <div className="Premium_buutton mb-9">
          <button className="text-[#B68FE7] text-base py-5 px-[77px] border border-gradient premium  rounded-xl">
            Premium
          </button>
        </div>
        <div>
          <div className="w-[220px]">
            <div className="news_section flex justify-between items-center">
              <p className="text-xl text-white font-semibold">Analytics</p>
              <button className="text-[#B68FE7] text-base	 font-medium">
                See All
              </button>
            </div>
            <div className="news_post bg-newbgcolor p-3 rounded-lg mt-3 mb-3 flex justify-between items-center">
              <div className="like_container">
                <p className="text-white text-base mb-[13px]">Likes</p>
                <p className="text-[#85C6E1] text-2xl">1.2k</p>
              </div>
              <div className="like_Ctonainer">
                <img src={like} alt="like" />
              </div>
            </div>
            <div className="news_post bg-newbgcolor p-3 rounded-lg mt-3 mb-3 flex justify-between items-center">
              <div className="like_container">
                <p className="text-white text-base mb-[13px]">Comments</p>
                <p className="text-[#85C6E1] text-2xl">1.2k</p>
              </div>
              <div className="like_Ctonainer">
                <img src={comment} alt="like" />
              </div>
            </div>
            <div className="news_post bg-newbgcolor p-3 rounded-lg mt-3 mb-3 flex justify-between items-center">
              <div className="like_container">
                <p className="text-white text-base mb-[13px]">Views</p>
                <p className="text-[#85C6E1] text-2xl">1.2k</p>
              </div>
              <div className="like_Ctonainer">
                <img src={view} alt="like" />
              </div>
            </div>
            <div className="news_post bg-newbgcolor p-3 rounded-lg mt-3 mb-3 flex justify-between items-center">
              <div className="like_container">
                <p className="text-white text-base mb-[13px]">Sahre</p>
                <p className="text-[#85C6E1] text-2xl">1.2k</p>
              </div>
              <div className="like_Ctonainer">
                <img src={share} alt="like" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_section   w-4/5 max-xl:w-[500px] max-sm:w-[350px] ">
        <div className="user_bio border-b-[red]">
          <div className="image_username flex   justify-between  ">
            <div className="flex gap-10 ">
              <div className="user_pic ">
                <img
                  src={userimage}
                  alt="user"
                  className="w-[160px] h-[160px] rounded-full"
                />
              </div>

              <div className="user_name_username">
                <p className="flex items-center gap-1  text-2xl font-semibold	text-white max-xl:text-lg">
                  Das{" "}
                  <span>
                    {" "}
                    <img src={verifyTik} alt="photo" />{" "}
                  </span>
                </p>

                <p className="mt-[18px] text-lg	text-white max-xl:text-sm ">
                  das_007
                </p>
                <p className="text-lg	text-white mt-[18px] max-xl:text-[14px]">
                  Hyderabad
                </p>
              </div>
            </div>
            <div className="edit_share_and_more list-none flex  gap-6  ">
              <li>
                <img src={edit} alt="photo" className="w-6 h-6" />
              </li>
              <li>
                <img src={profileshare} alt="photo" className="w-6 h-6" />
              </li>
              <li>
                <img src={more} alt="photo" className="w-6 h-6" />
              </li>
            </div>
          </div>
          <div className="mt-[30px] mb-[18px]">
            <p className="bio text-lg text-white  max-xl:text-base">
              {" "}
              Connect People. Share Opinions. Make a Living.{" "}
            </p>
          </div>
        </div>
        <div className="container_user flex  justify-between  gap-[80px]">
          <div className="user_data ">
            <div className="user_post_follower_link flex gap-[60px]  w-[587px]  max-xl:gap-5 justify-between max-xl:w-[500px] max-sm:w-[350px] ">
              <div className="user_item items-center flex flex-col">
                <button onClick={handleShowPost}>
                  <p className="text-base text-white">Posts</p>
                  <p className="text-base text-[#D6B5FF]">2,031 </p>
                </button>
              </div>
              <div className="user_item items-center flex flex-col">
                <button onClick={handleShowArticle}>
                  <p className="text-base text-white">Articles</p>
                  <p className="text-base text-[#D6B5FF]">2,031 </p>
                </button>
              </div>
              <div className="user_item items-center flex flex-col">
                <button onClick={handleShowMedia}>
                  <p className="text-base text-white">Media</p>
                  <p className="text-base text-[#D6B5FF]">2,031 </p>
                </button>
              </div>
              <div className="user_item items-center flex flex-col">
                <button onClick={handleShowFollowers}>
                  <p className="text-base text-white">Followers</p>
                  <p className="text-base text-[#D6B5FF]">2,031 </p>
                </button>
              </div>
              <div className="user_item items-center flex flex-col">
                <button onClick={handleShowFollowing}>
                  <p className="text-base text-white">Following</p>
                  <p className="text-base text-[#D6B5FF]">2,031 </p>
                </button>
              </div>
            </div>
            <div className="post bg-black ">
              {showPost && (
                <div className="post_container bg-black ">
                  <div className="post  mt-[18px] px-[50px] pt-6 max-xl:px-6 ">
                    <div className="post_name_userName_pic flex justify-between">
                      <div className="name_username">
                        <p className="text-[#FFFFFF] max-xl:text-sm flex items-center gap-1">
                          {" "}
                          Amy Roy{" "}
                          <span>
                            {" "}
                            <img src={verifyTik} alt="photo" />{" "}
                          </span>{" "}
                        </p>
                        <p className="text-[#8F8F8F] max-xl:text-sm">
                          @amy_roy
                        </p>
                      </div>
                      <div className="photo flex gap-6 items-center">
                        <img
                          src={userImage}
                          alt="photo"
                          className="w-11 h-11"
                        />
                        <img
                          src={group}
                          alt="photo"
                          className="w-[1.69px] h-[14.06px]"
                        />
                      </div>
                    </div>
                    <div className="post">
                      <p className="description  text-[#FFFFFF] font-normal mt-2 mb-2 max-xl:text-sm">
                        {" "}
                        I wish I loved anything as much as my cat loves catnip
                        :p
                      </p>
                      <p className="text-[#B39DCF] mb-2 max-xl:text-sm">
                        #cats #lovecats #adorable{" "}
                      </p>
                    </div>
                    <div className="main_image max-lg:flex max-xl:justify-center">
                      <img
                        src={postImage}
                        alt="photo"
                        className="w-[520px] h-[554px] max-xl:w-96 max-xl:max-h-80"
                      />
                    </div>
                    <div className="post_status flex  justify-between  mt-4">
                      <div className="post_status flex gap-4">
                        <div className="like_status  flex flex-col  items-center gap-3 ">
                          <img src={likepost} alt="like" className="w-6 h-6	" />
                          <p className="text-[#B39DCF] text-sm">124</p>
                        </div>
                        <div className="like_status flex flex-col  items-center gap-3">
                          <img
                            src={commentpost}
                            alt="comment"
                            className="w-6 h-6	"
                          />
                          <p className="text-[#B39DCF] text-sm">14</p>
                        </div>
                        <div className="like_status flex flex-col  items-center gap-3">
                          <img
                            src={sharePost}
                            alt="share"
                            className="w-6 h-6	"
                          />
                          <p className="text-[#B39DCF] text-sm">4</p>
                        </div>
                        <div className="like_status flex flex-col  items-center gap-3">
                          <img src={viewpost} alt="view" className="w-6 h-6	" />
                          <p className="text-[#B39DCF] text-sm">34</p>
                        </div>
                      </div>
                      <div className="post_status flex flex-col  items-center gap-3">
                        <img src={savePost} alt="save" className="w-6" />
                      </div>
                    </div>
                  </div>
                  <p className="text-[#8F8F8F] pl-[50px] mt-[13px] pb-5">
                    29 mins ago
                  </p>
                </div>
              )}
            </div>
            {showArticle && (
              <div className="article_container mt-6 ">
                <div className="article p-3  bg-[#1B1C1B] rounded-lg">
                  <div className="time_date flex justify-between">
                    <p className="text-xs text-[#8F8F8F]">20 Jan, 2024</p>
                    <p className="text-xs text-[#8F8F8F]">12:39 pm</p>
                  </div>
                  <div className="des mt-3">
                    <p className="text-base text-white">
                      The bond between Trixie and Lord Henry was a truly special
                      thing. Maybe you have a similar bond with your own furry
                      friend? If you don’t have a cat, you can still spend time
                      with them by volunteering at a shelter, pet-sitting or
                      being a foster for felines awaiting a forever ...{" "}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={artimg} alt="" />
                    <p className="text-[#8F8F8F]">+2 Photos</p>
                  </div>
                </div>
              </div>
            )}
            {showMedia && (
              <div className="media mt-[18px]  ">
                <img src={media} />
              </div>
            )}
            {showFollower && (
              <div className="followers">
                <div className="mt-[30px] relative hidden max-xl:block">
                  <input
                    type="text"
                    className="w-full  bg-[#1B1C1B] pl-[14px] rounded-xl py-[14px] "
                    placeholder="Search"
                  />
                  <img
                    src={search}
                    alt="search"
                    className="absolute left-[92%]  bottom-[14px]"
                  />
                </div>
                <div className="followers_item flex justify-between items-center bg-[#F5F5F5] px-[18px] py-[10px] rounded-xl mt-[18px]">
                  <div className="child flex gap-[18px] items-center ">
                    <div className="followers_child">
                      {" "}
                      <img
                        src={userimage}
                        alt="user"
                        className="w-[60px] h-[60px] rounded-full"
                      />
                    </div>
                    <div className="followers_child">
                      <p className="text-[#2A2A2A] flex">
                        {" "}
                        Amy Johnson <img src={verifyTik} alt="verify" />
                      </p>
                      <p className="text-sm text-[#8F8F8F]">Amy_07</p>
                    </div>
                  </div>
                  <div className="child">
                    <div className="followers_child flex gap-[18px]">
                      <button className="text-[#7D4CFF]">Follow back</button>
                      <img src={kababmenu} alt="menu" />
                    </div>
                    {/* <div className="followers_child"></div> */}
                  </div>
                </div>
                <div className="followers_item flex justify-between items-center bg-[#F5F5F5] px-[18px] py-[10px] rounded-xl mt-[18px]">
                  <div className="child flex gap-[18px] items-center ">
                    <div className="followers_child">
                      {" "}
                      <img
                        src={userimage}
                        alt="user"
                        className="w-[60px] h-[60px] rounded-full"
                      />
                    </div>
                    <div className="followers_child">
                      <p className="text-[#2A2A2A] flex">
                        {" "}
                        Amy Johnson <img src={verifyTik} alt="verify" />
                      </p>
                      <p className="text-sm text-[#8F8F8F]">Amy_07</p>
                    </div>
                  </div>
                  <div className="child">
                    <div className="followers_child flex gap-[18px]">
                      <button className="text-[#7D4CFF]">Follow back</button>
                      <img src={kababmenu} alt="menu" />
                    </div>
                    {/* <div className="followers_child"></div> */}
                  </div>
                </div>
                <div className="followers_item flex justify-between items-center bg-[#F5F5F5] px-[18px] py-[10px] rounded-xl mt-[18px]">
                  <div className="child flex gap-[18px] items-center ">
                    <div className="followers_child">
                      {" "}
                      <img
                        src={userimage}
                        alt="user"
                        className="w-[60px] h-[60px] rounded-full"
                      />
                    </div>
                    <div className="followers_child">
                      <p className="text-[#2A2A2A] flex">
                        {" "}
                        Amy Johnson <img src={verifyTik} alt="verify" />
                      </p>
                      <p className="text-sm text-[#8F8F8F]">Amy_07</p>
                    </div>
                  </div>
                  <div className="child">
                    <div className="followers_child flex gap-[18px]">
                      <button className="text-[#7D4CFF]">Follow back</button>
                      <img src={kababmenu} alt="menu" />
                    </div>
                    {/* <div className="followers_child"></div> */}
                  </div>
                </div>
              </div>
            )}
            {showFollowing && (
              <div className="following">
                <div className="mt-[30px] relative hidden max-xl:block">
                  <input
                    type="text"
                    className="w-full  bg-[#1B1C1B] pl-[14px] rounded-xl py-[14px] "
                    placeholder="Search"
                  />
                  <img
                    src={search}
                    alt="search"
                    className="absolute left-[92%]  bottom-[14px]"
                  />
                </div>
                <div className="followers_item flex justify-between items-center bg-[#F5F5F5] px-[18px] py-[10px] rounded-xl mt-[18px]">
                  <div className="child flex gap-[18px] items-center ">
                    <div className="followers_child">
                      {" "}
                      <img
                        src={userimage}
                        alt="user"
                        className="w-[60px] h-[60px] rounded-full"
                      />
                    </div>
                    <div className="followers_child">
                      <p className="text-[#2A2A2A] flex">
                        {" "}
                        Amy Johnson <img src={verifyTik} alt="verify" />
                      </p>
                      <p className="text-sm text-[#8F8F8F]">Amy_07</p>
                    </div>
                  </div>
                  <div className="child">
                    <div className="followers_child flex gap-[18px]">
                      <button className="text-[#7D4CFF]">Unfollow</button>
                      <img src={kababmenu} alt="menu" />
                    </div>
                    {/* <div className="followers_child"></div> */}
                  </div>
                </div>
                <div className="followers_item flex justify-between items-center bg-[#F5F5F5] px-[18px] py-[10px] rounded-xl mt-[18px]">
                  <div className="child flex gap-[18px] items-center ">
                    <div className="followers_child">
                      {" "}
                      <img
                        src={userimage}
                        alt="user"
                        className="w-[60px] h-[60px] rounded-full"
                      />
                    </div>
                    <div className="followers_child">
                      <p className="text-[#2A2A2A] flex">
                        {" "}
                        Amy Johnson <img src={verifyTik} alt="verify" />
                      </p>
                      <p className="text-sm text-[#8F8F8F]">Amy_07</p>
                    </div>
                  </div>
                  <div className="child">
                    <div className="followers_child flex gap-[18px]">
                      <button className="text-[#7D4CFF]">Unfollow</button>
                      <img src={kababmenu} alt="menu" />
                    </div>
                    {/* <div className="followers_child"></div> */}
                  </div>
                </div>
                <div className="followers_item flex justify-between items-center bg-[#F5F5F5] px-[18px] py-[10px] rounded-xl mt-[18px]">
                  <div className="child flex gap-[18px] items-center ">
                    <div className="followers_child">
                      {" "}
                      <img
                        src={userimage}
                        alt="user"
                        className="w-[60px] h-[60px] rounded-full"
                      />
                    </div>
                    <div className="followers_child">
                      <p className="text-[#2A2A2A] flex">
                        {" "}
                        Amy Johnson <img src={verifyTik} alt="verify" />
                      </p>
                      <p className="text-sm text-[#8F8F8F]">Amy_07</p>
                    </div>
                  </div>
                  <div className="child">
                    <div className="followers_child flex gap-[18px]">
                      <button className="text-[#7D4CFF]">Unfollow</button>
                      <img src={kababmenu} alt="menu" />
                    </div>
                    {/* <div className="followers_child"></div> */}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="trending_suggestion max-xl:hidden">
            <div className="right_section flex">
              <div className="trending w-[320px]	 max-xl:hidden">
                <div>
                  <div className="news_section flex justify-between rounded-xl ">
                    <p className="text-xl text-white font-semibold">Trending</p>
                    <button className="text-[#B68FE7] text-base	 font-medium">
                      See All
                    </button>
                  </div>
                  <div className="news_trend rounded-xl bg-newbgcolor mt-2">
                    <div className="news_trend   pt-3 pb-3 pl-3 pr-3 border-b-2 border-[#313131] ">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
