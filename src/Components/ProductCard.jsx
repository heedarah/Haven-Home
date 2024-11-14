import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ image, name, title, price, sub_image, id }) {
  return (
    <Link
      to={`/single-product?product=${JSON.stringify({
        name,
        image,
        sub_image,
        title,
        price,
        id,
      })}`}
    >
      <div className="group transition-all ease-in-out">
        <div className="relative h-[300px] w-full">
          <img
            src={image}
            alt=""
            className="object-cover h-full group-hover:opacity-0 transition-all ease-in-out w-full"
          />
          <img
            src={sub_image}
            alt=""
            className="object-cover absolute opacity-0 group-hover:opacity-100 transition-all ease-in-out top-0 h-full w-full"
          />
        </div>
        <p className="font-light text-sm pb-2 ">{name}</p>
        <h2 className="font-medium pb-4 ">{title}</h2>
        <p className="font-normal">{price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
