import React from "react";
import loginbutton from "../images/Loginbutton.png";
import TableLeaderboard from "../components/Leaderboard/TableLeaderboard";
import TopUserDetailsLeaderboard from "../components/Leaderboard/TopUserDetailsLeaderboard";
import logo from "../images/logo.svg";
import logo_text from "../images/logo_text.svg";
function Loginpage(){
    const handleClick = () => {
        window.location = "http://localhost:5000/auth/42login";
      };
    return (<>
      <div className="sidebar-header flex items-center justify-center h-[70px]">
          <img className="" src={logo} alt="logo" />
          <img className="" src={logo_text} alt="logo-text" />
        </div>
        <div className="login-container flex justify-center items-center">
          <button className=" btn-outline-dark login-button rounded-3xl " style={{
        background: `url(${loginbutton})`,
        width: '328px',
           
        height: '50px',
      }}onClick={handleClick}>
                
            </button>
        </div>
        </>);
}


export default Loginpage;
