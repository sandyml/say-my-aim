import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllMessages } from '../../actions/messages';
import { ChatForm } from './ChatForm';
import { Message } from './Message';

// chatbox / chatroom 
// add currentUser on the side next to Instant Message
export const Chatroom = () => {
  const messages = useSelector((state) => state.messagesReducer); 
  const dispatch = useDispatch();

  const messageCards = messages.map((message) => 
  <Message key={message.id} message={message} />
  );

  useEffect(() => {
    dispatch(loadAllMessages())
  }, [dispatch])

  return (
    <div>
      <center>
        <h1>Say My Aim Chatroom</h1>
        <div className="box-content h-80 w-50 p-4 border-4 border-gray-400 bg-gray-200">
        <div className=" overflow-y-auto h-full w-full bg-gray-400">
          <h3>Instant Messages</h3>
          {messageCards}
          </div>
        </div>
          <ChatForm />
      </center>
    </div>
  )
}
