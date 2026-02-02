import Image from "next/image";
import { FaUser, FaCalendarAlt, FaComments } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaShareAlt,
} from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "5 Essential Nutrients to Boost Your Daily Energy Levels",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog1.jpg",
    bgColor: "bg-blue-50",
    excerpt: "Lorem ipsum...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar turpis nec commodo sodales. Proin vel quam nisi. Vestibulum efficitur pharetra urna quis congue. Curabitur sollicitudin odio nibh, vitae semper felis ornare eget. In hac habitasse platea dictumst. Nunc consectetur urna pellentesque arcu dictum fermentum. Nulla interdum vehicula velit, ut luctus dolor hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet mollis justo luctus. Aliquam vel lectus id ante lacinia elementum in eget eros. Duis vel posuere libero, nec iaculis turpis. Quisque nec rhoncus massa, sed viverra ante. Aliquam ante odio, sollicitudin id tempor eu, convallis lacinia nunc. Aenean tincidunt metus eros, eu ornare risus efficitur quis. Praesent viverra elit sed mauris dictum volutpat. Nam id diam risus. Maecenas consequat accumsan felis. Proin erat augue, egestas ac mauris et, tincidunt blandit.",
    quote:
      "If you’re #memini include a younger-looking, glowing complexion, it all starts with collagen. Collagen is one of your body’s major building blocks: it’s a protein and critical to keeping your skin structure strong",
    subContent:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
    yellowSectionImg: "/img/slider1.jpg",
    yellowSectionImg2: "/img/slider2.jpg",
    final:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
  },
  {
    id: 2,
    title: "How to Choose the Right Multivitamin for Your Healthy Lifestyle",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog2.jpg",
    bgColor: "bg-orange-50",
    excerpt: "Maecenas...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar turpis nec commodo sodales. Proin vel quam nisi. Vestibulum efficitur pharetra urna quis congue. Curabitur sollicitudin odio nibh, vitae semper felis ornare eget. In hac habitasse platea dictumst. Nunc consectetur urna pellentesque arcu dictum fermentum. Nulla interdum vehicula velit, ut luctus dolor hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet mollis justo luctus. Aliquam vel lectus id ante lacinia elementum in eget eros. Duis vel posuere libero, nec iaculis turpis. Quisque nec rhoncus massa, sed viverra ante. Aliquam ante odio, sollicitudin id tempor eu, convallis lacinia nunc.",
    quote:
      "If you’re #memini include a younger-looking, glowing complexion, it all starts with collagen. Collagen is one of your body’s major building blocks: it’s a protein and critical to keeping your skin structure strong",
    subContent:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
    yellowSectionImg: "/img/slider1.jpg",
    yellowSectionImg2: "/img/slider2.jpg",
    final:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
  },
  {
    id: 3,
    title: "Omega-3 Benefits Why Every Diet Needs This Super Nutrient",
    admin: "Store Admin",
    date: "Feb 07, 2025",
    image: "/img/blog3.jpg",
    bgColor: "bg-cyan-50",
    excerpt: "Proin...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar turpis nec commodo sodales. Proin vel quam nisi. Vestibulum efficitur pharetra urna quis congue. Curabitur sollicitudin odio nibh, vitae semper felis ornare eget. In hac habitasse platea dictumst. Nunc consectetur urna pellentesque arcu dictum fermentum. Nulla interdum vehicula velit, ut luctus dolor hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet mollis justo luctus. Aliquam vel lectus id ante lacinia elementum in eget eros. Duis vel posuere libero, nec iaculis turpis. Quisque nec rhoncus massa, sed viverra ante. Aliquam ante odio, sollicitudin id tempor eu, convallis lacinia nunc.",
    quote:
      "If you’re #memini include a younger-looking, glowing complexion, it all starts with collagen. Collagen is one of your body’s major building blocks: it’s a protein and critical to keeping your skin structure strong",
    subContent:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
    yellowSectionImg: "/img/slider1.jpg",
    yellowSectionImg2: "/img/slider2.jpg",
    final:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
  },
  {
    id: 4,
    title: "The Best Supplements for Gut Health and Digestion of Yor Family",
    admin: "Store Admin",
    date: "Feb 08, 2025",
    image: "/img/blog4.jpg",
    bgColor: "bg-yellow-50",
    excerpt: "Everything...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar turpis nec commodo sodales. Proin vel quam nisi. Vestibulum efficitur pharetra urna quis congue. Curabitur sollicitudin odio nibh, vitae semper felis ornare eget. In hac habitasse platea dictumst. Nunc consectetur urna pellentesque arcu dictum fermentum. Nulla interdum vehicula velit, ut luctus dolor hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet mollis justo luctus. Aliquam vel lectus id ante lacinia elementum in eget eros. Duis vel posuere libero, nec iaculis turpis. Quisque nec rhoncus massa, sed viverra ante. Aliquam ante odio, sollicitudin id tempor eu, convallis lacinia nunc.",
    quote:
      "If you’re #memini include a younger-looking, glowing complexion, it all starts with collagen. Collagen is one of your body’s major building blocks: it’s a protein and critical to keeping your skin structure strong",
    subContent:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
    yellowSectionImg: "/img/slider1.jpg",
    yellowSectionImg2: "/img/slider2.jpg",
    final:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
  },
  {
    id: 5,
    title: "Our New Vitamin D Deficiency Signs Symptoms and How to Fix It",
    admin: "Store Admin",
    date: "Feb 09, 2025",
    image: "/img/blog5.jpg",
    bgColor: "bg-green-50",
    excerpt: "Improve...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar turpis nec commodo sodales. Proin vel quam nisi. Vestibulum efficitur pharetra urna quis congue. Curabitur sollicitudin odio nibh, vitae semper felis ornare eget. In hac habitasse platea dictumst. Nunc consectetur urna pellentesque arcu dictum fermentum. Nulla interdum vehicula velit, ut luctus dolor hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet mollis justo luctus. Aliquam vel lectus id ante lacinia elementum in eget eros. Duis vel posuere libero, nec iaculis turpis. Quisque nec rhoncus massa, sed viverra ante. Aliquam ante odio, sollicitudin id tempor eu, convallis lacinia nunc.",
    quote:
      "If you’re #memini include a younger-looking, glowing complexion, it all starts with collagen. Collagen is one of your body’s major building blocks: it’s a protein and critical to keeping your skin structure strong",
    subContent:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
    yellowSectionImg: "/img/slider1.jpg",
    yellowSectionImg2: "/img/slider2.jpg",
    final:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
  },
  {
    id: 6,
    title: "Adaptogens Explained How They Help Reduce Stress Naturally",
    admin: "Store Admin",
    date: "Feb 10, 2025",
    image: "/img/blog6.jpg",
    bgColor: "bg-purple-50",
    excerpt: "Why...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar turpis nec commodo sodales. Proin vel quam nisi. Vestibulum efficitur pharetra urna quis congue. Curabitur sollicitudin odio nibh, vitae semper felis ornare eget. In hac habitasse platea dictumst. Nunc consectetur urna pellentesque arcu dictum fermentum. Nulla interdum vehicula velit, ut luctus dolor hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet mollis justo luctus. Aliquam vel lectus id ante lacinia elementum in eget eros. Duis vel posuere libero, nec iaculis turpis. Quisque nec rhoncus massa, sed viverra ante. Aliquam ante odio, sollicitudin id tempor eu, convallis lacinia nunc.",
    quote:
      "If you’re #memini include a younger-looking, glowing complexion, it all starts with collagen. Collagen is one of your body’s major building blocks: it’s a protein and critical to keeping your skin structure strong",
    subContent:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
    yellowSectionImg: "/img/slider1.jpg",
    yellowSectionImg2: "/img/slider2.jpg",
    final:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
  },
  {
    id: 7,
    title: "Immune-Boosting Supplements to Keep You Healthy Year-Round",
    admin: "Store Admin",
    date: "Feb 11, 2025",
    image: "/img/blog7.jpg",
    bgColor: "bg-pink-50",
    excerpt: "Nutrition...",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar turpis nec commodo sodales. Proin vel quam nisi. Vestibulum efficitur pharetra urna quis congue. Curabitur sollicitudin odio nibh, vitae semper felis ornare eget. In hac habitasse platea dictumst. Nunc consectetur urna pellentesque arcu dictum fermentum. Nulla interdum vehicula velit, ut luctus dolor hendrerit nec. Vivamus pharetra quam id ante cursus, sit amet mollis justo luctus. Aliquam vel lectus id ante lacinia elementum in eget eros. Duis vel posuere libero, nec iaculis turpis. Quisque nec rhoncus massa, sed viverra ante. Aliquam ante odio, sollicitudin id tempor eu, convallis lacinia nunc.",
    quote:
      "If you’re #memini include a younger-looking, glowing complexion, it all starts with collagen. Collagen is one of your body’s major building blocks: it’s a protein and critical to keeping your skin structure strong",
    subContent:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
    yellowSectionImg: "/img/slider1.jpg",
    yellowSectionImg2: "/img/slider2.jpg",
    final:
      "With this potential discomfort in mind, Aloisia Beauty has developed a highly effective serum that leads to the same visibly noticeable benefits without the Vitamin C: Our renew Concentrated Serum. But don’t just take it from us: According to a third-party, independent evaluation of 32 consumers, 86% reported that their skin looks plumper and brighter and 97% reported brighter.",
  },
];

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
 
  const resolvedParams = await params;
  const id = resolvedParams.id;


  const blog = posts.find((p) => p.id.toString() === id.toString());

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center font-sans">
        <h1 className="text-3xl font-bold text-red-500">Article not found!</h1>
        <p className="text-gray-500 mt-2">ID: {id}</p>
        <Link
          href="/blog"
          className="mt-6 px-6 py-2 bg-sky-500 text-white rounded-lg"
        >
          Go back
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Header />
      <div className="max-w-5xl mx-auto py-16 px-6 sm:px-10 font-sans">
        <div className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden mb-10 shadow-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-6 text-sm text-gray-400 mb-6 font-medium">
          <span className="flex items-center gap-2">
            <FaUser className="text-sky-500" /> {blog.admin}
          </span>
          <span className="flex items-center gap-2">
            <FaCalendarAlt className="text-sky-500" /> {blog.date}
          </span>
        </div>

        <div className="text-gray-600 leading-relaxed text-lg space-y-8">
          <p>{blog.content}</p>
          <div className="bg-[#56B1E6] text-white p-10 rounded-3xl italic text-xl font-light shadow-md">
            "{blog.quote}"
          </div>
          <p>{blog.subContent}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 my-4 gap-10">
            <div className=" rounded-3xl flex items-center justify-center min-h-[250px]">
              <Image
                src="/img/slider1.jpg"
                width={450}
                height={300}
                alt="Prouct Detail"
                className="object-contain"
              />
            </div>
            <div className="rounded-3xl flex items-center justify-center min-h-[250px]">
              <Image
                src="/img/slider2.jpg"
                width={450}
                height={300}
                alt="Product Detail"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <p>{blog.final}</p>
        <Link
          href="/blog"
          className="text-sky-500 hover:underline mb-8 inline-block font-medium"
        >
          You can click to view other blogs.
        </Link>
        <div className="flex items-center justify-center gap-6 py-10 border-t border-gray-100 mt-12">
          <Link
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaFacebookF size={18} />
            <span className="text-sm font-medium">Facebook</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-sky-500 transition-colors"
          >
            <FaTwitter size={18} />
            <span className="text-sm font-medium">Twitter</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <FaPinterestP size={18} />
            <span className="text-sm font-medium">Pin it</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaShareAlt size={16} />
            <span className="text-sm font-medium">Share</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
