"use client";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const Nav = ({ user }: Session) => {
  console.log(user);
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <h1 className="text-[2rem] text-main">Styled</h1>
      </Link>
      <ul className="flex items-center gap-12">
        {/*  if the user is not signed in */}
        {!user && (
          <li className="bg-main px-7 py-3 rounded-md">
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
        {user && (
          <div className="flex items-center gap-10">
            <li>
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
    </nav>
  );
};

export default Nav;
