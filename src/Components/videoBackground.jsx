import React from "react";
// import backgroundVideo from "../assets/images/backG.webm";

function VideoBackground() {
  return (
    <div className="video-container relative h-[60vh] flex justify-center items-center text-center my-32 text-[white]">
      <div className="relative z-10">
        <h3>BEST SELLING PRODUCTS</h3>
        <h1 className="font-extrabold text-4xl my-9">STYLE MEETS COMFORT</h1>
        <p className="text-lg font-semibold">
          Experience the art of living with furniture Crafted to Last!{" "}
        </p>
        <button className="bg-[white] text-[black] px-20 py-3 rounded-3xl m-6 text-lg font-semibold">
          Discover
        </button>
      </div>

      <video
        src="assets/images/backG.webm"
        className="absolute top-0 left-0 w-full h-[60vh] object-cover"
        autoPlay
        playsInline
        muted
        loop
      ></video>
      <div className="absolute w-full h-full bg-[black] bg-opacity-40"></div>
    </div>
  );
}

export default VideoBackground;
