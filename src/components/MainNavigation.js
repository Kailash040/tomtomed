import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import homeVector from "../assets/homeVector.png";
import mediaVector from "../assets/mediaVector.png";
import formAddVector from "../assets/formAddVector.png";
import messageVector from "../assets/messageVector.png";
import userVector from "../assets/userVector.png";
import shoppingCart from "../assets/ph_shopping-cart.png";
import search from "../assets/ep_search.png";
import notification from "../assets/basil_notification-outline.png";
import setting from "../assets/solar_settings-outline.png";
import Ads from "../assets/postassets/Ads.png";
import userimage from "../assets/postassets/userImage.webp"
import photo from '../assets/navDropDown/Vector.png'
import video from '../assets/navDropDown/bxs_file-gif.png'
import thoughts from '../assets/navDropDown/fluent_live-24-regular.png'
import article from '../assets/navDropDown/lets-icons_video-light.png'
import gifs from '../assets/navDropDown/mingcute_thought-fill (1).png'
import golive from '../assets/navDropDown/mingcute_thought-fill.png'
import uploadImage from '../assets/navDropDown/uploadlogo.webp'
import crop from '../assets/navDropDown/humbleicons_crop.png'
import brithness from '../assets/navDropDown/Vector (1).png'
import back from '../assets/navDropDown/Vector (2).png'
import rectangle1 from '../assets/navDropDown/Rectangle 23977.png'
import rectangle2 from '../assets/navDropDown/Rectangle 23978.png'
import rectangle3 from '../assets/navDropDown/Rectangle 23979.png'
import smile from '../assets/ph_smiley.png'
import articleImg from '../assets/article.png';
import gallery from '../assets/solar_gallery-round-bold.png';
import thought from '../assets/Vector (4).png'
const MainNavigation = () => {
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
  }
  const handleShowArticle = () => {
    setArticlePage(true);
    setHandleShowToggle(false)
    setAddPost(false)
    setShowThoughtPage(false)
  }
  // 
  const handleShowPhotoSection = () => {
    setAddPost(!addPost);
    setHandleShowToggle(false)
    setArticlePage(false)
    setShowThoughtPage(false)

  }
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
  console.log(savePost)
  return (<>

    <div class="  flex items-center justify-between   pl-[60px] pr-[60px] pt-[40px] max-xl:p-4 font-roboto w-full max-xl:gap-0 max-xl:justify-between  "  >
      <div className="tomtomad w-1/5
 ">
        <NavLink to="/">
          <h1 className=" text-tom font-roboto font-semibold text-3xl	 ">
            TOM<span class="text-tomad ">TOMED</span>
          </h1>
        </NavLink>
      </div>
      <div className="nav_container bg-black flex w-4/5  justify-end rounded-lg max-xl:bg-[#101010] ml-[40px] max-xl:ml-[0px] font-semibold max-xl:w-[100px]">
        <div className="list-none flex justify-evenly  gap-[35px]  p-[10px] rounded-lg max-xl:gap-4 w-full">
          <div className="mobile_desktop_view flex gap-[30px] items-center  max-xl:fixed  max-xl:bottom-0  max-xl:left-0  max-xl:w-full  max-xl:flex  max-xl:justify-center  max-xl:bg-[#101010]  max-xl:pb-2 max-xl:pt-2  max-xl:gap-8 max-xl:rounded-none">
            <div className="navlink_list flex items-center flex-col">

              <NavLink to="/" className="rounded-full bg-grey "
                style={({ isActive }) => {
                  return {
                    padding: isActive ? "20px" : "",

                  }
                }}
              >
                <img src={homeVector} alt="home" className="h-5 w-5" />
              </NavLink>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden	">Home</p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={mediaVector} alt="media" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff]	mt-1 max-xl:hidden">Videos</p>
            </div>
            <button onClick={handleShow}>
              <div className="navlink_list flex items-center flex-col">

                <li className="rounded-full bg-grey p-2">
                  {" "}
                  <img src={formAddVector} alt="form" className="h-5 w-5 " />

                </li>
                <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                  Add post
                </p>
              </div>
            </button>
            {
              handleShowToggle &&
              <div className="dropdownmenu flex flex-col  text-lg font-roboto items-center z-10 absolute right-0 left-[-16%] top-[24%] scroll-container max-xl:flex-col-reverse max-xl:left-0 max-xl:top-[-120px]" >
                <div class='triangle rotate-90'></div>

                <div className="dropdownitem bg-white flex flex-col  rounded-3xl px-9 py-5 gap-[30px] w-[200px] max-xl:w-[409px] max-xl:flex-row max-xl:gap-[28px] max-xl:py-3  max-xl:px-3" >
                  <button onClick={handleShowPhotoSection}>

                    <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                      <img src={photo} alt="" className="w-[22px] h-[22px]" />
                      <p className="max-xl:text-sm">Photo</p>
                    </div>
                  </button>
                  <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                    <img src={video} alt="" className="w-[22px] h-[22px]" />
                    <p className="max-xl:text-sm">Video</p>
                  </div>
                  <button onClick={handleShowThought}>

                    <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                      <img src={thoughts} alt="" className="w-[22px] h-[22px]" />
                      <p className="max-xl:text-sm">Thought</p>
                    </div>
                  </button>
                  <button onClick={handleShowArticle} >

                    <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                      <img src={article} alt="" className="w-[22px] h-[22px]" />
                      <p className="max-xl:text-sm">Article</p>
                    </div>
                  </button>
                  <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                    <img src={gifs} alt="" className="w-[22px] h-[22px]" />
                    <p className="max-xl:text-sm">GIFs</p>
                  </div>
                  <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                    <img src={golive} alt="" className="w-[22px] h-[22px]" />
                    <p className="max-xl:text-sm">Go Live</p>
                  </div>

                </div>

              </div>
            }
            {
              addPost && < div className="absolute right-0 left-[-16%] top-[24%]  pr-[60px]  ">
                <div className="main_section w-[100%] flex justify-end gap-[30px]">
                  <div className="left_section">


                    <label htmlFor="files">

                      <input
                        type="file"
                        accept="image/*"
                        style={{ "visibility": "hidden", "position": "absolute" }}
                        id="files"
                        onChange={handleImageChange}
                        key={fileInputKey}
                      />

                      {base64Image ? (
                        <img

                          className={`image ${filterImage === 'juno' ? 'juno-filter' : filterImage === "lark" ? 'lark-filter' : filterImage === "slumber" ? "slumber-filter" : ""} w-[520px] h-[552px] rounded-xl filter  `}
                          id="files"
                          src={base64Image}
                          alt="Selected"
                          style={style}
                        />
                      ) : (
                        <img
                          className="w-[520px] h-[552px] rounded-xl"
                          src={uploadImage}
                          alt="Selected"
                          id="files"

                        />
                      )}
                    </label>
                  </div>
                  {
                    base64Image ?
                      <div className="right_section w-[470px]   h-[554px] p-6">


                        {
                          showEditOption ?
                            <div className="filter_option flex flex-col items-center bg-[#1B1C1B] h-[554px] ">
                              <div className="filter_para mb-[18px]  w-[98%]">
                                <div className="para_container flex items-center justify-start gap-5 px-3">


                                  {showBrithnessPage ?
                                    <div>

                                      <button onClick={handlePrevious}>  <img src={back} alt="" className="w-6 h-6  " /> </button>  </div> : showCropPage ? <div >

                                        <button onClick={handlePreviousFirst}>  <img src={back} alt="" className="w-6 h-6  " /> </button>  </div> : ""}

                                  <div className="flex items-center justify-center grow gap-5">
                                    {showBrithnessPage ? <img src={brithness} alt="" className="w-7 h-7 p" /> : showCropPage ? <img src={crop} alt="" className="w-7 h-7 p" /> : savePost === true ? "" : ""}
                                    <p className="text-lg text-white text-center mt-[27px] mb-[18px]  w-[]  ">{showBrithnessPage ? "Brightness " : showCropPage ? "Crop" : savePost === true ? "" : ""}</p>
                                  </div>
                                </div>
                                {showBrithnessPage ? <>
                                  <div className="flex items-center px-3">
                                    <input type="range" name="brithness" min="0" max="200" onChange={handleChangeBrightness} value={brightness} class="w-full h-2 bg-blue-100 appearance-none" />
                                  </div>
                                </> : showCropPage ? <div className="flex gap-10 ">
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={rectangle1} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Original</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container px-10 py-[35px] bg-[#000000]">
                                      <img src={rectangle2} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">4:5</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container px-10 py-[44px] bg-[#000000]">
                                      <img src={rectangle3} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">16:9</p>
                                  </div>
                                </div> : savePost ? <div className="px-6">
                                  <div className="user_details flex justify-between items-center">
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
                                </div> : <div className="crop_brithness_container flex flex-wrap gap-6 ">
                                  <button onClick={handleShowCropPage}>

                                    <div className="item flex items-center flex-col">
                                      <div className="img_container p-10 bg-[#000000]">
                                        <img src={crop} alt="" />
                                      </div>
                                      <p className="text-[#F5F5F5] text-sm">Crop</p>
                                    </div>
                                  </button>
                                  <button onClick={handleBrithnessPage}>
                                    <div className="item flex items-center flex-col">
                                      <div className="img_container p-10 bg-[#000000]">
                                        <img src={brithness} alt="" className="w-10 h-10" />
                                      </div>
                                      <p className="text-[#F5F5F5] text-sm">Brightness</p>
                                    </div>
                                  </button>
                                  <button >

                                    <div className="item flex items-center flex-col">
                                      <div className="img_container p-10 bg-[#000000]">
                                        <img src={crop} alt="" />
                                      </div>
                                      <p className="text-[#F5F5F5] text-sm">Crop</p>
                                    </div>
                                  </button>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                </div>}

                              </div>

                            </div> : <div className="filer_container flex flex-col items-center bg-[#1B1C1B]">
                              <div className="filter_para mb-[18px]">
                                <p className="text-lg text-white ">Filters</p>
                              </div>
                              <div className="filter_photo flex flex-wrap gap-6 ">
                                <button onClick={() => setFilter('')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  Original
                                </button>
                                <button onClick={() => setFilter('lark')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  lark
                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  Juno
                                </button>

                                <button onClick={() => setFilter('slumber')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  slumber
                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  Juno
                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  Original
                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  Juno
                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  Juno
                                </button>
                                <button onClick={() => setFilter('juno')} className="text-[#8F8F8F] text-sm ">

                                  <img
                                    className="w-[120px] h-[120px] rounded-xl juno-filter"
                                    src={base64Image}
                                    alt="Selected"
                                    id="files"

                                  />
                                  Juno
                                </button>
                              </div>

                            </div>
                        }
                        {
                          showBrithnessPage === true ?
                            <button className="signUp  text-lg text-white w-full h-[60px] rounded-xl mt-4 " >Save changes</button> : showCropPage === true ? <button className="signUp  text-lg text-white w-full h-[60px] rounded-xl mt-4 " >Save changes</button> : showEditOption === true ? <button className="signUp  text-lg text-white w-full h-[60px] rounded-xl mt-4 " onClick={handleSavePost} >Post</button> : <button className="signUp  text-lg text-white w-full h-[60px] rounded-xl mt-4 " onClick={showEditOptionMenu} >Next</button>
                        }
                      </div> : ""
                  }
                </div>
              </ div>

            }
            {
              showArticlePage && <div className="absolute right-0 left-[25%] top-[24%]  pr-[60px] text-white">
                <div className="article_container bg-[#1B1C1B]  rounded-xl mt-10	">
                  <div className="article flex gap-3 bg-[#161414] px-[30px] py-[32px] rounded-xl	">
                    <p>Post an Article</p>
                    <img src={articleImg} alt="article" />
                  </div>
                  <div className="input article p-6  mt-6">
                    <textarea name="" id="" className="w-full h-[350px] bg-black rounded-xl p-6" placeholder="Write an Article here..." ></textarea>
                  </div>
                  <div className="article_button flex justify-between p-6 items-center">
                    <img src={gallery} alt="" className="w-5 h-5" />
                    <button className="signUp text-white text-lg px-[110px] py-[20px] rounded-xl	" >Post Article</button>
                  </div>
                </div>
              </div>
            }
            {
              showThoughtPage && <div className="absolute right-0 left-[25%] top-[24%]  pr-[60px] text-white">
                <div className="article_container bg-[#1B1C1B]  rounded-xl mt-10	">
                  <div className="article flex gap-3 bg-[#161414] px-[30px] py-[32px] rounded-xl	">
                    <p>Post a Thought</p>
                    <img src={thought} alt="article" />
                  </div>
                  <div className="input article p-6  mt-6">
                    <textarea name="" id="" className="w-full h-[350px] bg-black rounded-xl p-6" placeholder="Write your Thoughts here..." ></textarea>
                  </div>
                  <div className="article_button flex  p-6 items-end justify-end">
                    <button className="signUp text-white text-lg px-[110px] py-[20px] rounded-xl	" >Post Thought</button>
                  </div>
                </div>
              </div>
            }
            <div className="navlink_list flex items-center flex-col">

              <NavLink to="/message" className="rounded-full bg-grey "
                style={({ isActive }) => {
                  return {
                    padding: isActive ? "20px" : "",

                  }
                }}
              >
                <img src={messageVector} alt="home" className="" />
              </NavLink>

              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Messages
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className="rounded-full bg-grey p-2 ">
                {" "}
                <img src={shoppingCart} alt="home" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">E-Commerce</p>
            </div>
            <div className="navlink_list  items-center flex-col hidden max-xl:flex">
              <li className="rounded-full bg-grey p-2">
                <img src={userVector} alt="message" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Profile
              </p>
            </div>
          </div>
          <div className="desktop_view flex gap-[30px]  items-center max-xl:gap-6 ">

            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className="rounded-full bg-grey p-3 flex items-center max-xl:hidden">
                {" "}
                <img src={Ads} alt="ads" className="h-[10px] w-[22px] " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">Ads</p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={search} alt="media" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Search
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={notification} alt="form" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Notifications
              </p>
            </div>
            <div className="navlink_list flex items-center flex-col  max-xl:hidden">
              <li className="rounded-full bg-grey p-2">
                {" "}
                <img src={setting} alt="form" className="h-5 w-5 " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1 max-xl:hidden">
                Settings
              </p>
            </div> 
            <NavLink to="/user">

            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className=" ">
                <img src={userimage} alt="message" className="h-10 w-10 rounded-full " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">Das</p>
            </div>
            </NavLink>

          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default MainNavigation;
