
import { FaPaperPlane } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ContactPage() {
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
          <span className="text-gray-400">Contact</span>
        </nav>
      </div>
      <div className="bg-white min-h-screen p-8 lg:p-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-16">
            <div className="bg-gray-50/50 p-10 rounded-3xl shadow-sm border border-gray-100">
              <form className="space-y-8">
                {["Name", "Email", "Phone number", "Message"].map((label) => (
                  <div key={label}>
                    <label className="block text-sm font-semibold text-gray-600 mb-1">
                      {label}:
                    </label>
                    {label === "Message" ? (
                      <textarea
                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-sky-400 outline-none transition-all resize-none"
                        rows={3}
                      />
                    ) : (
                      <input
                        type="text"
                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-sky-400 outline-none transition-all"
                      />
                    )}
                  </div>
                ))}
                <button className="bg-[#56B1E3] hover:bg-[#45a0d2] text-white px-10 py-4 rounded-xl flex items-center gap-2 font-bold transition-all shadow-md active:scale-95 uppercase text-xs tracking-widest">
                  Send Now <FaPaperPlane size={14} className="rotate-12" />
                </button>
              </form>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <h2 className="text-4xl font-semibold text-[#1A2B3C]">
                Keep In Touch with Us
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                We do not sell product from our corporate headquarters in
                Stockholm. If you want to visit please reach out to our customer
                service team first.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 pt-4">
                <div>
                  <h4 className="font-bold text-[#1A2B3C] mb-1">Visit us:</h4>
                  <p className="text-gray-600">
                    Drottninggatan 1, 111 51 Stockholm, Sweden
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B3C] mb-1">Email us:</h4>
                  <p className="text-gray-600">vitazensupport@mail.com</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B3C] mb-1">Call us:</h4>
                  <p className="text-gray-600 font-medium">+46 8 123 456 78</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#1A2B3C] mb-1">
                    We are open:
                  </h4>
                  <p className="text-gray-600">Monday – Friday: 8:00 – 20:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.1321598444747!2d18.06401917743603!3d59.33010187461327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5e30537f5d%3A0x6a2c354e5a953a7b!2sDrottninggatan%201%2C%20111%2051%20Stockholm%2C%20Sweden!5e0!3m2!1sen!2saz!4v1700000000000!5m2!1sen!2saz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}