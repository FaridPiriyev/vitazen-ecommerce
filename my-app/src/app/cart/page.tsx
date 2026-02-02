"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useCart, useWishlist } from "../context/CartContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import {
  FaRegHeart,
  FaRegEye,
  FaShoppingBasket,
  FaHeart,
  FaMinus,
  FaPlus,
  FaRegTrashAlt,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Samoa",
  "San Marino",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, subtotal } = useCart();
  const [hoveredDealId, setHoveredDealId] = useState(null);
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { addToCart } = useCart();

  const [deals, setDeals] = useState([
    {
      id: 1,
      brand: "Vitazeen",
      name: "Red Ginseng Royal",
      price: 50.0,
      oldPrice: 60.0,
      rating: 5,
      img1: "/img/product1.jpg",
      img2: "/img/category3.jpg",
      image: "/img/product1.jpg",
      timeLeft: { days: 63, hrs: 8, min: 48, sec: 50 },
    },
    {
      id: 2,
      brand: "Soft Toys",
      name: "Omega-3 Fish Oil",
      price: 99.0,
      rating: 4,
      img1: "/img/product2.jpg",
      img2: "/img/category4.jpg",
      image: "/img/product2.jpg",
      timeLeft: { days: 120, hrs: 8, min: 48, sec: 50 },
    },
    {
      id: 3,
      brand: "Vitazeen",
      name: "Red Ginseng Royal",
      price: 50.0,
      rating: 5,
      img1: "/img/category4.jpg",
      img2: "/img/category5.jpg",
      image: "/img/product4.jpg",
      timeLeft: { days: 73, hrs: 8, min: 48, sec: 50 },
    },

    {
      id: 4,
      brand: "Vitazeen",
      name: "Red Ginseng Royal",
      price: 50.0,
      rating: 5,
      img1: "/img/category3.jpg",
      img2: "/img/category2.jpg",
      image: "/img/product3.jpg",
      timeLeft: { days: 73, hrs: 8, min: 48, sec: 50 },
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDeals((prevDeals) =>
        prevDeals.map((deal) => {
          let { days, hrs, min, sec } = deal.timeLeft;
          if (sec > 0) sec--;
          else {
            sec = 59;
            if (min > 0) min--;
            else {
              min = 59;
              if (hrs > 0) hrs--;
              else {
                hrs = 23;
                if (days > 0) days--;
              }
            }
          }
          return { ...deal, timeLeft: { days, hrs, min, sec } };
        }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-[#F9F9F9] py-10 px-6 sm:px-20">
        <nav className="text-sm text-gray-500">
          <Link href="/">
            <span className="hover:text-black cursor-pointer transition">
              Home
            </span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Your Shopping Cart</span>
        </nav>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-15 py-12 font-sans">
        <h1 className="text-3xl font-bold mb-10 uppercase tracking-tight">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-6">Your cart is currently empty.</p>
            <Link
              href="/"
              className="bg-[#51ADE5] text-white px-8 py-3 rounded uppercase font-bold text-sm hover:bg-black transition-colors"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="hidden md:grid grid-cols-12 border-b pb-4 text-[13px] font-bold uppercase text-gray-400 tracking-widest">
              <div className="col-span-6">Product</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-3 text-right">Total</div>
            </div>

            <div className="divide-y border-b mb-10">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-12 items-center py-8 gap-6"
                >
                  <div className="md:col-span-6 flex gap-6">
                    <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-[12px] text-gray-400 uppercase font-semibold">
                        Vitazeen
                      </span>
                      <Link href={`/product/${item.id}`}>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight hover:text-[#51ADE5] transition-colors cursor-pointer">
                          {item.name}
                        </h3>
                      </Link>
                      <div className="mt-2 text-[13px] text-gray-500 space-y-1">
                        {item.color && <p>Color: {item.color}</p>}
                        {item.weight && <p>Weight: {item.weight}</p>}
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 flex justify-center items-center gap-6">
                    <div className="flex items-center border border-gray-200 rounded-md bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-3 hover:text-[#51ADE5] transition-colors"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="w-10 text-center font-bold text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-3 hover:text-[#51ADE5] transition-colors"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <FaRegTrashAlt size={18} />
                    </button>
                  </div>

                  <div className="md:col-span-3 text-right">
                    <span className="text-lg font-bold text-[#51ADE5]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div>
                <label className="block text-[14px] font-bold text-gray-700 uppercase mb-4 tracking-wide">
                  Order special instructions
                </label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 p-4 focus:outline-none focus:border-[#51ADE5] transition-colors resize-none text-sm"
                  placeholder="You can write your notes here."
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <label className="text-[14px] font-bold text-gray-700 uppercase tracking-wide">
                    Estimate shipping rates
                  </label>
                  <span className="cursor-help text-gray-400">?</span>
                </div>
                <div className="space-y-4">
                  <select className="w-full border border-gray-200 p-3 bg-white focus:outline-none focus:border-[#51ADE5] text-sm text-gray-600">
                    <option>--- Select Country ---</option>
                    <option value="">--- Select Country ---</option>
                    {countries.map((country) => (
                      <option key={country} value={country.toLowerCase()}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Postal/ZIP code"
                    className="w-full border border-gray-200 p-3 focus:outline-none focus:border-[#51ADE5] text-sm"
                  />
                  <button className="w-full bg-[#51ADE5] text-white py-3 uppercase text-[12px] font-bold hover:bg-black transition-all duration-300">
                    Calculate
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <div className="flex items-center gap-8 mb-2">
                  <span className="text-[14px] font-bold text-gray-900 uppercase">
                    Subtotal
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    ${subtotal.toFixed(2)} USD
                  </span>
                </div>
                <p className="text-[13px] text-gray-500 mb-6 italic">
                  Taxes and shipping calculated at checkout
                </p>

                <Link href="/checkout" className="w-full">
                  <button className="w-full bg-[#51ADE5] text-white py-4 uppercase text-[14px] font-black tracking-widest hover:bg-black transition-all duration-500 shadow-xl shadow-blue-100 hover:shadow-none">
                    Check Out
                  </button>
                </Link>

                <div className="mt-6 text-center w-full">
                  <Link
                    href="/"
                    className="text-[12px] text-gray-400 underline uppercase font-bold hover:text-[#51ADE5] transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        <section id="deals">
          <div className="mt-10 pt-10 text-center">
            <h2 className="text-[13px] font-bold text-[#51ADE5] uppercase tracking-[0.3em]">
              You May Like This
            </h2>
          </div>
          <div className="max-w-full mx-auto py-12 px-15 font-sans">
            <div className="flex justify-between items-end">
              <div>
                <p className="text-[#56B1E6] font-medium text-sm uppercase tracking-wider">
                  Best Vitamin Deals
                </p>
                <h2 className="text-4xl font-bold text-slate-800">
                  Deals of the week!
                </h2>
              </div>
              <Link href="/multivitamins">
                <button className="bg-[#56B1E6] text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-black transition cursor-pointer border-none">
                  VIEW ALL <FiArrowUpRight size={16} />
                </button>
              </Link>
            </div>

            <div className="max-w-full mx-auto py-12 bg-white">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={25}
                slidesPerView={1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {deals.map((deal) => (
                  <SwiperSlide key={deal.id}>
                    <div className="group cursor-pointer">
                      <div
                        className="relative bg-[#F8F9FB] rounded-[2.5rem] p-10 flex items-center justify-center overflow-hidden h-[420px] transition-all group-hover:shadow-2xl"
                        onMouseEnter={() => setHoveredDealId(deal.id)}
                        onMouseLeave={() => setHoveredDealId(null)}
                      >
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={
                              hoveredDealId === deal.id
                                ? deal.img2 || deal.img1
                                : deal.img1
                            }
                            alt={deal.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain p-8 transition-all duration-700 transform group-hover:scale-110"
                            priority={deal.id <= 3}
                          />
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/5 z-20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWishlist(deal);
                            }}
                            className="w-12 h-12 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all border-none cursor-pointer"
                          >
                            {isInWishlist(deal.id) ? (
                              <FaHeart className="text-red-500" size={18} />
                            ) : (
                              <FaRegHeart size={18} />
                            )}
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setQuickViewProduct(deal);
                            }}
                            className="w-12 h-12 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all border-none cursor-pointer"
                          >
                            <FaRegEye size={18} />
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              addToCart(deal, 1);
                            }}
                            className="w-12 h-12 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all border-none cursor-pointer"
                          >
                            <FaShoppingBasket size={18} />
                          </button>
                        </div>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#56B1E6] text-white rounded-full py-8 px-3 flex flex-col items-center gap-4 shadow-lg min-w-[55px] z-30">
                          {[
                            { val: deal.timeLeft?.days, label: "Days" },
                            { val: deal.timeLeft?.hrs, label: "Hrs" },
                            { val: deal.timeLeft?.min, label: "Min" },
                            { val: deal.timeLeft?.sec, label: "Sec" },
                          ].map((time, idx) => (
                            <div key={idx} className="text-center">
                              <div className="font-bold text-lg leading-none">
                                {String(time.val ?? 0).padStart(2, "0")}
                              </div>
                              <div className="text-[9px] opacity-90 mt-1 uppercase font-semibold">
                                {time.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 text-center">
                        <p className="text-gray-400 text-xs uppercase font-bold tracking-widest">
                          {deal.brand}
                        </p>
                        <h3 className="text-xl font-bold text-slate-800 mt-1 group-hover:text-[#56B1E6] transition-colors">
                          {deal.name}
                        </h3>
                        <div className="flex justify-center items-center gap-3 mt-2">
                          <span className="text-[#56B1E6] font-bold text-lg">
                            ${deal.price.toFixed(2)}
                          </span>
                          {deal.oldPrice && (
                            <span className="text-gray-400 line-through text-sm">
                              ${deal.oldPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
