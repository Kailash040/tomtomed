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
import back from '../assets/navDropDown/Vector (1).png'

const MainNavigation = () => {
  const [handleShowToggle, setHandleShowToggle] = useState(false);
  const [addPost, setAddPost] = useState(false);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  const [base64Image, setBase64Image] = useState(null);
  const [filter, setFilter] = useState(null);
  const [showEditOption, setShowEditOptions] = useState(false)
  const [setBrithness, setShowBrithness] = useState(false)
  const [brightness, setBrightness] = useState(100);
  const handleShow = () => {
    setHandleShowToggle(!handleShowToggle)
  }
  const handleShowPhotoSection = () => {
    setAddPost(!addPost);
    setHandleShowToggle(false)
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
  const handleBrithnessPage =()=>{
    setShowBrithness(true)
  }
  const calculateClassName = () => {
    if (brightness >= 0) {
      return "brightness-high";
    } else if (brightness >= 50) {
      return "brightness-medium";
    } else {
      return "brightness-low";
    }
  };
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
                  <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                    <img src={thoughts} alt="" className="w-[22px] h-[22px]" />
                    <p className="max-xl:text-sm">Thought</p>
                  </div>
                  <div className="dropdown flex justify-center gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">
                    <img src={article} alt="" className="w-[22px] h-[22px]" />
                    <p className="max-xl:text-sm">Article</p>
                  </div>
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

                          className={`image ${filter === 'juno' ? 'juno-filter' : filter === "lark" ? 'lark-filter' : filter === "slumber" ? "slumber-filter" : ""} w-[520px] h-[552px] rounded-xl filter  ${calculateClassName()} `}
                          id="files"
                          src={base64Image}
                          alt="Selected"
                        // style={{ filter: `brightness(${brightness}%)` }}
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
                              <div className="filter_para mb-[18px] w-[98%]">
                                <p className="text-lg text-white text-center mt-[27px] mb-[18px]  w-[90%] ">{setBrithness ? "Brightness" : "Edit"}</p>
                                {setBrithness ? <>
                                  <div className="flex items-center">
                                    <input type="range" name="price" min="0" max="200" onChange={handleChangeBrightness} value={brightness} class="w-full h-2 bg-blue-100 appearance-none" />
                                  </div>
                                </> : <div className="crop_brithness_container flex flex-wrap gap-6 ">
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={crop} alt="" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Crop</p>
                                  </div>
                                    <button onClick={handleBrithnessPage}>

                                    
                                  <div className="item flex items-center flex-col">
                                    <div className="img_container p-10 bg-[#000000]">
                                      <img src={brithness} alt="" className="w-10 h-10" />
                                    </div>
                                    <p className="text-[#F5F5F5] text-sm">Brightness</p>
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
                        <button className="signUp  text-lg text-white w-full h-[60px] rounded-xl mt-4 " onClick={showEditOptionMenu}>Next</button>
                      </div> : ""
                  }
                </div>
              </ div>
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
            <div className="navlink_list flex items-center flex-col max-xl:hidden">
              <li className=" ">
                <img src={userimage} alt="message" className="h-10 w-10 rounded-full " />
              </li>
              <p className="text-sm	 text-[#ffffff] mt-1">Das</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default MainNavigation;
