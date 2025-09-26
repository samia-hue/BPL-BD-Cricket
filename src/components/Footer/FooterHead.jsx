import React from 'react';
import bgPic from "../../assets/bg-shadow.png";
const FooterHead = () => {
    return (
         <div
        className="p-10 h-[385px] w-[1200px] bg-[#FFFFFF] opacity-[100%] rounded-xl mx-auto  bg-center "
        style={{ backgroundImage: `url(${bgPic})` }}
      >
        <h1 className="text-black font-bold text-[40px] text-center " >Subscribe to our Newsletter</h1>

        <p className="text-[20px] text-gray-600 text-center mt-2 " >Get the latest updates and news right in your inbox!</p>

       <form action="" className="flex items-center justify-center mt-2 ">
         <input type="email" name="" id="" placeholder="Enter your email" className="btn w-[450px] text-left " />

        <button className="btn ml-1 text-black bg-gradient-to-r from-pink-400 to-yellow-300  shadow-md rounded-[6px] " ><span>Subscribe</span></button>

       </form>
      </div>
    );
};

export default FooterHead;