import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartItemCard from "../Cart-ItemCard";
import { Link } from "react-router-dom";
import { IoAdd, IoRemove } from "react-icons/io5";

function CartPage() {
  return (
    <div className="pt-28">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl py-10">YOUR CART</h1>
        <div className="flex">
          <div className="w-1/4">
            <h6>Product</h6>
          </div>
          <div className="w-1/4 ">
            <h6>Quantity</h6>
          </div>
          <div className="w-2/4">
            <h6>Total</h6>
          </div>
        </div>
        <hr className=" opacity-[0.2]" />
      </div>
      <div className=" flex mt-6 gap-7 mx-auto container">
        <CartItemCard
          image={"/assets/images/dauda.webp"}
          quality={1}
          total={"499,999"}
        />
        <div className="gap-2">
          <button className="bg-[#ddd8d8] py-2 rounded-full px-5">
            <IoAdd />
          </button>
          <button className="bg-[#ddd8d8] py-2 rounded-full px-5">
            <IoRemove />
          </button>
        </div>
        <a
          href=""
          className="hover-underline"
          onClick={() => removeFromCart(product.id)}
        >
          Remove
        </a>
      </div>
      <Link to={"/CheckoutPage"}>
        <button className="item-center mx-auto bg-[black] text-[white] flex py-3.5 px-10 rounded-full ">
          CHECK OUT
        </button>
      </Link>

      <Footer />
    </div>
  );
}

export default CartPage;
