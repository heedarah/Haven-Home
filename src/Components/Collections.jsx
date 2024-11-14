import React from "react";
import Collectioncard from "./Collectioncard";

function Collections() {
  return (
    <div className="text-center mx-auto  ">
      <h1 className="p-10 text-3xl uppercase font-medium mt-[100px]">
        Our Collection
      </h1>
      <p className=" text-center mx-auto max-w-[700px]">
        Discover our carefully curated furniture collections, where timeless
        elegance meets modern design. Each piece is crafted with quality and
        detail, blending comfort, functionality, and style to transform your
        space into a sophisticated haven.
      </p>

      <div className="grid grid-cols-5 gap-4 overflow-hidden">
        <Collectioncard
          className="-translate-y-4"
          image={"/assets/images/sofa-bed.webp"}
          title={"BEDS"}
          description={"6 Items"}
        />
        <Collectioncard
          image={"/assets/images/chair.webp"}
          title={"CHAIRS"}
          description={"9 Items"}
        />
        <Collectioncard
          image={"/assets/images/conCover.webp"}
          title={"CONSOLES"}
          description={"6 Items"}
        />
        <Collectioncard
          image={"/assets/images/center_tab.webp"}
          title={"TABLES"}
          description={"11 Items"}
          className=""
        />
        <Collectioncard
          image={"/assets/images/uSofa.webp"}
          title={"SOFAS"}
          description={"18 Items"}
        />
      </div>
    </div>
  );
}

export default Collections;
