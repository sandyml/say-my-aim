import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loadLogin } from '../../actions/users';

export const Login = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

//  const errors = useSelector((state) => state.errorsReducer);

 const dispatch = useDispatch();
 const navigate = useNavigate();

 // const [formData, setFormData] = useState({
 //  username: "",
 //  password: "",
 // })

 const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(loadLogin({ username, password }, navigate))
 };


 // const handleChange = (e) => {
 //  setFormData({
 //   ...formData,
 //   [e.target.name]: e.target.value
 //  })
 // }

 return (
  <center>
   <br/>
   <br/>
   <h1>Login</h1><br/>
   <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
     <div className="mb-4">
      <label 
      className="block text-gray-700 text-sm font-bold mb-2" 
      htmlFor="username">
       Username
      </label>
      <input 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
      id="username" 
      type="text" 
      placeholder="Username" 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />
     </div>
     <div className="mb-6">
      <label 
      className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
       Password
      </label>
      <input 
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="password" 
      type="password" 
      placeholder="Password" 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
     </div>
     <div className="flex items-center justify-between">
      <button 
      onClick={handleSubmit}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
      type="button"
      value="Login">
       Login
      </button>

      {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" 
      href="#">
      Forgot Password?
    </a> */}
     </div>
    </form>
    {/* <div>{errors}</div> */}
    <p className="text-center text-gray-500 text-xs">
     &copy;2023 Sandra Yun. All Rights Reserved | Github
    </p>
   </div>
  </center>
 )
}