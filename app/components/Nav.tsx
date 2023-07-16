"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";
import { Session } from "next-auth";
import Image from "next/image";

const Nav = ({ user }: Session) => {
  console.log(user);
  return (
    <nav className="flex justify-between items-center py-8">
      <h1>Styled</h1>
      <ul className="flex items-center gap-12">
        {/*  if the user is not signed in */}
        {!user && (
          <li className="bg-teal-600 px-7 py-3 rounded-md">
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
        {user && (
          <div className="flex">
            <li>
              <Image
                className="rounded-full "
                src={user?.image}
                width={50}
                height={50}
                alt="#"
              ></Image>
            </li>
            <li>Dashboard</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
