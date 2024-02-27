import {useState} from 'react'
import { Icon } from '@iconify/react';
import userComment from '../assets/Ellipse 218.png'
import { BiMessageAlt } from "react-icons/bi";
import userReply from '../assets/Ellipse 219.png'
const Comments = ({value,setShowComment}) => {
  const  [showReply,setShowReply] =useState(false)
  const handleShowReply =()=>{
    setShowReply(true)
    // setShowComment(true)
  }
  return (
    <>
   {
    showReply === false ?   <div className='comment_section'>
    <div className="top_section pb-3   px-[30px]  border-x-2 border-[#171717]">
     <div className="button flex items-center gap-[18px] ">
         <button
        onClick={e => {
         e.preventDefault();
         setShowComment(false);
     }}
         className='list-none  rounded-full p-1 bg-grey' ><Icon icon="eva:arrow-back-fill" className='text-white'  /></button>
         <p className='font-semibold	text-white' >Comments  
          <span className='text-[#8F8F8F]' >
         (439)
         </span>
       </p>
     </div>
    </div>
    <div className="comment_list">

   
    <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
<div className="comment_item">
 <div className="details_user flex justify-between">
     <div className="name">
         <p className="name font-bold text-white text-base	">Richa Singh</p>
         <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
     </div>
     <div className="dp">
<img src={userComment} alt="user" className='w-[38px] h-[38px]' />
     </div>
 </div>
 <div className="comment w-[540px] ">
     <p className='text-[#F5F5F5] font-normal leading-5		'  >Owners of dogs will have noticed that, if you provide them with food and water and shelter and affection, they will think you are god. Whereas owners of cats are compelled to realize that, if you provide them with food and water and shelter and affection, they draw the conclusion that they are gods.</p>
 </div>
 <div className="post_status flex  justify-between  mt-2">
               <div className="post_status flex gap-4">
                 <div className="like_status flex  gap-1 items-center">
                   <button
                 
                   >

                   <BiMessageAlt className="w-6 h-6 text-[#8F8F8F]	" />
                   </button>
                   {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                   <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                 </div>
                 <div className="like_status  flex  gap-1 items-center">
                   {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                   <Icon icon="icon-park-outline:like" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                 </div>

                 <div className="like_status flex gap-1 items-center">
                   <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-[#8F8F8F]	" />

                   <p className="text-[#8F8F8F] text-sm font-medium">4</p>
                 </div>
                 <div className="like_status flex  gap-1 items-center">
                   {/* <Icon icon="grommet-icons:view" /> */}
                   <Icon icon="grommet-icons:view" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">34</p>
                 </div>
               </div>
             
             </div>
             {/* show comment */}
             <button 
             onClick={handleShowReply}
             className='text-xs	text-[#8F8F8F]' >You replied to this comment</button>
</div>

    </div>
    <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
<div className="comment_item">
 <div className="details_user flex justify-between">
     <div className="name">
         <p className="name font-bold text-white text-base	">Richa Singh</p>
         <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
     </div>
     <div className="dp">
<img src={userComment} alt="user" className='w-[38px] h-[38px]' />
     </div>
 </div>
 <div className="comment">
     <p className='text-[#F5F5F5] font-normal leading-5		'  >The post we all need! That’s a beautiful neko </p>
 </div>
 <div className="post_status flex  justify-between  mt-2">
               <div className="post_status flex gap-4">
                 <div className="like_status flex  gap-1 items-center">
                   <button
                 
                   >

                   <BiMessageAlt className="w-6 h-6 text-[#8F8F8F]	" />
                   </button>
                   {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                   <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                 </div>
                 <div className="like_status  flex  gap-1 items-center">
                   {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                   <Icon icon="icon-park-outline:like" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                 </div>

                 <div className="like_status flex gap-1 items-center">
                   <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-[#8F8F8F]	" />

                   <p className="text-[#8F8F8F] text-sm font-medium">4</p>
                 </div>
                 <div className="like_status flex  gap-1 items-center">
                   {/* <Icon icon="grommet-icons:view" /> */}
                   <Icon icon="grommet-icons:view" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">34</p>
                 </div>
               </div>
             
             </div>
             {/* show comment */}
             <button     onClick={handleShowReply} className='text-xs	text-[#8F8F8F]' >You replied to this comment</button>
</div>

    </div>
    <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
<div className="comment_item">
 <div className="details_user flex justify-between">
     <div className="name">
         <p className="name font-bold text-white text-base	">Richa Singh</p>
         <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
     </div>
     <div className="dp">
<img src={userComment} alt="user" className='w-[38px] h-[38px]' />
     </div>
 </div>
 <div className="comment">
     <p className='text-[#F5F5F5] font-normal leading-5		'  >The post we all need! That’s a beautiful neko </p>
 </div>
 <div className="post_status flex  justify-between  mt-2">
               <div className="post_status flex gap-4">
                 <div className="like_status flex  gap-1 items-center">
                   <button
                 
                   >

                   <BiMessageAlt className="w-6 h-6 text-[#8F8F8F]	" />
                   </button>
                   {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                   <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                 </div>
                 <div className="like_status  flex  gap-1 items-center">
                   {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                   <Icon icon="icon-park-outline:like" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                 </div>

                 <div className="like_status flex gap-1 items-center">
                   <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-[#8F8F8F]	" />

                   <p className="text-[#8F8F8F] text-sm font-medium">4</p>
                 </div>
                 <div className="like_status flex  gap-1 items-center">
                   {/* <Icon icon="grommet-icons:view" /> */}
                   <Icon icon="grommet-icons:view" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">34</p>
                 </div>
               </div>
             
             </div>
             {/* show comment */}
             <button    onClick={handleShowReply} className='text-xs	text-[#8F8F8F]' >You replied to this comment</button>
</div>

    </div>
    </div>
    <div className="comment_input w-full flex relative  items-center py-5 px-[27px] bg-[#000000]   border-x-2 border-[#171717] border-b-2">
     <div className="input_box w-full"><input type="text"  className='w-full bg-[#232323] text-white px-[23px] py-[18px] rounded-[30px]' placeholder='Write your comment here... ' /></div>
     <div className="button_box p-2 bg-[#1B1C1B] absolute right-9 rounded-full ">
     <Icon icon="iconamoon:send-thin" className='w-6 h-6 text-white ' />
     </div>
    </div>
 </div> :<div className='comment_section'>
    <div className="top_section pb-3   px-[30px]  border-x-2 border-[#171717]">
     <div className="button flex items-center gap-[18px] ">
         <button
        onClick={e => {
         e.preventDefault();
         setShowReply(false);
     }}
         className='list-none  rounded-full p-1 bg-grey' ><Icon icon="eva:arrow-back-fill" className='text-white'  /></button>
         <p className='font-semibold	text-white' >Replies 
          <span className='text-[#8F8F8F]' >
         (439)
         </span>
       </p>
     </div>
    </div>
    <div className="comment_list">

   
    <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
<div className="comment_item">
 <div className="details_user flex justify-between">
     <div className="name">
         <p className="name font-bold text-white text-base	">Samuel Smith</p>
         <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
     </div>
     <div className="dp">
<img src={userReply} alt="user" className='w-[38px] h-[38px]' />
     </div>
 </div>
 <div className="comment w-[540px] ">
     <p className='text-[#F5F5F5] font-normal leading-5		'  >The post we all need! That’s a beautiful neko </p>
 </div>
 <div className="post_status flex  justify-between  mt-2">
               <div className="post_status flex gap-4">
                 <div className="like_status flex  gap-1 items-center">
                   <button
                 
                   >

                   <BiMessageAlt className="w-6 h-6 text-[#8F8F8F]	" />
                   </button>
                   {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                   <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                 </div>
                 <div className="like_status  flex  gap-1 items-center">
                   {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                   <Icon icon="icon-park-outline:like" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                 </div>

                 <div className="like_status flex gap-1 items-center">
                   <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-[#8F8F8F]	" />

                   <p className="text-[#8F8F8F] text-sm font-medium">4</p>
                 </div>
                 <div className="like_status flex  gap-1 items-center">
                   {/* <Icon icon="grommet-icons:view" /> */}
                   <Icon icon="grommet-icons:view" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">34</p>
                 </div>
               </div>
             
             </div>
             {/* show comment */}
             
</div>

    </div>
    <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
<div className="comment_item">
 <div className="details_user flex justify-between">
     <div className="name">
         <p className="name font-bold text-white text-base	">Richa Singh</p>
         <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
     </div>
     <div className="dp">
<img src={userReply} alt="user" className='w-[38px] h-[38px]' />
     </div>
 </div>
 <div className="comment">
     <p className='text-[#F5F5F5] font-normal leading-5		'  >Yes </p>
 </div>
 <div className="post_status flex  justify-between  mt-2">
               <div className="post_status flex gap-4">
                 <div className="like_status flex  gap-1 items-center">
                   <button
                 
                   >

                   <BiMessageAlt className="w-6 h-6 text-[#8F8F8F]	" />
                   </button>
                   {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                   <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                 </div>
                 <div className="like_status  flex  gap-1 items-center">
                   {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                   <Icon icon="icon-park-outline:like" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                 </div>

                 <div className="like_status flex gap-1 items-center">
                   <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-[#8F8F8F]	" />

                   <p className="text-[#8F8F8F] text-sm font-medium">4</p>
                 </div>
                 <div className="like_status flex  gap-1 items-center">
                   {/* <Icon icon="grommet-icons:view" /> */}
                   <Icon icon="grommet-icons:view" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">34</p>
                 </div>
               </div>
             
             </div>
             {/* show comment */}
             
</div>

    </div>
    <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
<div className="comment_item">
 <div className="details_user flex justify-between">
     <div className="name">
         <p className="name font-bold text-white text-base	">Richa Singh</p>
         <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
     </div>
     <div className="dp">
<img src={userComment} alt="user" className='w-[38px] h-[38px]' />
     </div>
 </div>
 <div className="comment">
     <p className='text-[#F5F5F5] font-normal leading-5		'  >Yes</p>
 </div>
 <div className="post_status flex  justify-between  mt-2">
               <div className="post_status flex gap-4">
                 <div className="like_status flex  gap-1 items-center">
                   <button
                 
                   >

                   <BiMessageAlt className="w-6 h-6 text-[#8F8F8F]	" />
                   </button>
                   {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                   <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                 </div>
                 <div className="like_status  flex  gap-1 items-center">
                   {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                   <Icon icon="icon-park-outline:like" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                 </div>

                 <div className="like_status flex gap-1 items-center">
                   <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-[#8F8F8F]	" />

                   <p className="text-[#8F8F8F] text-sm font-medium">4</p>
                 </div>
                 <div className="like_status flex  gap-1 items-center">
                   {/* <Icon icon="grommet-icons:view" /> */}
                   <Icon icon="grommet-icons:view" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">34</p>
                 </div>
               </div>
             
             </div>
             {/* show comment */}
            
</div>

    </div>
    <div className="comment_section  py-3 border-2 border-[#171717] px-[30px]">
<div className="comment_item">
 <div className="details_user flex justify-between">
     <div className="name">
         <p className="name font-bold text-white text-base	">Richa Singh</p>
         <p className='time  text-[#8F8F8F]  text-sm'>2m ago</p>
     </div>
     <div className="dp">
<img src={userComment} alt="user" className='w-[38px] h-[38px]' />
     </div>
 </div>
 <div className="comment">
     <p className='text-[#F5F5F5] font-normal leading-5		'  >The post we all need! That’s a beautiful neko


</p>
 </div>
 <div className="post_status flex  justify-between  mt-2">
               <div className="post_status flex gap-4">
                 <div className="like_status flex  gap-1 items-center">
                   <button
                 
                   >

                   <BiMessageAlt className="w-6 h-6 text-[#8F8F8F]	" />
                   </button>
                   {/* <img src={comment} alt="comment" className="w-6 h-6	" /> */}
                   <p className="text-[#8F8F8F] text-sm font-medium">14</p>
                 </div>
                 <div className="like_status  flex  gap-1 items-center">
                   {/* <img src={like} alt="like" className="w-6 h-6	" /> */}
                   <Icon icon="icon-park-outline:like" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">124</p>
                 </div>

                 <div className="like_status flex gap-1 items-center">
                   <Icon icon="fluent:share-ios-24-filled" className="w-6 h-6 text-[#8F8F8F]	" />

                   <p className="text-[#8F8F8F] text-sm font-medium">4</p>
                 </div>
                 <div className="like_status flex  gap-1 items-center">
                   {/* <Icon icon="grommet-icons:view" /> */}
                   <Icon icon="grommet-icons:view" className="w-6 h-6 text-[#8F8F8F]	" />
                   <p className="text-[#8F8F8F] text-sm font-medium">34</p>
                 </div>
               </div>
             
             </div>
             {/* show comment */}
            
</div>

    </div>
    </div>
    <div className="comment_input w-full flex relative  items-center py-5 px-[27px] bg-[#000000]   border-x-2 border-[#171717] border-b-2">
     <div className="input_box w-full"><input type="text"  className='w-full bg-[#232323] text-white px-[23px] py-[18px] rounded-[30px]' placeholder='Reply to Samuel Smith... ' /></div>
     <div className="button_box p-2 bg-[#1B1C1B] absolute right-9 rounded-full ">
     <Icon icon="iconamoon:send-thin" className='w-6 h-6 text-white ' />
     </div>
    </div>
 </div>
   }
   

    
    </>
  )
}

export default Comments