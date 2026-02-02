"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  FaStar,
  FaChevronUp,
  FaChevronDown,
  FaRegHeart,
  FaEye,
  FaShoppingBag,
  FaTimes,
  FaHeart,
} from "react-icons/fa";
import { useCart, useWishlist } from "../context/CartContext";
import { useRouter } from "next/navigation";

const initialProducts = [
  {
    id: 1,
    name: "Red Ginseng Royal",
    price: 50.0,
    image: "/img/product1.jpg",
    rating: 5,
    type: "Charging Cables",
    color: "Red",
    weight: "100g",
    brand: "Battery",
    inStock: true,
    sku: "RG-001",
    description: "High-quality Red Ginseng for energy and vitality.",
  },
  {
    id: 2,
    name: "Test Up Men Over 40",
    price: 50.0,
    image: "/img/product2.jpg",
    rating: 5,
    type: "Chocolate",
    color: "Blue",
    weight: "200g",
    brand: "Phone",
    inStock: false,
    sku: "TU-040",
    description: "Special formula designed for men over 40.",
  },
  {
    id: 3,
    name: "Lutein 40MG Rapid",
    price: 30.0,
    image: "/img/product3.jpg",
    rating: 5,
    type: "Face Powder",
    color: "Black",
    weight: "300g",
    brand: "Soft Toys",
    inStock: true,
    sku: "LT-040",
    description: "Rapid absorption Lutein for eye health.",
  },
  {
    id: 4,
    name: "Advanced Collagen",
    price: 50.0,
    image: "/img/product4.jpg",
    rating: 5,
    type: "Face Powder",
    color: "White",
    weight: "500g",
    brand: "Biggest Teddy",
    inStock: true,
    sku: "AC-500",
    description: "Advanced collagen for skin and joint support.",
  },
  {
    id: 5,
    name: "Casein Protein Vanilla",
    price: 30.0,
    image: "/img/product5.jpg",
    rating: 5,
    type: "Charging Cables",
    color: "Blue",
    weight: "100g",
    brand: "Battery",
    inStock: true,
    sku: "CP-001",
    description: "Slow-release protein for overnight muscle recovery.",
  },
  {
    id: 6,
    name: "Original Ginger Chews",
    price: 75.0,
    image: "/img/product6.jpg",
    rating: 5,
    type: "Chocolate",
    color: "Black",
    weight: "200g",
    brand: "Lion & Lioness",
    inStock: true,
    sku: "GC-006",
    description: "Natural ginger chews for digestion and taste.",
  },
  {
    id: 7,
    name: "PE Whey Protein",
    price: 50.0,
    image: "/img/product7.jpg",
    rating: 5,
    type: "Charging Cables",
    color: "Black",
    weight: "300g",
    brand: "Phone",
    inStock: true,
    sku: "WP-007",
    description: "Premium Whey Protein for muscle building.",
  },
  {
    id: 8,
    name: "Vitamin B12 Bones",
    price: 50.0,
    image: "/img/product8.jpg",
    rating: 5,
    type: "Doll House Playsets",
    color: "White",
    weight: "500g",
    brand: "Soft Toys",
    inStock: false,
    sku: "VB-012",
    description: "Vitamin B12 specifically for bone density and health.",
  },
  {
    id: 9,
    name: "Omega-3 Fish Oil",
    price: 99.0,
    image: "/img/product9.jpg",
    rating: 5,
    type: "Chocolate",
    color: "White",
    weight: "100g",
    brand: "Biggest Teddy",
    inStock: true,
    sku: "OM-003",
    description: "Pure Omega-3 for heart and brain health.",
  },
  {
    id: 10,
    name: "Magnesium Citrate",
    price: 50.99,
    image: "/img/product2.jpg",
    rating: 5,
    type: "Doll House Playsets",
    color: "Blue",
    weight: "200g",
    brand: "Battery",
    inStock: true,
    sku: "MG-110",
    description: "Magnesium for muscle relaxation and better sleep.",
  },
  {
    id: 11,
    name: "Vitamin C Complex",
    price: 79.0,
    image: "/img/product7.jpg",
    rating: 5,
    type: "Face Powder",
    color: "Black",
    weight: "300g",
    brand: "Phone",
    inStock: true,
    sku: "VC-111",
    description: "Immune boosting Vitamin C with bioflavonoids.",
  },
  {
    id: 12,
    name: "Calcium Zinc 360",
    price: 50.0,
    image: "/img/product3.jpg",
    rating: 5,
    type: "Doll House Playsets",
    color: "White",
    weight: "500g",
    brand: "Lion & Lioness",
    inStock: true,
    sku: "CZ-360",
    description: "Balanced calcium and zinc for metabolic support.",
  },
];

