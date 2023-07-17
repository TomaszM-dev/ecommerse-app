import React from "react";
import Image from "next/image";
import { SearchParamTypes } from "@/util/SearchParamTypes";
import formatPrice from "@/util/PriceFormat";
import AddCart from "../AddCart";

const Product = async ({ searchParams }: SearchParamTypes) => {
  console.log(searchParams);
  return (
    <div className="flex items-center gap-20 mt-10 ">
      <div className="flex-1">
        <Image
          alt="product image"
          src={searchParams.image}
          width={600}
          height={600}
        ></Image>
      </div>
      <div className="flex flex-1 flex-col gap-4 text-[1.3rem]">
        <h1 className="text-[3rem] font-[600] text-main">
          {searchParams.name}
        </h1>
        <h2>{searchParams.description}</h2>
        <h2>{searchParams.features}</h2>
        <p>{formatPrice(searchParams.unit_amount)}</p>
        <AddCart {...searchParams} />
      </div>
    </div>
  );
};

export default Product;
