import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../actions/users';

import { TbBrandWechat } from "react-icons/tb";

export const Navbar = () => {

 const { loggedIn, user } = useSelector((state) => state.usersReducer);
 console.log(user, "user")

 const dispatch = useDispatch();
//  const navigate = useNavigate();

 const handleLogout = () => {
  fetch('/logout', {
    method: 'DELETE',
  })
  dispatch(logoutUser());
  // navigate('/login')
 }


 return (
  <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center">
      <TbBrandWechat style={{ fontSize: 50, color: 'green' }}/>
     {/* <img src="https://w7.pngwing.com/pngs/683/766/png-transparent-computer-icons-livechat-online-chat-desktop-others-miscellaneous-angle-text-thumbnail.png" className="h-8 mr-3" alt="Chat Logo" /> */}
     <span href="/" className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">&emsp;Say My Aim Chat</span>
    </a>
     
     &emsp;
     &emsp;
     <NavLink to="/chatroom">Chatroom</NavLink>
     &emsp;
     <NavLink to="/">Home</NavLink>
    <button 
    data-collapse-toggle="navbar-default" 
    type="button" 
    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
    aria-controls="navbar-default" 
    aria-expanded="false">
     <span className="sr-only">Open main menu</span>
     <svg 
     className="w-6 h-6" 
     aria-hidden="true" 
     fill="currentColor" 
     viewBox="0 0 20 20" 
     xmlns="http://www.w3.org/2000/svg">
      <path 
     fillRule="evenodd" 
     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
     clipRule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
     <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {user && user.id ? (
       <>
        Welcome, {user.username}! &emsp;&emsp;
       </>)
       : (null)}

       { loggedIn ? (
         <NavLink to="/logout" onClick={handleLogout }>Logout</NavLink>)
         : (
          <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          </>
         )}
      {/* <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Login</a>
        </li> */}
     </ul>
    </div>
   </div>
  </nav>
 )
}
