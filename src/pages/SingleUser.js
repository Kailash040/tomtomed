import { useEffect,useState } from 'react'
import MainNavigation from '../components/MainNavigation'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAUserProfile } from '../app/auth/getAUserSlice'
import verifyTik from "../assets/postassets/bluetik.svg";
import postImage from "../assets/postassets/Rectangle 587.png";
import artimg from "../assets/postassets/artimage.png";
import media from "../assets/postassets/media.png";
import profileimage from '../assets/Avatar.png'
import { BiMessageAlt } from "react-icons/bi";
import { Icon } from '@iconify/react';
import imagesave from '../assets/Rectangle 599.png'
import suggestionImage from '../assets/Rectangle 600.png'
import group from '../assets/Rectangle 599 (1).png'

// 
import { likeAPost } from '../app/auth/likePostSlice'
import { deleteAPost } from '../app/auth/deletePostSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
////////////////////////////
const SingleUser = () => {
    let { _id } = useParams();
    console.log(_id);
    const user = useDispatch()
    useEffect(() => {
        user(getAUserProfile(_id))
    }, [user]);
    const userDatas = useSelector((state) => [state?.aUser?.data])
    console.log("userdatas", userDatas);
    // 
    const userFollowing = useSelector((state) => [state?.aUser?.data?.user?.followings])
    console.log("sdsdsdsd", userFollowing);
    // ///////////////////////////////////////////
    const [showPost, setShowPost] = useState(true);
    const [showArticle, setShowArticle] = useState(false);
    const [showMedia, setShowMedia] = useState(false);
    const [showFollower, setShowFollowers] = useState(false);
    const [showFollowing, setShowFollowing] = useState(false);

    const [showAction, setShowAction] = useState(false);


    const handleAction = () => {
        setShowAction(!showAction)
    }



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

   
    const dispatchDeleteUser = useDispatch();
    const handleDelete = (_id) => {
        dispatchDeleteUser(deleteAPost(_id))
        toast("Post Deleted successfully")
    }
    const dispatchLike = useDispatch();
    const handlelike = (_id) => {
        dispatchLike(likeAPost(_id))
        toast("Post like successfully")
    }
    // 


    // 
    const followings = useSelector((state) => state?.followAUser?.data?.data)
    // console.log(followings)
    const followers = useSelector((state) => state?.follows?.data?.data)
    // console.log(followers);

    // /////////////////////////////////////////////////////////////////
    return (
        <div>
            <MainNavigation />
            <div>
                <ToastContainer />
                <div className="profile_container mt-10 pl-[60px] pr-[60px] font-roboto flex gap-[50px]  max-xl:gap-0 max-xl:justify-center   max-xl:pr-0 max-xl:pl-0 3xl:w-[1400px]">
                    {/*  */}

                    {/*  */}
                    <div className="left_section w-1/5 max-xl:hidden sticky top-0">
                        <div className="sticky top-0" >


                            <div className="Premium_buutton mb-9 w-[220px] ">
                                <div class="rounded-xl	 bg-gradient-to-r from-[#4879FA]  to-[#7D4CFF] p-[1px]">
                                    <div class="flex   items-center justify-center bg-[#202020] rounded-xl h-[60px] ">
                                        <button class="text-base  	 text-[#B68FE7]">Premium</button>
                                    </div>
                                </div>
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
                                            <Icon icon="icon-park-outline:like" className="w-10 h-10 text-[#303030]	" />
                                        </div>
                                    </div>
                                    <div className="news_post bg-newbgcolor p-3 rounded-lg mt-3 mb-3 flex justify-between items-center">
                                        <div className="like_container">
                                            <p className="text-white text-base mb-[13px]">Comments</p>
                                            <p className="text-[#85C6E1] text-2xl">1.2k</p>
                                        </div>
                                        <div className="like_Ctonainer">
                                            <BiMessageAlt className="w-10 h-10 text-[#303030]	" />

                                        </div>
                                    </div>
                                    <div className="news_post bg-newbgcolor p-3 rounded-lg mt-3 mb-3 flex justify-between items-center">
                                        <div className="like_container">
                                            <p className="text-white text-base mb-[13px]">Views</p>
                                            <p className="text-[#85C6E1] text-2xl">1.2k</p>
                                        </div>
                                        <div className="like_Ctonainer">

                                            <Icon icon="grommet-icons:view" className="w-10 h-10 text-[#303030]	" />

                                        </div>
                                    </div>
                                    <div className="news_post bg-newbgcolor p-3 rounded-lg mt-3 mb-3 flex justify-between items-center">
                                        <div className="like_container">
                                            <p className="text-white text-base mb-[13px]">Share</p>
                                            <p className="text-[#85C6E1] text-2xl">1.2k</p>
                                        </div>
                                        <div className="like_Ctonainer">
                                            <Icon icon="fluent:share-ios-24-filled" className="w-10 h-10 text-[#303030]	" />
                                        </div>
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
                        </div>
                    </div>
                    <div className="right_section   w-4/5 max-xl:w-[500px] max-sm:w-[350px] ">
                        <div className="user_bio border-b-[#171717] border-b-2 ">
                            <div className="image_username flex   justify-between   ">
                                {/* Object.keys(userData.data.data) */}
                                {
                                    userDatas?.map((item) => (

                                        <div className="flex gap-10 items-center ">
                                            <div className="user_pic w-[160px] h-[160px] max-xl:w-[100px] max-xl:h-[100px] ">

                                                {
                                                    item?.profile?.image ? <img
                                                        src={item?.profile?.image}
                                                        alt="user"
                                                        className=" rounded-full w-full h-full object-cover   "
                                                    /> : <img
                                                        src={profileimage}
                                                        alt="user"
                                                        className=" rounded-full w-full h-full object-cover   "
                                                    />
                                                }

                                            </div>

                                            <div className="user_name_username">
                                                <p className="flex items-center gap-1  text-2xl font-semibold	text-white max-xl:text-lg">
                                                    {
                                                        item?.profile?.name ? <>{item?.profile?.name}</> : "name"
                                                    }
                                                    {/* {item.name}{" "} */}
                                                    <span>
                                                        {" "}
                                                        <img src={verifyTik} alt="photo" />{" "}
                                                    </span>
                                                </p>

                                                <p className="mt-2 text-lg	text-white max-xl:text-sm max-xl:mt-2  ">
                                                    {
                                                        item?.user?.username ? <>{item?.user?.username}</> : "username"
                                                    }

                                                </p>
                                                <p className="text-lg	text-white mt-2 max-xl:text-[14px] max-xl:mt-2 ">
                                                    {
                                                        item?.profile?.about ? <>{item?.profile?.about}</> : "about"
                                                    }
                                                </p>
                                            </div>

                                        </div>
                                    ))
                                }
                                <div className="edit_share_and_more list-none flex  gap-6   ">

                                    <li>
                                        <Icon icon="material-symbols-light:share-outline" className="w-6 h-6 text-white" />

                                    </li>
                                    <li>
                                        {/* Open the modal using document.getElementById('ID').showModal() method */}

                                        <button>
                                            {/* <Setting /> */}
                                            {/*  */}
                                            <Icon icon="charm:menu-kebab" className="w-6 h-6 text-white" />
                                        </button>
                                    </li>
                                </div>
                            </div>

                            <div className="mt-[30px] mb-6 max-xl:mt-[18px] max-xl:mb-[18px]">
                                <p className="bio text-lg text-white  max-xl:text-base">
                                    {" "}
                                    Connect People. Share Opinions. Make a Living.{" "}
                                </p>
                            </div>
                            <div className="Premium_buutton my-[18px] w-[220px] ">
                                <div class="rounded-xl	 bg-gradient-to-r from-[#4879FA]  to-[#7D4CFF] p-[1px]">
                                    <div class="flex   items-center justify-center bg-[#202020] rounded-xl h-[60px] ">
                                        <button class="text-base  	 text-[#B68FE7]">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container_user flex  justify-between  gap-[80px] mt-6 max-xl:mt-[8px] ">
                            <div className="user_data ">
                                <div className="user_post_follower_link flex gap-[60px]  w-[587px]  max-xl:gap-5 justify-between max-xl:w-[500px] max-sm:w-[350px] border-b-[#171717] border-b-4  pb-3 max-xl:pb-2 max-xl:border-b-2 ">

                                    <div className="user_item items-center flex flex-col">
                                        <button onClick={handleShowPost} className="flex flex-col gap-[14px] items-center" >
                                            <p className="text-base text-white">Posts</p>
                                            <p className="text-base text-[#D6B5FF]">2,031 </p>
                                        </button>
                                    </div>
                                    <div className="user_item items-center flex flex-col ">
                                        <button onClick={handleShowArticle} className="flex flex-col gap-[14px] items-center">
                                            <p className="text-base text-white">Articles</p>
                                            <p className="text-base text-[#D6B5FF]">2,031 </p>
                                        </button>
                                    </div>
                                    <div className="user_item items-center flex flex-col">
                                        <button onClick={handleShowMedia} className="flex flex-col gap-[14px] items-center" >
                                            <p className="text-base text-white">Media</p>
                                            <p className="text-base text-[#D6B5FF]">2,031 </p>
                                        </button>
                                    </div>
                                    <div className="user_item items-center flex flex-col">
                                        <button onClick={handleShowFollowers} className="flex flex-col gap-[14px] items-center" >
                                            <p className="text-base text-white">Followers</p>
                                            <p className="text-base text-[#D6B5FF]">2,031 </p>
                                        </button>
                                    </div>
                                    <div className="user_item items-center flex flex-col">
                                        <button onClick={handleShowFollowing} className="flex flex-col gap-[14px] items-center" >
                                            <p className="text-base text-white">Following</p>
                                            <p className="text-base text-[#D6B5FF]">2,031 </p>
                                        </button>
                                    </div>
                                </div>
                                <div className="post bg-black ">
                                    {showPost && (
                                        <>
                                            {
                                                userDatas?.map((item, id) => (

                                                    <div className="post_container bg-black " key={id}>
                                                        <div className="post  mt-[18px] px-[50px] pt-6 max-xl:px-6 ">


                                                            <div className="post_name_userName_pic flex justify-between items-center"  >

                                                                <div className="flex justify-between w-full">

                                                                    <div className="name_username" >
                                                                        <p className="text-[#FFFFFF] max-xl:text-sm flex items-center gap-1 font-bold	">
                                                                            {" "}
                                                                            {item?.profile?.name}
                                                                            {
                                                                                item?.profile?.name ?
                                                                                    <> {item?.user?.name}</>
                                                                                    : <>name</>
                                                                            }
                                                                            <span>
                                                                                {" "}
                                                                                <img src={verifyTik} alt="photo" />{" "}
                                                                            </span>{" "}
                                                                        </p>
                                                                        <p className="text-[#8F8F8F] max-xl:text-sm">
                                                                            {item?.profile?.username
                                                                                ? <> {item?.profile?.username}</> : "username"
                                                                            }
                                                                        </p>
                                                                    </div>

                                                                    <div className="photo flex gap-6 items-center">
                                                                        {
                                                                            item?.profile?.image ? <img
                                                                                src={item?.profile?.image}
                                                                                alt="photo"
                                                                                className="w-11 h-11  rounded-full"
                                                                            /> : <img
                                                                                src={profileimage}
                                                                                alt="user"
                                                                                className=" rounded-full w-11 h-11 object-cover   "
                                                                            />
                                                                        }


                                                                    </div>
                                                                </div>

                                                                {/*  */}

                                                                <div className="relative flex pl-6">
                                                                    <details className="dropdown">
                                                                        <summary className="">  <Icon icon="mingcute:more-2-line" className="w-5 h-6 text-white  relative bottom-[10px]
                             "  /></summary>
                                                                        <ul className="p-2  menu dropdown-content z-[1] ">
                                                                            <div className="report_block_mute absolute z-30 list-none bg-[#141414] w-[200px] flex flex-col items-center py-6 px-[31px] rounded-xl	right-2  " >


                                                                                <div className="user_div_image flex   gap-[18px] items-center">
                                                                                    {
                                                                                        item?.profile?.image ? <img src={item?.profile?.image} alt="user" className="w-[60px] h-[60px]  rounded-full" /> : <></>
                                                                                    }

                                                                                    <div className="name_username">
                                                                                        <p className="text-[#FFFFFF] max-xl:text-sm flex items-center gap-1 font-bold	">
                                                                                            {" "}
                                                                                            {
                                                                                                item?.profile?.name ? <> {item?.profile?.name}</> : <>name</>
                                                                                            }
                                                                                            {" "}

                                                                                        </p>
                                                                                        <p className="text-[#8F8F8F] max-xl:text-sm">{item?.user?.username}</p>
                                                                                    </div>
                                                                                </div>

                                                                                <div className="option_div mt-10 flex flex-col gap-6">

                                                                                    <div className="flex gap-[18px]">
                                                                                        {/* <Icon icon="solar:pin-outline" /> */}
                                                                                        <Icon icon="solar:pin-outline" className="w-6 h-6 text-white" />
                                                                                        <li className="text-lg text-white">Pin</li>
                                                                                    </div>
                                                                                    <div className="flex gap-[18px]">
                                                                                        <Icon icon="clarity:eye-hide-line" className="w-6 h-6 text-white" />
                                                                                        <li className="text-lg text-white">Hide</li>
                                                                                    </div>
                                                                                    <button className="flex gap-[18px]" onClick={() => handleDelete(item?.post?._id)}>
                                                                                        <Icon icon="fluent:delete-24-regular" className="w-6 h-6 text-[#FB6363]" />
                                                                                        <li className="text-lg text-[#FB6363]">Delete</li>
                                                                                    </button>
                                                                                </div>

                                                                            </div>
                                                                        </ul>
                                                                    </details>

                                                                    {/*  */}





                                                                </div>
                                                            </div>




                                                            <div >



                                                                <div className="post">
                                                                    <p className="description  text-[#FFFFFF] font-normal mt-2 mb-2 max-xl:text-sm">
                                                                        {" "}
                                                                        {item?.post?.description}
                                                                        {/* I wish I loved anything as much as my cat loves catnip
                          :p */}
                                                                    </p>
                                                                    <p className="text-[#B39DCF] mb-2 max-xl:text-sm">
                                                                        #cats #lovecats #adorable{" "}
                                                                    </p>
                                                                </div>
                                                                <div className="main_image max-lg:flex max-xl:justify-center">
                                                                    {
                                                                        item?.post?.image ? <img
                                                                            src={item?.post?.image}
                                                                            alt="photo"
                                                                            className="w-[520px] h-[554px] max-xl:w-96 max-xl:max-h-80"
                                                                        /> :
                                                                            <img
                                                                                src={postImage}
                                                                                alt="photo"
                                                                                className="w-[520px] h-[554px] max-xl:w-96 max-xl:max-h-80"
                                                                            />
                                                                    }
                                                                    {/* postImage */}
                                                                </div>
                                                                <div className="post_status flex  justify-between  mt-4">
                                                                    <div className="post_status flex gap-4">
                                                                        <div className="like_status flex  gap-1 items-center">
                                                                            <BiMessageAlt className="w-6 h-6 text-white	" />
                                                                            {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                                                                            <p className="text-[#8F8F8F] text-sm font-medium">{item?.post?.comments?.length}</p>
                                                                        </div>
                                                                        <div className="like_status  flex  gap-1 items-center">
                                                                            {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                                                                            <button onClick={() => handlelike(item?.post?._id)}>

                                                                                {
                                                                                    item?.post?.likes?.length === 0 ? <>  <Icon icon="icon-park-outline:like" className="w-6 h-6 text-white	" /></> : <><Icon icon="ph:heart-fill" className="w-6 h-6 text-[red]	" /></>
                                                                                }

                                                                            </button>
                                                                            <p className="text-[#8F8F8F] text-sm font-medium">
                                                                                {item?.post?.likes?.length}
                                                                            </p>
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
                                                                    <div className="post_status flex flex-col  items-center gap-3">
                                                                        <Icon icon="solar:bookmark-outline" className="w-6 h-6 text-white" />
                                                                    </div>
                                                                </div>
                                                                <p className="text-[#8F8F8F]  mt-[13px] ">
                                                                    29 mins ago
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </>
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
                                        <div className="followers_grid_layout flex justify-between mt-3 mb-3">
                                            <div className="followers_grid flex gap-3 items-center">
                                                <Icon icon="ri:grid-fill" className="w-[30px] h-[30px] text-[#6D9AAD]" />
                                                <p className="text-sm text-[#6D9AAD]"> 1</p>
                                            </div>
                                            <div className="followers_grid flex gap-3 items-center">
                                                <Icon icon="lets-icons:video-light" className="w-[22.5px] h-[22.5px] text-[#6D9AAD]" />
                                                <p className="text-sm text-[#6D9AAD]"> 0</p>
                                            </div>
                                            <div className="followers_grid flex gap-3 items-center">
                                                <Icon icon="solar:gallery-bold" className="w-[22.5px] h-[22.5px] text-[#6D9AAD]" />
                                                <p className="text-sm text-[#6D9AAD]"> 1</p>
                                            </div>
                                        </div>
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
                                            <Icon icon="iconamoon:search-light" className="absolute left-[92%]  bottom-[15px] w-[18px] h-[18px] text-white " />

                                        </div>
                                        {
                                            followers?.map((data, id) => (

                                                <div className="followers_item flex justify-between items-center bg-[#F5F5F5] px-[18px] py-[10px] rounded-xl mt-[18px]" key={id}>
                                                    <div className="child flex gap-[18px] items-center ">
                                                        <div className="followers_child">
                                                            {" "}
                                                            <img
                                                                src={data.image}
                                                                alt="user"
                                                                className="w-[60px] h-[60px] rounded-full"
                                                            />
                                                        </div>
                                                        <div className="followers_child">
                                                            <p className="text-[#2A2A2A] flex">
                                                                {" "}
                                                                {data?.name}<img src={verifyTik} alt="verify" />
                                                            </p>
                                                            <p className="text-sm text-[#8F8F8F]">{data?.username}</p>
                                                        </div>
                                                    </div>
                                                    <div className="child">
                                                        <div className="followers_child flex gap-[18px] items-center relative">

                                                            <button onClick={handleAction}>

                                                                <Icon icon="iconamoon:menu-kebab-horizontal-bold" className="text-[#2A2A2A] w-[20px] " />
                                                            </button>
                                                            {
                                                                showAction && <div className="absolute flex flex-col top-5 right-0 bg-[#202020] py-6 px-[18px] gap-[27px] rounded-xl	">
                                                                    <button className="text-base font-semibold text-white	">UnFollow</button>
                                                                    <button className="font-medium text-[#FB6363]">Block</button>
                                                                </div>
                                                            }
                                                        </div>
                                                        {/* <div className="followers_child"></div> */}
                                                    </div>
                                                </div>
                                            ))
                                        }

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
                                            <Icon icon="iconamoon:search-light" className="absolute left-[92%]  bottom-[15px] w-[18px] h-[18px] text-white " />

                                        </div>
                                        {
                                            userFollowing?.map((item, id) => (

                                                <div className="followers_item flex justify-between items-center bg-[#F5F5F5] px-[18px] py-[10px] rounded-xl mt-[18px]" key={id}>
                                                    <div className="child flex gap-[18px] items-center ">
                                                        <div className="followers_child">
                                                            {" "}
                                                            <img
                                                                src={item?.image}
                                                                alt="user"
                                                                className="w-[60px] h-[60px] rounded-full"
                                                            />
                                                        </div>
                                                        <div className="followers_child">
                                                            <p className="text-[#2A2A2A] flex">
                                                                {" "}
                                                                Amy Johnson <img src={verifyTik} alt="verify" />
                                                            </p>
                                                            <p className="text-sm text-[#8F8F8F]">{item?.username}</p>
                                                        </div>
                                                    </div>
                                                    <div className="child">
                                                        <div className="followers_child flex gap-[18px] items-center">
                                                            <button className="text-[#7D4CFF]">Unfollow</button>
                                                            <Icon icon="iconamoon:menu-kebab-horizontal-bold" className="text-[#2A2A2A] w-[20px] " />
                                                        </div>

                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                )}
                            </div>
                            <div className="trending_suggestion max-xl:hidden sticky top-0">
                                <div className="sticky top-0">


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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleUser