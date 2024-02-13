import React from "react";
import postImage from "../assets/postassets/Rectangle 587.png";
import userImage from "../assets/postassets/Ellipse 3.png";
import like from "../assets/postassets/icon-park_love-and-help.png";
import comment from "../assets/postassets/iconamoon_comment-light.png";
import share from "../assets/postassets/vector1.png";
import view from "../assets/postassets/Group.png";
import save from "../assets/postassets/vector2.png";
import verifyTik from "../assets/postassets/bluetik.svg";
const Home = () => {
  return (
    <>
    
    <div class="  flex pl-[60px] pr-[60px]   font-roboto   justify-center max-xl:justify-center max-xl:p-3  mt-[30px]">
      <div className="left_section flex gap-[80px]">
        <div className="news_savePost_group_section w-[220px]	max-xl:hidden">
          <div>
            <div className="Premium_buutton mb-9">
              <button className="text-[#B68FE7] text-base py-5 px-[77px] border border-gradient premium  rounded-xl">
                Premium
              </button>
            </div>
            <div className="news_section flex justify-between items-center">
              <p className="text-xl text-white font-semibold">News</p>
              <button className="text-[#B68FE7] text-base	 font-medium">
                See All
              </button>
            </div>
            <div className="news_post bg-newbgcolor p-2 rounded-lg mt-2 mb-2">
              <p className="text-[#F5F5F5] text-base font-normal">@abc_news</p>
              <p className="text-[#B39DCF] text-[15px] font-normal">
                Hiring at Indian IT companies drops to 20-year low.
              </p>
            </div>
            <div className="news_post bg-newbgcolor p-2 rounded-lg mt-2 mb-2">
              <p className="text-[#F5F5F5] text-base font-normal">@abc_news</p>
              <p className="text-[#B39DCF] text-[15px] font-normal">
                Hiring at Indian IT companies drops to 20-year low.
              </p>
            </div>
            <div className="news_post bg-newbgcolor p-2 rounded-lg mt-2 mb-2">
              <p className="text-[#F5F5F5] text-base font-normal">@abc_news</p>
              <p className="text-[#B39DCF] text-[15px] font-normal">
                Hiring at Indian IT companies drops to 20-year low.
              </p>
            </div>
          </div>
        </div>
        <div className="post_container ">
          <div className="post mb-5">
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
                <p className="text-[#8F8F8F] max-xl:text-sm">@amy_roy</p>
              </div>
              <div className="photo flex">
                <img src={userImage} alt="photo" />
                <p> .</p>
              </div>
            </div>
            <div className="post">
              <p className="description  text-[#FFFFFF] font-normal mt-2 mb-2 max-xl:text-sm">
                {" "}
                I wish I loved anything as much as my cat loves catnip :p
              </p>
              <p className="text-[#B39DCF] mb-2 max-xl:text-sm">
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
            <div className="post_status flex  justify-between  mt-2">
              <div className="post_status flex gap-4">
                <div className="like_status h-6">
                  <img src={like} alt="like" className="w-6 h-6	" />
                  <p className="text-[#B39DCF] text-sm">124</p>
                </div>
                <div className="like_status">
                  <img src={comment} alt="comment" className="w-6 h-6	" />
                  <p className="text-[#B39DCF] text-sm">14</p>
                </div>
                <div className="like_status">
                  <img src={share} alt="share" className="w-6 h-6	" />
                  <p className="text-[#B39DCF] text-sm">4</p>
                </div>
                <div className="like_status">
                  <img src={view} alt="view" className="w-6 h-6	" />
                  <p className="text-[#B39DCF] text-sm">34</p>
                </div>
              </div>
              <div className="post_status">
                <img src={save} alt="save" className="w-6" />
              </div>
            </div>
          </div>
          <div className="post mb-5">
            <div className="post_name_userName_pic flex justify-between">
              <div className="name_username">
                <p className="text-[#FFFFFF] max-xl:text-sm">Amy Roy</p>
                <p className="text-[#8F8F8F] max-xl:text-sm">@amy_roy</p>
              </div>
              <div className="photo flex">
                <img src={userImage} alt="photo" />
                <p> .</p>
              </div>
            </div>
            <div className="post">
              <p className="description  text-[#FFFFFF] font-normal mt-2 mb-2 max-xl:text-sm">
                {" "}
                I wish I loved anything as much as my cat loves catnip :p
              </p>
              <p className="text-[#B39DCF] mb-2 max-xl:text-sm">
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
            <div className="post_status flex  justify-between  mt-2">
              <div className="post_status flex gap-4">
                <div className="like_status">
                  <img src={like} alt="like" className="w-6 h-6	" />
                  <p className="text-[#B39DCF] text-sm">124</p>
                </div>
                <div className="like_status">
                  <img src={comment} alt="comment" className="w-6 h-6	" />
                  <p className="text-[#B39DCF] text-sm">14</p>
                </div>
                <div className="like_status">
                  <img src={share} alt="share" className="w-6 h-6	" />
                  <p className="text-[#B39DCF] text-sm">4</p>
                </div>
                <div className="like_status">
                  <img src={view} alt="view" className="w-6 h-6	" />
                  <p className="text-[#B39DCF] text-sm">34</p>
                </div>
              </div>
              <div className="post_status">
                <img src={save} alt="save" className="w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right_section flex">
        <div className="story  pl-[46px] pr-[46px] flex flex-col gap-5 max-xl:hidden  max-xl:p-4">
          {" "}
          <p className="text-xl text-white font-semibold">Stories</p>
          <div className="story_item flex flex-col border-b border-[#313131] mt-1 ">
            <img
              src="https://img.freepik.com/free-photo/fantastic-seascape-with-ripples_1232-424.jpg"
              alt="photo"
              className="w-20  h-14 rounded"
            />
            <p className="text-xs mt-1 mb-2 text-[#ffffff]	">@amy_ray</p>
          </div>
          <div className="story_item flex flex-col border-b border-[#313131] mt-1 ">
            <img
              src="https://img.freepik.com/free-photo/fantastic-seascape-with-ripples_1232-424.jpg"
              alt="photo"
              className="w-20  h-14 rounded"
            />
            <p className="text-xs mt-1 mb-2 text-[#ffffff]	">@amy_ray</p>
          </div>
        </div>
        <div className="trending w-[320px]	 max-xl:hidden">
          <div>
            <div className="news_section flex justify-between rounded-xl ">
              <p className="text-xl text-white font-semibold">Trending</p>
              <button className="text-[#B68FE7] text-base	 font-medium">
                See All
              </button>
            </div>
            <div className="news_trend rounded-xl bg-newbgcolor mt-2">
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
              {/*  */}
              <div className="news_trend   pt-3 pb-3 pl-3 pr-3">
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
              <div className="news_trend   pt-3 pb-3 pl-3 pr-3">
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
    </>
  );
};

export default Home;
