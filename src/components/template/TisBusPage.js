"use client";

import { useState } from "react";
import Image from "next/image";

import TisBusPanels from "@/module/tisbuspage/TisBusPanels";
import TisBusHotelInterFace from "@/module/tisbuspage/TisBusHotelInterFace";
import TisBusScreen from "@/module/tisbuspage/TisBusScreen";
import TisBusDimmers from "@/module/tisbuspage/TisBusDimmers";
import TisBusRelays from "@/module/tisbuspage/TisBusRelays";
import TisBusSensors from "@/module/tisbuspage/TisBusSensors";
import TisBuaBmsPms from "@/module/tisbuspage/TisBuaBmsPms";
import TisBusMotors from "@/module/tisbuspage/TisBusMotors";

function TisBusPage() {
  const [tisBus, setTisBus] = useState("panels");

  const TisBusList = [
    "panels",
    "Hotel InterFace",
    "Screens",
    "Dimmers",
    "Relays",
    "Sensors",
    "BMS/PMS",
    "Motors",
    "Audio/Video",
    "Meters",
    "Gateways",
    "Other",
  ];

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
          {TisBusList.map((item) => (
            <button
              className={
                tisBus === `${item}`
                  ? "w-[200px] py-4 rounded-full bg-bgRed text-textWhite "
                  : "w-[200px] py-4 rounded-full bg-secondery text-textWhite hover:bg-bgRed hover:text-navyBlue transition duration-700"
              }
              onClick={(e) => setTisBus(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {tisBus === "panels" ? <TisBusPanels /> : null}
          {tisBus === "Hotel InterFace" ? <TisBusHotelInterFace /> : null}
          {tisBus === "Screens" ? <TisBusScreen /> : null}
          {tisBus === "Dimmers" ? <TisBusDimmers /> : null}
          {tisBus === "Relays" ? <TisBusRelays /> : null}
          {tisBus === "Sensors" ? <TisBusSensors /> : null}
          {tisBus === "BMS/PMS" ? <TisBuaBmsPms /> : null}
          {tisBus === "Motors" ? <TisBusMotors /> : null}
        </div>
      </div>
    </div>
  );
}

export default TisBusPage;
