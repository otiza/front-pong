import React, { useState } from "react";
import { useContext, useEffect} from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Leaderboard from "./pages/Leaderboard";
import Platform from "./pages/Platform";
import { Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import axios from 'axios';
import Loginpage from "./pages/Login";

const checkAuth = async () => {
  try {
    const response = await axios.get('http://localhost:5000/users/me', {
      withCredentials: true,
    });
    return true;
  } catch (error) {
    if (error.response.status === 401) {
      return false;
    }
    throw error;
  }
};

function App() {

  // OPEN SIDE BAR ON HOVER
  const [isHovering, setIsHovering] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    checkAuth().then((result) => setIsAuthenticated(result));
  }, []);
  return (<div className="App">
  {/* RENDER SIDEBAR AND MAIN CONTENT ONLY FOR AUTHENTICATED USERS */}
  {isAuthenticated && (
    <div className="flex">
      {/* SIDEBAR */}
      <Sidebar isHovering={isHovering} setIsHovering={setIsHovering} />

      <div
        className={
          isHovering
            ? "flex w-5/6 transition"
            : "flex w-full transition"
        }
      >
        <div className="main-content px-[30px] py-[34px] w-4/5">
          {/* ROUTES */}
          <Routes>
            <Route path="/" element={<Platform />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user/*" element={<Profile />} />
          </Routes>
        </div>

        {/* CHAT BOX */}
        <div className="chat-box w-1/5 ">Chat box</div>
      </div>
    </div>
  )}

  {/* RENDER LOGIN PAGE FOR NON-AUTHENTICATED USERS */}
  {!isAuthenticated && <Loginpage />}
</div>
  );
}

export default App;
