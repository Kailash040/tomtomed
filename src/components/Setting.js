import { useState } from 'react'
import { Icon } from '@iconify/react';
import arrow from '../assets/arrow/arrow.svg'
import avatar from '../assets/Avatar (1).png'
const Setting = () => {
    const [openTab, setOpenTab] = useState(0);
    // 
    // 
    const handleForgetPassword = (e) => {
        e.preventDefault()
    }
    return (
        <div  className='font-roboto' ><button className="" onClick={() => document.getElementById('my_modal_2').showModal()}><Icon icon="ep:setting" className="w-6 h-6 text-white" /></button>
            <dialog id="my_modal_2" className="modal  text-white ">
                <div className="modal-box bg-grey flex p-0  max-w-[1320px] h-[630px]">
                    <div className="left_section bg-black">
                        <form method="dialog " className="flex gap-6 py-6 px-3">
                            {/* if there is a button in form, it will close the modal */}
                            <button className=" p-1 bg-black rounded-full ">

                                <Icon icon="eva:arrow-back-fill" className="w-5 h-5  text-white text-xl	" /></button>
                            <p>Settings</p>
                        </form>


                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 " +
                                (openTab === 0
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px] py-3 rounded-lg	 mr-[18px] "
                                    : " bg-black px-[18px] w-[264px]  py-3 mr-[18px]")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(0);
                            }}

                        >
                            <div className="icons_left flex gap-3 items-center">

                                <Icon icon="material-symbols:settings-account-box-outline" className='w-[23px] h-[23px]' />
                                Account
                            </div>

                            {
                                openTab === 0 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 " +
                                (openTab === 1
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px] py-3 rounded-lg	 mr-[18px] "
                                    : " bg-black px-[18px] w-[264px]   py-3 mr-[18px]")
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
                                Teams
                            </div>
                            {
                                openTab === 1 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 " +
                                (openTab === 2
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px] py-3 rounded-lg	 mr-[18px] "
                                    : " bg-black px-[18px] w-[264px]   py-3 mr-[18px]")
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
                                Passwords & Security
                            </div>
                            {
                                openTab === 2 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 " +
                                (openTab === 3
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px] py-3 rounded-lg	 mr-[18px] "
                                    : " bg-black px-[18px] w-[264px]   py-3 mr-[18px]")
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
                                Display settings
                            </div>
                            {
                                openTab === 3 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 " +
                                (openTab === 4
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px] py-3 rounded-lg	 mr-[18px] "
                                    : " bg-black px-[18px] w-[264px]   py-3 mr-[18px]")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(4);
                            }}

                        >
                            <div className="icons_left flex gap-3 items-center">
                                <Icon icon="material-symbols:privacy-tip-outline" className='w-[23px] h-[23px]' />
                                Privacy
                            </div>
                            {
                                openTab === 4 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>
                        <button
                            className={
                                "   text-base flex items-center gap-3  justify-between mt-2 " +
                                (openTab === 5
                                    ? "text-white bg-[#202020]  px-[18px] w-[264px] py-3 rounded-lg	 mr-[18px] "
                                    : " bg-black px-[18px] w-[264px]   py-3 mr-[18px]")
                            }
                            onClick={e => {
                                e.preventDefault();
                                setOpenTab(5);
                            }}

                        >
                            <div className="icons_left flex gap-3 items-center">
                                <Icon icon="material-symbols-light:help-outline" className='w-[23px] h-[23px]' />
                                Help Center
                            </div>
                            {
                                openTab === 5 ? <img src={arrow} alt="arrow" /> : ""
                            }
                            {/* <Icon icon="iconamoon:arrow-right-2-bold" /> */}
                            {/* <span className="after:content-[]"> </span>/ */}
                        </button>

                    </div>
                    <div className="right_section  w-full">
                        {openTab}
                        <div className="setting_heading flex items-center gap-[18px] bg-[#161414] py-6 px-6">
                            {openTab === 2 ? <Icon icon="streamline:fingerprint-2" className='w-[23px] h-[23px]' /> :
                                // 
                                openTab === 6 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> : openTab === 7 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button> : openTab=== 8 ? <button className='p-1 bg-[#1B1C1B] rounded-full' onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}  ><Icon icon="eva:arrow-back-fill" className='w-5 h-5 ' /></button>:
                                    // 
                                    <Icon icon="material-symbols:settings-account-box-outline" className=' w-[23px] h-[23px]' />}

                            {
                                <h1 className='text-xl	'>{openTab === 0 ? "Account" : openTab === 1 ? "Teams" : openTab === 6 ? "Manage Access" : openTab === 3 ? "Passwords & Security" : openTab === 2 ? "Passwords & Security" : openTab === 7 ? "Change Password" : openTab === 8 ? "Two-Factor Authentication" : ""}</h1>

                            }
                        </div>

                        <div className='flex   mt-[30px] pl-[30px] pr-[50px]'>
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

                                {openTab === 6 ? "" : <button className='flex items-center gap-[18px] justify-between w-full mt-[30px]'>


                                    <p>Add new member</p>
                                    <img src={arrow} alt="arrow" />
                                </button>}

                            </div> : ""}
                            {openTab === 6 ? <div className='flex flex-col   justify-between w-full'>

                                <div className="manage w-full justify-between flex bg-[#1B1C1B] items-center px-[18px] py-2 rounded-xl	 ">
                                    <div className='flex gap-3'>

                                        <div className="img"><img src={avatar} alt="avatar" className='w-[54px] h-[54px]' /></div>
                                        <div className="iname flex flex-col  item_equal	">   <p className='font-semibold	text-base' >Amy Johnson</p><p className='text-sm text-[#8F8F8F]' >@amyj_39</p> </div>
                                    </div>
                                    <div className="arrow">  <img src={arrow} alt="arrow" className='rotate-90' /></div>
                                </div>
                                <div className="box_item  px-[14px]  py-2 mt-[10px]  bg-[#1B1C1B] ">
                                    <div className="box_item1 flex flex-col border-b-2 border-[#2F2F2F]">
                                        <div className="uperbox flex items-center w-full justify-between">
                                            <p className='font-semibold	' >Full Access</p>
                                            <div class="form-control">
                                                <label class="label cursor-pointer">
                                                    <input type="radio" name="radio-10" class="text-white w-6 h-6 checked:bg-red-500" />
                                                </label>
                                            </div>

                                        </div>
                                        <div className="lowerbox flex text-left">
                                            <p className='text-[#8F8F8F] text-[15px] ' >Users with Full Access have complete control over the account settings and content. They can make changes to all aspects of the account, including settings, data, and permissions. This level of access is typically granted to trusted team members or administrators who need comprehensive control over the account.</p>
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
                                            <p className='text-[#8F8F8F] text-[15px] ' >Users with Editor Access can modify and contribute to the content and data within the account, but they may have restrictions on certain settings or administrative functions. Editors can create, edit, and delete content, but they may not have the authority to make changes to account settings or grant access to other users.</p>
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
                                            <p className='text-[#8F8F8F] text-[15px] ' >Removing access from a user means revoking their permission to interact with or manage the account. Once access is removed, the user will no longer be able to perform actions or access resources within the account.</p>
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
                                }} className='flex items-center gap-[18px] justify-between w-full mt-[30px]'>


                                    <p>Two-Factor Authentication</p>
                                    <img src={arrow} alt="arrow" />
                                </button>
                            </div> : ""}
                            {openTab === 7 ? <div>

                                <div className="heading flex flex-col text-justify	">
                                    <p className='text-base  text-[#8F8F8F] ' >It's crucial to regularly update your password to maintain account security.</p>
                                    <p className='text-[#8F8F8F]' >Choose a strong password with at least 8 characters, including a mix of uppercase and lowercase letters, numbers, and special symbols. (!@$%)</p>
                                </div>
                                {/* form */}
                                <form onSubmit={handleForgetPassword} className='mt-2'>
                                    <div className='text-justify'>

                                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                                            <input type="text" placeholder='Current Password' className='py-6 px-3   bg-[#1B1C1B] w-full rounded-xl	text-sm' />
                                        </label>
                                        <label for="password" class="block text-sm mt-1 font-medium leading-6 text-gray-900">
                                            <input type="text" placeholder='New Password' className='py-6 px-3   bg-[#1B1C1B] w-full rounded-xl	text-sm' />
                                        </label>
                                        <label for="password" class="block text-sm mt-1 font-medium leading-6 text-gray-900">
                                            <input type="text" placeholder='Re-enter New Password' className='py-6 px-3   bg-[#1B1C1B] w-full rounded-xl	text-sm' />
                                        </label>
                                        <li className='text-[#B68FE7] mt-3' ><a  >Forgot  Password?</a></li>
                                    </div>
                                    <button className='px-[85px] py-5 signUp rounded-xl	'>Change Password</button>
                                </form>
                            </div> : ""}
 {openTab ===8  ?
 <div>

     <div className="two_fector flex text-justify flex-col">
        <p className='font-normal	text-[#8F8F8F]' >Two-factor authentication adds an extra layer of security to your account by requiring two forms of verification before granting access. </p>
        <p  className='font-normal	text-[#8F8F8F]' >Even if someone knows your password, they won't be able to access your account without the second factor of authentication.</p>
     </div>
     <div className="auth  bg-[#1B1C1B] py-[14px] px-[18px] rounded-xl  mt-6	 ">
        <div  className='flex text-justify  justify-between'>
            <p>SMS Authentication</p>
            <img src={arrow} alt="" />
        </div>
        <div className=' flex text-justify mt-[2px]'>
            <p  className='text-[#8F8F8F]  text-sm' >We will send a code to your mobile number: *******890.</p>
        </div>
     </div>
     <div className="auth  bg-[#1B1C1B] py-[14px] px-[18px] rounded-xl  mt-3	 ">
        <div  className='flex text-justify  justify-between'>
            <p>Google Authentication</p>
            <img src={arrow} alt="" />
        </div>
        <div className=' flex text-justify mt-[2px]'>
            <p  className='text-[#8F8F8F]  text-sm' >A code will be generated at the authentication app</p>
        </div>
     </div>
 </div>
 :""  }


                        </div>
                    </div>

                </div>
            </dialog></div>
    )
}

export default Setting