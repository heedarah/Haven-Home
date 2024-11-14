import React from "react";

function CartItemCard({ image, quality, total }) {
  return (
    <div className="flex  w-[100%] max-w-[60vw]">
      <img src={image} alt="" className="h-52" />
      <div className=" flex gap-11 mx-auto ml-auto">
        <p>{quality}</p>
        <p>{total}</p>
      </div>
    </div>
  );
}

export default CartItemCard;
