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

const teamMembers = [
  {
    id: 1,
    name: "Jovan Michael",
    role: "Data Specialist",
    img: "/img/worker1.jpg",
  },
  {
    id: 2,
    name: "Kristopher Bunn",
    role: "Mac & PC Specialist",
    img: "/img/worker4.jpg",
  },
  {
    id: 3,
    name: "Cynthia Casey",
    role: "Phone Specialist",
    img: "/img/worker2.jpg",
  },
  {
    id: 4,
    name: "Barbara Hamby",
    role: "Drone Specialist",
    img: "/img/worker3.jpg",
  },
  {
    id: 5,
    name: "Linda Soultin",
    role: "Mobile Specialist",
    img: "/img/worker5.jpg",
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
    name: "Nick Rassel",
    role: "Drone Specialist",
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

const Counter = ({ value }: { value: string | number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseFloat(value.toString().replace(/[^0-9.]/g, ""));
  const suffix = value.toString().replace(/[0-9.]/g, "");
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          const formatted =
            numericValue % 1 !== 0 ? latest.toFixed(1) : Math.round(latest);
          setDisplayValue(formatted.toString());
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, count]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default function AboutSection() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);

  const stats = [
    { label: "HAPPY CUSTOMERS", value: 98 },
    { label: "12 YEARS OF EXPERIENCE", value: 85 },
  ];

  const counters = [
    { number: "1.5K", label: "RETAIL OUTLETS" },
    { number: "5.0K", label: "PRODUCTS" },
    { number: "1.3M", label: "CUSTOMERS" },
    { number: "2.5K", label: "PHARMACISTS" },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <div className="min-h-screen bg-white">
        <div className="bg-[#F9F9F9] py-10 px-6 lg:px-20">
          <nav className="text-sm text-gray-500 max-w-[1440px] mx-auto">
            <Link href="/" className="hover:text-[#51ADE5]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-400">About Us</span>
          </nav>
        </div>

        <section className="py-24 px-6 max-w-[1440px] mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/aboutme.jpg"
                  alt="About"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-[-30px] right-0 md:right-[-30px] bg-white shadow-2xl p-10 rounded-2xl w-full max-w-[350px] z-10">
                <div className="space-y-8">
                  {stats.map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="bg-[#51ADE5] text-white text-[13px] font-bold px-3 py-1 rounded-full">
                          <Counter value={stat.value} />%
                        </span>
                        <span className="text-[12px] font-bold text-gray-500 uppercase">
                          {stat.label}
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 h-[8px] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 1.5 }}
                          className="bg-[#51ADE5] h-full rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-[#51ADE5] font-bold text-sm tracking-widest uppercase">
                Who We Are
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold text-[#181A17] leading-tight">
                Vitazen® was founded on the belief that wellness is more than
                just a necessity.
              </h2>
              <Link
                href="/multivitamins"
                className="inline-flex items-center gap-3 bg-[#51ADE5] text-white px-10 py-4 rounded-xl font-bold uppercase text-sm hover:bg-[#3f92c5] transition-all"
              >
                Shop Now <FiArrowUpRight className="text-2xl" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mt-20 border-t pt-20">
            {counters.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-5xl font-bold text-[#181A17]">
                  <Counter value={item.number} />
                </h3>
                <p className="text-gray-400 font-bold text-xs uppercase mt-2">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#51ADE5] font-bold text-xs uppercase tracking-widest">
                OUR TEAM
              </span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2">
                Meet Our Experts
              </h2>
            </div>
            <Swiper
              modules={[Autoplay, FreeMode]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="relative group overflow-hidden rounded-[2rem] bg-gray-50 text-center pb-8 shadow-sm">
                    <div className="relative h-[400px] w-full">
                      <Image
                        src={member.img}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-6">
                      <h4 className="text-xl font-bold text-slate-900">
                        {member.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{member.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="py-24 bg-[#F8F8F8]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
            <div className="flex justify-between items-end mb-12">
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
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white text-[#5DB9E5] hover:bg-[#5DB9E5] hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-90"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  ref={(node) => setNextEl(node)}
                  className="w-12 h-12 rounded-full border border-gray-200 bg-white text-[#5DB9E5] hover:bg-[#5DB9E5] hover:text-white flex items-center justify-center transition-all shadow-sm active:scale-90"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation={{ prevEl, nextEl }}
                autoplay={{ delay: 4000 }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="testimonials-swiper"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm h-full flex flex-col justify-between min-h-[300px]">
                      <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
                        "{item.comment}"
                      </p>
                      <div>
                        <div className="flex gap-1 mb-4 text-[#5DB9E5]">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
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
          </div>
        </section>

        <section className="max-w-[1440px] mx-auto px-6 py-24 flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2">
            <span className="text-[#51ADE5] font-bold text-sm tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-8">
              You've Got Any Questions?
            </h2>
            <div className="divide-y">
              {faqs.map((faq, index) => (
                <details key={index} className="group py-4 cursor-pointer">
                  <summary className="flex justify-between items-center list-none text-lg font-medium text-slate-800">
                    {faq.question}
                    <span className="text-2xl transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="/img/faq.jpg"
                alt="FAQ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}