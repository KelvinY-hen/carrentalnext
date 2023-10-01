/// library
import Image from "next/image";
import { Lexend } from "next/font/google";

/// component
import Navbar from "./components/navbar";
import Link from "next/link";
import Footer from "./components/footer";

/// asset
import cardDessert from "../../public/images/homeCarDessert.png";
import saleTag from "../../public/images/saletag.png";
import whyLogo from "../../public/images/whyLogo.png";
import lowprice from "../../public/images/lowprice.png";
import petrol from "../../public/images/petrol.png";
import qty from "../../public/images/qty.png";
import multiplepick from "../../public/images/multiplepick.png";

/// code

const lexend300 = Lexend({
  weight: "300",
  subsets: ["latin"],
});

const lexend800 = Lexend({
  weight: "800",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-96 bg-homebarcol flex px-5 py-7 ">
          <div className="w-[60%] ">
            <h1 className={`text-4xl ${lexend300.className}`}>UNLOCK YOUR</h1>
            <div className="flex">
              <h1 className={`font-bold text-8xl ${lexend800.className}`}>
                JOURNEY
              </h1>
              <h1 className={`text-2xl ${lexend300.className}`}>with</h1>
              <h1 className={`text-4xl ${lexend300.className}`}>US</h1>
            </div>
          </div>
          <div className="w-[40%] h-[100%] relative">
            <Image src={cardDessert} alt="car dessert" fill />
          </div>
        </div>
        <main className="flex  flex-col items-center justify-between">
          {/* <h1 className=" text-9xl font-extrabold text-fuchsia-500">MIKEH GAY</h1>
        <h5 className=" font-extrabold font-serif">VS</h5>
        <h2 className="text-9xl font-extrabold text-yellow-400">KEPIN SEDOT</h2>
        <p>Tayang segera di SCTV OK</p>
        <br /> */}
          <Link href="/Profile">Klik di sini</Link>
          <div className="w-full h-full bg-amber-100">
            <div className="flex justify-between p-10 gap-5">
              <div className="w-[70%]">
                <div className="flex items-center">
                  <h2 className=" text-4xl font-bold">Why Drive?</h2>
                  <Image src={whyLogo} alt="whyLogo" />
                </div>
                <div className="flex flex-col items-end py-3 gap-5">
                  <div className="flex gap-10">
                    <div className="w-[40%]">
                      <div className="flex gap-3 align-baseline">
                        <Image src={lowprice} alt="lowprice" width={30} />
                        <h3 className="">The Lowest Price</h3>
                      </div>
                      <br />
                      <p>
                        Drive offers competitive pricing through cost-effective
                        operations, enabling affordability and quality service
                        for all customers.
                      </p>
                    </div>
                    <div className="w-[40%]">
                      <div className="flex gap-3 align-baseline">
                        <Image src={multiplepick} alt="multiplepick" width={30}/>
                        <h3>Multiple Pick-up Locations</h3>
                      </div>
                      <br />
                      <p>
                        Drive provides convenience with multiple pick-up points,
                        making it easy to start your journey from various
                        locations.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <div className="w-[40%]">
                      <div className="flex gap-3 align-baseline">
                        <Image src={petrol} alt="petrol" width={30} />
                        <h3>Reimburse your petrol</h3>
                      </div>
                      <br />
                      <p>
                        Drive offers petrol reimbursement, putting money back in
                        your pocket while you hit the road worry-free.
                      </p>
                    </div>
                    <div className="w-[40%]">
                      <div className="flex gap-3 align-baseline">
                        <Image src={qty} alt="qty" width={30} />
                        <h3>Always the Best Quality</h3>
                      </div>
                      <br />
                      <p>
                        Drive excels in quality with a meticulously maintained
                        fleet, rigorous inspections, and a commitment to
                        customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%] flex flex-col gap-5 my-10">
                <div>
                  <h2 className=" text-4xl font-bold">Offers</h2>
                </div>
                <div className="flex flex-col gap-5 mt-10 justify-center align-baseline">
                  <div className="w-fit py-3 px-7 flex gap-5 bg-white justify-center">
                    <div>
                      <Image src={saleTag} alt="offers" />
                    </div>
                    <div>
                      <h2 className=" font-bold">15% off</h2>
                      <p>For first-time users</p>
                    </div>
                  </div>
                  <div className="  py-3 px-7 flex gap-5 bg-white justify-center">
                    <div>
                      <Image src={saleTag} alt="offers" />
                    </div>
                    <div>
                      <h2 className=" font-bold">10% off</h2>
                      <p>2+ days reservation</p>
                    </div>
                  </div>
                  <div className=" py-3 px-7 flex gap-5 bg-white justify-center">
                    <div>
                      <Image src={saleTag} alt="offers" />
                    </div>
                    <div>
                      <h2 className=" font-bold">20% off</h2>
                      <p>With student card!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
