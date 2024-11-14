import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { IoAdd, IoRemove } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { useCart } from "react-use-cart";

function SingleProduct() {
  const [quantity, setQuantity] = useState(0);
  const [material, setMaterial] = useState("matte");

  const [query] = useSearchParams();
  const product = JSON.parse(query.get("product"));

  const { addItem } = useCart();

  return (
    <div className="pt-[100px]">
      <Navbar />
      <div className="flex gap-11 container mx-auto">
        <img
          src={material === "matte" ? product.image : product.sub_image}
          alt=""
          className="w-[50%] object-contain"
        />
        <div className="w-[50%]">
          <h2 className="font-normal py-5 text-3xl">{product.title}</h2>
          <p className="font-semibold pb-4">{product.price}</p>
          <p className="text-small font-light pb-3">
            Dimension:320cm x 85cm x 65cm H
          </p>
          <h4 className="text-sm font-light w-44  pb-11">
            PRODUCTION/DELIVERY TIMELINE 7-10 working days (after payment
            confirmation)
          </h4>
          <hr className="opacity-[0.3]" />
          <h6 className="pt-5 pb-2">Material:Matte</h6>
          <div className="flex gap-6">
            <button
              onClick={() => {
                setMaterial("matte");
              }}
              className="bg-[#fcfbfb] shadow-xl p-4"
              style={{
                border: material === "matte" ? "1px solid #000" : "",
              }}
            >
              Matte
            </button>
            <button
              onClick={() => {
                setMaterial("leather");
              }}
              className="bg-[#fcfbfb] shadow-lg p-4"
              style={{
                border: material === "leather" ? "1px solid #000" : "",
              }}
            >
              Leather
            </button>
          </div>
          <div className="flex gap-10 px-4 border-2 border-[#e9e9e9] rounded-full w-fit py-4 my-8 ">
            <button
              onClick={() => {
                if (quantity >= 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              <IoRemove size={24} />
            </button>
            <p>{quantity}</p>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              <IoAdd size={24} />
            </button>
          </div>
          <button
            onClick={() => {
              addItem({ id: product.id, ...product }, quantity);
              alert("Product added to cart");
            }}
            className="bg-[black] text-[white] px-4 py-4 rounded-full"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProduct;
