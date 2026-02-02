"use client";
import { useWishlist } from "../context/CartContext";
import WishlistEmpty from "../components/Wishlist";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <>
      <Navbar />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="bg-[#F9F9F9] py-10 px-6 sm:px-20">
          <nav className="text-sm text-gray-500">
            <Link href="/">
              <span className="hover:text-black">Home</span>
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">Wishlist</span>
          </nav>
        </div>

        {!wishlist || wishlist.length === 0 ? (
          <WishlistEmpty />
        ) : (
          <div className="max-w-[1440px] mx-auto py-16 px-6">
            <h1 className="text-4xl font-serif font-bold text-center mb-12 text-gray-800">
              My Wishlist
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {wishlist.map((product) => (
                <div
                  key={product.id}
                  className="group relative border rounded-2xl p-4 hover:shadow-lg transition"
                >
                  <div className="relative bg-[#F7F7F7] rounded-xl aspect-square flex items-center justify-center p-6 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="object-contain"
                    />

                    <button
                      onClick={() => toggleWishlist(product)}
                      className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-red-500 shadow-md hover:scale-110 transition"
                    >
                      <FaHeart size={14} />
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <h3 className="font-serif font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-[#51ADE5] font-bold mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                    <Link
                      href={`/multivitamins/${product.id}`}
                      className="mt-3 inline-block text-xs uppercase tracking-wider font-bold underline hover:text-[#51ADE5]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
