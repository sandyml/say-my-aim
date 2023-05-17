import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { loadAddMessage } from './actions/messages';

function App() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCurrentUser(setLoading));
    dispatch(loadAddMessage(setLoading));
  }, [dispatch])

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
          <Route path="/chatroom" element={<Chatroom />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      }
    </Router>
  );
}

export default App;
