import { useState } from "react";
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
import rectangle from '../assets/Rectangle 23990.png'
const Notification = () => {
    const [showComment, setShowComment] = useState(false)
    // 
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
                        <div className='comment_section'>
                            <div className="top_section pb-3   px-[30px]  border-x-2 border-[#171717]">
                                <div className="button flex items-center gap-[18px] ">

                                    <p className='font-semibold	text-white' >Notifications

                                    </p>
                                </div>
                            </div>
                            <div className="comment_list">


                                <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
                                    <p className="text-lg text-white font-semibold	" >New</p>
                                    <div className="comment_item mt-6">
                                        <div className="details_user flex justify-between  w-[540px]">
                                            <div className="name flex gap-3">
                                                <div className="user_img">
                                                    <img src={rectangle} alt="user" className="w-10 h-10" />
                                                </div>
                                                <div className="dp_img">

                                                <p className="name font-bold text-white text-base	">Richa Singh     <span  className="font-normal	" >liked your post</span></p>
                                                <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
                                                </div>
                                            </div>
                                            <div className="dp">
                                                <img src={userImage} alt="user" className='w-[38px] h-[38px]' />
                                            </div>
                                        </div>

                                        {/* show comment */}

                                    </div>

                                </div>
                                <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
                                    
                                    <div className="comment_item ">
                                        <div className="details_user flex justify-between  w-[540px]">
                                            <div className="name flex gap-3">
                                                <div className="user_img">
                                                    <img src={rectangle} alt="user" className="w-10 h-10" />
                                                </div>
                                                <div className="dp_img">

                                                <p className="name font-bold text-white text-base	">Richa Singh     <span  className="font-normal	" >liked your post</span></p>
                                                <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
                                                </div>
                                            </div>
                                            <div className="dp">
                                                <img src={userImage} alt="user" className='w-[38px] h-[38px]' />
                                            </div>
                                        </div>

                                        {/* show comment */}

                                    </div>

                                </div>
                                <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
                                    
                                    <div className="comment_item ">
                                        <div className="details_user flex justify-between  w-[540px]">
                                            <div className="name flex gap-3">
                                                <div className="user_img">
                                                    <img src={rectangle} alt="user" className="w-10 h-10" />
                                                </div>
                                                <div className="dp_img">

                                                <p className="name font-bold text-white text-base	">Richa Singh     <span  className="font-normal	" >liked your post</span></p>
                                                <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
                                                </div>
                                            </div>
                                            <div className="dp">
                                                <img src={userImage} alt="user" className='w-[38px] h-[38px]' />
                                            </div>
                                        </div>

                                        {/* show comment */}

                                    </div>

                                </div>
                                <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
                                    
                                    <div className="comment_item ">
                                        <div className="details_user flex justify-between  w-[540px]">
                                            <div className="name flex gap-3">
                                                <div className="user_img">
                                                    <img src={rectangle} alt="user" className="w-10 h-10" />
                                                </div>
                                                <div className="dp_img">

                                                <p className="name font-bold text-white text-base	">Richa Singh     <span  className="font-normal	" >liked your post</span></p>
                                                <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
                                                </div>
                                            </div>
                                            <div className="dp">
                                                <img src={userImage} alt="user" className='w-[38px] h-[38px]' />
                                            </div>
                                        </div>

                                        {/* show comment */}

                                    </div>

                                </div>
                                <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
                                    
                                    <div className="comment_item ">
                                        <div className="details_user flex justify-between  w-[540px]">
                                            <div className="name flex gap-3">
                                                <div className="user_img">
                                                    <img src={rectangle} alt="user" className="w-10 h-10" />
                                                </div>
                                                <div className="dp_img">

                                                <p className="name font-bold text-white text-base	">Richa Singh     <span  className="font-normal	" >liked your post</span></p>
                                                <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
                                                </div>
                                            </div>
                                            <div className="dp">
                                                <img src={userImage} alt="user" className='w-[38px] h-[38px]' />
                                            </div>
                                        </div>

                                        {/* show comment */}

                                    </div>

                                </div>
                                <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
                                    
                                    <div className="comment_item ">
                                        <div className="details_user flex justify-between  w-[540px]">
                                            <div className="name flex gap-3">
                                                <div className="user_img">
                                                    <img src={rectangle} alt="user" className="w-10 h-10" />
                                                </div>
                                                <div className="dp_img">

                                                <p className="name font-bold text-white text-base	">Richa Singh     <span  className="font-normal	" >liked your post</span></p>
                                                <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
                                                </div>
                                            </div>
                                            <div className="dp">
                                                <img src={userImage} alt="user" className='w-[38px] h-[38px]' />
                                            </div>
                                        </div>

                                        {/* show comment */}

                                    </div>

                                </div>
                            </div>

                        </div>

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

export default Notification;
