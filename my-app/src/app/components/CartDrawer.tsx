"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const {
    cartItems,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
  } = useCart();

  const { setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      <div className="absolute right-0 top-0 h-full w-full max-w-[400px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="font-bold text-lg text-gray-800">
            Item added to your cart
          </h2>
          <button
            onClick={closeCart}
            type="button"
            className="text-3xl leading-none text-gray-400 hover:text-black transition p-2"
          >
            &times;
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              Your cart is empty
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex gap-4 mb-6 border-b pb-4 last:border-0"
              >
                <div className="w-20 h-20 bg-gray-50 relative rounded flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 text-sm">
                  <h3 className="font-bold">{item.name}</h3>
                  <p className="text-blue-500 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex border rounded overflow-hidden">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 bg-gray-50 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 border-x">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 bg-gray-50 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-500 underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="border-t p-6 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-bold italic">Subtotal</span>
            <span className="text-xl font-bold">
              ${subtotal.toFixed(2)} USD
            </span>
          </div>
          <div className="flex flex-row gap-3 p-4">
            <Link href="/cart" className="flex-1">
              <button
                onClick={() => setIsOpen(false)}
                className="btn-wave w-full border border-gray-300 py-3 uppercase text-[12px] font-bold relative overflow-hidden transition-colors duration-300 active:scale-95 hover:bg-black hover:text-white"
              >
                <span className="relative z-10">View Cart</span>
              </button>
            </Link>

            <Link href="/checkout" className="flex-1">
              <button
                onClick={() => setIsOpen(false)}
                className="btn-wave w-full bg-[#51ADE5] text-white py-3 uppercase text-[12px] font-bold relative overflow-hidden transition-colors duration-300 active:scale-95 hover:bg-black"
              >
                <span className="relative z-10">Check Out</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
