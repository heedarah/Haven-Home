import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeContainer() {
  return (
    <div>
      <Marquee speed={50} direction="left" autoFill className="my-20">
        <div className="flex  text-l font-bold">
          <p className="px-7 mr-8">DINNING</p>
          <p className="px-7 mr-8"> OFFICE</p>
          <p className="px-7 mr-8">LIVING</p>
          <p className="px-7 mr-8"> BEDROOM</p>
        </div>
        <div></div>
      </Marquee>
    </div>
  );
}

export default MarqueeContainer;
