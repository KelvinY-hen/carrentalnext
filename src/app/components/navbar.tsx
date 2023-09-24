import React from "react";
import Image from "next/image";
import Link from "next/link";
import logodrive from "../../../public/images/logodrive.png";
import burgir from "../../../public/images/burgir.png"

function Navbar() {
  return (
    <div className=" w-full bg-zinc-300 h-20 ">
      <div className=" max-w-screen-xl mx-auto px-3 flex h-full items-center justify-between">
        <Image src={logodrive} alt="memek" width={110} height={120} />
        <ul className="flex gap-20  ">
          <li>Promos</li>
          <li>Booking</li>
          <li>Support</li>
          <li>About Us</li>
          <li>Register</li>
        </ul>
        <Image className=" cursor-pointer "src={burgir} alt="memek" width={30} height={30} />
      </div>
    </div>
  );
}

export default Navbar;
