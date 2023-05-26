import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadAllMessages } from '../../actions/messages';
import { NavbarContainer } from '../navigation/NavbarContainer';
import { ChatForm } from './ChatForm';
import { Message } from './Message';
import { useNavigate } from 'react-router-dom';

// import { BsBatteryFull } from "react-icons/bs";

// TODO: MOVE ws in its own reducer and action 

// chatbox / chatroom 
// add currentUser on the side next to Instant Message
export const Chatroom = ({ loading }) => {
  // export const Chatroom = ({ ws }) => {
  const messages = useSelector((state) => state.messagesReducer);
  const { user, loggedIn } = useSelector((state) => state.usersReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(!loading && !loggedIn) {
      navigate('/login')
    }
  }, [loading, loggedIn, navigate]);

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
          <NavbarContainer />
          {/* <h1 className='fixed top-0 left-0 right-0'>Say My Aim Chatroom</h1> */}
          <div className="box-content h-96 max-h-full w-50 p-1 border-none border-blue-900 bg-blue-700 rounded-sm">
            <div className=" overflow-y-auto h-full w-full bg-gray-400">
              <h3
                style={{
                  color: 'white'
                }}
                className=' h-6 bg-gradient-to-r from-blue-900 to-blue-950 sticky top-0'
              >{user.username} - Instant Messages
                {/* <button className='-0'>X</button> */}
              </h3>
              <div className='bg-amber-100 sticky top-5'>
                File Edit Insert People
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                Say My Aim Msg's Level: 100%
                {/* <BsBatteryFull/> */}
              </div>
              <hr className=" h-px bg-gray-200 border-0 dark:bg-gray-700 shadow-lg" />
              <div className='bg-white border-none border-white'>
                {messageCards}
              </div>
            </div>
            <ChatForm loading={loading} />
          </div>
        </div>
      </div>
    </div>
  )
}
