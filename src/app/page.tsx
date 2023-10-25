/// library
import Image from "next/image";
import { Lexend } from "next/font/google";


/// component
import Navbar from "./components/navbar";
import Link from "next/link";
import Footer from "./components/footer";
import Slider from "./components/slider";

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
      <main>
        <Navbar />
        <div className="w-full h-auto max-h-[700px] bg-homebarcol md:flex relative px-5 py-7">
          <div className="w-[50%] z-10">
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
         <div>  
{/*<div id="default-carousel" className="relative w-full" data-carousel="slide">
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
           <Image src={whyLogo} alt="whyLogo" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={80} />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image src={whyLogo} alt="whyLogo" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={80} />
        
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
         <Image src={whyLogo} alt="whyLogo" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={80} />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <Image src={whyLogo} alt="whyLogo" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={80} />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
         <Image src={whyLogo} alt="whyLogo" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={80} />
        </div>
    </div>
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>*/}
  <Slider/>
        </div> 
        <div className="flex flex-col items-center justify-between relative">
          <div className="w-full h-auto bg-[#EDE6DC] md:flex relative mobile:px-3 tablet:px-10 px-28 py-16 ">
          <div className="flex mobile:flex-col justify-between  gap-5"></div>
              <div className="w-[70%] mobile:w-full">
                <div className="flex items-center">
                  <h2 className=" text-4xl mobile:text-3xl font-bold">Why Drive?</h2>
                  <Image src={whyLogo} alt="whyLogo" width={80} />
                </div>
                <div className="flex flex-col items-end py-3 gap-10">
                <div className="flex mobile:flex-col gap-10 tablet:justify-center">
                    <div className="w-[40%] mobile:w-[100%]">
                      <div className="flex gap-3 align-baseline">
                        <Image src={lowprice} alt="lowprice" width={30} />
                        <h3 className="md:tablet:text-[12px]">The Lowest Price</h3>
                      </div>
                      <br />
                      <p className=" text-justify">
                        Drive offers competitive pricing through cost-effective
                        operations, enabling affordability and quality service
                        for all customers.
                      </p>
                    </div>
                    <div className="w-[40%] mobile:w-[100%]">
                      <div className="flex gap-3 align-baseline">
                        <Image
                          src={multiplepick}
                          alt="multiplepick"
                          width={30}
                        />
                        <h3 className="md:tablet:text-[12px]">Multiple Pick-up Locations</h3>
                      </div>
                      <br />
                      <p className=" text-justify">
                        Drive provides convenience with multiple pick-up points,
                        making it easy to start your journey from various
                        locations.
                      </p>
                    </div>
                  </div>
                  <div className="flex mobile:flex-col gap-10 tablet:justify-center">
                  <div className="w-[40%] mobile:w-[100%]">
                      <div className="flex gap-3 align-baseline">
                        <Image src={petrol} alt="petrol" width={30} />
                        <h3 className="md:tablet:text-[12px]">Reimburse your petrol</h3>
                      </div>
                      <br />
                      <p className=" text-justify">
                        Drive offers petrol reimbursement, putting money back in
                        your pocket while you hit the road worry-free.
                      </p>
                    </div>
                    <div className="w-[40%] mobile:w-[100%]">
                      <div className="flex gap-3 align-baseline">
                        <Image src={qty} alt="qty" width={30} />
                        <h3 className="md:tablet:text-[12px]">Always the Best Quality</h3>
                      </div>
                      <br />
                      <p className=" text-justify">
                        Drive excels in quality with a meticulously maintained
                        fleet, rigorous inspections, and a commitment to
                        customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[30%] mobile:w-[100%] flex flex-col gap-5 my-10">
                <div>
                  <h2 id="Offers" className="text-4xl font-bold">
                    Offers
                  </h2>
                </div>
                <div className="flex flex-col gap-5 mt-10 justify-center align-baseline mobile:mx-auto">
                  <Link href="#Offers">
                    <div className="py-3 px-3 max-w-[350px] flex gap-5 bg-white justify-center">
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
                    <div className="py-3 max-w-[350px] flex gap-5 bg-white justify-center">
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
                    <div className="py-3 max-w-[350px] flex gap-5 bg-white justify-center">
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
        <Footer />
      </main>
    </>
  );
}
