"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

import { useCart, useWishlist } from "../context/CartContext";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegHeart,
  FaRegEye,
  FaShoppingBasket,
  FaCheckCircle,
  FaTimes,
  FaHeart,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slidesData = [
  {
    id: 1,
    img: "/img/slider1.jpg",
    subtitle: "Daily Wellness",
    title: "Support Your Health & Vitality",
    link: "/multivitamins",
  },
  {
    id: 2,
    img: "/img/slider2.jpg",
    subtitle: "Vitamin C Bottle",
    title: "Nourish Body Supplements",
    link: "/multivitamins",
  },
  {
    id: 3,
    img: "/img/slider3.jpg",
    subtitle: "Targeted Nutrition",
    title: "Formulas For Your Health",
    link: "/multivitamins",
  },
];

const categories = [
  {
    id: 1,
    name: "Multivitamins",
    items: 12,
    img: "/img/category1.jpg",
    href: "/multivitamins",
  },
  {
    id: 2,
    name: "Amino Acids",
    items: 8,
    img: "/img/category2.jpg",
    href: "/amino",
  },
  {
    id: 3,
    name: "Protein Powder",
    items: 9,
    img: "/img/category3.jpg",
    href: "/protein",
  },
  {
    id: 4,
    name: "Turmeric",
    items: 5,
    img: "/img/category4.jpg",
    href: "/turmeric",
  },
  {
    id: 5,
    name: "Magnesium",
    items: 7,
    img: "/img/category5.jpg",
    href: "/magnesium",
  },
];

const products = [
  {
    id: 1,
    name: "Casein Protein Vanilla",
    price: 30.0,
    oldPrice: 60.0,
    discount: "Save 50%",
    rating: 5,
    image: "/img/category1.jpg",
    hoverImage: "/img/category5.jpg",
  },
  {
    id: 2,
    name: "Original Ginger Chews",
    price: 75.0,
    oldPrice: null,
    discount: null,
    rating: 5,
    image: "/img/category2.jpg",
    hoverImage: "/img/category1.jpg",
  },
  {
    id: 3,
    name: "PE Whey Protein",
    price: 50.0,
    oldPrice: null,
    discount: null,
    rating: 5,
    image: "/img/category3.jpg",
    hoverImage: "/img/category2.jpg",
  },
  {
    id: 4,
    name: "Vitamin B12 Bones",
    price: 50.0,
    oldPrice: 60.0,
    discount: "Save 17%",
    rating: 4,
    image: "/img/category4.jpg",
    hoverImage: "/img/category3.jpg",
  },
  {
    id: 5,
    name: "Vitamin B12 Bones",
    price: 50.0,
    oldPrice: 60.0,
    discount: "Save 17%",
    rating: 4,
    image: "/img/category5.jpg",
    hoverImage: "/img/category4.jpg",
  },
  {
    id: 6,
    name: "Casein Protein Vanilla",
    price: 30.0,
    oldPrice: 60.0,
    discount: "Save 50%",
    rating: 5,
    image: "/img/category1.jpg",
    hoverImage: "/img/category5.jpg",
  },
  {
    id: 7,
    name: "Original Ginger Chews",
    price: 75.0,
    oldPrice: null,
    discount: null,
    rating: 5,
    image: "/img/category2.jpg",
    hoverImage: "/img/category1.jpg",
  },
  {
    id: 8,
    name: "PE Whey Protein",
    price: 50.0,
    oldPrice: null,
    discount: null,
    rating: 5,
    image: "/img/category3.jpg",
    hoverImage: "/img/category2.jpg",
  },
  {
    id: 9,
    name: "Vitamin B12 Bones",
    price: 50.0,
    oldPrice: 60.0,
    discount: "Save 17%",
    rating: 4,
    image: "/img/category4.jpg",
    hoverImage: "/img/category3.jpg",
  },
  {
    id: 10,
    name: "Vitamin B12 Bones",
    price: 50.0,
    oldPrice: 60.0,
    discount: "Save 17%",
    rating: 4,
    image: "/img/category5.jpg",
    hoverImage: "/img/category4.jpg",
  },
];

