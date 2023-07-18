"use client";
import React from "react";
import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { useCartStore } from "@/store";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import basket from "public/basket.png";

const Cart = () => {
  const cartStore = useCartStore();

  return (
    <div
      onClick={() => cartStore.toggleCart()}
      className="fixed w-full h-screen left-0 top-0 bg-main bg-opacity-5"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-black absolute right-0 top-0 w-[35%] h-screen p-12 overflow-y-scroll"
      >
        <h1>Here is your shopping list 🧾</h1>
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
                <div className="flex gap-1 ">
                  <h3>Quantity: {item.quantity}</h3>
                  <button
                    onClick={() =>
                      cartStore.removeProduct({
                        id: item.id,
                        image: item.image,
                        name: item.name,
                        unit_amount: item.unit_amount,
                        quantity: item.quantity,
                      })
                    }
                    className="text-main"
                  >
                    <IoRemoveCircle />
                  </button>
                  <button
                    onClick={() =>
                      cartStore.addProduct({
                        id: item.id,
                        image: item.image,
                        name: item.name,
                        unit_amount: item.unit_amount,
                        quantity: item.quantity,
                      })
                    }
                    className="text-main"
                  >
                    <IoAddCircle />
                  </button>
                </div>
                <p>{formatPrice(item.unit_amount)}</p>
              </div>
            </div>
          ))}
          {cartStore.cart.length > 0 && (
            <button className="py-2 mt-4 bg-main w-full rounded-md text-white">
              Checkout
            </button>
          )}

          {!cartStore.cart.length && (
            <div className="flex flex-col items-center gap-10 text-2xl font-medium pt-20 opacity-75">
              <h1>Uhhh ohh... its empty 🥲</h1>
              <Image
                alt="basket"
                src={basket}
                width={300}
                height={300}
                className="w-40"
              ></Image>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
