import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { loadAddMessage } from '../../actions/messages';
import { headers, ws } from '../../Global';


export const ChatForm = () => {
  const [message, setMessage] = useState("")

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('clicked handleSubmit text!')
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

    if (data.type === "ping") return;
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;

    const message = JSON.parse(data.message);
    dispatch(loadAddMessage(message));
  };

  return (
    <form onClick={handleSubmit}>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your post..." />
      <div className='p-1'>

        <button
          type="submit"
          className=" inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-sm focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
          Submit
        </button>
      </div>
    </form>

  )
}