import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loadAddMessage } from '../../actions/messages';

export const ChatForm = () => {
 const [message, setMessage] = useState("");

 const dispatch = useDispatch();

 const handleSubmit = (e) => {
  e.preventDefault();
  // const messageObj = {content: message}
  dispatch(loadAddMessage({content: message}))   
  // console.log('message sent! clicked');
  setMessage("") // clear state after submit 
 }

 return (
  <div>
   <form>
    <input
     className="border-solid border-4 border-gray-600"
     type="text"
     value={message}
     onChange={(e) => setMessage(e.target.value)}
    />
   </form>
   <button
    onClick={handleSubmit}
    type="submit">Send</button>
  </div>
 )
}
