import React from "react";
import Sec1Img from "../assets/img/images/desktop/image-transform.jpg";

function Section1() {
  return (
    <div className="grid grid-cols-1 text-center lg:grid-cols-2">
      <div className="picture lg:col-start-2">
        <img src={Sec1Img} alt="" className="w-full" />
      </div>
      <div className="content flex justify-center items-center px-20 py-10 md:text-start lg:row-start-1">
        <div>
        <h3 className="font-fraunces text-6xl text-[#23303E] my-10">
            Transform your brand
        </h3>
        <p className="text-[#A7ABAE] font-barlow text-xl">
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button className="uppercase my-8 font-fraunces text-xl text-[#23303E] border-b-4 border-b-[#FAD400]">
            Learn More
        </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
