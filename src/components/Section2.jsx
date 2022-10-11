import React from "react";
import Sec2Img from "../assets/img/images/desktop/image-stand-out.jpg";

function Section2() {
  return (
    <div className="grid grid-cols-1 text-center lg:grid-cols-2">
      <div className="picture">
        <img src={Sec2Img} alt="" className="w-full" />
      </div>
      <div className="content flex justify-center items-center px-20 py-10 md:text-start">
        <div className="text-center md:text-start">
          <h3 className="font-fraunces text-6xl text-[#23303E] my-10">
            Stand out to the right audience
          </h3>
          <p className="text-[#A7ABAE] font-barlow text-xl">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="uppercase my-8 font-fraunces text-xl text-[#23303E] border-b-4 border-b-[#FE7867]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
