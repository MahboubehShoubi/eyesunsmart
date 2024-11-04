"use client";

import { useState } from "react";
import Image from "next/image";

import TisBeeWallSwitch from "@/module/tisbeepage/TisBeeWallSwitch";
import TisBeeController from "@/module/tisbeepage/TisBeeController";
import TisBeeSecuritySensor from "@/module/tisbeepage/TisBeeSecuritySensor";
import TisBeeLights from "@/module/tisbeepage/TisBeeLights";
import TisBeeGateway from "@/module/tisbeepage/TisBeeGateway";

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
    <div className="w-full md:mt-20 md:mb-20">
      <div className="container w-full md:max-w-screen-xl px-5">
        <div className="w-full flex justify-center">
          <Image
            className="w-[200px] md:w-[400px]"
            src="/image/tis-group/bee.png"
            width={1000}
            height={700}
            alt="Tis Air"
          />
        </div>
        <div className="w-full flex justify-around flex-wrap gap-y-5">
          {TisBeeList.map((item , index) => (
            <button
              className={
                tisBee === `${item}`
                  ? "w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text-[1rem] bg-grayTisBee text-yellowTisBee"
                  : "w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text-[1rem] bg-yellowTisBee text-textBlack hover:bg-grayTisBee hover:text-yellowTisBee transition duration-700"
              }
              onClick={(e) => setTisBee(item)}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center">
        {tisBee === "Wall Switch" ? <TisBeeWallSwitch /> : null}
        {tisBee === "Controller" ? <TisBeeController /> : null}
        {tisBee === "Security/Sensor" ? <TisBeeSecuritySensor /> : null}
        {tisBee === "Lights" ? <TisBeeLights /> : null}
        {tisBee === "Gateway" ? <TisBeeGateway /> : null}
        </div>
      </div>
    </div>
  );
}

export default TisBeePage;
