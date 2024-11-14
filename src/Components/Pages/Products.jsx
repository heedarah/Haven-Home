import { useSearchParams } from "react-router-dom";
import Navbar from "../Navbar";
import ProductCard from "../Productcard";
import Footer from "../Footer";
import Collections from "../Collections";

function Products() {
  const [query] = useSearchParams();
  const title = query.get("title");

  return (
    <div className="pt-[100px]">
      <Navbar />
      <h2 className="text-center font-semibold text-4xl py-14">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1024px] mx-auto  ">
        <ProductCard
          name={"HavenHome"}
          title={"DAUDA"}
          price="NGN 500,999"
          image={"/assets/images/dauda.webp"}
          sub_image={"/assets/images/dauda2.webp"}
          id={1}
        />
        <ProductCard
          name={"HavenHome"}
          title={"BUBBLE SOFA"}
          price="NGN 342,672"
          image={"/assets/images/bubble_yellow.jpg"}
          sub_image={"/assets/images/bubble-grey.jpeg"}
          id={2}
        />
        <ProductCard
          name={"HavenHome"}
          title={"JAY LOUNGER"}
          price="NGN 190,099"
          image={"/assets/images/ope.webp"}
          sub_image={"/assets/images/uSofa.webp"}
          id={3}
        />
        <ProductCard
          name={"HavenHome"}
          title={"MFON"}
          price="NGN 199,999"
          image={"/assets/images/john-sofa.webp"}
          sub_image={"/assets/images/john.webp"}
          id={4}
        />
        <ProductCard
          name={"HavenHome"}
          title={"JOY"}
          price="NGN 189,640"
          image={"/assets/images/joy.webp"}
          sub_image={"/assets/images/joy.webp"}
          id={5}
        />
        <ProductCard
          name={"HavenHome"}
          title={"ANIE L-SHAPED"}
          price="NGN 320,000"
          image={"/assets/images/ada-L.webp"}
          sub_image={"/assets/images/ada.webp"}
          id={6}
        />
        <ProductCard
          name={"HavenHome"}
          title={"OPE"}
          price="NGN 395,000"
          image={"/assets/images/new3.jpg"}
          sub_image={"/assets/images/new2.jpg"}
          id={7}
        />
        <ProductCard
          name={"HavenHome"}
          title={"MERRY"}
          price="NGN 130,765"
          image={"/assets/images/single.webp"}
          sub_image={"/assets/images/single.webp"}
          id={8}
        />
        <ProductCard
          name={"HavenHome"}
          title={"TEMU"}
          price="NGN 99,999"
          image={"/assets/images/prime.webp"}
          sub_image={"/assets/images/prime.webp"}
          id={9}
        />
      </div>

      <Collections />
      <Footer />
    </div>
  );
}

export default Products;
