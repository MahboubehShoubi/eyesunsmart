"use client";

import { useState } from "react";
import Image from "next/image";

import TisBusPanels from "@/module/tisbuspage/TisBusPanels";
import TisBusHotelInterFace from "@/module/tisbuspage/TisBusHotelInterFace";
import TisBusScreen from "@/module/tisbuspage/TisBusScreen";
import TisBusDimmers from "@/module/tisbuspage/TisBusDimmers";
import TisBusRelays from "@/module/tisbuspage/TisBusRelays";
import TisBusSensors from "@/module/tisbuspage/TisBusSensors";
import TisBusBmsPms from "@/module/tisbuspage/TisBusBmsPms";
import TisBusMotors from "@/module/tisbuspage/TisBusMotors";
import TisBusAudioVideo from "@/module/tisbuspage/TisBusAudioVideo";
import TisBusMeters from "@/module/tisbuspage/TisBusMeters";
import TisBusGateways from "@/module/tisbuspage/TisBusGateways";
import TisBusOther from "@/module/tisbuspage/TisBusOther";

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
    <div className="w-full md:mt-20 md:mb-20">
      <div className="container w-full md:max-w-screen-xl px-5">
        <div className="w-full flex justify-center">
          <Image
            className=" w-[200px] md:w-[400px]"
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
                  ? " w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text[1rem] bg-bgRed text-textWhite "
                  : " w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text[1rem] bg-orangTisBus text-textBlack hover:bg-bgRed hover:text-textWhite transition duration-700"
              }
              onClick={(e) => setTisBus(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center ">
          {tisBus === "panels" ? <TisBusPanels /> : null}
          {tisBus === "Hotel InterFace" ? <TisBusHotelInterFace /> : null}
          {tisBus === "Screens" ? <TisBusScreen /> : null}
          {tisBus === "Dimmers" ? <TisBusDimmers /> : null}
          {tisBus === "Relays" ? <TisBusRelays /> : null}
          {tisBus === "Sensors" ? <TisBusSensors /> : null}
          {tisBus === "BMS/PMS" ? <TisBusBmsPms /> : null}
          {tisBus === "Motors" ? <TisBusMotors /> : null}
          {tisBus === "Audio/Video" ? <TisBusAudioVideo /> : null}
          {tisBus === "Meters" ? <TisBusMeters /> : null}
          {tisBus === "Gateways" ? <TisBusGateways /> : null}
          {tisBus === "Other" ? <TisBusOther /> : null}
        </div>
      </div>
    </div>
  );
}

export default TisBusPage;
