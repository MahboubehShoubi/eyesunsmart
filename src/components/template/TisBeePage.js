"use client";

import { useState } from "react";
import Image from "next/image";

function TisBeePage() {
  const [tisBee, setTisBee] = useState("Wall Switch");

  const TisBeeList = [
    "Wall Switch",
    "Controller",
    "Security/Sensor",
    "Lights",
    "Gateway",
  ];

  return (
    <div className="w-full mt-20 mb-20">
      <div className="container w-full md:max-w-screen-xl">
        <div className="w-full flex justify-center">
          <Image
            className="w-[400px]"
            src="/image/tis-group/bee.png"
            width={1000}
            height={700}
            alt="Tis Air"
          />
        </div>
        <div className="w-full flex justify-around flex-wrap gap-y-5">
          {TisBeeList.map((item) => (
            <button
              className={
                tisBee === `${item}`
                  ? "w-[200px] py-4 rounded-full bg-grayTisBee text-orangTisBus"
                  : "w-[200px] py-4 rounded-full bg-bgRed text-textWhite hover:bg-grayTisBee hover:text-orangTisBus transition duration-700"
              }
              onClick={(e) => setTisBee(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center"></div>
      </div>
    </div>
  );
}

export default TisBeePage;
