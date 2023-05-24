import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../actions/users';
// import { BiKey } from "react-icons/bi";
import { SlWrench } from "react-icons/sl";
import { TbHomeQuestion } from "react-icons/tb";
import { GoSignOut } from "react-icons/go";


export const NavbarContainer = () => {
 const { user } = useSelector((state) => state.usersReducer);

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleLogout = () => {
  fetch('/logout', {
   method: 'DELETE',
  })
  dispatch(logoutUser());
  navigate('/login')
 }

 return (
  <div className='p-10'>
   {/* <h1 className='fixed top-0 left-0 right-0'>Say My Aim Chatroom</h1>  */}
   <div className="box-content h-96 w-64 p-1 border-none border-blue-800 bg-blue-700 rounded-sm">
    <div className=" overflow-y-auto h-full w-full bg-amber-100 shadow-lg" >
     <h3 style={{ color: 'white' }}
      className=' h-6 bg-gradient-to-r from-blue-800 to-blue-900 sticky top-0 shadow-lg' >
      &nbsp;Sign On
     </h3>
     <img
      className='object-scale-down h-48 w-96 p-1'
      src="https://media.wired.com/photos/6291474c9b979f5548e97c98/master/w_2560%2Cc_limit/AOL-AIM-Bring-It-Back-Gear.jpg"
      alt="aim guy"
      srcset="" />
     <hr className=" h-px bg-gray-200 border-0 dark:bg-gray-700" />
     <div>
      <ul className='p-2 border'>
       ScreenName
       {/* <BiKey className='text-red-900 text-4xl'/> */}
       <ul className='box-content h-6 w-50 p-1 border-none border-white bg-gray-200 shadow-lg'>
        {user.username}
       </ul>
      </ul>
     </div>
     <div class="grid grid-cols-4 gap-4 p-2">
      <div
       className='p-2 w-15 h-10'>
       <TbHomeQuestion className='text-green-900 text-3xl' />
       Help
      </div>
      <div
       className='p-2 w-15 h-10'>
       <SlWrench className='text-amber-400 text-3xl' />
       Setup
      </div>
      <div
       className='p-2 w-15 h-10 shadow-md col-end-7 col-span-2 hover:bg-stone-500 active:bg-stone-600 focus:outline-none focus:ring focus:ring-stone-300'
       onClick={handleLogout}>
       <GoSignOut className='text-black text-3xl' />
       Sign Out
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
