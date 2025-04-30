"use client";

import { useState } from "react";
import Image from "next/image";

import TisLockHotelLock from "@/module/tislockpage/TisLockHotelLock";
import TisLockSmartLock from "@/module/tislockpage/TisLockSmartLock";
import TisLockOther from "@/module/tislockpage/TisLockOther";

function TisLockPage() {
  const [tisBus, setTisBus] = useState("Hotel Lock");

  const TisLockList = [
    "Hotel Lock",
    "Smart Lock",
    "Other",
  ];

  return (
    <div className="w-full mt-28 sm:mt-20 sm:mb-20">
      <div className="container w-full md:max-w-screen-xl px-5">
        <div className="w-full flex justify-center">
          <Image
            className="w-[200px] md:w-[400px]"
            src="/image/tis-group/tis-lock.png"
            width={1000}
            height={700}
            alt="Tis Air"
          />
        </div>
        <div className="w-full flex justify-around flex-wrap gap-y-5">
          {TisLockList.map((item , index) => (
            <button
              className={
                tisBus === `${item}`
                  ? "w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text-[1rem] bg-garyTisLock text-textWhite "
                  : "w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text-[1rem] bg-bgRed border-2 text-textWhite hover:bg-garyTisLock hover:text-textWhite transition duration-700"
              }
              onClick={(e) => setTisBus(item)}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {tisBus === "Hotel Lock" ? <TisLockHotelLock /> : null}
          {tisBus === "Smart Lock" ? <TisLockSmartLock /> : null}
          {tisBus === "Other" ? <TisLockOther/> : null}
          
        </div>
      </div>
    </div>
  );
}

export default TisLockPage;
