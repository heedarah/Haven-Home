import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoRemove } from "react-icons/io5";
// import { user } from "/assets/images/Image(10).png";

export default function ReviewCard({ text, name }) {
  return (
    <div>
      <div className="p-6 bg-[#f1eded]">
        <div className="flex text-[gold] items-center justify-center mb-3">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p>{text}</p>
        <div className="flex gap-2">
          <IoRemove size={24} />
          <span className="italic font-semibold text-lg">{name}</span>
        </div>
      </div>
    </div>
  );
}
