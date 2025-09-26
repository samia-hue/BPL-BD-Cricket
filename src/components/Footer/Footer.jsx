import React from "react";

import navImg from "../../assets/logo.png";
import FooterHead from "./FooterHead";

const Footer = () => {
  return (
    <footer className="bg-black w-full  mt-[100px]  h-auto ">
    
  
     <FooterHead></FooterHead>
   
    {/* Main Footer */}
  <div className="max-w-[1200px] mx-auto  gap-10 px-6 py-16 text-white relative z-10">
    <div className="flex items-center justify-center">
      <img src={navImg} alt="" />
    </div>
    {/* About */}
<div className="grid grid-cols-3 mt-3 justify-around">
      <div>
      <h2 className="text-lg font-semibold mb-4">About Us</h2>
      <p className="text-gray-400 text-sm">
        We are a passionate team <br /> dedicated to providing the best <br /> services to our customers.
      </p>
    </div>

    {/* Links */}
    <div>
      <h2 className="text-lg font-semibold mb-4">Links</h2>
      <ul className="space-y-2 text-gray-400  ">
        <li className="hover:text-white" ><a href="">Home</a> </li>
        <li className="hover:text-white"><a href="">About</a></li>
        <li className="hover:text-white"><a href="">Services</a></li>
        <li className="hover:text-white"><a href="">Contact</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-lg font-semibold mb-4">Subscribe</h2>
      <p className="text-gray-400 text-sm">Subscribe to our newsletter for the <br /> latest updates.</p>

      <form action="" className="flex items-center justify-center mt-2 ">
         <input type="email" name="" id="" placeholder="Enter your email" className="btn w-[350px] rounded-r-[0px] text-left border-r-0 " />

        <button className="btn border-l-0 rounded-l-[0px] text-black bg-gradient-to-r from-pink-400 to-yellow-300  shadow-md rounded-r-[6px] " ><span>Subscribe</span></button>

       </form>
    </div>
  </div>
</div>

  {/* Bottom Bar */}
  <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
    © 2025 Your Company. All Rights Reserved.
  </div>
  </footer>
    
  );
};

export default Footer;
