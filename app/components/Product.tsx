import formatPrice from "@/util/PriceFormat";
import React from "react";
import Image from "next/image";
import { AddCartType } from "@/types/AddCartType";

const Product = ({ name, image, price }: AddCartType) => {
  return (
    <div>
      <Image src={image} alt="es" width={400} height={400}></Image>
      <h1>{name}</h1>
      {price !== null ? formatPrice(price) : "N/A"}
    </div>
  );
};

export default Product;
