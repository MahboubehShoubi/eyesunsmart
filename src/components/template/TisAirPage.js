"use client";

import { useState } from "react";
import Image from "next/image";
import TisAirPanel from "@/module/tisairpage/TisAirPanel";
import TisAirControllers from "@/module/tisairpage/TisAirControllers";
import TisAirSensor from "@/module/tisairpage/TisAirSensor";
import TisAirIntercom from "@/module/tisairpage/TisAirIntercom";
import TisAirGateways from "@/module/tisairpage/TisAirGateways";

function TisAirPage() {
  const [tisAir, setTisAir] = useState("panel");

  const TisAirList = ["panel" , "controllers" , "sensors" , "intercom" , "gateways"]

  return (
    <div className="w-full md:mt-20 md:mb-20">
      <div className="container w-full md:max-w-screen-xl px-5">
        <div className="w-full flex justify-center">
          <Image
            className="w-[200px] md:w-[400px]"
            src="/image/tis-group/air.png"
            width={1000}
            height={700}
            alt="Tis Air"
          />
        </div>
        <div className="w-full flex justify-around flex-wrap gap-y-5">
          {TisAirList.map((item , index) => (<button
            className={
              tisAir === `${item}`
                ? "w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text-[1rem] bg-grayTisAir text-navyBlue "
                : "w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text-[1rem] bg-blueTisAir text-navyBlue hover:bg-grayTisAir"
            }
            onClick={(e) => setTisAir(item)}
            key={index}
          >
            {item}
          </button>))}  
        </div>
        <div className="w-full flex justify-center">
          {tisAir === "panel" ? <TisAirPanel /> : null}
          {tisAir === "controllers" ? <TisAirControllers /> : null}
          {tisAir === "sensors" ? <TisAirSensor /> : null}
          {tisAir === "intercom" ? <TisAirIntercom /> : null}
          {tisAir === "gateways" ? <TisAirGateways /> : null}
        </div>
      </div>
    </div>
  );
}

export default TisAirPage;
