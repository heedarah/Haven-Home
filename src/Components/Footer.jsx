import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className=" bg-[black] text-[white] mt-24 py-16 w-full ">
        <div
          className="container grid grid-cols-1 md:grid-cols-3 gap-16
        items-start justify-center mx-auto"
        >
          <div>
            <h1 className="text-lg font-bold mb-8 ">About Us</h1>
            <p>
              At HavenHome, comfort meets style. Discover beautifully crafted
              furniture designed to make every room feel like home. With quality
              you can trust and designs that inspire, we’re here to help you
              create your perfect space.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-extrabold  mb-8">Shop</h1>
            <ul>
              <li className="hover:underline">Sofas</li>
              <li className="hover:underline">Consoles</li>
              <li className="hover:underline">Tables</li>
              <li className="hover:underline">Chairs</li>
              <li className="hover:underline">Beds</li>
              <li className="hover:underline">SIde Table</li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-bold  mb-8">Terms</h1>
            <ul>
              <li>Privacy Policy</li>
              <li>Return Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 mt-32 ">
          <FaFacebook />
          <FaInstagram />
          <FaXTwitter />
          <FaTiktok />
        </div>
      </div>
    </>
  );
}

export default Footer;
