import { useState, useRef, useEffect, useCallback } from "react";
import Cropper from "react-easy-crop";
import { NavLink } from "react-router-dom";
import Ads from "../assets/postassets/Ads.png";
import userimage from "../assets/postassets/userImage.webp"
import crop from '../assets/navDropDown/humbleicons_crop.png'
import brithness from '../assets/navDropDown/Vector (1).png'
import back from '../assets/navDropDown/Vector (2).png'
import rectangle1 from '../assets/navDropDown/Rectangle 23977.png'
import rectangle2 from '../assets/navDropDown/Rectangle 23978.png'
import rectangle3 from '../assets/navDropDown/Rectangle 23979.png'
import smile from '../assets/ph_smiley.png'
import articleImg from '../assets/article.png';
import thought from '../assets/Vector (4).png'
import { Icon } from '@iconify/react';
import profileImage from '../assets/Avatar.png'
const MainNavigation = () => {
  // 

  // 
  const [handleShowToggle, setHandleShowToggle] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [showArticlePage, setArticlePage] = useState(false)
  const [showThoughtPage, setShowThoughtPage] = useState(false)

  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [base64Image, setBase64Image] = useState(null);
  const [filterImage, setFilter] = useState(null);
  const [showEditOption, setShowEditOptions] = useState(false)
  const [showBrithnessPage, setShowBrithnessPage] = useState(false)
  const [showCropPage, setShowCropPage] = useState(false)
  const [brightness, setBrightness] = useState();
  const [savePost, setSavePost] = useState(false);

  const handleShow = () => {
    setHandleShowToggle(!handleShowToggle)
  }
  // 
  const handleShowThought = () => {
    setShowThoughtPage(true)
    setHandleShowToggle(false)
    setAddPost(false)
    setArticlePage(false);

  }
  const handleShowArticle = () => {
    setArticlePage(true);
    setHandleShowToggle(false)
    setAddPost(false)
    setShowThoughtPage(false)
  }
  // 
  // const handleShowPhotoSection = () => {
  //   setAddPost(!addPost);
  //   setHandleShowToggle(false)
  //   setArticlePage(false)
  //   setShowThoughtPage(false)

  // }
  const handleImageChange = (e) => {
    // setBrightness(e.target.value);
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        // setSelectedImage(file);
        setBase64Image(reader.result); // Base64-encoded image data
      };

      reader.readAsDataURL(file);
      setAddPost(true)
      setHandleShowToggle(false)
      setArticlePage(false)
      setShowThoughtPage(false)
    }
  };
  const showEditOptionMenu = () => {
    setShowEditOptions(true)
  }
  // 
  const handleChangeBrightness = (e) => {
    setBrightness(e.target.value);
  };
  // 
  const handleBrithnessPage = () => {
    setShowBrithnessPage(true)
  }
  const style = {
    filter: `brightness(${brightness}%)`, // apply brightness filter
  };
  const handlePrevious = () => {
    setShowBrithnessPage(false)
  }
  const handleShowCropPage = () => {
    setShowCropPage(true)
  }
  const handlePreviousFirst = () => {
    setShowCropPage(false)
  }
  const handleSavePost = () => {
    setSavePost(true)
  }
  console.log(savePost);
  const handleShowHomePage = () => {
    setArticlePage(false);
    setShowThoughtPage(false)
  }
  return (<div className="font-roboto ">
    <div class="  flex items-center justify-between   pl-[60px] pr-[60px] pt-[40px] max-xl:px-3  max-xl:pt-2 font-roboto w-full max-xl:gap-0 max-xl:justify-between  "  >
      <div className="tomtomad w-1/5
 ">
        <NavLink to="/">
          <h1 className=" text-tom font-roboto font-semibold text-3xl	 max-xl:text-2xl ">
            TOM<span class="text-tomad ">TOMED</span>
          </h1>
        </NavLink>
      </div>
      <div className="nav_container bg-[#101010] flex w-4/5  justify-end rounded-lg max-xl:bg-[#101010] ml-[40px] max-xl:ml-[0px] font-semibold max-xl:w-[100px]">
        <div className="list-none flex justify-evenly  gap-[45px]  p-2 rounded-lg max-xl:gap-4 w-full">
          <div className="mobile_desktop_view flex gap-[45px] items-center  max-xl:fixed  max-xl:bottom-0  max-xl:left-0  max-xl:w-full  max-xl:flex  max-xl:justify-center  max-xl:bg-[#101010]  max-xl:pb-2 max-xl:pt-2  max-xl:gap-8 max-xl:rounded-none  max-xl:items-baseline">
            <div className="navlink_list flex items-center flex-col ">
              <NavLink to="/">
                {({ isActive }) => (
                  (
                    <div className="flex flex-col items-center" >
                      <div className={isActive ? "rounded-full bg-grey p-5  pt-[18px] max-xl:p-[11px] " : "rounded-full bg-grey p-[11px]  "}>
                        {isActive ? <Icon icon="material-symbols-light:home" height="22px" width="20px" className={isActive ? "text-white " : "text-white h-5 w-5 "} /> : <Icon icon="majesticons:home-line" className="text-white h-5 w-5" />}

                      </div>
                      <span className={isActive ? "text-white text-base max-xl:hidden mt-1" : "text-white text-sm max-xl:hidden mt-1"}>Home</span>
                    </div>
                  )
                )}
              </NavLink>
            </div>
            <div className="navlink_list flex items-center flex-col">


              <li className="rounded-full bg-grey p-[11px]">
                {" "}
                <Icon icon="lucide:play-square" className="text-white h-[18px] w-[18px]" />
              </li>

              <p className="text-sm	 text-[#ffffff]	mt-1 max-xl:hidden">Videos</p>
            </div>

            <button className="" >

              <div className="navlink_list flex items-center flex-col">


                <div class=" flex flex-col">

                  <div class=" inline-block relative">
                    <button class="  font-semibold  rounded inline-flex items-center " onClick={handleShow}>
                      <div className="flex_item flex flex-col items-center">

                        <li className="rounded-full bg-grey p-2 ">
                          {" "}
                          <Icon icon="formkit:add" className="h-[21px] w-[21px]  text-[#ffffff]" />
                        </li>

                        <span className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden	">Add post</span>
                      </div>

                    </button>

                    {
                      handleShowToggle &&

                      <div class=" absolute z-20  text-gray-700 pt-1 mt-5  flex items-center flex-col  right-[-125%]   max-xl:bottom-[43px] max-xl:flex-col-reverse max-xl:left-[-130%]   " >
                        <div class="triangle triangle-4"></div>


                        <div className="dropdownitem bg-white flex flex-col  max-sm:align-baseline rounded-3xl px-9 py-5 gap-[30px] w-[200px] max-xl:w-[409px] max-xl:flex-row max-xl:gap-[28px] max-xl:py-3  max-xl:px-3 items-baseline " >
                          <button >

                            <div className="dropdown flex justify-center  max-xl:gap-2 max-xl:flex-col items-center">
                              <label htmlFor="files" className="flex gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                                <Icon icon="solar:gallery-round-bold" className="w-[22px] h-[22px]" />


                                <input
                                  type="file"
                                  accept="image/*"
                                  style={{ "visibility": "hidden", "position": "absolute" }}
                                  id="files"
                                  onChange={handleImageChange}
                                  key={fileInputKey}
                                /> <p className="max-xl:text-sm">Photo</p>

                              </label>
                            </div>
                          </button>
                          <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                            <Icon icon="lets-icons:video-fill" className="w-[30px] h-[30px]" />

                            <p className="max-xl:text-sm">Video</p>
                          </div>
                          <button onClick={handleShowThought}>

                            <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                              <Icon icon="mingcute:thought-fill" className="w-[22px] h-[22px]" />
                              <p className="max-xl:text-sm">Thought</p>
                            </div>
                          </button>
                          <button onClick={handleShowArticle} >

                            <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                              <Icon icon="majesticons:article" className="w-[22px] h-[22px]" />
                              <p className="max-xl:text-sm">Article</p>
                            </div>
                          </button>
                          <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                            <Icon icon="bxs:file-gif" className="w-[30px] h-[30px]" />
                            <p className="max-xl:text-sm">GIFs</p>
                          </div>
                          <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                            <Icon icon="fluent:live-20-filled" className="w-[30px] h-[30px]" />
                            <p className="max-xl:text-sm">Go Live</p>
                          </div>

                        </div>

                      </div>
                    }
                  </div>

                </div>
              </div>
            </button>

{/*  */}
{
              showArticlePage && <div className="z-10  absolute right-0 left-[25%] top-[24%]  max-xl:top-[-515%] pr-[60px] text-white mx-xl:absolute">
                <div className="article_container bg-[#1B1C1B]  max-sm:bg-black rounded-xl mt-10 max-xl:w-96 max-xl:fixed max-sm:w-full max-sm:h-full max-sm:right-0	 max-sm:bottom-0 ">
                  <div className="back_container hidden items-center  max-sm:flex gap-6 px-6 mb-2 mt-4">
                    <button onClick={handleShowHomePage}>

                      <li className="bg-[#1B1C1B] p-1 rounded-xl"><Icon icon="eva:arrow-back-fill" className="w-5 h-5" /></li>
                    </button>
                    <p className="max-sm:block hidden font-medium ">Post an Article</p>
                  </div>
                  <div className="article flex gap-3 bg-[#161414] px-[30px] py-[32px] rounded-xl max-xl:px-[15px] max-sm:pt-6 max-sm:pb-2 max-sm:justify-between	 max-sm:bg-black  items-center max-xl:py-[12px]">
                    <div className="mobile_view flex gap-2 px-4">

                      <p className="max-sm:block hidden font-medium ">What you thinking about?</p>
                      <p className="max-sm:hidden ">Post an Article</p>

                      <img src={articleImg} alt="article" className="w-5 h-5" />
                    </div>
                    <li className="bg-[#1B1C1B] p-2 rounded-full hidden max-sm:block">

                      <Icon icon="solar:gallery-round-bold" className="w-5 h-5" />
                    </li>

                  </div>
                  <div className=" article p-6  mt-6 max-xl:mt-2 max-sm:mt-0  max-xl:p-2">
                    <textarea name="" id="" className="w-full h-[350px] max-xl:h-[200px]  bg-black rounded-xl p-6 max-sm:bg-[#161414] max-sm:font-normal " placeholder="Write an Article here..." ></textarea>
                  </div>
                  <div className="article_button flex justify-between p-6 items-center max-xl:p-2">
                    <li className="bg-black p-2 rounded-full max-sm:hidden">

                      <Icon icon="solar:gallery-round-bold" className="w-5 h-5" />
                    </li>
                    <button className="signUp text-white text-lg px-[110px] py-[20px] rounded-xl max-xl:px-[55px] max-xl:py-[10px]	max-sm:w-full max-sm:text-sm  max-sm:font-medium	" >Post Article</button>
                  </div>
                </div>
              </div>
            }
            {
              showThoughtPage && <div className=" z-10  absolute right-0 left-[25%] top-[24%]  max-xl:top-[-515%] pr-[60px] text-white mx-xl:absolute">
                <div className="article_container bg-[#1B1C1B]  max-sm:bg-black rounded-xl mt-10 max-xl:w-96 max-xl:fixed max-sm:w-full max-sm:h-full max-sm:right-0	 max-sm:bottom-0 ">
                  <div className="back_container hidden items-center  max-sm:flex gap-6 px-6 mb-2 mt-4">
                    <button onClick={handleShowHomePage}>

                      <li className="bg-[#1B1C1B] p-1 rounded-xl"><Icon icon="eva:arrow-back-fill" className="w-5 h-5" /></li>
                    </button>
                    <p className="max-sm:block hidden font-medium ">Post a Thought</p>
                  </div>
                  <div className="article flex gap-3 bg-[#161414] px-[30px] py-[32px] rounded-xl max-xl:px-[15px] max-sm:pt-6 max-sm:pb-2 max-sm:justify-between	 max-sm:bg-black  items-center max-xl:py-[12px]">
                    <div className="mobile_view flex gap-2 px-4">

                      <p className="max-sm:block hidden font-medium ">What you thinking about?</p>
                      <p className="max-sm:hidden ">Post a Thought</p>

                      <img src={thought} alt="article" className="w-5 h-5" />
                    </div>


                  </div>
                  <div className=" article p-6  mt-6 max-xl:mt-2 max-sm:mt-0  max-xl:p-2">
                    <textarea name="" id="" className="w-full h-[350px] max-xl:h-[200px]  bg-black rounded-xl p-6 max-sm:bg-[#161414] max-sm:font-normal " placeholder="Write your Thoughts here..." ></textarea>
                  </div>
                  <div className="article_button flex justify-between p-6 items-center max-xl:p-2">
                    <li className="bg-black p-2 rounded-full max-sm:hidden">

                      <Icon icon="solar:gallery-round-bold" className="w-5 h-5" />
                    </li>
                    <button className="signUp text-white text-lg px-[110px] py-[20px] rounded-xl max-xl:px-[55px] max-xl:py-[10px]	max-sm:w-full max-sm:text-sm  max-sm:font-medium	" >Post Thought</button>
                  </div>
                </div>
              </div>
            }
{/*  */}
         
            <div className="navlink_list flex items-center flex-col">
              <NavLink to="/message">
                {({ isActive }) => (
                  (
                    <div className="flex flex-col items-center" >
                      <div className={isActive ? "rounded-full bg-grey p-[14px]  max-xl:p-[9.5px] " : "rounded-full bg-grey p-[9.5px]"}>
                        {isActive ? <Icon icon="ant-design:message-filled" className="text-white h-[32px] w-[32px]      max-xl:h-[21px] max-xl:w-[21px] " /> : <Icon icon="ant-design:message-outlined" className="text-white h-[21px] w-[21px]" />}

                      </div>
                      <span className={isActive ? "text-white text-base max-xl:hidden mt-1" : "text-white text-sm max-xl:hidden mt-1"}>Messages</span>
                    </div>
                  )
                )}
              </NavLink>

            </div>
            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className="rounded-full bg-grey p-2 ">
                {" "}
                <Icon icon="ph:shopping-cart-bold" className="h-5 w-5 text-white " />

              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">E-Commerce</p>
            </div>
            <div className="navlink_list  items-center flex-col hidden max-xl:flex">

              <NavLink to="/user">
                {({ isActive }) => (
                  (
                    <li className="rounded-full bg-grey p-2" >

                      {isActive ? <Icon icon="typcn:user" className="h-5 w-5 text-white " /> : <Icon icon="mingcute:user-3-line" className="h-5 w-5 text-white " />}



                    </li>
                  )
                )}
              </NavLink>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Profile
              </p>
            </div>
          </div>
          <div className="desktop_view flex gap-[45px]  items-center max-xl:gap-[10px] ">
            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className="rounded-full bg-grey px-[9px] py-[15px] flex items-center max-xl:hidden">
                {" "}
                <img src={Ads} alt="ads" className="h-[10px] w-[22px] " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">Ads</p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2 max-xl:p-2">
                {" "}
                <Icon icon="iconamoon:search-light" className="h-5 w-5 text-white " />
              </li>

              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Search
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <Icon icon="basil:notification-outline" className="h-5 w-5 text-white " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Notifications
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col  max-xl:hidden">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <Icon icon="ant-design:setting-outlined" className="h-5 w-5 text-white " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Settings
              </p>
            </div>
            <NavLink to="/user">
              {({ isActive }) => (
                (
                  <div className="flex flex-col items-center max-xl:hidden" >
                    <div>

                      <img src={profileImage} alt="message" className={isActive ? "h-[60px] w-[60px] rounded-full" : "text-white h-[40px] w-[40px]  rounded-full"} />
                    </div>
                    <span className={isActive ? "text-white text-base mt-1" : "text-white text-sm mt-1"}>Das</span>
                  </div>
                )
              )}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    {
              addPost && < div className=" absolute  font-roboto z-10 top-[75%] left-[52%] translate-x-[-40%]  translate-y-[-50%] max-xl:top-[90%]  max-xl:left-[45%]  max-lg:left-[40%]  max-sm:fixed max-sm:w-[100%] max-sm:h-[100%] max-sm:right-0	 max-sm:bottom-0  max-sm:top-[50%]  max-sm:bg-black max-sm:translate-x-[-40%]   max-sm:translate-y-[-50%] max-sm:overflow-y-scroll">
                <div className="main_section w-[100%] flex justify-end gap-[30px] max-xl:gap-7 max-xl:items-start max-xl:justify-center   max-xl:mt-6  max-[820px]:gap-1 items-start max-md:flex-col max-md:black    max-sm:bg-black max-sm:items-center  ">
                  <div className="left_section w-[520px] h-[552px] max-xl:w-[400px]
                          max-xl:h-[350px] max-md:w-[345px] max-md:h-[200px] max-sm:w-[382px] max-sm:h-[306px] ">






                     <div className="exit list-none  hidden max-sm:flex mb-2 mt-6 gap-4"> 
                     <button className="p-1 bg-grey rounded-full" onClick={()=> setAddPost(false)} ><Icon icon="eva:arrow-back-fill" className="w-4 h-[14px] text-white " /></button>
                     {showEditOption === true  ? <p className="exitbutton text-white text-base ">Edit Post</p> : showBrithnessPage === true ? <p className="exitbutton text-white text-base ">Edit Post</p> : <p className="exitbutton text-white text-base ">New Post</p>  }
                     </div>
                    {base64Image ? (
                      <img

                        className={`image ${filterImage === 'juno' ? 'juno-filter' : filterImage === "lark" ? 'lark-filter' : filterImage === "slumber" ? "slumber-filter" : ""} rounded-xl filter  object-cover	   w-full h-full `}
                        id="files"
                        src={base64Image}
                        alt="Selected"
                        style={style}
                      />
                    ) : (
                      ""
                    )}

                  </div>
                  {
                    base64Image ?
                      <div className="right_section w-[470px]   h-[554px] max-xl:w-[350px] max-sm:mt-20 max-sm:flex max-sm:flex-col max-sm:justify-between ">


                        {
                          showEditOption ?
                            <div className="filter_option flex flex-col items-center bg-[#1B1C1B] h-[554px] rounded-xl	 border-2 border-[#8F8F8F] max-xl:h-[410px] max-sm:border-0 max-sm:bg-black ">
                              <div className="filter_para mb-[18px]  w-[98%]">
                                <div className="para_container flex items-center justify-start gap-5 px-3">

                                  {showBrithnessPage ?
                                    <div>

                                      <button onClick={handlePrevious}> <Icon icon="eva:arrow-back-fill" className="w-6 h-6 text-white  " /> </button>  </div> : showCropPage ? <div >

                                        <button onClick={handlePreviousFirst}>   <Icon icon="eva:arrow-back-fill" className="w-6 h-6 text-white  " /> </button>  </div> : ""}

                                  <div className="flex items-center justify-center grow gap-5">
                                    {showBrithnessPage ? <img src={brithness} alt="" className="w-7 h-7 p" /> : showCropPage ? <img src={crop} alt="" className="w-7 h-7 p" /> : savePost === true ? "" : ""}

                                    {showBrithnessPage ? <p className="text-lg text-white text-center mt-[27px] mb-[18px] max-md:mb-2 max-md:mt-2 max-xl:mb-2 max-xl:mt-2">Brightness</p> : showCropPage ? <p className="text-lg text-white text-center mt-[27px] mb-[18px] max-md:mb-2 max-md:mt-2 max-xl:mb-2 max-xl:mt-2 ">Crop</p> : savePost === true ? "" : showEditOption === true ? <p className="text-lg text-white text-center mt-[27px] mb-[18px] max-md:mb-2 max-md:mt-2 max-xl:mb-2 max-xl:mt-2  max-sm:hidden">Edit</p> : ""}
                                  </div>
                                </div>
                                {showBrithnessPage ? <>
                                  <div className="flex items-center px-3">
                                    <input type="range" name="brithness" min="0" max="200" onChange={handleChangeBrightness} value={brightness} class="w-full h-2 bg-blue-100 appearance-none" />
                                  </div>
                                </> : showCropPage ? <div className="flex gap-10 justify-center ">
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                      <img src={rectangle1} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm ">Original</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container px-10 py-[35px] bg-[#000000] max-xl:p-4">
                                      <img src={rectangle2} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">4:5</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container px-10 py-[44px] bg-[#000000] max-xl:p-7  ">
                                      <img src={rectangle3} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">16:9</p>
                                  </div>
                                </div> : savePost ? <div className="px-6">
                                  <div className="user_details flex justify-between items-center mt-2">
                                    <div className="user_name_image_username flex gap-3">
                                      <div className="img"> <img src={userimage} alt="user" className="w-[54px] h-[54px]  rounded-full" /></div>
                                      <div className="name">
                                        <p className="text-lg text-white">Das</p>
                                        <p className="text-base text-[#8F8F8F] ">@das_007</p>
                                      </div>
                                    </div>
                                    <div className="emoji">
                                      <img src={smile} alt="" />
                                    </div>
                                  </div>
                                  <div className="input_section mt-4">
                                    <textarea type="text" className=" bg-[#000000] text-[#8F8F8F] h-80 pl-5 pt-5 pr-5 w-full rounded-xl" placeholder="Write a caption here..." />
                                  </div>
                                </div> : <div className="crop_brithness_container flex flex-wrap gap-6  justify-center">
                                  <button onClick={handleShowCropPage}>

                                    <div className="item flex items-center flex-col">
                                      <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                        <img src={crop} alt="" />
                                      </div>
                                      <p className="text-[#F5F5F5] text-sm">Crop</p>
                                    </div>
                                  </button>
                                  <button onClick={handleBrithnessPage}>
                                    <div className="item flex items-center flex-col">
                                      <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                        <img src={brithness} alt="" className="w-10 h-10" />
                                      </div>
                                      <p className="text-[#F5F5F5] text-sm">Brightness</p>
                                    </div>
                                  </button>
                                  <button >

                                    <div className="item flex items-center flex-col">
                                      <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                        <img src={crop} alt="" />
                                      </div>
                                      <p className="text-[#F5F5F5] text-sm">Crop</p>
                                    </div>
                                  </button>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col ">
                                    <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col ">
                                    <div className="img_container p-10 bg-[#000000] max-xl:p-5">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                </div>}

                              </div>

                            </div> : <div className="filer_container flex flex-col items-center bg-[#1B1C1B] pb-7 pt-4 rounded-xl  border-2 border-[#8F8F8F] max-xl:pt-2 max-xl:pb-2 	max-sm:bg-black max-sm:border-0 max-sm:items-start ">
                              <div className="filter_para mb-[18px] max-xl:mb-2">
                                <p className="text-lg text-white max-md:text-base ">Filters</p>
                              </div>
                              <div className="filter_photo flex flex-wrap gap-4 justify-center max-sm:justify-start max-sm:gap-2 ">
                                <button onClick={() => setFilter('')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20  max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px] max-xl:mt-1"> Original</p>
                                </button>
                                <button onClick={() => setFilter('lark')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20 max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px] max-xl:mt-1"> lark</p>
                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20 max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px] max-xl:mt-1"> Juno</p>


                                </button>

                                <button onClick={() => setFilter('slumber')} className="text-[#8F8F8F] text-sm  ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20 max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px] max-xl:mt-1"> slumber</p>


                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm  ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20 max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px] max-xl:mt-1"> Juno</p>
                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm   ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20 max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px] max-xl:mt-1"> Original</p>


                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20 max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px] max-xl:mt-1"> Juno</p>


                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm   ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20 max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px]  max-xl:mt-1"> Juno</p>


                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm  ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter max-xl:w-20 max-xl:h-20 max-sm:w-[110px] max-sm:h-[110px] "
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  <p className="mt-[10px] max-xl:mt-1"> Juno</p>
                                </button>
                              </div>

                            </div>
                        }
                        {
                          showBrithnessPage === true ?
                            <button className="signUp   text-lg text-white w-full h-[60px] rounded-xl mt-4  max-xl:h-[40px] max-xl:text-base max-xl:mt-2 " >Save changes</button> : showCropPage === true ? <button className="signUp  text-lg text-white w-full max-xl:h-[40px] max-xl:text-base max-xl:mt-2 h-[60px] rounded-xl mt-4  " >Save changes</button> : showEditOption === true ? <button className="signUp max-xl:h-[40px] max-xl:text-base max-xl:mt-2 text-lg text-white w-full h-[60px] rounded-xl mt-4 " onClick={handleSavePost} >Post</button> : <button className="signUp  text-lg max-xl:h-[40px] max-xl:text-base max-xl:mt-2 text-white w-full h-[60px] rounded-xl mt-4  " onClick={showEditOptionMenu} >Next</button>
                        }
                      </div> : ""
                  }
                </div>
              </ div>
            
            }

           
  </div>
  );
};

export default MainNavigation;