const allProducts = [
  {
    id: 1,
    name: "Red Ginseng Royal",
    price: 50.0,
    image: "/img/product1.jpg",
    rating: 5,
    category: "Multivitamins",
  },
  {
    id: 2,
    name: "Test Up Men Over 40",
    price: 50.0,
    image: "/img/product2.jpg",
    rating: 5,
    category: "Multivitamins",
  },
  {
    id: 3,
    name: "Lutein 40MG Rapid",
    price: 30.0,
    image: "/img/product3.jpg",
    rating: 5,
    category: "Multivitamins",
  },
  {
    id: 4,
    name: "Advanced Collagen",
    price: 50.0,
    image: "/img/product4.jpg",
    rating: 5,
    category: "Multivitamins",
  },
  {
    id: 5,
    name: "Casein Protein Vanilla",
    price: 30.0,
    image: "/img/product5.jpg",
    rating: 5,
    category: "Multivitamins",
  },
  {
    id: 6,
    name: "Original Ginger Chews",
    price: 75.0,
    image: "/img/product6.jpg",
    rating: 5,
    category: "Multivitamins",
  },
  {
    id: 7,
    name: "PE Whey Protein",
    price: 50.0,
    image: "/img/product7.jpg",
    rating: 5,
    category: "Multivitamins",
  },
  {
    id: 8,
    name: "Vitamin B12 Bones",
    price: 50.0,
    image: "/img/product8.jpg",
    rating: 5,
    category: "Multivitamins",
  },
  {
    id: 9,
    name: "Omega-3 Fish Oil",
    price: 99.0,
    image: "/img/product9.jpg",
    rating: 5,
    category: "Protein Powder",
  },

  {
    id: 10,
    name: "PE Whey Protein",
    price: 50.0,
    image: "/img/product6.jpg",
    rating: 5,
    category: "Protein Powder",
  },

  {
    id: 11,
    name: "Casein Protein Vanilla",
    price: 30.0,
    image: "/img/product1.jpg",
    rating: 5,
    category: "Protein Powder",
  },

  {
    id: 12,
    name: "Advanced Collagen",
    price: 50.0,
    image: "/img/product3.jpg",
    rating: 5,
    category: "Protein Powder",
  },

  {
    id: 13,
    name: "Lutein 40MG Rapid",
    price: 40.0,
    image: "/img/product5.jpg",
    rating: 5,
    category: "Protein Powder",
  },

  {
    id: 14,
    name: "Magnesium Citrate",
    price: 50.99,
    image: "/img/product2.jpg",
    rating: 5,
    category: "Protein Powder",
  },

  {
    id: 15,
    name: "Vitamin C Complex",
    price: 79.0,
    image: "/img/product7.jpg",
    rating: 5,
    category: "Protein Powder",
  },

  {
    id: 16,
    name: "Test Up Men Over 40",
    price: 50.0,
    image: "/img/product8.jpg",
    rating: 5,
    category: "Amino Acids",
  },

  {
    id: 17,
    name: "Magnesium Citrate",
    price: 50.99,
    image: "/img/product6.jpg",
    rating: 5,
    category: "Amino Acids",
  },

  {
    id: 18,
    name: "Red Ginseng Royal",
    price: 50.0,
    image: "/img/product3.jpg",
    rating: 5,
    category: "Amino Acids",
  },

  {
    id: 19,
    name: "Calcium Zinc 360",
    price: 50.0,
    image: "/img/product7.jpg",
    rating: 5,
    category: "Amino Acids",
  },

  {
    id: 20,
    name: "Advanced Collagen",
    price: 50.0,
    image: "/img/product2.jpg",
    rating: 5,
    category: "Amino Acids",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Olivor Brown",
    role: "Verified Buyer",
    rating: 4,
    comment:
      "Excellent service and top-notch supplements. The loyalty rewards is a great bonus. Will definitely keep ordering!",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Verified Buyer",
    rating: 5,
    comment:
      "Excellent service and top-notch supplements. The loyalty rewards is a great bonus. Will definitely keep ordering!",
  },
  {
    id: 3,
    name: "Emma Richardson",
    role: "Verified Buyer",
    rating: 5,
    comment:
      "Vitazen supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!",
  },

  {
    id: 4,
    name: "Emma Richardson",
    role: "Verified Buyer",
    rating: 5,
    comment:
      "Vitazen supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!",
  },
];

