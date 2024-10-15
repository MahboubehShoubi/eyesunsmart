"use client";

import { useState } from "react";
import Image from "next/image";
import TisAirPanel from "@/module/tisairpage/TisAirPanel";
import TisAirControllers from "@/module/tisairpage/TisAirControllers";
import TisAirSensor from "@/module/tisairpage/TisAirSensor";

function TisAirPage() {
  const [tisAir, setTisAir] = useState("panel");

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
          <button
            className={
              tisAir === "panel"
                ? "py-4  bg-blueTisAir text-navyBlue w-[150px] rounded-full"
                : "py-4 bg-grayTisAir w-[150px] rounded-full hover:bg-blueTisAir text-navyBlue"
            }
            onClick={(e) => setTisAir("panel")}
          >
            Panel
          </button>
          <button
            className={
              tisAir === "controllers"
                ? "py-4  bg-blueTisAir text-navyBlue w-[150px] rounded-full"
                : "py-4 bg-grayTisAir w-[150px] rounded-full hover:bg-blueTisAir text-navyBlue"
            }
            onClick={(e) => setTisAir("controllers")}
          >
            Controllers
          </button>
          <button
            className={
              tisAir === "sensors"
                ? "py-4  bg-blueTisAir text-navyBlue w-[150px] rounded-full"
                : "py-4 bg-grayTisAir w-[150px] rounded-full hover:bg-blueTisAir text-navyBlue"
            }
            onClick={(e) => setTisAir("sensors")}
          >
            Sensors
          </button>
          <button
            className={
              tisAir === "intercon"
                ? "py-4  bg-blueTisAir text-navyBlue w-[150px] rounded-full"
                : "py-4 bg-grayTisAir w-[150px] rounded-full hover:bg-blueTisAir text-navyBlue"
            }
            onClick={(e) => setTisAir("intercon")}
          >
            Intercon
          </button>
          <button
            className={
              tisAir === "gateways"
                ? "py-4  bg-blueTisAir text-navyBlue w-[150px] rounded-full"
                : "py-4 bg-grayTisAir w-[150px] rounded-full hover:bg-blueTisAir text-navyBlue"
            }
            onClick={(e) => setTisAir("gateways")}
          >
            Gateways
          </button>
        </div>
        <div className="w-full flex justify-center">
          {tisAir === "panel" ? <TisAirPanel /> : null}
          {tisAir === "controllers" ? <TisAirControllers /> : null}
          {tisAir === "sensors" ? <TisAirSensor /> : null}
          {tisAir === "intercon" ? <div>intercon</div> : null}
          {tisAir === "gateways" ? <div>gateways</div> : null}
        </div>
      </div>
    </div>
  );
}

export default TisAirPage;
