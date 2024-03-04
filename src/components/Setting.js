import { useState } from 'react'
import { Icon } from '@iconify/react';
import arrow from '../assets/arrow/arrow.svg'
import avatar from '../assets/Avatar (1).png'
import qrCode from '../assets/Group 34038.png'
import { logOut } from '../app/auth/logOutSlice';
import { useDispatch, useSelector } from 'react-redux';
const Setting = () => {
    const [openTab, setOpenTab] = useState(0);
    // 
    // 
      const dispatch = useDispatch();

  const handleLogout = () => {
      localStorage.removeItem('token');
    dispatch(logOut());
  };
    const handleForgetPassword = (e) => {
        e.preventDefault()
    }
    return (
        <div className='font-roboto' ><button className="" onClick={() => document.getElementById('my_modal_2').showModal()}><Icon icon="ep:setting" className="w-6 h-6 text-white" /></button>
            <dialog id="my_modal_2" className="modal  text-white ">
                <div className="modal-box bg-grey flex p-0  max-w-[1320px] h-[630px] max-sm:w-[100%] max-sm:max-h-[100%]">
                    <div className="left_section bg-black max-sm:w-[110px] ">
                        <form method="dialog " className="flex gap-6 py-6 px-3  max-sm:py-3  max-sm:gap-1 items-center">
                            {/* if there is a button in form, it will close the modal */}
                            <button className=" p-1 bg-black rounded-full ">

                                <Icon icon="eva:arrow-back-fill" className="w-5 h-5  text-white text-xl	" /></button>
                            <p  className='max-sm:hidden' >Settings</p>
                        </form>


                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 " +
                                (openTab === 0
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px]  max-sm:w-[90px] py-3 rounded-lg	 mr-[18px] max-sm:mr-0 "
                                    : " bg-black px-[18px] w-[264px]  py-3 mr-[18px] max-sm:w-[90px]  max-sm:mr-0")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(0);
                            }}

                        >
                            <div className="icons_left flex gap-3 items-center">

                                <Icon icon="material-symbols:settings-account-box-outline" className='w-[23px] h-[23px]' />
                                <p className='max-sm:hidden'>

                                Account
                                </p>
                            </div>

                            {
                                openTab === 0 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 max-sm:mt-0 " +
                                (openTab === 1
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px]  max-sm:w-[90px] py-3 rounded-lg	 mr-[18px] max-sm:mr-0 "
                                    : " bg-black px-[18px] w-[264px] max-sm:w-[90px]   py-3 mr-[18px] max-sm:mr-0")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            <div className="icons_left flex gap-3 items-center">
                                <Icon icon="fluent:people-team-48-regular" className='w-[23px] h-[23px]' />
                                <p className='max-sm:hidden'>

                                Teams
                                </p>
                            </div>
                            {
                                openTab === 1 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2  max-sm:mt-0" +
                                (openTab === 2
                                    ? "text-white bg-[#202020]  px-[18px]  w-[264px]  max-sm:mt-0 max-sm:w-[90px] py-3 rounded-lg	 mr-[18px] max-sm:mr-0 "
                                    : " bg-black px-[18px] w-[264px]   py-3  max-sm:w-[90px] mr-[18px] max-sm:mr-0")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            <div className="icons_left flex gap-3 items-center">
                                <Icon icon="streamline:fingerprint-2" className='w-[23px] h-[23px]' />
                                <p className='max-sm:hidden'>

                                Passwords & Security
                                </p>
                            </div>
                            {
                                openTab === 2 ? <img src={arrow} alt="arrow" /> : ""
                            }
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 max-sm:mt-0 " +
                                (openTab === 3
                                    ? "text-white bg-[#202020]  max-sm:w-[90px] px-[18px] w-[264px] py-3 rounded-lg 	 mr-[18px] max-sm:mr-0 "
                                    : " bg-black px-[18px] w-[264px]  max-sm:w-[90px]  py-3 mr-[18px] max-sm:mr-0")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                            }}
                            data-toggle="tab"
                            href="#link1"
                            role="tablist"
                        >
                            <div className="icons_left flex gap-3 items-center">
                                <Icon icon="material-symbols:display-settings-outline" className='w-[23px] h-[23px]' />
                                <p className='max-sm:hidden'>

                                Display settings
                                </p>
                            </div>
                            {
                                openTab === 3 ? <img src={arrow} alt="arrow" /> : ""
                            }
                           
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 max-sm:mt-0 " +
                                (openTab === 4
                                    ? "text-white bg-[#202020]  px-[18px] max-sm:w-[90px] w-[264px] py-3 rounded-lg	 mr-[18px] max-sm:mr-0 "
                                    : " bg-black px-[18px] w-[264px]   py-3 max-sm:w-[90px] mr-[18px] max-sm:mr-0")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(4);
                            }}

                        >
                            <div className="icons_left flex gap-3 items-center">
                                <Icon icon="material-symbols:privacy-tip-outline" className='w-[23px] h-[23px]' />
                                <p className='max-sm:hidden'>

                                Privacy
                                </p>
                            </div>
                            {
                                openTab === 4 ? <img src={arrow} alt="arrow" /> : ""
                            }
                       
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2  max-sm:mt-0 " +
                                (openTab === 5
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px] max-sm:w-[90px] py-3 rounded-lg max-sm:mt-0	 mr-[18px] max-sm:mr-0"
                                    : " bg-black px-[18px] w-[264px]   py-3 max-sm:w-[90px] mr-[18px] max-sm:mr-0")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(5);
                            }}

                        >
                            <div className="icons_left flex gap-3 items-center">
                                <Icon icon="material-symbols-light:help-outline" className='w-[23px] h-[23px]' />
                                <p className='max-sm:hidden'>

                                Help Center
                                </p>
                            </div>
                            {
                                openTab === 5 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2  max-sm:mt-0 " +
                                (openTab === 20
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px] max-sm:w-[90px] py-3 rounded-lg max-sm:mt-0	 mr-[18px] max-sm:mr-0"
                                    : " bg-black px-[18px] w-[264px]   py-3 max-sm:w-[90px] mr-[18px] max-sm:mr-0")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(20);
                            }}

                        >
                            <div className="icons_left flex gap-3 items-center">
                            {/* <Icon icon="mynaui:logout" /> */}
                                <Icon icon="mynaui:logout" className='w-[23px] h-[23px]' />
                                <button  onClick={handleLogout} className='max-sm:hidden'>

                                Log out
                                </button>
                            </div>
                            {
                                openTab === 20 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                    </div>
                    <div className="right_section  w-full">
                        {/*  */}
                        {/* {openTab} */}
                        {/* value */}
                        <div className="setting_heading flex items-center gap-[18px]  bg-[#161414] py-6 px-6 max-sm:py-3">
                            {openTab === 2 ? <Icon icon="streamline:fingerprint-2" className='w-[23px] h-[23px]' /> :
                                // 
                                openTab === 6 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> : openTab === 7 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> : openTab === 8 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> : openTab === 9 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(8);
                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button>

                                    : openTab === 10 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(9);
                                    }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> : openTab === 11 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(10);
                                    }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> :
                                        openTab === 12 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(8);
                                        }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button>
                                            :

                                            openTab === 13 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(12);
                                            }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> : openTab === 14 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(13);
                                            }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button>  :
                                            openTab === 15 ?    <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(14);
                                            }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button>

                                                :
                                                openTab === 16 ?   <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> : openTab === 17 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button>  : openTab === 18 ?  <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                                    e.preventDefault();
                                                    setOpenTab(1);
                                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button>   :
                                                // 
                                                <Icon icon="material-symbols:settings-account-box-outline" className=' w-[23px] h-[23px]' />}

                            {
                                <h1 className='text-xl	 max-sm:text-base'>{openTab === 0 ? "Account" : openTab === 1 ? "Teams" : openTab === 6 ? "Manage Access" : openTab === 3 ? "Passwords & Security" : openTab === 2 ? "Passwords & Security" : openTab === 7 ? "Change Password" : openTab === 8 ? "Two-Factor Authentication" : openTab === 9 ? "SMS Authentication" : openTab === 10 ? "Change Mobile Number" : openTab === 11 ? "Verify Code" : openTab === 12 ? "Google Authentication" : openTab === 13 ? "Google Authentication" : openTab === 14 ?"Verify Code" : openTab === 15 ? "Google Authentication setup complete": openTab === 16 ? "Add new member"    :  openTab === 17  ?"Accounts assigned to you (2)":  openTab === 18 ? "Members you assigned (1)": "Settings"}</h1>

                            }
                        </div>

                        <div className='flex   mt-[30px] pl-[30px] pr-[50px] flex-col max-sm:pl-6 max-sm:pr-6'>
                            {/* tab-1 */}
                            {openTab === 0 ? <div className='flex justify-between w-full'>

                                <div className='flex items-center gap-[18px]'>

                                    <Icon icon="lets-icons:nfc" className='w-6 h-6' />

                                    <p>NFC</p>
                                </div>
                                <img src={arrow} alt="arrow" />
                            </div> : ""}

                            {/* tab-2 */}
                            {openTab === 1 ? <div className='w-full'>
                                <button onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(6);
                                }} className='flex items-center gap-[18px] justify-between w-full'>


                                    <p>Manage Access</p>
                                    <img src={arrow} alt="arrow" />
                                </button>

                                {openTab === 6 ? "" : <button
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(16);
                                }}
                                className='flex items-center gap-[18px] justify-between w-full mt-[30px]  max-sm:mt-6 '>


                                    <p>Add new member</p>
                                    <img src={arrow} alt="arrow" />
                                </button>}


                            </div> : ""}
                            {
    openTab === 1 ? 
<div className='w-full'>


    <button
    onClick={e => {
        e.preventDefault();
        setOpenTab(17);
    }} 
    className='flex justify-between w-full mt-[30px] max-sm:mt-6 items-center'>

    <div className='flex items-center gap-[18px]'>

       

        <p>Accounts assigned to you</p>
    </div>
    <img src={arrow} alt="arrow" />
</button>
<button
 onClick={e => {
    e.preventDefault();
    setOpenTab(18);
}} 
className='flex justify-between w-full mt-[30px] max-sm:mt-6 items-center'>

<div className='flex items-center gap-[18px]'>

   

    <p>Members you have assigned</p>
</div>
<img src={arrow} alt="arrow" />
</button>
</div>
:""
}
                            {/*  */}
                            {openTab === 6 ? <div className='flex flex-col   justify-between w-full'>

                                <div className="manage w-full justify-between flex bg-[#1B1C1B] items-center px-[18px] py-2 rounded-xl	 ">
                                    <div className='flex gap-3'>

                                        <div className="img"><img src={avatar} alt="avatar" className='w-[54px] h-[54px]' /></div>
                                        <div className="iname flex flex-col  item_equal	">   <p className='font-semibold	text-base' >Amy Johnson</p><p className='text-sm text-[#8F8F8F]' >@amyj_39</p> </div>
                                    </div>
                                    <div className="arrow">  <img src={arrow} alt="arrow" className='rotate-90' /></div>
                                </div>
                                <div className="box_item  px-[14px]  py-2 mt-[10px]  bg-[#1B1C1B]">
                                    <div className="box_item1 flex flex-col border-b-2 border-[#2F2F2F]">
                                        <div className="uperbox flex items-center w-full justify-between">
                                            <p className='font-semibold 	' >Full Access</p>
                                            <div class="form-control">
                                                <label class="label cursor-pointer">
                                                    <input type="radio" name="radio-10" class="text-white w-6 h-6 checked:bg-red-500" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className="lowerbox flex text-left">
                                            <p className='text-[#8F8F8F] text-[15px]  max-sm:text-[14px] leading-[21px]' >Users with Full Access have complete control over the account settings and content. They can make changes to all aspects of the account, including settings, data, and permissions. This level of access is typically granted to trusted team members or administrators who need comprehensive control over the account.</p>
                                        </div>
                                    </div>
                                    <div className="box_item1 flex flex-col border-b-2 border-[#2F2F2F]">
                                        <div className="uperbox flex items-center w-full justify-between">
                                            <p className='font-semibold	' >Editor Access</p>
                                            <div class="form-control">
                                                <label class="label cursor-pointer">
                                                    <input type="radio" name="radio-10" class="text-white w-6 h-6 checked:bg-red-500" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className="lowerbox flex text-left">
                                            <p className='text-[#8F8F8F] text-[15px]  max-sm:text-[14px] leading-[21px]' >Users with Editor Access can modify and contribute to the content and data within the account, but they may have restrictions on certain settings or administrative functions. Editors can create, edit, and delete content, but they may not have the authority to make changes to account settings or grant access to other users.</p>
                                        </div>
                                    </div>
                                    <div className="box_item1 flex flex-col">
                                        <div className="uperbox flex items-center w-full justify-between">
                                            <p className='font-semibold	' >Remove Access</p>
                                            <div class="form-control">
                                                <label class="label cursor-pointer">
                                                    <button className='py-[10px] px-5 bg-[black]'>Remove</button>
                                                </label>
                                            </div>

                                        </div>
                                        <div className="lowerbox flex text-left">
                                            <p className='text-[#8F8F8F] text-[15px]  max-sm:text-[14px] leading-[21px]' >Removing access from a user means revoking their permission to interact with or manage the account. Once access is removed, the user will no longer be able to perform actions or access resources within the account.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                : ""}
                            {/*  */}
                            {/*  */}
                            {openTab === 2 ? <div className='w-full' >
                                <button onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(7);
                                }} className='flex items-center gap-[18px] justify-between w-full '>


                                    <p>Change Password</p>
                                    <img src={arrow} alt="arrow" />
                                </button>
                                <button onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(8);
                                }} className='flex items-center gap-[18px] justify-between w-full mt-[30px] max-sm:mt-6'>


                                    <p>Two-Factor Authentication</p>
                                    <img src={arrow} alt="arrow" />
                                </button>
                            </div> : ""}
                            {openTab === 7 ? <div>

                                <div className="heading flex flex-col text-justify	">
                                    <p className='text-base  text-[#8F8F8F]  max-sm:text-sm' >It's crucial to regularly update your password to maintain account security.</p>
                                    <p className='text-[#8F8F8F] max-sm:text-sm' >Choose a strong password with at least 8 characters, including a mix of uppercase and lowercase letters, numbers, and special symbols. (!@$%)</p>
                                </div>
                                {/* form */}
                                <form onSubmit={handleForgetPassword} className='mt-2'>
                                    <div className='text-justify'>

                                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                                            <input type="text" placeholder='Current Password' className='py-6 px-3  max-lg:py-3 max-lg:px-2  bg-[#1B1C1B] w-full rounded-xl	text-sm' />
                                        </label>
                                        <label for="password" class="block  text-sm mt-1 font-medium leading-6 text-gray-900">
                                            <input type="text" placeholder='New Password' className='py-6 px-3   bg-[#1B1C1B] w-full rounded-xl  max-lg:py-3 max-lg:px-2 	text-sm' />
                                        </label>
                                        <label for="password" class="block text-sm mt-1 font-medium leading-6 text-gray-900">
                                            <input type="text" placeholder='Re-enter New Password' className='py-6 px-3   bg-[#1B1C1B] w-full rounded-xl  max-lg:py-3 max-lg:px-2 	text-sm' />
                                        </label>
                                        <li className='text-[#B68FE7] mt-3' ><a  >Forgot  Password?</a></li>
                                    </div>
                                    <button className='px-[85px] py-5  max-lg:py-3 signUp rounded-xl mt-5	'>Change Password</button>
                                </form>
                            </div> : ""}
                            {openTab === 8 ?
                                <div>

                                    <div className="two_fector flex text-justify flex-col">
                                        <p className='font-normal	text-[#8F8F8F] max-sm:text-sm' >Two-factor authentication adds an extra layer of security to your account by requiring two forms of verification before granting access. </p>
                                        <p className='font-normal	text-[#8F8F8F] max-sm:text-sm' >Even if someone knows your password, they won't be able to access your account without the second factor of authentication.</p>
                                    </div>
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(9);
                                    }} className="auth  bg-[#1B1C1B] py-[14px] px-[18px] max-sm:py-3 max-sm:px-3 rounded-xl max-sm:mt-2  mt-6	 w-full ">
                                        <div className='flex text-justify  justify-between sms-auth'>
                                            <p>SMS Authentication</p>
                                            <img src={arrow} alt="" />
                                        </div>
                                        <div className=' flex text-justify mt-[2px]'>
                                            <p className='text-[#8F8F8F]  text-sm' >We will send a code to your mobile number: *******890.</p>
                                        </div>
                                    </button>
                                    {/*  */}
                                    <button
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(12);
                                        }}
                                        className="auth  bg-[#1B1C1B] py-[14px] px-[18px] rounded-xl  mt-3 w-full	max-sm:py-3 max-sm:px-3 ">
                                        <div className='flex text-justify  justify-between'>
                                            <p>Google Authentication</p>
                                            <img src={arrow} alt="" />
                                        </div>
                                        <div className=' flex text-justify mt-[2px]'>
                                            <p className='text-[#8F8F8F]  text-sm' >A code will be generated at the authentication app</p>
                                        </div>
                                    </button>
                                </div>
                                : ""}
                            {openTab === 9 ? <div>
                                <div className="heading flex flex-col text-justify	">
                                    <p className='text-base  text-[#8F8F8F]  max-sm:text-sm max-sm:leading-4 ' >Two-factor authentication adds an extra layer of security to your account by requiring two forms of verification before granting access. </p>
                                    <p className='text-[#8F8F8F] mt-3 max-sm:text-sm max-sm:leading-4' >Even if someone knows your password, they won't be able to access your account without the second factor of authentication.</p>
                                </div>
                                <div className="bottom_section mt-6">


                                    <button
                                        className='flex items-center gap-[18px] justify-between w-full  bg-[#1B1C1B]  max-sm:py-[14px] max-sm:px-4 py-[22px]  px-[18px] rounded-lg'>


                                        <p>+91 1234567890</p>
                                        {/*  */}
                                        <button className='text-sm text-[#8F8F8F]' >Verified</button>
                                    </button>
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(10);
                                    }} className='flex items-center gap-[18px] justify-between w-full mt-3 bg-[#1B1C1B]  py-[22px]  px-[18px] rounded-lg max-sm:py-[14px] max-sm:px-4 '>


                                        <p>Change Mobile Number</p>
                                        <img src={arrow} alt="arrow" />
                                    </button>
                                </div>
                            </div> : ""}
                            {/*  */}
                            {/*  */}

                            {openTab === 10 ? <div className='flex flex-col '>
                                <div>


                                    <div className="two_fector flex text-justify flex-col">
                                        <p className='font-normal	text-[#8F8F8F] max-sm:text-sm max-sm:leading-4' >Verify your new number to ensure uninterrupted account access and enhanced protection against unauthorized access attempts. </p>

                                    </div>
                                    <div className="input_box flex  items-center w-full gap-3 mt-5 ">
                                        <div className="left">
                                            <select id="countries" class=" w-[85px] h-[65px] max-sm:h-[48px] rounded-lg	max-sm:py-0  px-3 py-3 bg-[#1B1C1B] max-sm:text-sm ">
                                                <option selected>+91</option>
                                                <option value="US">+92</option>
                                                <option value="CA">+86</option>
                                                <option value="FR">+972</option>
                                                <option value="FR">+7</option>
                                            </select>

                                        </div>
                                        <div className="right w-full  ">
                                            <input type="text" placeholder='Mobile Number'  className='w-full  h-[64px] max-sm:h-[48px]  rounded-lg	max-sm:text-sm max-sm:px-3 px-4 bg-[#1B1C1B] ' />
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className="button mt-20 ">
                                    <button onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(11);
                                    }} className="py-5 px-[124px] signUp rounded-xl text-lg  max-sm:py-3 max-sm:text-base max-sm:px-0 max-sm:w-full	" >Verify</button>
                                    {/* <div className="after:content-[>]"></div> */}
                                </div>
                            </div> : ""}
                            {
                                openTab === 11 ?
                                    <div className='w-full' >


                                        <div className="heading flex flex-col text-justify	">
                                            <p className='text-base  text-[#8F8F8F] max-sm:text-sm ' >Enter Verification Code sent to your mobile number</p>

                                        </div>
                                        <div className="enter_otp flex flex-col justify-center  mt-5  w-full relative
">
                                            <div className="input_box  text-justify ">

                                                <input type="text" className='  max-sm:text-sm  max-sm:p-3 bg-[#1B1C1B] w-full py-6 px-[18px] rounded-lg	' placeholder='Enter Code' />
                                            </div>
                                            <div className="button   right-2 absolute">

                                                <button className='bg-[black] py-[15px] px-[70px] rounded-xl max-sm:text-sm  max-sm:py-2	 max-sm:px-[22px]' >Confirm</button>
                                            </div>
                                        </div>
                                    </div>
                                    : ""
                            }
                            {/* 12 */}
                            {openTab == 12 ?
                                <div className='w-full' >


                                    <div className="heading flex flex-col text-justify	">
                                        <p className='text-base  text-[#8F8F8F] max-sm:text-sm max-sm:leading-4	 ' >Two-For added security, please enter your account password before proceeding with Google Authenticator setup.</p>

                                    </div>
                                    <div className="enter_otp flex flex-col justify-center  mt-5  w-full relative
">
                                        <div className="input_box  text-justify ">

                                            <input type="text" className=' bg-[#1B1C1B] w-full py-6 px-[18px] rounded-lg max-sm:px-3 max-sm:py-4 max-sm:text-sm	' placeholder='Enter Password' />
                                        </div>
                                        <div className="button   right-2 absolute">

                                            <button className='mt-2'  ><Icon icon="basil:eye-closed-solid" className='w-6 h-6 text-[#8F8F8F]' /></button>
                                        </div>
                                    </div>
                                    <div className="button_div mt-10">
                                        <button
                                            onClick={e => {
                                                e.preventDefault();
                                                setOpenTab(13);
                                            }}
                                            className='py-5 px-[124px] signUp rounded-xl text-lg max-sm:py-3 max-sm:text-base  max-sm:px-0 max-sm:w-full'>Confirm</button>
                                    </div>
                                </div>
                                : ""}
                            {openTab === 13 ? <div>
                                <div className="two_fector flex text-justify flex-col">
                                    <li className='font-normal	text-[#8F8F8F] list-disc	 max-sm:text-sm max-sm:leading-4	' >Verify your new number to ensure uninterrupted account access and enhanced protection against unauthorized access attempts. </li>
                                    <li className='font-normal	text-[#8F8F8F] list-disc	mt-3  max-sm:text-sm max-sm:leading-4' >Scan the “QR code” or enter a “setup key” on the Google Authenticator app. </li>
                                </div>
                                <div className="qr_text  max-sm:p-1 flex justify-text mt-10  max-sm:mt-[28px] justify-between   bg-[#1B1C1B] p-2 rounded-xl	">
                                    <p className='py-[22px]  px-[18px] max-sm:text-sm max-sm:p-3  max-sm:leading-4' >ABCD EFGH IJKL MNOP QRST UVWX YZAB CDEF</p>
                                    <label htmlFor="copy" className='flex  max-sm:w-[179px] items-center gap-3 py-[14px] px-[47px] bg-[#000000] rounded-xl	 max-sm:text-sm max-sm:p-3 '>
                                        <Icon icon="fluent:copy-16-regular" className='w-[18px] h-[18px]' />
                                        <p>Copy code</p>
                                    </label>
                                </div>
                                {/*  */}

                                <button onClick={() => document.getElementById('my_modal_13').showModal()} className='flex items-center gap-[18px] justify-between w-full mt-[30px] max-sm:mt-[28px]'>


                                    <p>Scan QR Code</p>
                                    <img src={arrow} alt="arrow" />
                                </button>
                                {/*  */}
                                {/* <button  onClick={()=>document.getElementById('my_modal_13').showModal()}>open modal</button> */}
                                <dialog id="my_modal_13" className="modal">
                                    <div className="modal-box bg-[#1B1C1B] w-[280px]  max-sm:w-[260px] flex flex-col items-center py-6 px-[18px]  ">
                                        <h3 className=" font-normal 	 text-base text-justify	 max-sm:text-sm max-sm:leading-4 ">Scan this QR code on your google authenticator app.!</h3>
                                        <img src={qrCode} className='w-[180px] h-[180px] mt-6  max-sm:w-[170px] max-sm:h-[170px]' alt="Qr " />
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>                      {/*  */}
                                <div className="verfy_code">
                                <button 
                                 
                                 onClick={e => {
                                     e.preventDefault();
                                     setOpenTab(14);
                                 }}
                                className='flex items-center gap-[18px] justify-between w-full mt-[30px] '>


<p>Verify Code</p>
<img src={arrow} alt="arrow" />
</button>
                                </div>
                            </div> : ""}
                            {/*  */}
                            {openTab === 14 ?   <div className='w-full' >


<div className="heading flex flex-col text-justify	">
    <p className='text-base  text-[#8F8F8F] max-sm:text-sm ' >Enter Verification Code sent to your mobile number</p>

</div>
<div className="enter_otp flex flex-col justify-center  mt-5  w-full relative
">
    <div className="input_box  text-justify ">

        <input type="text" className=' bg-[#1B1C1B] w-full py-6 px-[18px] rounded-lg max-sm:py-3 max-sm:text-sm	' placeholder='Enter Code' />
    </div>
    <div className="button   right-2 absolute">

        <button
        // 
        onClick={e => {
            e.preventDefault();
            setOpenTab(15);
        }}
         className='bg-[black] py-[15px] px-[70px] rounded-xl max-sm:py-[9px] max-sm:px-[22px]	 max-sm:text-sm' >Confirm</button>
    </div>
</div>
</div>  :""}
 {/*  */}
 {openTab ===15  ? 
<div className="heading flex flex-col text-justify	">
    <p className='text-base  text-[#8F8F8F] max-sm:text-white ' >Your Google Authenticator setup is complete!

</p>
<p     className='text-base  text-[#8F8F8F] max-sm:text-white'   >Your account is now protected with an extra layer of security.</p>
</div>:""}
{
    openTab === 16 ?    <div className='w-full' >
<div className="heading flex flex-col text-justify	">
                                            <p className='text-base  text-[#8F8F8F] max-sm:text-sm	 ' >Effortlessly grant edit access by searching for users and sending them permissions to modify content.</p>

                                        </div>

    <div className="enter_otp flex flex-col justify-center  mt-5  w-full relative
">
    <div className="input_box  text-justify ">

        <input type="text" className=' bg-[#1B1C1B] w-full py-6 px-[18px] rounded-[30px] max-sm:text-sm	 max-sm:py-[11px]' placeholder='Search name or username...' />
    </div>
    <div className="button   right-2 absolute p-2 bg-[#1B1C1B]  rounded-full">
  
    <Icon icon="ep:search"   className='w-5 h-5' />
        
    </div>
</div> 


{/*  */}
<div className='flex gap-3 mt-[30px]'>

<button className="img" onClick={()=>document.getElementById('my_modal_account_access').showModal()}><img src={avatar} alt="avatar" className='w-[54px] h-[54px]' /></button>
<div className="iname flex flex-col  item_equal	">   <p className='font-semibold	text-base' >Amy Johnson</p><p className='text-sm text-[#8F8F8F]' >@amyj_39</p> </div>
</div>
<dialog id="my_modal_account_access" className="modal">
  <div className="modal-box w-[430px]   bg-[#141414] max-sm:w-[345px] ">
    <h3 className="font-extrabold	 text-lg max-sm:text-[15px] ">Give Amy Johnson access of your account?!</h3>
    <div className="suggest_button_cancel_accept flex justify-between mt-[52px]">
<button  className='text-xl	text-[#FB6363] max-sm:text-[15px]'>Cancel</button>
<div className='w-[1px] bg-[#393939]'></div>
<button  className='text-xl max-sm:text-[15px]	'>Give Access</button>
    </div>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
{/*  */}
</div>
    :""
}
{
    openTab === 17 ? 
    <div>

<div className="heading flex flex-col text-justify	">
                                            <p className='text-base  text-[#8F8F8F]  max-sm:text-sm' >View and manage accounts assigned specifically to you, ensuring efficient organization and oversight.</p>

                                        </div>
                                        <div className='flex gap-3 mt-[30px]'>

<div className="img" ><img src={avatar} alt="avatar" className='w-[54px] h-[54px]' /></div>
<div className="iname flex flex-col  item_equal	">   <p className='font-semibold	text-base' >Amy Johnson</p><p className='text-sm text-[#8F8F8F]' >@amyj_39</p> </div>
</div>
<div className='flex gap-3 mt-[18px]'>

<div className="img" ><img src={avatar} alt="avatar" className='w-[54px] h-[54px]' /></div>
<div className="iname flex flex-col  item_equal	">   <p className='font-semibold	text-base' >Amy Johnson</p><p className='text-sm text-[#8F8F8F]' >@amyj_39</p> </div>
</div>
    </div>
    :""
}
{openTab  === 18    ? <div>

<div className="heading flex flex-col text-justify	">
                                            <p className='text-base  text-[#8F8F8F] max-sm:text-sm ' >Track and manage members whom you've designated to oversee account activities, ensuring streamlined collaboration.</p>

                                        </div>
                                        <div className='flex gap-3 mt-[30px]'>

<div className="img" ><img src={avatar} alt="avatar" className='w-[54px] h-[54px]' /></div>
<div className="iname flex flex-col  item_equal	">   <p className='font-semibold	text-base' >Amy Johnson</p><p className='text-sm text-[#8F8F8F]' >@amyj_39</p> </div>
</div>

    </div> :"" }
 {/*  */}
                        </div>

                        {/*  */}
                    </div>

                </div>
            </dialog></div>
    )
}

export default Setting