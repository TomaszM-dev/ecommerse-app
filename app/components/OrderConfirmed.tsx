"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import dance from "public/dance.gif";
import { useCartStore } from "@/store";
import { useEffect } from "react";

export default function OrderConfirmed() {
  const cartStore = useCartStore();

  useEffect(() => {
    cartStore.setPaymentIntent("");
    cartStore.clearCart();
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center my-12 flex-col"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="overflow-hidden text-center ">
        <h1 className="text-[1.4rem] font-bold mb-2">
          Your order has been placed 🚀
        </h1>
        <h2>Check your email for the receipt.</h2>
        <Image
          src={dance}
          className="py-8 rounded-lg  mt-10"
          alt="dancing"
        ></Image>
      </div>
      <div>
        <Link href={"/dashboard"} className="flex flex-col gap-5">
          <button
            onClick={() => {
              setTimeout(() => {
                cartStore.setCheckout("cart");
              }, 1000);
              cartStore.toggleCart();
            }}
            className="px-7 py-3 mt-5 bg-main rounded-md"
          >
            Check your order
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
