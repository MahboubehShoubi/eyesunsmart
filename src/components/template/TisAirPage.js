"use client";

import { useState } from "react";
import Image from "next/image";
import TisAirPanel from "@/module/tisairpage/TisAirPanel";

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
                ? "py-4 bg-bgRed text-textWhite w-[150px] rounded-full"
                : "py-4 bg-primaryBlue text-textWhite w-[150px] rounded-full hover:bg-bgRed"
            }
            onClick={(e) => setTisAir("panel")}
          >
            Panel
          </button>
          <button
            className={
              tisAir === "controllers"
                ? "py-4 bg-bgRed text-textWhite w-[150px] rounded-full"
                : "py-4 bg-primaryBlue text-textWhite w-[150px] rounded-full hover:bg-bgRed"
            }
            onClick={(e) => setTisAir("controllers")}
          >
            Controllers
          </button>
          <button
            className={
              tisAir === "sensore"
                ? "py-4 bg-bgRed text-textWhite w-[150px] rounded-full"
                : "py-4 bg-primaryBlue text-textWhite w-[150px] rounded-full hover:bg-bgRed"
            }
            onClick={(e) => setTisAir("sensore")}
          >
            Sensore
          </button>
          <button
            className={
              tisAir === "intercon"
                ? "py-4 bg-bgRed text-textWhite w-[150px] rounded-full"
                : "py-4 bg-primaryBlue text-textWhite w-[150px] rounded-full hover:bg-bgRed"
            }
            onClick={(e) => setTisAir("intercon")}
          >
            Intercon
          </button>
          <button
            className={
              tisAir === "gateways"
                ? "py-4 bg-bgRed text-textWhite w-[150px] rounded-full"
                : "py-4 bg-primaryBlue text-textWhite w-[150px] rounded-full hover:bg-bgRed"
            }
            onClick={(e) => setTisAir("gateways")}
          >
            Gateways
          </button>
        </div>
        <div className="w-full flex justify-center">
          {tisAir === "panel" ? <TisAirPanel /> : null}
          {tisAir === "controllers" ? <div>controllers</div> : null}
          {tisAir === "sensore" ? <div>sensore</div> : null}
          {tisAir === "intercon" ? <div>intercon</div> : null}
          {tisAir === "gateways" ? <div>gateways</div> : null}
        </div>
      </div>
    </div>
  );
}

export default TisAirPage;
