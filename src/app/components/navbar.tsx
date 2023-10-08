"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Lexend } from "next/font/google";
import Link from "next/link";
import logodrive from "../../../public/images/logodrive.png";
import burgir from "../../../public/images/burgir.png";
import close from "../../../public/images/close.png";

const lexend400 = Lexend({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className=" w-full bg-navbarcol top-0 left-0 right-0 h-14 ">
      {/* <div className="max-w-screen-xl mx-auto px-3 flex h-full items-center justify-between"> */}
      <div className="justify-between h-full px-3 mx-auto md:items-center flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image src={logodrive} alt="image" width={110} height={120} />
          </Link>
        </div>
        <ul
          className={`${lexend400.className} ${
            navbar ? "hidden" : "hidden lg:flex gap-20"
          }`}
        >
          <li>
            <Link href="#Offers" className="scroll-smooth">Promos</Link>
          </li>
          <li>
            <Link href="#">Booking</Link>
          </li>
          <li>
            <Link href="#Support">Support</Link>
          </li>
          <li>
            <Link href="#">About Us</Link>
          </li>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
        </ul>
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <Image src={close} alt="close" width={30} height={30} />
          ) : (
            <Image
              className=" cursor-pointer "
              src={burgir}
              alt="image"
              width={30}
              height={30}
            />
          )}
        </button>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center pb-3  md:pb-0 md:mt-0
        ${
          navbar
            ? "md:p-0 p-12 block w-full h-screen bg-navbarcol relative z-50"
            : "hidden"
        }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center flex-col ">
            <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0">
              <Link href="#Offers" onClick={() => setNavbar(!navbar)}>
                Promos
              </Link>
            </li>
            <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0">
              <Link href="#" onClick={() => setNavbar(!navbar)}>
                Booking
              </Link>
            </li>
            <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0">
              <Link href="#Support" onClick={() => setNavbar(!navbar)}>
                Support
              </Link>
            </li>
            <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0">
              <Link href="#" onClick={() => setNavbar(!navbar)}>
                About Us
              </Link>
            </li>
            <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0">
              <Link href="/signin" onClick={() => setNavbar(!navbar)}>
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
