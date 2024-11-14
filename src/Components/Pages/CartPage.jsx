import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartItemCard from "../Cart-ItemCard";

import { useCart } from "react-use-cart";

function CartPage() {
  const { items } = useCart();
  const handleCheckout = () => {
    alert("You will be redirected to the checkout page ");
  };
  return (
    <div className="pt-28">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-4xl py-10">YOUR CART</h1>

        <div className="grid grid-cols-4 mb-4">
          <div className="w-1/4">
            <h6>Product</h6>
          </div>
          <div className="w-1/4 ">
            <h6>Quantity</h6>
          </div>
          <div className="w-2/4">
            <h6>Total</h6>
          </div>
          <div className="w-2/4">
            <h6>Actions</h6>
          </div>
        </div>

        <hr className="opacity-[0.2]" />
      </div>

      <div className="mt-6 gap-7 mx-auto container">
        {items?.map((item, index) => (
          <React.Fragment key={index}>
            <CartItemCard
              image={item?.image}
              quantity={item.quantity}
              total={item.itemTotal}
              id={item.id}
            />
            {index !== items.length - 1 && <hr className="opacity-[0.2]" />}
          </React.Fragment>
        ))}
      </div>

      <button
        onClick={handleCheckout}
        className="item-center mx-auto bg-[black] text-[white] flex py-3.5 px-10 rounded-full "
      >
        CHECK OUT
      </button>

      <Footer />
    </div>
  );
}

export default CartPage;
