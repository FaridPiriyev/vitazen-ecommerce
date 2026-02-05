"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Olivor Brown",
    role: "Verified Buyer",
    rating: 4,
    comment:
      "Excellent service and top-notch supplements. The loyalty rewards is a great bonus.",
  },
  {
    id: 2,
    name: "Sophia Martinez",
    role: "Verified Buyer",
    rating: 5,
    comment:
      "Excellent service and top-notch supplements. The loyalty rewards is a great bonus.",
  },
  {
    id: 3,
    name: "Emma Richardson",
    role: "Verified Buyer",
    rating: 5,
    comment:
      "Vitazen supplements have been a game-changer for me! I feel more energized.",
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

export default function AboutSection() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  return (
    <>
      <Navbar />
      <Header />

      <div className="bg-[#F9F9F9] py-10 px-6 lg:px-20">
        <nav className="text-sm text-gray-500 max-w-[1440px] mx-auto">
          <Link href="/" className="hover:text-[#51ADE5] transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Faq</span>
        </nav>
      </div>

      <section className="max-w-[1440px] mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/2">
          <span className="text-[#51ADE5] font-bold text-sm tracking-widest uppercase">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-8">
            You've Got Any Questions?
          </h2>
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <details key={index} className="group py-4 cursor-pointer">
                <summary className="flex justify-between items-center list-none text-lg font-medium text-slate-800">
                  {faq.question}{" "}
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
          <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
            <Image src="/img/faq.jpg" alt="FAQ" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 bg-white p-6 rounded-2xl shadow-lg flex justify-between items-center border border-gray-100">
            <div>
              <h4 className="text-lg font-bold">Still Have Questions?</h4>
              <p className="text-gray-500 text-sm">
                Feel free to ask any questions you have!
              </p>
            </div>
            <button className="bg-[#51ADE5] text-white px-6 py-3 rounded-xl font-bold text-xs hover:bg-black transition-colors">
              HERE TO HELP
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-full mx-auto px-6 lg:px-20 py-20 relative bg-[#F8F8F8]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-12 relative z-50">
            <div>
              <span className="text-[#5DB9E5] text-xs font-bold uppercase tracking-widest">
                CLIENT STORIES
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2">
                Trusted by Thousands of <br /> Satisfied Customers.
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                ref={(node) => setPrevEl(node)}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white text-[#5DB9E5] hover:bg-[#5DB9E5] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-90"
              >
                <FaChevronLeft size={16} />
              </button>
              <button
                ref={(node) => setNextEl(node)}
                className="w-12 h-12 rounded-full border border-gray-200 bg-white text-[#5DB9E5] hover:bg-[#5DB9E5] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-90"
              >
                <FaChevronRight size={16} />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            observer={true}
            observeParents={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{ prevEl, nextEl }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="testimonials-swiper !overflow-visible"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-all h-full flex flex-col justify-between min-h-[300px]">
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
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
                      <FaCheckCircle size={14} /> {item.role}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
}
