"use client";
import React from "react";
import Image from "next/image";

import { useCartStore } from "@/store";

const Cart = () => {
  const cartStore = useCartStore();
  console.log(cartStore.isOpen);
  return (
    <div>
      <h1>cart</h1>
    </div>
  );
};

export default Cart;
