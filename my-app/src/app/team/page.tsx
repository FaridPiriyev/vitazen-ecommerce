import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa"; 
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Jovan Michael",
      role: "Data specialist",
      image: "/img/worker5.jpg",
    },
    {
      name: "Kristopher Bunn",
      role: "Mac & PC Specialist",
      image: "/img/worker2.jpg",
    },
    {
      name: "Cynthia Casey",
      role: "Phone Specialist",
      image: "/img/worker6.avif",
    },
    {
      name: "Barbara Hamby",
      role: "Drone Specialist",
      image: "/img/worker4.jpg",
    },
    {
      name: "Linda Soultin",
      role: "Mobile Specialist",
      image: "/img/worker1.jpg",
    },
    {
      name: "Nick Rassel",
      role: "Drone Specialist",
      image: "/img/worker3.jpg",
    },
  ];

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
          <span className="text-gray-400">Team</span>
        </nav>
      </div>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2">
            Our Team
          </p>
          <h2 className="text-3xl font-bold text-slate-800 mb-12">
            Meet Our Experts
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative group w-full aspect-[4/5] rounded-xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

  
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white/70 backdrop-blur-md py-3 rounded-lg flex justify-center gap-4 shadow-sm">
                    <a
                      href="#"
                      className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      <FaFacebookF size={12} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <FaTwitter size={12} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <FaYoutube size={12} />
                    </a>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-slate-900 leading-tight">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
