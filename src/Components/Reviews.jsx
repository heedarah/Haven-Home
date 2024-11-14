import React from "react";
import { FaStar } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import ReviewCard from "./ReviewCard";
function Reviews() {
  return (
    <div className="items-center justify-center container mx-auto">
      <h1 className="text-3xl font-medium text-center mb-6 ">Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* <ReviewCard text={"High-quality and beautiful!This dresser exceeded my expectations! The drawers are deep and slide smoothly, and the wood has a gorgeous finish. It’s a substantial
          piece, and you can tell it’s made with quality materials."}/> */}
        <ReviewCard
          text={
            "The desk is exactly what I was looking for to complete my home office setup. It’s spacious, with plenty of room for my monitor, laptop, and paperwork, and the built-in storage is a huge plus! The assembly was straightforward and took about an hour.Highly recommend for anyone needing a functional and stylish workspace"
          }
          name="Joseph Paul"
        />
        <ReviewCard
          text={
            "The dresser exceeded my expectations! The drawers are deep and slide smoothly, and the wood has a gorgeous finish. It’s a substantial piece, and you can tell it’s made with quality materials. Delivery was fast, and it arrived in perfect condition. It has truly elevated the look of my bedroom"
          }
          name="Anie Umoren"
        />
        <ReviewCard
          text={
            "This sectional sofa has completely transformed our living room. The fabric is as luxurious as it is durable, with a color that looks even richer in person. From order to delivery, everything was seamless."
          }
          name="John Chimaobi"
        />
      </div>
    </div>
  );
}

export default Reviews;
