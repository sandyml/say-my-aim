import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadAddMessage } from '../../actions/messages';
import { headers, ws } from '../../Global';


export const ChatForm = () => {
// export const ChatForm = ({ ws }) => {
  const [message, setMessage] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked handleSubmit text!')
    // const messageObj = { content: message };
    fetch("/messages", {
      method: "POST",
      headers,
      body: JSON.stringify({ 
        content: message 
      })
    });
    setMessage("");
  }

  ws.onmessage = (e) => {

    const data = JSON.parse(e.data);

    if(data.type === "ping") return;
    if(data.type === "welcome") return;
    if(data.type === "confirm_subscription") return;

    const message = JSON.parse(data.message);
    dispatch(loadAddMessage(message));
  };

  return (
    <form onSubmit={ handleSubmit } >
      <input 
        className="border-solid border-4 border-gray-600"
        type="text" 
        name="message" 
        id="message" 
        value={message} 
        onChange={ (e) => setMessage(e.target.value)}
      />
      <input type="submit" value="Send" />
    </form>
  )
}