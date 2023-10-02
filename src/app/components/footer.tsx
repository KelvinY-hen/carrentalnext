import Link from "next/link";
import React from "react";
import Image from "next/image";

/// asset
import ifacebook from "../../../public/images/icon-facebook.png";
import iinstagram from "../../../public/images/icon-instagram.png";
import ilinkedin from "../../../public/images/icon-linkedin.png";
import itiktok from "../../../public/images/icon-tiktok.png";
import itwitter from "../../../public/images/icon-twitter.png";
import iyoutube from "../../../public/images/icon-youtube.png";

function Footer() {
  return (
    <div className="w-full h-full bg-black flex flex-col justify-center items-center py-14 gap-28">
      <div className="flex gap-3">
        <Link href="/facebook">
          <Image src={ifacebook} alt="facebook" />
        </Link>
        <Link href="/instagram">
          <Image src={iinstagram} alt="instagram" />
        </Link>
        <Link href="/linkedin">
          <Image src={ilinkedin} alt="linkedin" />
        </Link>
        <Link href="/tiktok">
          <Image src={itiktok} alt="tiktok" />
        </Link>
        <Link href="/twitter">
          <Image src={itwitter} alt="twitter" />
        </Link>
        <Link href="/youtube">
          <Image src={iyoutube} alt="youtube" />
        </Link>
      </div>
      <h3 className="text-white">© 2023 Copyright: Drive</h3>
    </div>
  );
}

export default Footer;
