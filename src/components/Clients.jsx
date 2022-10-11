import React from "react";
import Emily from "../assets/img/images/image-emily.jpg";
import Jennie from "../assets/img/images/image-jennie.jpg";
import Thomas from "../assets/img/images/image-thomas.jpg";

function Clients() {
  return (
    <main className="text-center lg:mb-20">
      <h2 className="font-fraunces text-lg uppercase tracking-[0.3rem] text-[#A7ABAE] mt-16 lg:mt-28">
        Client testimonials
      </h2>
      <div className="lg:flex lg:px-28">
        <div className="client flex flex-col justify-center items-center">
          <img src={Emily} alt="" className="w-20 rounded-full my-10" />
          <p className="font-barlow text-[#5A636C] text-lg px-5 lg:pt-10">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h3 className="font-fraunces pt-10 text-xl">Emily R.</h3>
          <p className="font-barlow text-[#A7ABAE]">Marketing Director</p>
        </div>
        <div className="client flex flex-col justify-center items-center">
          <img src={Thomas} alt="" className="w-20 rounded-full my-10" />
          <p className="font-barlow text-[#5A636C] text-lg px-5 lg:pt-10">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h3 className="font-fraunces pt-10 text-xl">Thomas S.</h3>
          <p className="font-barlow text-[#A7ABAE]">Chief Operating Officer</p>
        </div>
        <div className="client flex flex-col justify-center items-center">
          <img src={Jennie} alt="" className="w-20 rounded-full my-10" />
          <p className="font-barlow text-[#5A636C] text-lg px-5 lg:pt-10">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h3 className="font-fraunces pt-10 text-xl">Jennie F.</h3>
          <p className="font-barlow text-[#A7ABAE]">Business Owner</p>
        </div>
      </div>
    </main>
  );
}

export default Clients;
