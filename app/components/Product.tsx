import formatPrice from "@/util/PriceFormat";
import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";

const Product = ({
  name,
  image,
  unit_amount,
  description,
  metadata,
  id,
}: ProductType) => {
  const { features } = metadata;
  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, description, features, id },
      }}
    >
      <div className="flex items-center flex-col gap-5 mt-20">
        <Image
          className="rounded-lg"
          src={image}
          alt="es"
          width={400}
          height={400}
        ></Image>
        <h1 className="text-[2rem] font-[600] uppercase text-main ">{name}</h1>
        <p className="text-[1.4rem]">
          {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
        </p>
      </div>
    </Link>
  );
};

export default Product;