const faqs = [
  {
    question: "How do I choose the right vitamins for me?",
    answer:
      "You can start by consulting with a healthcare professional or taking our personalized quiz to find the best match for your needs.",
  },
  {
    question: "Are your vitamins certified and safe to use?",
    answer:
      "Yes, all our products are third-party tested and manufactured in GMP-certified facilities.",
  },
  {
    question: "How long does it take to see results from vitamins?",
    answer:
      "Results vary, but most users notice a difference within 4 to 6 weeks of consistent use.",
  },
  {
    question: "Do you offer subscription plans for vitamins?",
    answer:
      "Yes, we offer flexible subscription plans that you can pause or cancel at any time.",
  },
];

const brands = [
  { name: "RAVE", src: "/img/logo1.png" },
  { name: "HORSE", src: "/logos/horse.svg" },
  { name: "JERIX", src: "/img/logo3.avif" },
  { name: "GYM", src: "/logos/gym.svg" },
  { name: "URBAN", src: "/logos/urban.svg" },
  { name: "Botrio", src: "/logos/botrio.svg" },
];

const posts = [
  {
    id: 1,
    title: "5 Essential Nutrients to Boost Your Daily Energy Levels",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog1.jpg",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "How to Choose the Right Multivitamin for Your Healthy Lifestyle",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog2.jpg",
    bgColor: "bg-orange-50",
  },
  {
    id: 3,
    title: "Omega-3 Benefits Why Every Diet Needs This Super Nutrient",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog3.jpg",
    bgColor: "bg-cyan-50",
  },
];

