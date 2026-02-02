"use client";
import { useState } from "react";
import Image from "next/image";
import { FaUser, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "5 Essential Nutrients to Boost Your Daily Energy Levels",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog1.jpg",
    bgColor: "bg-blue-50",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  },
  {
    id: 2,
    title: "How to Choose the Right Multivitamin",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog2.jpg",
    bgColor: "bg-orange-50",
    excerpt: "Maecenas pulvinar turpis nec commodo sodales...",
  },
  {
    id: 3,
    title: "Omega-3 Benefits Why Every Diet Needs This",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog3.jpg",
    bgColor: "bg-cyan-50",
    excerpt: "Proin vel quam nisi. Vestibulum efficitur pharetra urna...",
  },
  {
    id: 4,
    title: "The Best Supplements for Gut Health and Digestion of Yor Family",
    admin: "Store Admin",
    date: "Feb 08, 2025",
    image: "/img/blog4.jpg",
    bgColor: "bg-yellow-50",
    excerpt: "Everything you need to know about Vitamin D...",
  },
  {
    id: 5,
    title: "Our New Vitamin D Deficiency Signs Symptoms and How to Fix It",
    admin: "Store Admin",
    date: "Feb 09, 2025",
    image: "/img/blog5.jpg",
    bgColor: "bg-green-50",
    excerpt: "Improve your digestion with probiotics...",
  },
  {
    id: 6,
    title: "Adaptogens Explained How They Help Reduce Stress Naturally",
    admin: "Store Admin",
    date: "Feb 10, 2025",
    image: "/img/blog6.jpg",
    bgColor: "bg-purple-50",
    excerpt: "Why you might need more magnesium...",
  },
  {
    id: 7,
    title: "Immune-Boosting Supplements to Keep You Healthy Year-Round",
    admin: "Store Admin",
    date: "Feb 11, 2025",
    image: "/img/blog7.jpg",
    bgColor: "bg-pink-50",
    excerpt: "Nutrition for glowing skin...",
  },
];

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = posts.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil((posts.length * 1.0) / blogsPerPage);

  return (
    <>
      <Navbar />
      <Header />
      <div className="bg-[#F9F9F9] py-10 px-6 sm:px-20">
        <nav className="text-sm text-gray-500">
          <Link href="/">
            <span className="hover:text-black">Home</span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-400">Blog</span>
        </nav>
      </div>

      <div className="min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentBlogs.map((blog) => (
              <Link href={`/blog/${blog.id}`} key={blog.id} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FaUser className="text-sky-500" /> {blog.admin}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-sky-500" /> {blog.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-sky-500 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="mt-auto w-fit bg-sky-500 group-hover:bg-black text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all uppercase">
                      Read More{" "}
                      <FaArrowRight size={12} className="-rotate-45" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-10 h-10 rounded font-bold transition-all ${currentPage === index + 1 ? "bg-black text-white" : "bg-sky-400 text-white hover:bg-sky-500"}`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="bg-sky-400 hover:bg-sky-500 disabled:bg-gray-300 text-white px-6 py-2 rounded font-bold transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
