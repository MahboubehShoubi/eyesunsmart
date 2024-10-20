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
                  ? "w-[200px] py-4 rounded-full bg-grayTisBee text-yellowTisBee"
                  : "w-[200px] py-4 rounded-full bg-yellowTisBee text-textBlack hover:bg-grayTisBee hover:text-yellowTisBee transition duration-700"
              }
              onClick={(e) => setTisBee(item)}
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
