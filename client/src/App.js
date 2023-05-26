import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes } from 'react-router-dom';

import { loadCurrentUser } from './actions/users';

import { Navbar } from './components/navigation/Navbar';
import { Chatroom } from './components/chatroom/Chat';
import { Logout } from './components/sessions/Logout';
import { Signup } from './components/sessions/Signup';
import { Login } from './components/sessions/Login';
import { Home } from './components/static/Home';
import { ws } from './Global';

// const ws = new WebSocket('ws://localhost:3001/cable') 

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch(); 

  // onupen acts like a useEffect for ws creating connecting with ws 
  // runs automatically (onopen) 
  // ws async (obj) setting to attribute(onopen) to a function 
   ws.onopen = () => {    
    console.log('You are connected to the WebSocket Server')
    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          // id: user.id, 
          id: 2,
          channel: "MessagesChannel" // coming from channel folder in subscribe section 
        })
      })
    )
  }

  useEffect(() => {
    dispatch(loadCurrentUser(setLoading));
    // dispatch(loadAllMessages());
    // dispatch(loadAddMessage(setLoading));
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      { loading ?
        <div>
          <center>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
              alt="loading" />
          </center>
        </div> :
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatroom" element={<Chatroom loading={loading} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      }
    </Router>
  );
}

export default App;
