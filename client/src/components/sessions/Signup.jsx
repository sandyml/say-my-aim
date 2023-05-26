import React, { useState } from 'react';
import {
 useDispatch,
 useSelector
} from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signup } from '../../actions/users';

export const Signup = () => {
 const [showPassword, setShowPassword] = useState(false);

 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");

 const errors = useSelector((state) => state.errorsReducer);

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const togglePassword = () => {
  setShowPassword(!showPassword)
 };

 // const [formData, setFormData] = useState({
 //  username: "",
 //  password: "",
 // })

 const handleSubmit = (e) => {
  e.preventDefault();
  // const user = { username, password }
  dispatch(signup({ username, password }, navigate))
 };


 // const handleChange = (e) => {
 //  setFormData({
 //   ...formData,
 //   [e.target.name]: e.target.value
 //  })
 // }

 return (
  <div className="flex h-screen justify-center items-center flex-col">
   <div className="w-full h-screen bg-[url('https://wallpaperaccess.com/full/7399735.jpg')] bg-cover bg-center">
    <div className="w-full h-full flex justify-center items-center backdrop-brightness-100">
     <center>
      <br />
      <br />
      <h1>Create An Account</h1><br />
      <div className="w-full max-w-xs">
       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
         <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username">
          Screen Name
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
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // label={showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          type={showPassword ? "text" : "password"}
         />
        </div>
        <input className='checkbox' onClick={togglePassword} type="checkbox" id="showPassword" />
        <label className='checkbox' htmlFor="showPassword">&nbsp;Show password</label>

        <div className="flex items-center justify-between">
         <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          value="Login">
          Signup
         </button>

         <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/login">
          Have an account?
         </a>
        </div>
       </form>
       <div className='bg-white rounded-sm'>
       {errors.length > 0 && (
        <ul style={{ color: "red" }}>
         {errors.map((error) => (
          <li
           id='errors'
           component={'li'}
           fontSize={13}
           variant='body2'
           key={error}>
           {error}
          </li>
         ))}
        </ul>
       )}
       </div><br/>
       {/* <div>{errors}</div> */}
       <p className="text-center text-black text-xs">
        &copy;2023 Sandra Yun. All Rights Reserved | Github
       </p>
      </div>
     </center>
    </div>
   </div>
  </div>
 )
};