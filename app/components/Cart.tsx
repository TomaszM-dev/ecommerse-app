"use client";
import React from "react";
import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { useCartStore } from "@/store";
import { isTemplateExpression } from "typescript";

const Cart = () => {
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);
  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-main bg-opacity-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black absolute right-0 top-0 w-[35%] h-screen p-12 overflow-y-scroll"
      >
        <h1>Herer is your shopping list</h1>
        <div className="flex flex-col gap-10 mt-10">
          {cartStore.cart.map((item) => (
            <div className="flex  gap-5 items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md"
              ></Image>
              <div>
                <h3 className="text-main">{item.name}</h3>
                <h3>Quantity: {item.quantity}</h3>
                <p>{formatPrice(item.unit_amount)}</p>
              </div>
            </div>
          ))}
          <button className="py-2 mt-4 bg-main w-full rounded-md text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
