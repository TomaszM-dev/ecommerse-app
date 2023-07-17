"use client";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import Cart from "./Cart";
import { useCartStore } from "@/store";
import { AiFillShopping } from "react-icons/ai";

const Nav = ({ user }: Session) => {
  const cartStore = useCartStore();
  console.log(user);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h1 className="text-[2rem] text-main">Styled</h1>
      </Link>
      <ul className="flex items-center gap-12">
        {/* Toggle a cart */}
        {cartStore.isOpen && <Cart />}
        <li
          onClick={() => cartStore.toggleCart()}
          className="flex items-center text-3xl relative cursor-pointer"
        >
          <AiFillShopping></AiFillShopping>
          <span className="bg-main text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex justify-center">
            {cartStore.cart.length}
          </span>
        </li>
        {!user && (
          <li className="bg-main px-7 py-3 rounded-md">
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
        {user && (
          <div className="flex items-center gap-10">
            <li className="">
              <Image
                className="rounded-full"
                src={user?.image}
                width={50}
                height={50}
                alt="#"
              ></Image>
            </li>
            <li className="bg-main px-7 py-3 rounded-md">
              <button onClick={() => signOut()}>Sign Out</button>
            </li>
          </div>
        )}
      </ul>
      {cartStore.isOpen && <Cart />}
    </nav>
  );
};

export default Nav;
