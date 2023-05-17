import React from 'react';
import { useSelector } from 'react-redux';
import { ChatForm } from './ChatForm';
import { Message } from './Message';
// chatbox / chatroom 
// add currentUser on the side next to Instant Message
export const Chatroom = () => {
  const messages = useSelector((state) => state.messagesReducer);

  const messageCards = messages.map((message) => 
  <Message key={message.id} message={message} />
  );

  return (
    <div>
      <center>
        <h1>Chatroom</h1>
        <div className="box-content h-80 w-50 p-4 border-4 border-gray-400 bg-gray-200">
        <div className=" overflow-y-auto h-full w-full bg-gray-400">
          <h3>Instant Message</h3>
          {messageCards}
          </div>
        </div>
          <ChatForm />
      </center>
    </div>
  )
}
