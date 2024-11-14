import React from "react";
import Navbar from "../Navbar";

function CheckOutPage() {
  return (
    <div className="pt-[100px] mx-auto">
      <Navbar />
      <div className="mx-auto item-center w-[50%]">
        <h1 className="font-semibold text-xl p-2">Contact</h1>
        <form action="">
          <input
            type="text"
            placeholder="Email"
            className="text-[grey] border border-[grey]-300 rounded-lg p-4 py-2 w-64"
          />
          <label class="flex items-center space-x-6 pt-4">
            <input
              type="checkbox"
              class="form-checkbox h-4 w-4 text-blue-600"
            />
            <span class="text-[grey]-500">Email me with news and offers</span>
          </label>
          <h1 className="font-semibold text-xl py-3">Delivery</h1>
          <select
            name="Country/Region"
            id=""
            className="border border-[grey] rounded-md p-4 py-2 w-64"
          >
            <option value="">Nigeria</option>
          </select>
          <div className="flex py-5 gap-6">
            <input
              type="text"
              placeholder="First name (optional)"
              className="border border-[grey] rounded-md p-4 py-2 w-64"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-[grey] rounded-md p-4 py-2 w-64"
            />
          </div>
          <input
            type="text"
            className="border border-inherent rounded-lg p-4 py-2 w-64"
            placeholder="Address"
          />

          <label
            for=""
            className="text-sm font-medium text-grey gap-3 flex pt-4"
          >
            <input
              type="text"
              placeholder="City"
              className=" p-2 border-inherit  rounded-lg tex"
            />
            <input
              type="text"
              placeholder="State"
              className=" p-2 border rounded-lg "
            />
            <input
              type="text"
              placeholder="Postal code (optional)"
              className=" p-2 border rounded-lg "
            />
          </label>
        </form>
      </div>
    </div>
  );
}

export default CheckOutPage;
// cart Details
