import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Chatroom } from './components/chatroom/Chat';
import { Navbar } from './components/navigation/Navbar';
import { Login } from './components/sessions/Login';
import { Logout } from './components/sessions/Logout';
import { Signup } from './components/sessions/Signup';
import { Home } from './components/static/Home';

function App() {
  return (
    // <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
