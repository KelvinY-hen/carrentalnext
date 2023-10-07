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

const lexend200 = Lexend({
  weight: "200",
  subsets: ["latin"],
});

const lexend300 = Lexend({
  weight: "300",
  subsets: ["latin"],
});

const lexend600 = Lexend({
  weight: "600",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="w-full h-auto max-h-[700px] bg-homebarcol md:flex relative px-5 py-7">
          <div className="w-[50%] z-10 ">
            <div className="">
              <h1
                className={`text-6xl lg:text-8xl md:text-black ${lexend200.className}`}
              >
                UNLOCK YOUR
              </h1>
              <div className="flex">
                <h1
                  className={`font-bold text-6xl lg:text-8xl ${lexend600.className}`}
                >
                  JOURNEY
                </h1>
                <h1 className={`text-2xl lg:text-4xl ${lexend300.className}`}>
                  <br />
                  with
                </h1>
              </div>
              <h1 className={`text-6xl lg:text-8xl ${lexend200.className}`}>
                US
              </h1>
            </div>
          </div>
          <div className="aspect-square invisible md:visible md:brightness-100 md:w-[50%] md:block  absolute md:relative">
            <Image
              src={cardDessert}
              alt="car dessert"
              fill
              className="rounded"
            />
          </div>
        </div>
        <main className="flex flex-col items-center justify-between p-24">
          <div className="w-screen h-full max-h-[700px] bg-[#EDE6DC] md:flex relative px-5 py-7 ">
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
                        <Image
                          src={multiplepick}
                          alt="multiplepick"
                          width={30}
                        />
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
                  <h2 id="Offers" className="text-4xl font-bold">
                    Offers
                  </h2>
                </div>
                <div className="flex flex-col gap-5 mt-10 justify-center align-baseline">
                  <Link href="#Offers">
                    <div className="py-3 px-7 flex gap-5 bg-white justify-center hover:overflow-hidden ">
                      <div>
                        <Image src={saleTag} alt="offers" />
                      </div>
                      <div>
                        <h2 className=" font-bold">15% off</h2>
                        <p>For first-time users</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="#Offers">
                    <span className="absolute left-0 w-full h-0 transition-all "></span>
                    <div className="py-3 px-7 flex gap-5 bg-white justify-center">
                      <div>
                        <Image src={saleTag} alt="offers" />
                      </div>
                      <div>
                        <h2 className=" font-bold">10% off</h2>
                        <p>2+ days reservation</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="#Offers">
                    <div className="py-3 px-7 flex gap-5 bg-white justify-center">
                      <div>
                        <Image src={saleTag} alt="offers" />
                      </div>
                      <div>
                        <h2 className="font-bold">20% off</h2>
                        <p>With student card!</p>
                      </div>
                    </div>
                  </Link>
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
