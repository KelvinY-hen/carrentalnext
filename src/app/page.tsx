import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";
import { Lexend } from 'next/font/google'
import cardDessert from "../../public/images/homeCarDessert.png";

const lexend300 = Lexend({ 
  weight: '300',
  subsets: ['latin'] })

const lexend800 = Lexend({ 
    weight: '800',
    subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-96 bg-homebarcol flex px-5 py-7 ">
          <div className="w-[60%] ">
            <h1 className={`text-4xl ${ lexend300.className }`}>UNLOCK YOUR</h1>
            <div className="flex">
              <h1 className={`font-bold text-8xl ${ lexend800.className }`}>JOURNEY</h1>
              <h1 className={`text-2xl ${ lexend300.className }`}>with</h1>
              <h1 className={`text-4xl ${ lexend300.className }`}>US</h1>
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
