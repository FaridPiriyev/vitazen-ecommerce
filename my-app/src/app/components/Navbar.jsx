import { FaInstagram, FaFacebookF, FaShopify, FaTiktok, FaYoutube } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdOutlinePlace } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-[#51ADE5] flex items-center justify-center lg:justify-between px-15 py-2">
        <div className="hidden lg:flex gap-4 flex-1 justify-start text-white">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-black transition-colors cursor-pointer" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-black transition-colors cursor-pointer" />
          </a>
          <a href="https://shopify.com" target="_blank" rel="noopener noreferrer">
            <FaShopify className="hover:text-black transition-colors cursor-pointer" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-black transition-colors cursor-pointer" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-black transition-colors cursor-pointer" />
          </a>
        </div>

        <div className="container-contact flex-none text-center">
          <h2 className="text-white font-medium text-sm md:text-base">
            Order Online Call Us <a href="tel:0123456789" className="hover:underline">(0123) 456789</a>
          </h2>
        </div>

        <div className="hidden lg:flex gap-6 flex-1 justify-end text-white">
          <a 
            href="https://google.com/maps" 
            target="_blank" 
            className="contact-info-place flex items-center gap-2 hover:text-black transition-colors"
          >
            <MdOutlinePlace className="text-xl" />
            <p className="text-sm">Find a Store</p>
          </a>

          <a 
            href="mailto:demosalam@gmail.com" 
            className="contact-info-mail flex items-center gap-2 hover:text-black transition-colors"
          >
            <CiMail className="text-xl" />
            <p className="text-sm">demovitazen@gmail.com</p>
          </a>
        </div>
      </div>
    </>
  );
}