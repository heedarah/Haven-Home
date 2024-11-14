import React from "react";
import myImage from "../assets/images/cover.jpg";

function Hero() {
  return (
    <>
      <div className=" hero h-[80vh] ">
        <div className=" h-full w-full flex bg-[black] bg-opacity-50 text-[#dacece] bg-position-bottom justify-center flex-col items-center text-center">
          <h3 className="text-bold">NEW ARRIVAL</h3>
          <h1 className="text-[50px] py-7 capitalize">
            Bring life to every room
          </h1>
          <button className=" border-2 bg-[white] text-[black] border-white rounded-full px-5 py-3 hover:opacity-80">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
