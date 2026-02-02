"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { useCart, useWishlist } from "../context/CartContext";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaRegHeart,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState({});

  const { cartItems, setIsOpen: setDrawerOpen } = useCart();
  const { wishlist } = useWishlist();

  const totalItems =
    cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  const toggleMenu = (menuId) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="w-full bg-white sticky top-0 z-[100] shadow-sm border-b border-gray-100 font-sans">
      <div className="flex items-center justify-between px-6 lg:px-15 py-4 lg:py-6 max-w-[1440px] mx-auto">
        <div className="flex flex-1 justify-start">
          <Link href="/" className="relative w-[150px] md:w-[120px]">
            <Image
              src="/logo.avif"
              alt="Vitazen Logo"
              width={180}
              height={45}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-none">
          <ul className="flex items-center gap-8 font-semibold text-[#181A17] uppercase text-[14px] tracking-wide">
            <li>
              <Link href="/" className="hover:text-[#51ADE5] transition-colors">
                Home
              </Link>
            </li>

            <li className="static group">
              <button className="flex items-center gap-1 hover:text-[#51ADE5] transition-colors py-4 uppercase">
                Shop <FaChevronDown className="text-[10px]" />
              </button>
              <div className="absolute left-0 top-full w-full bg-white border-t border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-12">
                <div className="max-w-[1200px] mx-auto grid grid-cols-5 gap-4">
                  <div>
                    <h3 className="mb-5 font-bold text-gray-900 text-[16px] capitalize">
                      Vitamins & Supplements
                    </h3>
                    <ul className="space-y-5 normal-case text-gray-500 font-medium text-[15px]">
                      <li>
                        <Link
                          href="/multivitamins"
                          className="hover:text-[#51ADE5]"
                        >
                          Multivitamins
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/supplement"
                          className="hover:text-[#51ADE5]"
                        >
                          Supplements
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/immunesupport"
                          className="hover:text-[#51ADE5]"
                        >
                          Immune Support
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/energyboosters"
                          className="hover:text-[#51ADE5]"
                        >
                          Energy Boosters
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-5 font-bold text-gray-900 text-[16px] capitalize">
                      Proteins & Fitness
                    </h3>
                    <ul className="space-y-5 normal-case text-gray-500 font-medium text-[15px]">
                      <li>
                        <Link href="/proteins" className="hover:text-[#51ADE5]">
                          Whey Protein
                        </Link>
                      </li>
                      <li>
                        <Link href="/proteins" className="hover:text-[#51ADE5]">
                          Plant-Based Protein
                        </Link>
                      </li>
                      <li>
                        <Link href="/proteins" className="hover:text-[#51ADE5]">
                          Pre-Workout
                        </Link>
                      </li>
                      <li>
                        <Link href="/proteins" className="hover:text-[#51ADE5]">
                          Post-Workout
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-5 font-bold text-gray-900 text-[16px] capitalize">
                      Health & Wellness
                    </h3>
                    <ul className="space-y-5 normal-case text-gray-500 font-medium text-[15px]">
                      <li>
                        <Link href="/wellness" className="hover:text-[#51ADE5]">
                          Weight Management
                        </Link>
                      </li>
                      <li>
                        <Link href="/wellness" className="hover:text-[#51ADE5]">
                          Stress & Sleep Support
                        </Link>
                      </li>
                      <li>
                        <Link href="/wellness" className="hover:text-[#51ADE5]">
                          Detox & Cleansing
                        </Link>
                      </li>
                      <li>
                        <Link href="/wellness" className="hover:text-[#51ADE5]">
                          Hair, Skin & Nails
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-5 font-bold text-gray-900 text-[16px] capitalize">
                      Shop by Goal
                    </h3>
                    <ul className="space-y-5 normal-case text-gray-500 font-medium text-[15px]">
                      <li>
                        <Link href="/goals" className="hover:text-[#51ADE5]">
                          Improve Immunity
                        </Link>
                      </li>
                      <li>
                        <Link href="/goals" className="hover:text-[#51ADE5]">
                          Boost Energy
                        </Link>
                      </li>
                      <li>
                        <Link href="/goals" className="hover:text-[#51ADE5]">
                          Build Muscle
                        </Link>
                      </li>
                      <li>
                        <Link href="/goals" className="hover:text-[#51ADE5]">
                          Weight Loss
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col h-full justify-between">
                    <div className="relative w-full aspect-7/6 bg-orange-50 rounded-lg overflow-hidden">
                      <Image
                        src="/img/dropdown1.avif"
                        alt="Promo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-4 text-center font-bold text-gray-800 text-[14px] normal-case">
                      Up to 50% Off On Select Item
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="/multivitamins" className="hover:text-[#51ADE5]">
                Categories
              </Link>
            </li>

            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-[#51ADE5] transition-colors py-4 uppercase">
                Pages <FaChevronDown className="text-[10px]" />
              </button>
              <ul className="absolute left-0 top-full w-60 bg-white shadow-xl border border-gray-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4 flex flex-col normal-case">
                {[
                  { name: "About Us", path: "/aboutme" },
                  { name: "Faq Page", path: "/faq" },
                  { name: "Team Page", path: "/team" },
                  { name: "Contact Page", path: "/contact" },
                  { name: "Blog Page", path: "/blog" },
                  { name: "Wishlist Page", path: "/wishlist" },
                  { name: "Terms and Condition", path: "/terms" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className="block px-6 py-2.5 hover:bg-gray-50 hover:text-[#51ADE5] text-[14px] font-semibold text-gray-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#51ADE5]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-1 justify-end items-center gap-5 text-gray-700">
          <Link
            href="/wishlist"
            className="relative flex items-center gap-2 group"
          >
            <div className="relative">
              <FaRegHeart
                size={22}
                className="group-hover:text-[#51ADE5] transition-colors"
              />
              {wishlist?.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#51ADE5] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>
            <span className="hidden sm:inline font-semibold text-[14px] uppercase group-hover:text-[#51ADE5]">
              Favourites
            </span>
          </Link>

          <div
            className="relative cursor-pointer flex items-center gap-2 group"
            onClick={() => setDrawerOpen(true)}
          >
            <div className="relative">
              <FaCartShopping className="text-[22px] group-hover:text-[#51ADE5] transition-colors" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#51ADE5] text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                  {totalItems}
                </span>
              )}
            </div>
            <span className="hidden sm:inline font-semibold text-[14px] uppercase group-hover:text-[#51ADE5]">
              Cart
            </span>
          </div>
          <div className="lg:hidden ml-1">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-gray-800"
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 z-[110] transition-opacity ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"} lg:hidden`}
        onClick={closeMobileMenu}
      >
        <div
          className={`fixed left-0 top-0 h-full w-[310px] bg-white shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-5 border-b">
            <Image
              src="/logo.avif"
              alt="Vitazen"
              width={110}
              height={35}
              className="object-contain"
            />
            <button onClick={closeMobileMenu}>
              <FaTimes size={22} className="text-gray-400" />
            </button>
          </div>

          <div className="overflow-y-auto h-[calc(100vh-80px)]">
            <ul className="flex flex-col text-[#181A17] font-bold text-[14px] uppercase tracking-wide">
              <li className="border-b border-gray-50">
                <Link href="/" className="block p-5" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="border-b border-gray-50">
                <div
                  className="flex justify-between items-center p-5 cursor-pointer"
                  onClick={() => toggleMenu("m_shop")}
                >
                  <span>Shop</span>
                  {openMobileMenus["m_shop"] ? (
                    <FaMinus size={12} className="text-[#51ADE5]" />
                  ) : (
                    <FaPlus size={12} />
                  )}
                </div>
                {openMobileMenus["m_shop"] && (
                  <ul className="bg-gray-50">
                    {[
                      {
                        id: "m_vit",
                        title: "Vitamins & Supplements",
                        items: [
                          { n: "Multivitamins", p: "/multivitamins" },
                          { n: "Supplements", p: "/supplement" },
                          { n: "Immune Support", p: "/immunesupport" },
                          { n: "Energy Boosters", p: "/energyboosters" },
                        ],
                      },
                      {
                        id: "m_prot",
                        title: "Proteins & Fitness",
                        items: [
                          { n: "Whey Protein", p: "/proteins" },
                          { n: "Plant-Based Protein", p: "/proteins" },
                          { n: "Pre-Workout", p: "/proteins" },
                          { n: "Post-Workout", p: "/proteins" },
                        ],
                      },
                      {
                        id: "m_well",
                        title: "Health & Wellness",
                        items: [
                          { n: "Weight Management", p: "/wellness" },
                          { n: "Stress & Sleep Support", p: "/wellness" },
                          { n: "Detox & Cleansing", p: "/wellness" },
                          { n: "Hair, Skin & Nails", p: "/wellness" },
                        ],
                      },
                      {
                        id: "m_goal",
                        title: "Shop by Goal",
                        items: [
                          { n: "Improve Immunity", p: "/goals" },
                          { n: "Boost Energy", p: "/goals" },
                          { n: "Build Muscle", p: "/goals" },
                          { n: "Weight Loss", p: "/goals" },
                        ],
                      },
                    ].map((cat) => (
                      <li key={cat.id} className="border-t border-gray-100">
                        <div
                          className="flex justify-between items-center px-8 py-4 cursor-pointer"
                          onClick={() => toggleMenu(cat.id)}
                        >
                          <span className="text-gray-700 capitalize">
                            {cat.title}
                          </span>
                          {openMobileMenus[cat.id] ? (
                            <FaMinus size={10} />
                          ) : (
                            <FaPlus size={10} />
                          )}
                        </div>
                        {openMobileMenus[cat.id] && (
                          <ul className="bg-white px-12 py-3 space-y-4 normal-case font-medium text-gray-500">
                            {cat.items.map((sub) => (
                              <li key={sub.n}>
                                <Link
                                  href={sub.p}
                                  onClick={closeMobileMenu}
                                  className="block hover:text-[#51ADE5]"
                                >
                                  {sub.n}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-50">
                <Link
                  href="/multivitamins"
                  className="block p-5"
                  onClick={closeMobileMenu}
                >
                  Categories
                </Link>
              </li>

              <li className="border-b border-gray-50">
                <div
                  className="flex justify-between items-center p-5 cursor-pointer"
                  onClick={() => toggleMenu("m_pages")}
                >
                  <span>Pages</span>
                  {openMobileMenus["m_pages"] ? (
                    <FaMinus size={12} className="text-[#51ADE5]" />
                  ) : (
                    <FaPlus size={12} />
                  )}
                </div>
                {openMobileMenus["m_pages"] && (
                  <ul className="bg-gray-50 px-8 py-2 space-y-1 normal-case font-medium text-gray-600">
                    {[
                      { name: "About Us", path: "/aboutme" },
                      { name: "Faq Page", path: "/faq" },
                      { name: "Team Page", path: "/team" },
                      { name: "Contact Page", path: "/contact" },
                      { name: "Blog Page", path: "/blog" },
                      { name: "Wishlist Page", path: "/wishlist" },
                      { name: "Terms and Condition", path: "/terms" },
                    ].map((p) => (
                      <li key={p.name}>
                        <Link
                          href={p.path}
                          onClick={closeMobileMenu}
                          className="block py-2.5 border-b border-gray-100 last:border-0"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li className="border-b border-gray-50">
                <Link
                  href="/contact"
                  className="block p-5"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
