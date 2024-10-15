"use client";

import { useState } from "react";
import Image from "next/image";
import TisAirPanel from "@/module/tisairpage/TisAirPanel";
import TisAirControllers from "@/module/tisairpage/TisAirControllers";
import TisAirSensor from "@/module/tisairpage/TisAirSensor";
import TisAirIntercom from "@/module/tisairpage/TisAirIntercom";

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
                ? "w-[150px] py-4 rounded-full bg-grayTisAir text-navyBlue "
                : "w-[150px] py-4 rounded-full bg-blueTisAir text-navyBlue hover:bg-grayTisAir"
            }
            onClick={(e) => setTisAir("panel")}
          >
            Panel
          </button>
          <button
            className={
              tisAir === "controllers"
                ? "w-[150px] py-4 rounded-full bg-grayTisAir text-navyBlue "
                : "w-[150px] py-4 rounded-full bg-blueTisAir text-navyBlue hover:bg-grayTisAir"
            }
            onClick={(e) => setTisAir("controllers")}
          >
            Controllers
          </button>
          <button
            className={
              tisAir === "sensors"
                ? "w-[150px] py-4 rounded-full bg-grayTisAir text-navyBlue "
                : "w-[150px] py-4 rounded-full bg-blueTisAir text-navyBlue hover:bg-grayTisAir"
            }
            onClick={(e) => setTisAir("sensors")}
          >
            Sensors
          </button>
          <button
            className={
              tisAir === "intercom"
                ? "w-[150px] py-4 rounded-full bg-grayTisAir text-navyBlue "
                : "w-[150px] py-4 rounded-full bg-blueTisAir text-navyBlue hover:bg-grayTisAir"
            }
            onClick={(e) => setTisAir("intercom")}
          >
            Intercom
          </button>
          <button
            className={
              tisAir === "gateways"
                ? "w-[150px] py-4 rounded-full bg-grayTisAir text-navyBlue "
                : "w-[150px] py-4 rounded-full bg-blueTisAir text-navyBlue hover:bg-grayTisAir"
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
          {tisAir === "intercom" ? <TisAirIntercom /> : null}
          {tisAir === "gateways" ? <div>gateways</div> : null}
        </div>
      </div>
    </div>
  );
}

export default TisAirPage;
