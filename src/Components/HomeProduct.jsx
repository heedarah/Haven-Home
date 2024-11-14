import React from "react";
import ProductCard from "./Productcard";
import { Link } from "react-router-dom";

function HomeProduct() {
  return (
    <div className="mb-[100px]">
      <h1 className="text-center file:p-10 text-3xl uppercase font-medium">
        featured products
      </h1>
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1024px] mx-auto
      "
      >
        <ProductCard
          name={"HavenHome"}
          title={"ALAUSA"}
          price="NGN 120,888"
          image={"/assets/images/achi.webp"}
          sub_image={"/assets/images/achi2.webp"}
          id={10}
        />
        <ProductCard
          name={"HavenHome"}
          title={"WOODEN CHAIR"}
          price="NGN 59,999"
          image={"/assets/images/wooden.webp"}
          sub_image={"/assets/images/wooden.webp"}
          id={11}
        />
        <ProductCard
          name={"HavenHome"}
          title={"SIDE STOOL"}
          price="NGN 45,790"
          image={"/assets/images/stool.webp"}
          sub_image={"/assets/images/stool2.webp"}
          id={12}
        />
      </div>
      <Link to={"/Products"} className="flex items-center justify-center mt-10">
        <button className="bg-[black] text-[white] px-14 py-4 rounded-full items-center">
          View All
        </button>
      </Link>
    </div>
  );
}

export default HomeProduct;
