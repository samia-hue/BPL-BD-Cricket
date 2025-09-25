import React from "react";
import bgPic from "../../assets/bg-shadow.png";
import bgMain from "../../assets/banner-main.png";

const Banner = () => {
  return (
    <div className= "max-w-[1200px] mx-auto h-[500px]  mt-4 rounded-[24px] " 
    style={{backgroundImage: `url(${bgPic})`}}
    >
      

      <div className="flex justify-center items-center p-3">
        <img src={bgMain} alt="" />
      </div>
      <div className="text-white text-center">
        <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-gray-600 mt-2">Beyond Boundaries Beyond Limits</p>

        <div className="btn  border mx-auto h-[48px] w-[140px] border-[#E7FE29] flex items-center justify-center rounded-[8px] mt-4 ">
            <button className="btn  bg-[#E7FE29] text-black p-1 "><span className="p-1">Claim Free Credit</span></button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
