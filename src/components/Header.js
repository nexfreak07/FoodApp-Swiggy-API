import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { OnlineContext } from "../context/onlineContext";
export const Header = () => {
  const [btnName , setBtnName] = useState("Login")

  const status = useContext(OnlineContext);
    return (
      <div className="flex justify-between items-center h-20 bg-pink-100 shadow-lg sticky top-0 z-30">
        <div className="logo-container">
          <img
            src={LOGO_URL}
            alt="NexFood"
            className="w-[108px]"
          />
        </div>
        <nav className="flex items-center">
          <ul className="flex">
          <li className="px-4"> Status:  {status ? "🟢": "🔴"}</li>

             <li className="px-4"><Link to="/">Home</Link></li>
           <li  className="px-4"><Link to="/about">About us</Link></li>
            <li className="px-4"><Link to="/contact">Contact us</Link></li>
            <li className="px-4">Cart</li>
            <button className="px-4" onClick={()=>{
              btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </nav>
      </div>
    );
  };