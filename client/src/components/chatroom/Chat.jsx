import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllMessages } from '../../actions/messages';
import { ChatForm } from './ChatForm';
import { Message } from './Message';

// TODO: MOVE ws in its own reducer and action 

// chatbox / chatroom 
// add currentUser on the side next to Instant Message
export const Chatroom = () => {
  // export const Chatroom = ({ ws }) => {
  const messages = useSelector((state) => state.messagesReducer);
  const { user } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  const messageCards = messages.map((message) =>
    <Message key={message.id} message={message} />
  );

  useEffect(() => {
    dispatch(loadAllMessages())
  }, [dispatch]);

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      <div className="w-full h-screen bg-[url('https://wallpaperaccess.com/full/7399735.jpg')] bg-cover bg-center">
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-100">
          <center>
            <h1 className='fixed top-0 left-0 right-0'>Say My Aim Chatroom</h1>
            <div className="box-content h-80 w-50 p-1 border-none border-gray-400 bg-gray-200">
              {/* <div className="box-content h-80 w-50 p-4 border-4 border-gray-400 bg-gray-200"> */}
              <div className=" overflow-y-auto h-full w-full bg-gray-400">
                <h3 
                style={{ 
                  color: 'white'
                }}
                className=' h-6 bg-gradient-to-r from-blue-900 to-blue-950 sticky top-0'
                >{user.username} - Instant Messages
                {/* <button className='-0'>X</button> */}
                </h3>
                {messageCards}
              </div>
            </div>
            <ChatForm />
          </center>
        </div>
      </div>
    </div>
  )
}
