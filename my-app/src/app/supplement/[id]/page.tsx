"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { FaStar, FaShareAlt, FaChevronDown } from "react-icons/fa";

const initialProducts = [
  {
    id: 1,
    name: "Red Ginseng Royal",
    price: 50.0,
    image: "/img/product1.jpg",
    gallery: [
      "/img/product1.jpg",
      "/img/product2.jpg",
      "/img/product3.jpg",
      "/img/product4.jpg",
    ],
    rating: 5,
    type: "Charging Cables",
    color: "Red",
    weight: "100g",
    brand: "Battery",
    inStock: true,
    sku: "RG-001",
    stockCount: 55,
    description:
      "Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from TEAM90DEGREE™ LTD™ Viscose — responsibly sourced wood-based fibres produced through a process that reduces impact on forests, biodiversity and water supply.",
  },
  {
    id: 2,
    name: "Test Up Men Over 40",
    price: 50.0,
    image: "/img/product2.jpg",
    gallery: ["/img/product2.jpg", "/img/product5.jpg", "/img/product6.jpg"],
    rating: 5,
    type: "Chocolate",
    color: "Blue",
    weight: "200g",
    brand: "Phone",
    inStock: false,
    sku: "TU-40M",
    stockCount: 10,
    description:
      "Tailored with drapey, crinkle-texture fabric that’s made from TEAM90DEGREE™ LTD™ Viscose — responsibly sourced wood-based fibres.",
  },
  {
    id: 3,
    name: "Lutein 40MG Rapid",
    price: 30.0,
    image: "/img/product3.jpg",
    gallery: ["/img/product3.jpg", "/img/product7.jpg", "/img/product8.jpg"],
    rating: 5,
    type: "Face Powder",
    color: "Black",
    weight: "300g",
    brand: "Soft Toys",
    inStock: true,
    sku: "LT-40R",
    stockCount: 25,
    description:
      "A relaxed silhouette tailored with drapey, crinkle-texture fabric made from wood-based fibres.",
  },
  {
    id: 4,
    name: "Advanced Collagen",
    price: 50.0,
    image: "/img/product4.jpg",
    gallery: ["/img/product4.jpg", "/img/product9.jpg", "/img/product10.jpg"],
    rating: 5,
    type: "Face Powder",
    color: "White",
    weight: "500g",
    brand: "Biggest Teddy",
    inStock: true,
    sku: "AC-500",
    stockCount: 15,
    description:
      "High-quality collagen supplement for skin and bone health. Sustainably sourced materials.",
  },
  {
    id: 5,
    name: "Casein Protein Vanilla",
    price: 30.0,
    image: "/img/product5.jpg",
    gallery: ["/img/product5.jpg", "/img/product11.jpg", "/img/product12.jpg"],
    rating: 5,
    type: "Charging Cables",
    color: "Blue",
    weight: "100g",
    brand: "Battery",
    inStock: true,
    sku: "CP-VAN",
    stockCount: 40,
    description:
      "Vanilla flavored casein protein for slow-release amino acid delivery.",
  },
  {
    id: 6,
    name: "Original Ginger Chews",
    price: 75.0,
    image: "/img/product6.jpg",
    gallery: ["/img/product6.jpg", "/img/product1.jpg"],
    rating: 5,
    type: "Chocolate",
    color: "Black",
    weight: "200g",
    brand: "Lion & Lioness",
    inStock: true,
    sku: "GC-ORG",
    stockCount: 90,
    description:
      "Original ginger chews made from real ginger root for a spicy and sweet treat.",
  },
  {
    id: 7,
    name: "PE Whey Protein",
    price: 50.0,
    image: "/img/product7.jpg",
    gallery: ["/img/product7.jpg", "/img/product2.jpg"],
    rating: 5,
    type: "Charging Cables",
    color: "Black",
    weight: "300g",
    brand: "Phone",
    inStock: true,
    sku: "PW-300",
    stockCount: 33,
    description:
      "Premium whey protein isolate for rapid muscle recovery and growth.",
  },
  {
    id: 8,
    name: "Vitamin B12 Bones",
    price: 50.0,
    image: "/img/product8.jpg",
    gallery: ["/img/product8.jpg", "/img/product3.jpg"],
    rating: 5,
    type: "Doll House Playsets",
    color: "White",
    weight: "500g",
    brand: "Soft Toys",
    inStock: false,
    sku: "VB-12B",
    stockCount: 5,
    description:
      "Essential Vitamin B12 for energy metabolism and bone health support.",
  },
  {
    id: 9,
    name: "Omega-3 Fish Oil",
    price: 99.0,
    image: "/img/product9.jpg",
    gallery: ["/img/product9.jpg", "/img/product4.jpg"],
    rating: 5,
    type: "Chocolate",
    color: "White",
    weight: "100g",
    brand: "Biggest Teddy",
    inStock: true,
    sku: "OM-3FO",
    stockCount: 20,
    description:
      "Pure fish oil rich in EPA and DHA for heart and brain health.",
  },
  {
    id: 10,
    name: "Magnesium Citrate",
    price: 50.99,
    image: "/img/product2.jpg",
    gallery: ["/img/product2.jpg", "/img/product5.jpg"],
    rating: 5,
    type: "Doll House Playsets",
    color: "Blue",
    weight: "200g",
    brand: "Battery",
    inStock: true,
    sku: "MG-CIT",
    stockCount: 45,
    description:
      "Highly absorbable magnesium citrate for muscle relaxation and sleep support.",
  },
  {
    id: 11,
    name: "Vitamin C Complex",
    price: 79.0,
    image: "/img/product7.jpg",
    gallery: ["/img/product7.jpg", "/img/product6.jpg"],
    rating: 5,
    type: "Face Powder",
    color: "Black",
    weight: "300g",
    brand: "Phone",
    inStock: true,
    sku: "VC-COM",
    stockCount: 60,
    description:
      "Advanced Vitamin C complex for immune system support and antioxidant protection.",
  },
  {
    id: 12,
    name: "Calcium Zinc 360",
    price: 50.0,
    image: "/img/product3.jpg",
    gallery: ["/img/product3.jpg", "/img/product8.jpg"],
    rating: 5,
    type: "Doll House Playsets",
    color: "White",
    weight: "500g",
    brand: "Lion & Lioness",
    inStock: true,
    sku: "CZ-360",
    stockCount: 12,
    description:
      "Synergistic blend of calcium and zinc for strong bones and metabolic health.",
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const product =
    initialProducts.find((p) => p.id === Number(params.id)) ||
    initialProducts[0];

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [selectedWeight, setSelectedWeight] = useState(product.weight);
  const [openSection, setOpenSection] = useState("desc");
  const [activeImage, setActiveImage] = useState(product.image);

  useEffect(() => {
    setActiveImage(product.image);
    setSelectedColor(product.color);
    setSelectedWeight(product.weight);
  }, [product]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const { addToCart } = useCart();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Header />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 py-10">
        <nav className="text-sm text-gray-500 mb-10 flex gap-2">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-400">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-4">
            <div className="bg-[#F7F7F7] rounded-xl p-10 relative group">
              <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition z-10">
                <FaShareAlt size={16} />
              </button>
              <div className="relative w-full h-[500px]">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="flex gap-4 justify-start overflow-x-auto pb-2">
              {product.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-24 h-24 bg-[#F7F7F7] rounded-lg border-2 transition overflow-hidden flex-shrink-0 ${
                    activeImage === img
                      ? "border-[#51ADE5]"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} ${index}`}
                    fill
                    className="object-cover p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <p className="text-gray-400 text-sm mb-1">Sku: {product.sku}</p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400 text-xs">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span className="text-gray-400 text-xs">({product.rating})</span>
            </div>

            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-[#51ADE5] mb-6">
              ${product.price.toFixed(2)}
            </p>

            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">
                Only {product.stockCount} items in stock!
              </p>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#51ADE5] h-full rounded-full transition-all duration-500"
                  style={{ width: `${(product.stockCount / 100) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-bold mb-3 uppercase tracking-wider">
                Color:{" "}
                <span className="text-gray-400 font-normal">
                  {selectedColor}
                </span>
              </p>
              <div className="flex gap-3">
                {["Black", "Green", "Blue", "White", "Red"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`w-10 h-10 rounded-full border-2 p-1 transition ${selectedColor === c ? "border-[#51ADE5]" : "border-gray-100"}`}
                  >
                    <div
                      className="w-full h-full rounded-full border border-gray-200"
                      style={{ backgroundColor: c.toLowerCase() }}
                    ></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-bold mb-3 uppercase tracking-wider">
                Weight:{" "}
                <span className="text-gray-400 font-normal">
                  {selectedWeight}
                </span>
              </p>
              <div className="flex gap-3">
                {["100g", "200g", "300g", "500g"].map((w) => (
                  <button
                    key={w}
                    onClick={() => setSelectedWeight(w)}
                    className={`px-6 py-2 border-2 rounded text-sm transition font-bold ${selectedWeight === w ? "border-black bg-black text-white" : "border-gray-200 text-gray-600"}`}
                  >
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex gap-4 h-14">
                <div className="flex items-center border border-gray-200 rounded px-4 gap-6">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="text-xl"
                  >
                    -
                  </button>
                  <span className="font-bold w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() =>
                    addToCart(product, quantity, selectedColor, selectedWeight)
                  }
                  className="flex-1 bg-[#51ADE5] text-white rounded font-bold hover:bg-black transition uppercase tracking-widest text-sm"
                >
                  Add to cart
                </button>
              </div>
            </div>

            <ul className="flex items-center gap-2" role="list">
              <li className="flex items-center">
                <svg
                  className="h-6 w-auto"
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="pi-visa"
                >
                  <title id="pi-visa">Visa</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z"
                    fill="#142688"
                  ></path>
                </svg>
              </li>

              <li className="flex items-center">
                <svg
                  className="h-6 w-auto"
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="pi-master"
                >
                  <title id="pi-master">Mastercard</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                  <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                  <path
                    fill="#FF5F00"
                    d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"
                  ></path>
                </svg>
              </li>

              <li className="flex items-center">
                <svg
                  className="h-6 w-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="pi-american_express"
                  viewBox="0 0 38 24"
                >
                  <title id="pi-american_express">American Express</title>
                  <path
                    fill="#000"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z"
                    opacity=".07"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M22.012 19.936v-8.421L37 11.528v2.326l-1.732 1.852L37 17.573v2.375h-2.766l-1.47-1.622-1.46 1.628-9.292-.02Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M23.013 19.012v-6.57h5.572v1.513h-3.768v1.028h3.678v1.488h-3.678v1.01h3.768v1.531h-5.572Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="m28.557 19.012 3.083-3.289-3.083-3.282h2.386l1.884 2.083 1.89-2.082H37v.051l-3.017 3.23L37 18.92v.093h-2.307l-1.917-2.103-1.898 2.104h-2.321Z"
                  ></path>
                  <path
                    fill="#FFF"
                    d="M22.71 4.04h3.614l1.269 2.881V4.04h4.46l.77 2.159.771-2.159H37v8.421H19l3.71-8.421Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="m23.395 4.955-2.916 6.566h2l.55-1.315h2.98l.55 1.315h2.05l-2.904-6.566h-2.31Zm.25 3.777.875-2.09.873 2.09h-1.748Z"
                  ></path>
                  <path
                    fill="#006FCF"
                    d="M28.581 11.52V4.953l2.811.01L32.84 9l1.456-4.046H37v6.565l-1.74.016v-4.51l-1.644 4.494h-1.59L30.35 7.01v4.51h-1.768Z"
                  ></path>
                </svg>
              </li>

              <li className="flex items-center">
                <svg
                  className="h-6 w-auto"
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="pi-paypal"
                >
                  <title id="pi-paypal">PayPal</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    fill="#003087"
                    d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
                  ></path>
                  <path
                    fill="#3086C8"
                    d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
                  ></path>
                  <path
                    fill="#012169"
                    d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
                  ></path>
                </svg>
              </li>

              <li className="flex items-center">
                <svg
                  className="h-6 w-auto"
                  viewBox="0 0 38 24"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-labelledby="pi-diners_club"
                >
                  <title id="pi-diners_club">Diners Club</title>
                  <path
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
                  ></path>
                  <path
                    d="M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z"
                    fill="#3086C8"
                  ></path>
                </svg>
              </li>

              <li className="flex items-center">
                <svg
                  className="h-6 w-auto"
                  viewBox="0 0 38 24"
                  role="img"
                  aria-labelledby="pi-discover"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="pi-discover">Discover</title>
                  <path
                    fill="#000"
                    opacity=".07"
                    d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
                  ></path>
                  <path
                    d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
                    fill="#fff"
                  ></path>
                  <path
                    d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                    fill="url(#pi-paint0_linear)"
                  ></path>
                  <path
                    opacity=".65"
                    d="M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z"
                    fill="url(#pi-paint1_linear)"
                  ></path>
                  <path
                    d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
                    fill="#231F20"
                  ></path>
                  <path
                    d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z"
                    fill="#F48120"
                  ></path>
                  <defs>
                    <linearGradient
                      id="pi-paint0_linear"
                      x1="21.657"
                      y1="12.275"
                      x2="19.632"
                      y2="9.104"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F89F20"></stop>
                      <stop offset=".25" stopColor="#F79A20"></stop>
                      <stop offset=".533" stopColor="#F68D20"></stop>
                      <stop offset=".62" stopColor="#F58720"></stop>
                      <stop offset=".723" stopColor="#F48120"></stop>
                      <stop offset="1" stopColor="#F37521"></stop>
                    </linearGradient>
                    <linearGradient
                      id="pi-paint1_linear"
                      x1="21.338"
                      y1="12.232"
                      x2="18.378"
                      y2="6.446"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#F58720"></stop>
                      <stop offset=".359" stopColor="#E16F27"></stop>
                      <stop offset=".703" stopColorColor="#D4602C"></stop>
                      <stop offset=".982" stopColorColor="#D05B2E"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </li>
            </ul>

            <div className="mt-8 border-t border-gray-100">
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleSection("desc")}
                  className="w-full flex justify-between items-center py-4 font-bold italic"
                >
                  <span>Product Description</span>
                  <FaChevronDown
                    size={12}
                    className={`transition-transform ${openSection === "desc" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openSection === "desc" ? "max-h-[500px] pb-4" : "max-h-0"}`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleSection("privacy")}
                  className="w-full flex justify-between items-center py-4 font-bold italic"
                >
                  <span>Our Privacy policy</span>
                  <FaChevronDown
                    size={12}
                    className={`transition-transform ${openSection === "privacy" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openSection === "privacy" ? "max-h-40 pb-4" : "max-h-0"}`}
                >
                  <p className="text-sm text-gray-600">
                    Shipping cost is based on weight. Items can be returned or
                    exchanged within 30 days of delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
