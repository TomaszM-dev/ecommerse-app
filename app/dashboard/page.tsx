"use client";

import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Dashboard() {
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchOrders = async () => {
    const res = await fetch("/api/get-orders");
    const data = await res.json();
    return data;
  };
  useEffect(() => {
    fetchOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);
  console.log(orders);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <motion.div layout>
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center mt-10"
      >
        <h2 className="text-[3rem] font-bold text-main">Your orders </h2>
        {orders.map((order) => (
          <div
            key={order.id}
            className="rounded-lg p-8 my-4 space-y-2 bg-base-200 flex flex-col gap-2"
          >
            <h2 className="text-lg  ">Order reference: {order.id}</h2>
            <p className="text-mt">
              Status:
              <span
                className={`${
                  order.status === "completed" ? "bg-main" : "bg-main"
                } text-white py-1 rounded-md px-2 mx-2 text-md`}
              >
                {order.status}
              </span>
            </p>

            <p className="text-mt">
              Time: {new Date(order.createdDate).toString()}
            </p>
            <div className="text-sm lg:flex items-center  gap-4">
              {order.products.map((product) => (
                <div className="py-2 mt-3" key={product.id}>
                  <div className="flex  items-center gap-4">
                    <Image
                      src={product.image!}
                      width={200}
                      height={200}
                      alt={product.name}
                      priority={true}
                      className="w-auto"
                    />
                    <div className="flex flex-col justify-center gap-4">
                      <h2 className="py-2 text-[2rem]">{product.name}</h2>
                      <p>{formatPrice(product.unit_amount)}</p>
                      <p>Quantity: {product.quantity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-medium py-2">
              Total: {formatPrice(order.amount)}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
