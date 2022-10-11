import React from "react";
import leftPic from "../assets/img/images/desktop/image-graphic-design.jpg";
import righttPic from "../assets/img/images/desktop/image-gallery-sugarcubes.jpg";

function Section3() {
  return (
    <main className="text-center lg:grid lg:grid-cols-2">
      <div className="left h-[36rem] text-[#25564B] bg-graphic bg-cover bg-top flex flex-col justify-end">
        <h3 className="font-fraunces text-4xl">
          Graphic design
        </h3>
        <p className="font-barlow text-lg py-8 px-4 md:px-44">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
      <div className="right h-[36rem] text-[#19536B] bg-photography bg-cover bg-top flex flex-col justify-end">
        <h3 className="font-fraunces text-4xl">
          Photography
        </h3>
        <p className="font-barlow text-lg py-8 px-4 md:px-44">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </main>
  );
}

export default Section3;
