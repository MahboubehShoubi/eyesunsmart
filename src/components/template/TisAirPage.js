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
    <div className="w-full mt-20 mb-20">
      <div className="container w-full md:max-w-screen-xl">
        <div className="w-full flex justify-center">
          <Image
            className="w-[400px]"
            src="/image/tis-group/air.png"
            width={1000}
            height={700}
            alt="Tis Air"
          />
        </div>
        <div className="w-full flex justify-around">
          {TisAirList.map(item => (<button
            className={
              tisAir === `${item}`
                ? "w-[150px] py-4 rounded-full bg-grayTisAir text-navyBlue "
                : "w-[150px] py-4 rounded-full bg-blueTisAir text-navyBlue hover:bg-grayTisAir"
            }
            onClick={(e) => setTisAir(item)}
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
