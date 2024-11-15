import { FaBeer } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Navbar() {
  const { totalItems } = useCart();
  // const { addToCart } = useContext(CartContext);

  return (
    <>
      <div className="fixed bg-[white] w-full left-0 top-0 z-40 shadow-xl">
        <div className="flex items-center justify-between container mx-auto top-0 left-0 ">
          <h2 className="font-semibold text-2xl">HavenHome</h2>
          <div className="">
            <ul className="flex gap-5 font-medium">
              <li>
                <Link to={"/"}>Home </Link>
              </li>

              <Link to={"/products"}>
                <li>Shop</li>
              </Link>
              <Link to={"/faqs"}>
                <li>Faq</li>
              </Link>
            </ul>
          </div>
          <div className="flex py-5 gap-8  ">
            <FaRegHeart size={24} />
            <Link to={"/CartPage"}>
              <div className="relative">
                <div>
                  <FiShoppingCart size={24} />
                  <span onc></span>
                </div>
                <div className="absolute w-5 h-5 flex items-center justify-center text-xs text-[white] bg-[black] rounded-full top-[-15px] right-[-15px]">
                  {totalItems}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
