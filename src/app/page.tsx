import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";

import cardDessert from "../../public/images/homeCarDessert.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-96 bg-homebarcol flex px-5 py-7 ">
          <div className="w-[60%] ">
            <h1 className=" text-2xl">UNLOCK YOUR</h1>
            <div className="flex">
              <h1 className=" font-bold text-8xl">JOURNEY</h1>
              <h1 className="">with</h1>
              <h1 className=" text-2xl">US</h1>
            </div>
          </div>
          <div className="w-[40%] h-[100%] relative">
            <Image src={cardDessert} alt="car dessert" fill />
          </div>
        </div>
        <main className="flex  flex-col items-center justify-between p-24">
          {/* <h1 className=" text-9xl font-extrabold text-fuchsia-500">MIKEH GAY</h1>
        <h5 className=" font-extrabold font-serif">VS</h5>
        <h2 className="text-9xl font-extrabold text-yellow-400">KEPIN SEDOT</h2>
        <p>Tayang segera di SCTV OK</p>
        <br /> */}
          <Link href="/Profile">Klik di sini</Link>
        </main>
      </div>
    </>
  );
}
