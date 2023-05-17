import React from 'react';
import { useSelector } from 'react-redux';

export const Message = ({ message }) => {
  console.log(message, "message")
  
  const { user } = useSelector((state) => state.usersReducer);
  const errors = useSelector((state) => state.errorsReducer);
  console.log(user, "user")
 // debugger

 return (
  <div>
   <p className='flex content-end'>
    <span>
    {/* <span style={{ color: user.username === message.user.username ? "red" : "blue" }}> */}
     {user.username}
    </span>&nbsp;
    says: &nbsp;
    {/* {message.id} */}
    {message.content}
    </p>
    {errors}
  </div>
 )
}
