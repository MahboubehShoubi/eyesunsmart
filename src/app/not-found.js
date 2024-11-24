import Image from "next/image";
import Link from "next/link";
import React from "react";

import { PiArrowFatLinesLeftDuotone } from "react-icons/pi";



function NotFound() {
  return (
    <div className="w-full h-screen relative">
      <Image
        className=" w-full h-full absolute"
        src="/image/not-found/not-found.jpg"
        width={1000}
        height={700}
        alt="background"
      />
      <div className=" absolute z-[2] w-full h-full flex flex-col justify-center items-center gap-5">
        <h3 className="text-[3rem] text-textWhite border-b-4">404</h3>
        <p className="text-textWhite text-[2rem]">صفحه مورد نظر پیدا نشد</p>
        <Link href="/" className="text-textWhite flex items-center gap-3 border-2 py-2 px-10 rounded-[5px]">
          صفحه اصلی 
          <PiArrowFatLinesLeftDuotone className="text-[1.5rem]" />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
