"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
];

export default function CheckoutPage() {
  const { cartItems, subtotal } = useCart();
  const shipping = 20.0;

  return (
    <div className="min-h-screen bg-white font-sans text-[#333]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="p-8 lg:p-16 border-r border-gray-100">
          <div className="mb-8">
            <div className="flex flex-1 justify-start mb-10">
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
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <label className="flex items-center gap-2 mt-3 text-sm text-gray-600">
              <input type="checkbox" className="rounded" /> Email me with news and offers
            </label>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-medium mb-4">Delivery</h2>
            <div className="grid grid-cols-1 gap-4">
              <select className="w-full border border-gray-300 rounded-md p-3 bg-white">
                {countries.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name (optional)"
                  className="border border-gray-300 rounded-md p-3"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-gray-300 rounded-md p-3"
                />
              </div>

              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="border border-gray-300 rounded-md p-3"
              />
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 rounded-md p-3"
              />
            </div>
            <label className="flex items-center gap-2 mt-3 text-sm text-gray-600">
              <input type="checkbox" className="rounded" /> Save this information for next time
            </label>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-medium mb-4">Shipping method</h2>
            <div className="border border-blue-500 bg-blue-50/30 rounded-md p-4 flex justify-between items-center">
              <span className="text-sm">International Shipping</span>
              <span className="font-bold text-sm">${shipping.toFixed(2)}</span>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-medium mb-2">Payment</h2>
            <p className="text-xs text-gray-500 mb-4">
              All transactions are secure and encrypted.
            </p>

            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="bg-blue-50/50 p-4 border-b border-gray-300 flex justify-between items-center">
                <label className="flex items-center gap-2 font-medium">
                  <input type="radio" checked readOnly name="pay" /> Credit card
                </label>
                <div>
                  <Image
                    src="/img/bank.svg"
                    alt="Bank"
                    width={40}
                    height={25}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="p-4 space-y-4 bg-[#F9F9F9]">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full border border-gray-300 rounded-md p-3 bg-white"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiration date (MM / YY)"
                    className="border border-gray-300 rounded-md p-3 bg-white"
                  />
                  <input
                    type="text"
                    placeholder="Security code"
                    className="border border-gray-300 rounded-md p-3 bg-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Name on card"
                  className="w-full border border-gray-300 rounded-md p-3 bg-white"
                />
              </div>
            </div>
          </div>

          <button className="w-full bg-[#E94560] text-white py-5 rounded-md font-bold text-lg hover:bg-[#d43d56] transition-all">
            Pay now
          </button>
        </div>

        <div className="bg-[#F5F5F5] p-8 lg:p-12 h-full min-h-screen border-l border-gray-200">
          <div className="max-w-[450px] mx-auto">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-white border border-gray-200 rounded-xl overflow-hidden flex items-center justify-center p-2 shadow-sm">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-[#4D4D4D] text-white text-[12px] font-medium w-5 h-5 rounded-full flex items-center justify-center border border-white shadow-sm">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[14px] font-semibold text-[#333] leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[12px] text-gray-500 mt-1">
                      {(item as any).brand} {item.weight ? `/ ${item.weight}` : ""}
                    </p>
                  </div>

                  <div className="text-[14px] font-medium text-[#333]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 flex gap-3">
              <input
                type="text"
                placeholder="Discount code"
                className="flex-1 border border-gray-300 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#51ADE5]"
              />
              <button className="bg-[#E1E1E1] text-[#333] px-5 py-3 rounded-md font-bold text-sm hover:bg-gray-300 transition">
                Apply
              </button>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex justify-between text-[14px]">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-[#333]">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-[14px]">
                <span className="text-gray-600">Shipping</span>
                <span className="text-gray-400 text-[12px]">
                  Calculated at next step
                </span>
              </div>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <span className="text-lg font-bold text-[#333]">Total</span>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-gray-400 mt-1">USD</span>
                  <span className="text-2xl font-bold text-[#333]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="p-8 text-[10px] text-gray-400 border-t border-gray-100">
        All rights reserved Vitazen
      </footer>
    </div>
  );
}
