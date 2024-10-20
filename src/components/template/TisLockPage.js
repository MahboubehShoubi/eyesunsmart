"use client";

import { useState } from "react";
import Image from "next/image";

import TisLockHotelLock from "@/module/tislockpage/TisLockHotelLock";

function TisLockPage() {
  const [tisBus, setTisBus] = useState("Hotel Lock");

  const TisLockList = [
    "Hotel Lock",
    "Smart Lock",
    "Other",
  ];

  return (
    <div className="w-full mt-20 mb-20">
      <div className="container w-full md:max-w-screen-xl">
        <div className="w-full flex justify-center">
          <Image
            className="w-[400px]"
            src="/image/tis-group/tis-lock.png"
            width={1000}
            height={700}
            alt="Tis Air"
          />
        </div>
        <div className="w-full flex justify-around flex-wrap gap-y-5">
          {TisLockList.map((item) => (
            <button
              className={
                tisBus === `${item}`
                  ? "w-[200px] py-4 rounded-full bg-garyTisLock text-textWhite "
                  : "w-[200px] py-4 rounded-full bg-bgRed border-2 text-textWhite hover:bg-garyTisLock hover:text-textWhite transition duration-700"
              }
              onClick={(e) => setTisBus(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {tisBus === "Hotel Lock" ? <TisLockHotelLock /> : null}
          {/* {tisBus === "Smart Lock" ? <TisBusPanels /> : null} */}
          {/* {tisBus === "Other" ? <TisBusPanels /> : null} */}
          
        </div>
      </div>
    </div>
  );
}

export default TisLockPage;
