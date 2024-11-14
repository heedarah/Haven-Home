import React from "react";
import { Link } from "react-router-dom";
import Collections from "./Collections";

function Collectioncard({ image, title, description }) {
  return (
    <Link to={`/products?title=${title}`}>
      <div className="flex">
        <div>
          <img
            src={image}
            alt=""
            className="hover:scale-[1.2] transition-all ease-linear"
          />
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Collectioncard;
