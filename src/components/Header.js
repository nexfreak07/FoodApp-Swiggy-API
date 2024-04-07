import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { OnlineContext } from "../context/onlineContext";
import {useSelector} from "react-redux"
export const Header = () => {
  const [btnName , setBtnName] = useState("Login")

  const status = useContext(OnlineContext);


  // Subscribing to the store using selector
  const cartStore = useSelector((store)=> store.cart.items)
    return (
      <div className="flex justify-between items-center h-30 bg-pink-100 shadow-lg sticky top-0 z-30">
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

             <li className="px-4 text-gray-1000 hover:text-gray-500 font-medium transition duration-300"><Link to="/">Home</Link></li>
           <li  className="px-4 text-gray-1000 hover:text-gray-500 font-medium transition duration-300"><Link to="/about">About us</Link></li>
            <li className="px-4 px-4 text-gray-1000 hover:text-gray-500 font-medium transition duration-300"><Link to="/contact">Contact us</Link></li>
            <li className="px-4 px-4 text-gray-1000 hover:text-gray-500 font-medium transition duration-300"><Link to="/cart">Cart - {cartStore.length}</Link></li>
            <button className="px-4 px-4 text-gray-1000 hover:text-gray-500 font-medium transition duration-300" onClick={()=>{
              btnName === 'Login' ? setBtnName("Logout") : setBtnName("Login")
            }}>{btnName} </button>
          </ul>
        </nav>
      </div>
    );
  };