export default function Main() {
  const router = useRouter();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Multivitamins");
  const [visibleCount, setVisibleCount] = useState(8);
  const [hoveredDealId, setHoveredDealId] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
    setMounted(true);
  }, []);

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

  const filteredProducts = allProducts.filter(
    (product) => product.category === activeCategory,
  );

  const displayedProducts = filteredProducts.slice(0, visibleCount);

  const toggleProducts = () => {
    if (visibleCount < filteredProducts.length) {
      setVisibleCount(visibleCount + 4);
    } else {
      setVisibleCount(8);
    }
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(8);
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section id="slider">
        <div className="w-full h-[500px] md:h-[650px] overflow-hidden relative bg-[#1a1310] group inset-0">
          <Swiper
            speed={1200}
            parallax={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{ nextEl: ".hero-next-btn", prevEl: ".hero-prev-btn" }}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper h-full w-full absolute"
          >
            {slidesData.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full flex items-center">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="relative z-10 px-10 md:px-24 text-black w-full">
                    <div className="max-w-2xl">
                      <h3
                        className="tracking-[0.3em] uppercase text-base mb-4 block"
                        data-swiper-parallax="-300"
                      >
                        {slide.subtitle}
                      </h3>
                      <h2
                        className="text-5xl md:text-7xl font-serif leading-tight mb-8 font-bold"
                        data-swiper-parallax="-400"
                      >
                        {slide.title.split(".").map((text, i) => (
                          <span key={i}>
                            {text}
                            {i === 0 ? "." : ""}
                            <br />
                          </span>
                        ))}
                      </h2>
                      <Link href={slide.link}>
                        <button className="bg-[#51ADE5] hover:bg-[#4596c7] text-white px-8 py-3 rounded-md flex items-center gap-2 transition-all uppercase font-bold text-sm tracking-wider cursor-pointer border-none">
                          Shop Now <FiArrowUpRight className="text-2xl" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="hero-prev-btn absolute left-6 top-1/2 -translate-y-1/2 z-[30] w-12 h-12 flex items-center justify-center rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 cursor-pointer border-none">
            <FaChevronLeft size={14} />
          </button>
          <button className="hero-next-btn absolute right-6 top-1/2 -translate-y-1/2 z-[30] w-12 h-12 flex items-center justify-center rounded-full bg-black text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/80 cursor-pointer border-none">
            <FaChevronRight size={14} />
          </button>
        </div>
      </section>

      <section className="py-16 bg-white container mx-auto px-15">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Shop Top Categories
          </h2>
          <div className="flex gap-3 relative z-20">
            <button className="prev-cat-btn bg-[#51ADE5]/10 hover:bg-black text-[#51ADE5] hover:text-white p-3 rounded-full transition-all border border-[#51ADE5]/20 cursor-pointer">
              <FaChevronLeft size={18} />
            </button>
            <button className="next-cat-btn bg-[#51ADE5]/10 hover:bg-black text-[#51ADE5] hover:text-white p-3 rounded-full transition-all border border-[#51ADE5]/20 cursor-pointer">
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation={{ prevEl: ".prev-cat-btn", nextEl: ".next-cat-btn" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="category-swiper"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <Link href={cat.href} className="group cursor-pointer block">
                <div className="relative bg-[#F7F7F7] rounded-2xl h-[260px] w-full mb-4 overflow-hidden flex items-center justify-center p-8">
                  <Image
                    src={cat.img}
                    alt={cat.name}
                    width={350}
                    height={350}
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#51ADE5] transition-colors">
                    {cat.name}
                  </h4>
                  <p className="text-gray-500 text-sm">({cat.items} Items)</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="max-w-full mx-auto py-12 md:py-24 flex flex-col md:flex-row items-center gap-20 font-sans">
        <div className="flex flex-1 gap-4 w-full justify-center mx-15">
          <div className="relative w-48 h-72 md:w-100 md:h-[600px] rounded-[20px] overflow-hidden shadow-xl">
            <Image
              src="/img/about5.jpg"
              alt="Vitamin C"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-60 h-72 md:w-100 md:h-[600px] rounded-[20px] overflow-hidden shadow-xl my-[-100px]">
            <Image
              src="/img/about2.jpg"
              alt="Vitamin Bottle"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-2">
            <h4 className="text-[#5DB9E5] font-bold tracking-[0.2em] uppercase text-xs">
              BOOST YOUR HEALTH
            </h4>
            <h1 className="text-4xl md:text-4xl font-serif font-bold text-gray-900 leading-[1.1]">
              Your Daily Dose of <br /> Natural Immunity.
            </h1>
          </div>
          <p className="text-gray-500 text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            Power up your immune system with our premium Vitamin C supplements.
            Formulated with pure citrus extracts and advanced absorption
            technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4 justify-center md:justify-start">
            <Link href="/multivitamins">
              <button className="bg-[#5DB9E5] hover:bg-[#4aa8d4] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-[#5DB9E5]/50 flex items-center gap-2">
                SHOP NOW <FiArrowUpRight className="text-2xl" />
              </button>
            </Link>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="group flex items-center gap-4 text-gray-900 font-bold cursor-pointer border-none bg-transparent"
            >
              <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              WATCH VIDEO
            </button>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video shadow-2xl">
            <button
              className="absolute -top-12 right-0 text-white text-3xl hover:text-red-500 transition border-none bg-transparent cursor-pointer"
              onClick={() => setIsVideoOpen(false)}
            >
              <FaTimes />
            </button>

            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/aWQn5ZX62G0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <section className="max-w-full mx-auto px-4 lg:px-15 py-16 relative">
        <div className="flex justify-between items-center mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-orange-500 text-sm">🔥</span>
              <span className="text-[#5DB9E5] text-xs font-bold uppercase tracking-widest">
                Hot Sale On Week
              </span>
            </div>
            <h2 className="text-4xl font-serif font-bold text-slate-900">
              Latest Products
            </h2>
          </div>

          <div className="flex gap-3 relative z-20">
            <button className="prod-prev-btn w-12 h-12 rounded-full bg-[#5DB9E5] hover:bg-[#4aa8d4] text-white flex items-center justify-center transition-all shadow-md cursor-pointer border-none">
              <FaChevronLeft size={18} />
            </button>
            <button className="prod-next-btn w-12 h-12 rounded-full bg-[#5DB9E5] hover:bg-[#4aa8d4] text-white flex items-center justify-center transition-all shadow-md cursor-pointer border-none">
              <FaChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{ prevEl: ".prod-prev-btn", nextEl: ".prod-next-btn" }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-5"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/5] bg-[#F9F9F9] rounded-[32px] overflow-hidden mb-6 flex items-center justify-center p-8 transition-all group-hover:shadow-xl">
                  {product.discount && (
                    <span className="absolute top-5 left-5 bg-[#5DB9E5] text-white text-[10px] font-bold px-3 py-1.5 rounded-full z-20">
                      {product.discount}
                    </span>
                  )}

                  <div className="relative w-full h-full transition-opacity duration-500 group-hover:opacity-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Image
                      src={product.hoverImage || product.image}
                      alt={product.name}
                      fill
                      className="object-contain scale-105"
                    />
                  </div>

                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 translate-y-18 group-hover:translate-y-0 transition-transform duration-300 z-30">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product);
                      }}
                      className="w-10 h-10 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 border-none cursor-pointer"
                    >
                      {isInWishlist(product.id) ? (
                        <FaHeart size={16} className="text-red-500" />
                      ) : (
                        <FaRegHeart size={16} />
                      )}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickViewProduct(product);
                      }}
                      className="w-10 h-10 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 border-none cursor-pointer"
                    >
                      <FaRegEye size={16} />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/multivitamins/${product.id}`);
                      }}
                      className="w-10 h-10 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 border-none cursor-pointer"
                    >
                      <FaShoppingBasket size={16} />
                    </button>
                  </div>
                </div>

                <div
                  className="text-center"
                  onClick={() => router.push(`/multivitamins/${product.id}`)}
                >
                  <div className="flex justify-center gap-0.5 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < product.rating
                            ? "text-[#5DB9E5] text-sm"
                            : "text-gray-300 text-sm"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-[#5DB9E5] transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex justify-center items-center gap-3">
                    <span className="text-[#5DB9E5] font-extrabold text-xl">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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
                  SKU: {quickViewProduct.sku || "N/A"}
                </span>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  {quickViewProduct.name}
                </h2>
                <p className="text-2xl font-bold text-[#51ADE5] mb-6">
                  ${quickViewProduct.price.toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {quickViewProduct.description || "No description available."}
                </p>

                <div className="flex gap-4 mb-6">
                  <div className="flex items-center border rounded-lg px-4 py-2 gap-4">
                    <button
                      onClick={() =>
                        setQuantity((prev) => Math.max(1, prev - 1))
                      }
                      className="text-gray-400 hover:text-black"
                    >
                      -
                    </button>
                    <span className="w-4 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity((prev) => prev + 1)}
                      className="text-gray-400 hover:text-black"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct, quantity);
                      setQuickViewProduct(null);
                    }}
                    className="flex-1 bg-[#51ADE5] text-white py-4 rounded-lg font-bold hover:bg-black transition uppercase text-xs tracking-widest"
                  >
                    Add to Cart
                  </button>
                </div>

                <Link
                  href={`/multivitamins/${quickViewProduct.id}`}
                  className="text-sm font-semibold underline flex items-center gap-1 hover:text-[#51ADE5]"
                >
                  View full details <FiArrowUpRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="max-w-full mx-auto px-15 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h4 className="text-[#5DB9E5] font-bold tracking-[0.2em] text-xs uppercase">
                SUBSCRIPTION BENEFITS
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 leading-tight">
                Unlock Exclusive Perks with <br /> Vitazen Subscription.
              </h2>
            </div>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
              Take control of your wellness journey with the{" "}
              <span className="font-bold text-slate-800">Subscription</span>.
              Enjoy exclusive discounts and hassle-free deliveries.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-2">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-slate-900 text-lg" />
                <span className="text-slate-900 font-bold text-[11px] tracking-wider uppercase">
                  EXCLUSIVE DISCOUNTS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-slate-900 text-lg" />
                <span className="text-slate-900 font-bold text-[11px] tracking-wider uppercase">
                  DELIVERED ON SCHEDULE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-slate-900 text-lg" />
                <span className="text-slate-900 font-bold text-[11px] tracking-wider uppercase">
                  LOYALTY REWARDS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-slate-900 text-lg" />
                <span className="text-slate-900 font-bold text-[11px] tracking-wider uppercase">
                  PAUSE OR CANCEL ANYTIME
                </span>
              </div>
            </div>
            <Link href="/aboutme">
              <button className="bg-[#5DB9E5] hover:bg-[#4aa8d4] text-white px-10 py-4 rounded-lg font-bold transition-all flex items-center gap-2 text-xs tracking-[0.1em] uppercase shadow-md border-none cursor-pointer">
                LEARN MORE <FiArrowUpRight className="text-2xl" />
              </button>
            </Link>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-[1.1/1] w-full rounded-[25px] overflow-hidden bg-[#FFD200]">
              <Image
                src="/img/subscription.jpg"
                alt="Subscription"
                fill
                className="object-contain p-6 md:p-10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-full mx-auto px-15 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-[#5DB9E5] text-xs font-bold uppercase tracking-widest">
              BUY ONE, GET ONE 50% OFF
            </span>
            <h2 className="text-4xl font-serif font-bold text-slate-900 mt-1">
              Popular Products
            </h2>
          </div>
          <div className="flex gap-6 text-sm font-bold text-gray-400">
            {["Multivitamins", "Protein Powder", "Amino Acids"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`transition-all pb-1 uppercase tracking-wider border-b-2 cursor-pointer bg-transparent border-none ${
                  activeCategory === cat
                    ? "text-[#5DB9E5] border-[#5DB9E5]"
                    : "border-transparent hover:text-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="group animate-fadeIn cursor-pointer"
            >
              <div className="relative aspect-square bg-[#F9F9F9] rounded-[24px] overflow-hidden mb-4 flex items-center justify-center transition-all group-hover:shadow-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product);
                    }}
                    className="w-10 h-10 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all border-none cursor-pointer"
                  >
                    {isInWishlist(product.id) ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setQuickViewProduct(product);
                    }}
                    className="w-10 h-10 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all border-none cursor-pointer"
                  >
                    <FaRegEye />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(product, 1);
                    }}
                    className="w-10 h-10 bg-white hover:bg-[#5DB9E5] hover:text-white text-gray-700 rounded-full flex items-center justify-center shadow-md transition-all border-none cursor-pointer"
                  >
                    <FaShoppingBasket />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-slate-800 group-hover:text-[#5DB9E5] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#5DB9E5] font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length > 8 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={toggleProducts}
              className="bg-[#5DB9E5] hover:bg-[#4aa8d4] text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg text-xs tracking-widest uppercase border-none cursor-pointer"
            >
              {visibleCount < filteredProducts.length
                ? "Load More Products"
                : "Show Less Products"}
            </button>
          </div>
        )}
      </section>

      <section className="max-w-full mx-auto px-15 py-20 relative bg-[#F8F8F8] ">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-[#5DB9E5] text-xs font-bold uppercase tracking-widest">
              CLIENT STORIES
            </span>
            <h2 className="text-4xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
              Trusted by Thousands of <br /> Satisfied Customers.
            </h2>
          </div>
          <div className="flex gap-3 relative z-20">
            <button className="testi-prev-btn w-12 h-12 rounded-full border border-gray-200 bg-white text-[#5DB9E5] hover:bg-[#5DB9E5] hover:text-white flex items-center justify-center transition-all cursor-pointer">
              <FaChevronLeft size={16} />
            </button>
            <button className="testi-next-btn w-12 h-12 rounded-full border border-gray-200 bg-white text-[#5DB9E5] hover:bg-[#5DB9E5] hover:text-white flex items-center justify-center transition-all cursor-pointer">
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          navigation={{ prevEl: ".testi-prev-btn", nextEl: ".testi-next-btn" }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                <div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    "{item.comment}"
                  </p>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={
                          i < item.rating ? "text-[#5DB9E5]" : "text-gray-200"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-xl text-slate-900">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-emerald-500 font-medium mt-1">
                    <FaCheckCircle size={14} />
                    {item.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section id="deals">
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

      <section className="max-w-full mx-auto px-6 md:px-15 py-12 flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/2">
          <span className="text-sky-500 font-medium text-sm tracking-widest uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-8">
            You've Got Any Questions?
          </h2>

          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-4 cursor-pointer">
                <summary className="flex justify-between items-center list-none text-lg font-medium text-slate-800">
                  {faq.question}
                  <span className="text-2xl font-light transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[350px] md:h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/img/faq.jpg"
              alt="Doctor holding vitamins"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-4 right-4 md:bottom-4 md:left-4 md:right-4 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row justify-between items-center gap-4 border border-gray-100">
            <div className="text-center sm:text-left">
              <h4 className="text-lg md:text-xl font-bold text-slate-900">
                Still Have Questions?
              </h4>
              <p className="text-gray-500 text-sm">
                Feel free to ask any questions you have!
              </p>
            </div>
            <button className="w-full sm:w-auto bg-[#5AB9E6] hover:bg-black text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors whitespace-nowrap flex items-center justify-center gap-2">
              HERE TO HELP
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11L11 1M11 1H1M11 1V11"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#F8F8F8] py-20 mt-10 md:mt-0">
        <div className="max-w-full mx-auto px-6 md:px-15">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center grayscale opacity-60">
            <Image
              src="/img/logo1.png"
              alt="Rave Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <Image
              src="/img/logo2.avif"
              alt="Horse Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <Image
              src="/img/logo3.avif"
              alt="Jerix Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <Image
              src="/img/logo4.jpg"
              alt="Gym Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <Image
              src="/img/logo5.png"
              alt="Urban Logo"
              width={120}
              height={40}
              className="object-contain"
            />
            <Image
              src="/img/logo6.jpg"
              alt="Botrio Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-20 max-w-full mx-auto px-15">
        <div className="text-center mb-12">
          <p className="text-sky-500 font-semibold uppercase tracking-widest text-sm">
            Our Blog
          </p>
          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Latest News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            /* Hər postu Link ilə bükürük, href hissəsinə post.id yazırıq */
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="group block"
            >
              <div className="relative cursor-pointer">
                <div
                  className={`relative h-[320px] w-full rounded-[1rem] overflow-hidden ${post.bgColor}`}
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/20">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      👤 {post.admin}
                    </span>
                    <span className="flex items-center gap-1">
                      📅 {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #fff !important;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #51ade5 !important;
          opacity: 1;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </>
  );
}
