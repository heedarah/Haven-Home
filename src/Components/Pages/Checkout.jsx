import React from "react";
import Navbar from "../Navbar";
import { FaCreditCard } from "react-icons/fa";
import { useCart } from "react-use-cart";

function Checkout() {
  const { cartTotal } = useCart();
  return (
    <div className="pt-24 items-center mx-auto  container ">
      <Navbar />
      <div className="w-90">
        <div className="mb-6 w-full">
          <label className="text-2xl  block font-medium mb-2">Contact</label>
          <input
            type="text"
            placeholder="Email"
            className="border rounded-md block px-3 py-2 w-full "
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="border rounded-md block mt-6 px-3 py-2 w-full "
          />
        </div>
        <label className="flex gap-6">
          <input type="checkbox" name="" id="" />
          <span>Email me with news and offers.</span>
        </label>

        <label className="text-2xl mt-6 block font-medium mb-2">Delivery</label>
        <div className="flex gap-10 mb-5">
          <input
            type="text"
            placeholder="First name (optional)"
            className="border rounded-md px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>

        <input
          type="text"
          placeholder="Address"
          className="border rounded-md mb-6 px-3 py-2 w-full"
        />
        <input
          type="text"
          placeholder="Apartment, suit, unit, etc (optional)"
          className="border rounded-md px-3 py-2  w-full"
        />

        <div className="flex gap-8 mt-6">
          <input
            type="text"
            placeholder="State/Province"
            className="border rounded-md px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="City"
            className="border rounded-md px-3 py-2 w-full"
          />
        </div>

        <label className="text-2xl  block font-medium mt-7">
          Payment Details
        </label>
        <p className="my-2">
          Complete your purchase by providing your payment details.
        </p>
        <div>
          <form action="">
            <label className="text-xl font-medium block  mt-6">
              Select Payment Method:
            </label>
            <select
              name=""
              id=""
              className="border rounded-md px-3 py-2 w-full my-3"
            >
              <option value="">Credit/Debit Card</option>
              <option value="">Paypal</option>
              <option value="">Virtual Account</option>
            </select>
          </form>
          <label className="text-xl font-medium block mt-2">Card Details</label>
          <input
            type="text"
            placeholder="Cardholder's name"
            className="border rounded-md px-3 my-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="Card number"
            className="border rounded-md px-3 my-3 py-2 w-full"
          />
          <div className="flex gap-7">
            <input
              type="text"
              placeholder="Expiry date"
              className="border rounded-md px-3 my-3 py-2 w-full"
            />
            <input
              type="password"
              placeholder="cvv"
              className="border rounded-md px-3 my-3 py-2 w-full"
            />
          </div>
        </div>
        <div className="flex justify-between my-6 ">
          <h2 className="text-2xl font-semibold ">Subtotal:</h2>
          <span className="text-center">{cartTotal}</span>
        </div>

        <div className="flex justify-between ">
          <h2 className="text-2xl font-semibold ">Total:</h2>
          <span className="text-center">{cartTotal}</span>
        </div>
        <div className="items-center flex mt-14">
          <button className="bg-[black] text-2xl text-[white] py-4 px-6 rounded-full w-[50%]  mx-auto">
            Make Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
