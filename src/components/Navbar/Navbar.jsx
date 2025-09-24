import React from 'react';
import navImg from "../../assets/logo.png";
import coinImg from "../../assets/dollar1.png"

const Navbar = () => {
    return (
       
            <div className="navbar max-w-[1200px] mx-auto">
        
        <div className="flex-1">
          <a className=" text-xl">
            <img className="w-[60px] h-[60px]" src={navImg} alt="" />
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-1">6000000000</span> <span>Coin </span>
          <span className="mr-1 ml-1" ><img src={coinImg} alt="" /></span>
        </div>
      </div>
      
    );
};

export default Navbar;