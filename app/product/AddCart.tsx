"use client";

import React from "react";
import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";

const AddCart = ({ name, id, image, unit_amount, quantity }: AddCartType) => {
  const cartStore = useCartStore();

  return (
    <div>
      <button
        onClick={() =>
          cartStore.addProduct({ id, image, unit_amount, quantity, name })
        }
        className=" bg-main my-12 py-2 px-6 font-medium rounded-md"
      >
        Add to cart
      </button>
    </div>
  );
};

export default AddCart;
