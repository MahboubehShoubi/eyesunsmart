"use client";

import TisBusPanels from "@/module/tisbuspage/TisBusPanels";
import Image from "next/image";
import { useState } from "react";

function TisBusPage() {
  const [tisBus, setTisBus] = useState("panels");

  const TisBusList = ["panels" , "Hotel InterFace" , "Screen" , "Dimmers" , "Relays" , "Sensore" , "BMS/PMS" , "Motors" , "Audio/Video" , "Meters" , "Gateways" , "Other"]
  
  return (
    <div className="w-full mt-20 mb-20">
      <div className="container w-full md:max-w-screen-xl">
        <div className="w-full flex justify-center">
          <Image
            className="w-[400px]"
            src="/image/tis-group/bus.png"
            width={1000}
            height={700}
            alt="Tis Air"
          />
        </div>
        <div className="w-full flex justify-around flex-wrap gap-y-5">
            {TisBusList.map(item => (<button
            className={
              tisBus === `${item}`
                ? "w-[200px] py-4 rounded-full bg-grayTisAir text-navyBlue "
                : "w-[200px] py-4 rounded-full bg-bgRed text-textWhite hover:bg-grayTisAir hover:text-navyBlue transition duration-700"
            }
            onClick={(e) => setTisBus(item)}
          >
            {item}
          </button> ))}
        </div>
        <div className="w-full flex justify-center">
          {tisBus === "panels" ? <TisBusPanels/> : null}
        </div>
      </div>
    </div>
  );
}

export default TisBusPage;
