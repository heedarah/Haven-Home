import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function FaqPage() {
  return (
    <div className="pt-24">
      <Navbar />

      <div className="container m-auto">
        <h3 className="capitalize font-light text-center text-base">
          FREQUENTLY ASKED QUESTIONS
        </h3>
        <h1 className="capitalize text-center font-medium text-4xl mt-9 pb-7 mb-7">
          GET ANSWERS
        </h1>
        <hr className="opacity-[0.2]" />
      </div>
      <div className="container m-auto">
        <h3 className="mt-10 font-semibold text-xl ">ORDER AND SHIPPING</h3>
        <ul className="my-5 list-disc">
          <li>
            Our standard delivery time is 5-10 business days, depending on your
            location and item availability. For custom items, it may take a bit
            longer, and we will keep you updated.
          </li>
          <li>
            You may choose to either pick up your purchased item(s) from our
            warehouse or have them delivered to a specified location.
          </li>
          <li>
            If you need to change your shipping address, please contact us as
            soon as possible. We can accommodate changes as long as your order
            hasn’t been shipped.
          </li>
          <li>
            The delivery date of your order can be impacted by many events
            beyond Taeillo’s control once it leaves our facilities.
          </li>
        </ul>
        <h3 className="mt-10 font-semibold text-xl">DAMAGED PRODUCTS</h3>
        <ul className="my-4 list-disc">
          <p className="py-3">
            We’re sorry to hear that your item arrived in less than perfect
            condition! If your product arrives damaged, please follow these
            steps:
          </p>
          <li>
            Document the Damage: Take clear photos of the damaged product and
            its packaging as soon as possible. This helps us assess the issue
            and expedite your claim.
          </li>
          <li>
            Contact Us Promptly: Reach out to our customer support team within
            48 hours of delivery via email, phone, or our online chat. Please
            include your order number, photos, and a brief description of the
            damage.
          </li>
          <li>
            If the damage is fixable on site, our team would reach out to the
            customer to discuss the specifics of how the damage will be resolved
          </li>
        </ul>
        <h3 className="mt-10 font-semibold text-xl uppercase">
          Account and Order Tracking
        </h3>
        <ul className="my-4 list-disc">
          <li>
            Once your order ships, you’ll receive an email with a tracking
            number. You can also track your order in your account under “Order
            History.”
          </li>
          <li>
            Log into your account, go to “Account Settings,” and update your
            information.
          </li>
        </ul>
        <h3 className="mt-10 font-semibold text-xl uppercase">
          Contact and Support
        </h3>
        <ul className="my-4 list-disc">
          <li>
            You can reach our customer support team via email, phone, or live
            chat. Visit our Contact Us page for more details.
          </li>
          <li>
            Our support team is available Monday to Friday, 9 AM - 6 PM (local
            time).
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default FaqPage;
