import { useState, useEffect, useRef } from "react";

import userimage from "../assets/postassets/userImage.webp";
import verifyTik from "../assets/postassets/bluetik.svg";
import postImage from "../assets/postassets/Rectangle 587.png";
import userImage from "../assets/postassets/Ellipse 3.png";
// import group from '../assets/Group.png'//
import artimg from "../assets/postassets/artimage.png";
import media from "../assets/postassets/media.png";
import kababmenu from "../assets/postassets/kabab.png";
import profileimage from '../assets/Avatar.png'
// import { NavLink } from "react-router-dom";
import { BiMessageAlt } from "react-icons/bi";
import { Icon } from '@iconify/react';
import imagesave from '../assets/Rectangle 599.png'
import suggestionImage from '../assets/Rectangle 600.png'
import group from '../assets/Rectangle 599 (1).png'
import Setting from "../components/Setting";
// 
import { ProfileData } from "../app/auth/ProfileSlice";
import { updateUserProfile } from '../app/auth/updateSlice'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';
const Profile = () => {
  //
  const [showPost, setShowPost] = useState(true);
  const [showArticle, setShowArticle] = useState(false);
  const [showMedia, setShowMedia] = useState(false);
  const [showFollower, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showAction, setShowAction] = useState(false);
  const [userAction, setUserAction] = useState(false);
  const [base64Image, setBase64Image] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());
  // for update state//
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [about, setAbout] = useState('');
  const [address, setAddress] = useState({
    city: "",
    country: ""
  });
  const [image, setImage] = useState("")
  // setName(userData?.name)
  // console.log(setName(userData?.name));
  //  
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
  console.log(base64Image);
  const handleAction = () => {
    setShowAction(!showAction)
  }
  const handleUserAction = () => {
    setUserAction(!userAction)
  }

  //  
  const userData = useSelector((state) => [state?.getProfile?.data?.data]);
  console.log("profile Data", userData)
  const refData = useRef(useSelector((state) => state?.getProfile?.data?.data))
  // 
  console.log(refData);
  // 
  // 
  const userUpdateData = useSelector((state) => state);
  console.log("updateprofileData", userUpdateData.updateProfile);

  // 
  const [formData, setFormData] = useState({
    // Object.values(userData)
    name: userData?.name,
    username: userData?.username,
    image: userData?.image,
    about: userData?.about,
    isVerified: false,
    address: {
      city: '',
      country: ''
    }
  });
  // 
  console.log(formData);
  useEffect(() => {
    setName(userData?.data?.name)
    console.log(name);
  }, [])
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };
  // 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProfileData());
    // setProfileUserData(profileUserData)
  }, []);
  // 
  const handleformSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
    toast("Profile Update successfully")
  }

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

  // Function to handle date change
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    // Check if the selected date is after today
    const currentDate = new Date().toISOString().split('T')[0]; // Today's date
    if (selectedDate <= currentDate) {
      setSelectedDate(selectedDate);
    } else {
      alert('Please select a date on or before today.');
      // You can also set an error state or display an error message instead of an alert
    }
  };
  return (
    <>

      <ToastContainer />
      <div className="profile_container mt-10 pl-[60px] pr-[60px] font-roboto flex gap-[50px]  max-xl:gap-0 max-xl:justify-center   max-xl:pr-0 max-xl:pl-0 3xl:w-[1400px]">
        {/*  */}

        {/*  */}
        <div className="left_section w-1/5 max-xl:hidden">
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
        <div className="right_section   w-4/5 max-xl:w-[500px] max-sm:w-[350px] ">
          <div className="user_bio border-b-[#171717] border-b-2 ">
            <div className="image_username flex   justify-between   ">
              {/* Object.keys(userData.data.data) */}
              {
                userData?.map((item) => (

                  <div className="flex gap-10 items-center ">
                    <div className="user_pic w-[160px] h-[160px] max-xl:w-[100px] max-xl:h-[100px] ">

                      {
                        item?.image ? <img
                          src={item?.image}
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
                          item?.name ? <>{item?.name}</> : "username"
                        }
                        {/* {item.name}{" "} */}
                        <span>
                          {" "}
                          <img src={verifyTik} alt="photo" />{" "}
                        </span>
                      </p>

                      <p className="mt-2 text-lg	text-white max-xl:text-sm max-xl:mt-2  ">
                        {
                          item?.username ? <>{item?.username}</> : "username"
                        }

                      </p>
                      <p className="text-lg	text-white mt-2 max-xl:text-[14px] max-xl:mt-2 ">
                        {
                          item?.about ? <>{item?.about}</> : "about"
                        }
                      </p>
                    </div>
                  </div>
                ))
              }
              <div className="edit_share_and_more list-none flex  gap-6   ">
                <li>
                  <button className="" onClick={() => document.getElementById('my_modal_1').showModal()}><Icon icon="akar-icons:edit" className="w-6 h-6 text-white" /></button>
                  <dialog id="my_modal_1" className="modal font-roboto  overflow-auto  ">
                    <form onSubmit={handleformSubmit} className="max-sm:w-[100%] max-sm:h-full" >
                      <div className="w-[1000px] max-lg:w-[700px] max-md:w-[500px] max-sm:w-full " >
                        <div className="form_upercase flex justify-between bg-[#161414]  max-sm:bg-[black] items-center py-[14px] max-lg:py-1 rounded-xl	 max-sm:py-2 ">

                          <form className="dialog flex">
                            <div className=" flex gap-6  pl-[25px] pr-3  items-center max-sm:mt-6">

                              <button className=" bg-[#202020] border rounded-full  p-2 max-lg:p-1 " ><Icon icon="eva:arrow-back-fill" className="w-4 h-[14px] text-white" /></button>
                              <p className="text-xl	 text-white  max-lg:text-base">Edit Profile</p>
                            </div>
                          </form>
                          <button className="signUp px-[110px] py-[18px] text-lg text-white rounded-xl mr-3  max-lg:text-base max-lg:py-[10px]	 max-lg:px-[55px]  max-sm:hidden" type="submit" >Save Changes</button>
                        </div>


                        <div className=" profile_edit_section  bg-[#202020] pt-[35px] flex gap-[45px]  max-sm:gap-0 pb-[35px] max-lg:pt-[10px] max-sm:flex-col max-sm:items-center  max-sm:bg-black">
                          <div className="img hidden max-sm:block relative">
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute"
                              id="files"
                              onChange={handleImageChange}
                              key={fileInputKey}
                            />
                            {
                              base64Image ? <>


                                <img src={base64Image} alt="img" className="w-[120px] h-[120px] rounded-[1000px]  mb-[30px]" />
                              </> : <img src={formData.image} alt="img" className="w-[120px] h-[120px] rounded-[1000px]  mb-[30px]" />

                            }
                          </div>

                          <div className="left_section pl-[25px] max-sm:pl-0 max-sm:pb-6 max-sm:order-2  max-sm:pt-6  ">

                            <div className="profile_details flex flex-col items-center">
                              <div className="img  relative">
                                <label htmlFor="files" className="flex gap-[30px] max-xl:gap-2 max-xl:flex-col items-center">


                                  <input
                                    type="file"
                                    accept="image/*"
                                    style={{ "visibility": "hidden", "position": "absolute" }}
                                    id="files"
                                    onChange={handleImageChange}
                                    key={fileInputKey}
                                  />


                                  {
                                    base64Image ? <>


                                      <img src={base64Image} alt="img" className="w-[120px] h-[120px] rounded-[1000px] max-sm:hidden " />
                                    </> : <img src={formData.image} alt="img" className="w-[120px] h-[120px] rounded-[1000px] max-sm:hidden " />

                                  }




                                </label>


                              </div>
                              <div className="dob  mt-8  bg-[#3D3E3D] w-[190px]  max-sm:w-[320px]  px-3 rounded-lg	 max-lg:mt-[10px]">
                                <div className="dob text-sm text-[#8F8F8F]  pl-3  max-sm:pl-1  max-sm:pt-1  pt-2">Date of Birth</div>
                                <div className="dob text-base  text-[#F5F5F5]  pl-3 mt-[9px] mb-3 max-sm:my-1 max-sm:pl-1 "> <input type="date" className="bg-[#3D3E3D]" value={selectedDate}
                                  onChange={handleDateChange}
                                  max={new Date().toISOString().split('T')[0]} /> </div>
                              </div>
                              <div className="dob  mt-3 bg-[#3D3E3D] w-[190px]  max-sm:w-[320px]  px-3 rounded-lg	 max-lg:mt-[10px]	">
                                {/*  */}
                                <label class="dob text-sm text-[#8F8F8F] pl-3  max-sm:pl-1  max-sm:pt-1  pt-2" for="Email">
                                  Email
                                </label>
                                <input class="  block w-full bg-[#3D3E3D]    rounded    text-base text-white  pl-3 mt-[9px] mb-3 max-sm:my-1 max-sm:pl-1 " id="Email" type="text" placeholder="Email" />
                                {/*  */}

                              </div>
                              <div className="dob  mt-3  bg-[#3D3E3D] w-[190px]  max-sm:w-[320px]  px-3 rounded-lg	 max-lg:mt-[10px]">
                                <label class="dob text-sm text-[#8F8F8F] pl-3  max-sm:pl-1  max-sm:pt-1  pt-2 " for="Phone">
                                  Phone
                                </label>
                                <input class="  block w-full bg-[#3D3E3D]    rounded    text-base text-white  pl-3 mt-[9px] mb-3 max-sm:my-1 max-sm:pl-1 " id="Phone" type="text" placeholder="Phone" />
                              </div>
                              <button className="hidden max-sm:block text-white py-[15px] mt-5 signUp w-full rounded-xl	" >Save Changes</button>
                            </div>
                          </div>
                          <div className="right_section max-sm:pt-1  max-sm:order-1 max-sm:pb-6  border-b-2 border-[#1D1D1D] ">
                            <div class="w-[584px] max-sm:w-[320px]  max-lg:w-[190px] bg-[#1B1C1B]  px-2 py-3 max-sm:py-1 max-sm:px-3 rounded-lg	 ">
                              <label class="block  tracking-wide text-[#8F8F8F] text-sm  font-bold " for="Name">
                                Name
                              </label>
                              <input class="  block w-full bg-[#1B1C1B]    rounded   mt-2 text-base text-white  max-sm:mt-1" id="Name" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} />

                            </div>
                            <div class="w-[584px] max-sm:w-[320px] max-lg:w-[190px] bg-[#1B1C1B]  px-2 py-3 rounded-lg max-sm:py-1	 max-sm:px-3 mt-3   max-lg:mt-1 ">
                              <label class="block  tracking-wide text-[#8F8F8F] text-sm  font-bold " for="username">
                                Username
                              </label>
                              <input class="  block w-full bg-[#1B1C1B]  max-sm:mt-1  rounded   mt-2 text-base text-white " id="Name" type="text" placeholder="username"
                                name="username" value={formData.username} disabled onChange={handleChange}
                              />
                            </div>
                            <div class="w-[584px] max-sm:w-[320px] max-lg:w-[190px]  bg-[#1B1C1B]  px-2 py-3 rounded-lg	 max-sm:px-3 max-sm:py-1 mt-3  max-lg:mt-1 relative flex   items-center">
                              <div className="input_section">

                                <label class="block  tracking-wide text-[#8F8F8F] text-sm  font-bold " for="profession">
                                  Profession
                                </label>
                                <input class="  block w-full bg-[#1B1C1B]    rounded   mt-2  max-sm:mt-1 text-base text-white " id="Name" type="text" placeholder="Profession" />
                              </div>


                              <button className="text-[#B39DCF] absolute right-3"> Show</button>

                            </div>
                            <div class="w-[584px] max-sm:w-[320px] max-lg:w-[190px] bg-[#1B1C1B]  px-2 py-3 rounded-lg	 max-sm:px-3 max-sm:py-1 mt-3 max-lg:mt-1 ">
                              <label class="block  tracking-wide text-[#8F8F8F] text-sm  font-bold " for="Bio">
                                Bio
                              </label>
                              <input class="  block w-full bg-[#1B1C1B]   max-sm:mt-1  rounded   mt-2 text-base text-white " id="Bio" type="text" placeholder="Bio"
                                name="about" value={formData.about} onChange={handleChange}
                              />
                            </div>
                            <div class="w-[584px] max-sm:w-[320px] max-lg:w-[190px] bg-[#1B1C1B]  px-2 py-3 rounded-lg max-sm:px-3	max-sm:py-1 mt-3 relative flex  max-lg:mt-1 items-center ">
                              <div className="input_section">

                                <label class="block  tracking-wide text-[#8F8F8F] text-sm  font-bold " for="city">
                                  City
                                </label>
                                <input class="  block w-full bg-[#1B1C1B]  max-sm:mt-1  rounded   mt-2 text-base text-white " id="city" type="text" placeholder="City"
                                // name="city" value={formData.address.city} onChange={handleChange}
                                />
                              </div>
                              <button className="text-[#B39DCF] absolute right-3"> Hide</button>

                            </div>
                          </div>


                        </div>

                      </div>
                    </form>
                  </dialog>

                </li>
                <li>
                  <Icon icon="material-symbols-light:share-outline" className="w-6 h-6 text-white" />

                </li>
                <li>
                  {/* Open the modal using document.getElementById('ID').showModal() method */}

                  <button>
                    <Setting />
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
                  <div className="post_container bg-black ">
                    <div className="post  mt-[18px] px-[50px] pt-6 max-xl:px-6 ">
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
                          <div className="relative">

                            <button onClick={handleUserAction}  >

                              <Icon icon="mingcute:more-2-line" className="w-5 h-6 text-white   " />
                            </button>
                            {
                              userAction && <div className="report_block_mute absolute z-30 list-none bg-[#141414] w-[200px] flex flex-col items-center py-6 px-[31px] rounded-xl	right-2 top-10">
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
                                    {/* <Icon icon="solar:pin-outline" /> */}
                                    <Icon icon="solar:pin-outline" className="w-6 h-6 text-white" />
                                    <li className="text-lg text-white">Mute</li>
                                  </div>
                                  <div className="flex gap-[18px]">
                                    <Icon icon="clarity:eye-hide-line" className="w-6 h-6 text-white" />
                                    <li className="text-lg text-white">Hide</li>
                                  </div>
                                  <div className="flex gap-[18px]">
                                    <Icon icon="fluent:delete-24-regular" className="w-6 h-6 text-[#FB6363]" />
                                    <li className="text-lg text-[#FB6363]">Delete</li>
                                  </div>
                                </div>

                              </div>
                            }
                          </div>

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
                        <div className="post_status flex flex-col  items-center gap-3">
                          <Icon icon="solar:bookmark-outline" className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-[#8F8F8F]  mt-[13px] ">
                        29 mins ago
                      </p>
                    </div>
                    <div className="post  mt-[18px] px-[50px] pt-6 max-xl:px-6 border-t-2 border-[#252525] ">
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
                          <Icon icon="mingcute:more-2-line" className="w-5 h-6 text-white   " />

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
                        <div className="post_status flex flex-col  items-center gap-3">
                          <Icon icon="solar:bookmark-outline" className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <p className="text-[#8F8F8F]  mt-[13px] pb-5">
                        29 mins ago
                      </p>
                    </div>
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
                      <div className="followers_child flex gap-[18px] items-center">
                        <button className="text-[#7D4CFF]">Follow back</button>
                        <Icon icon="iconamoon:menu-kebab-horizontal-bold" className="text-[#2A2A2A] w-[20px] " />

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
                      <div className="followers_child flex gap-[18px] items-center">
                        <button className="text-[#7D4CFF]">Follow back</button>
                        <Icon icon="iconamoon:menu-kebab-horizontal-bold" className="text-[#2A2A2A] w-[20px] " />

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
                    <Icon icon="iconamoon:search-light" className="absolute left-[92%]  bottom-[15px] w-[18px] h-[18px] text-white " />

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
                      <div className="followers_child flex gap-[18px] items-center">
                        <button className="text-[#7D4CFF]">Unfollow</button>
                        <Icon icon="iconamoon:menu-kebab-horizontal-bold" className="text-[#2A2A2A] w-[20px] " />
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
                      <div className="followers_child flex gap-[18px] items-center">
                        <button className="text-[#7D4CFF]">Unfollow</button>
                        <Icon icon="iconamoon:menu-kebab-horizontal-bold" className="text-[#2A2A2A] w-[20px] " />
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
                      <div className="followers_child flex gap-[18px] items-center">
                        <button className="text-[#7D4CFF]">Unfollow</button>
                        <Icon icon="iconamoon:menu-kebab-horizontal-bold" className="text-[#2A2A2A] w-[20px] " />
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
    </>
  );
};

export default Profile;