export default function SupplementPage() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);
  const [minPrice, setMinPrice] = useState(0); 
  const [maxPrice, setMaxPrice] = useState(100);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedWeights, setSelectedWeights] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [stockStatus, setStockStatus] = useState<boolean | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const priceMatch = product.price >= minPrice && product.price <= maxPrice;
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
      const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
      const weightMatch = selectedWeights.length === 0 || selectedWeights.includes(product.weight);
      const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      const stockMatch = stockStatus === null || product.inStock === stockStatus;
      return priceMatch && typeMatch && colorMatch && weightMatch && brandMatch && stockMatch;
    });
  }, [minPrice, maxPrice, selectedTypes, selectedColors, selectedWeights, selectedBrands, stockStatus]);

  const toggleFilter = (item: string, state: string[], setState: React.Dispatch<React.SetStateAction<string[]>>) => {
    setState((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-[#F9F9F9] py-10 px-6 sm:px-20">
        <nav className="text-sm text-gray-500">
          <Link href="/">
            <span className="hover:text-black cursor-pointer transition">Home</span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Supplements</span>
        </nav>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-15 py-10 flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-[280px] flex flex-col gap-6">
          <FilterSection title="Availability">
            <div className="space-y-2 text-sm text-gray-600">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={stockStatus === true}
                  onChange={() => setStockStatus(stockStatus === true ? null : true)}
                  className="accent-[#51ADE5]"
                />
                In stock ({initialProducts.filter((p) => p.inStock).length})
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={stockStatus === false}
                  onChange={() => setStockStatus(stockStatus === false ? null : false)}
                  className="accent-[#51ADE5]"
                />
                Out of stock ({initialProducts.filter((p) => !p.inStock).length})
              </label>
            </div>
          </FilterSection>

          <FilterSection title="Price">
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full p-2 border rounded text-xs"
              />
              <span className="text-gray-400">—</span>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full p-2 border rounded text-xs"
              />
            </div>
          </FilterSection>

          <FilterSection title="Product Type">
            <div className="space-y-2 text-sm text-gray-600">
              {["Charging Cables", "Chocolate", "Doll House Playsets", "Face Powder"].map((type) => (
                <label key={type} className="flex justify-between items-center cursor-pointer">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleFilter(type, selectedTypes, setSelectedTypes)}
                      className="accent-[#51ADE5]"
                    /> {type}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    ({initialProducts.filter((p) => p.type === type).length})
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Color">
            <div className="space-y-2 text-sm text-gray-600">
              {["Black", "Blue", "White", "Red"].map((color) => (
                <label key={color} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => toggleFilter(color, selectedColors, setSelectedColors)}
                    className="accent-[#51ADE5]"
                  /> {color}
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Weight">
            <div className="space-y-2 text-sm text-gray-600">
              {["100g", "200g", "300g", "500g"].map((w) => (
                <label key={w} className="flex justify-between items-center cursor-pointer">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedWeights.includes(w)}
                      onChange={() => toggleFilter(w, selectedWeights, setSelectedWeights)}
                      className="accent-[#51ADE5]"
                    /> {w}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    ({initialProducts.filter((p) => p.weight === w).length})
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Brand">
            <div className="space-y-2 text-sm text-gray-600">
              {["Battery", "Biggest Teddy", "Lion & Lioness", "Phone", "Soft Toys"].map((brand) => (
                <label key={brand} className="flex justify-between items-center cursor-pointer">
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
                      className="accent-[#51ADE5]"
                    /> {brand}
                  </span>
                  <span className="text-[10px] text-gray-400">
                    ({initialProducts.filter((p) => p.brand === brand).length})
                  </span>
                </label>
              ))}
            </div>
          </FilterSection>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative">
                <div className="relative bg-[#F7F7F7] rounded-2xl aspect-square flex items-center justify-center p-10 overflow-hidden">
                  {!product.inStock && (
                    <span className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-[10px] rounded-full uppercase z-10">
                      Sold out
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">
                    <button
                      onClick={() => toggleWishlist(product)} 
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#51ADE5] hover:text-white transition shadow-sm"
                    >
                      {isInWishlist(product.id) ? (
                        <FaHeart size={16} className="text-red-500" />
                      ) : (
                        <FaRegHeart size={16} />
                      )}
                    </button>
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#51ADE5] hover:text-white transition shadow-sm"
                    >
                      <FaEye size={16} />
                    </button>
                    <button
                      onClick={() => addToCart(product, 1, product.color, product.weight)}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#51ADE5] hover:text-white transition shadow-sm"
                    >
                      <FaShoppingBag size={16} />
                    </button>
                  </div>
                </div>

                <Link href={`/supplement/${product.id}`}>
                  <div className="text-center mt-4 cursor-pointer">
                    <div className="flex justify-center text-yellow-400 text-[10px] mb-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <h3 className="font-serif font-bold text-gray-900 group-hover:text-[#51ADE5] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[#51ADE5] font-bold mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </main>
      </div>

      {quickViewProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative flex flex-col md:flex-row shadow-2xl">
            <button
              onClick={() => {
                setQuickViewProduct(null);
                setQuantity(1);
              }}
              className="absolute top-5 right-5 z-20 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-red-500 hover:text-white transition"
            >
              <FaTimes />
            </button>
            <div className="md:w-1/2 bg-[#F7F7F7] p-10 flex items-center justify-center">
              <div className="relative w-full aspect-square">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-xs text-gray-400 mb-2 uppercase tracking-widest">
                SKU: {quickViewProduct.sku}
              </span>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                {quickViewProduct.name}
              </h2>
              <p className="text-2xl font-bold text-[#51ADE5] mb-6">
                ${quickViewProduct.price.toFixed(2)}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                {quickViewProduct.description}
              </p>

              <div className="flex gap-4 mb-6">
                <div className="flex items-center border rounded-lg px-4 py-2 gap-4">
                  <button onClick={() => setQuantity((prev) => Math.max(1, prev - 1))} className="text-gray-400 hover:text-black">-</button>
                  <span className="w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity((prev) => prev + 1)} className="text-gray-400 hover:text-black">+</button>
                </div>
                <button
                  onClick={() => {
                    addToCart(quickViewProduct, quantity, quickViewProduct.color, quickViewProduct.weight);
                    setQuickViewProduct(null);
                    setQuantity(1);
                  }}
                  className="flex-1 bg-[#51ADE5] text-white py-4 rounded-lg font-bold hover:bg-black transition uppercase text-xs tracking-widest"
                >
                  Add to Cart
                </button>
              </div>
              <button className="w-full bg-[#5AB8ED] text-white py-4 rounded-lg font-bold hover:opacity-90 transition uppercase text-xs tracking-widest mb-4">Buy It Now</button>
              <Link href={`/supplement/${quickViewProduct.id}`} className="text-sm font-semibold underline flex items-center gap-1 hover:text-[#51ADE5]">
                View full details ↗
              </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="border-b border-gray-100 pb-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center font-bold text-gray-800 mb-4 uppercase text-xs tracking-widest"
      >
        {title} {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
      </button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}