import React from 'react';
import { useSelector } from 'react-redux';

export const Message = ({ message }) => {
  // console.log(message, "message")

  const { user } = useSelector((state) => state.usersReducer);
  const errors = useSelector((state) => state.errorsReducer);
  // console.log(user, "user")
  // debugger

  return (
    <div>
      <p className='flex content-end'>
        <span
          style={{ color: user.username === message.user.username ? "red" : "blue" }}
        >
          {message.user.username}
        </span>&nbsp;
        says: &nbsp;
        {/* {message.id} */}
        {message.content}
      </p>
      {/* {errors} */}
      {/* 
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
        )} */}
    </div>
  )
}
