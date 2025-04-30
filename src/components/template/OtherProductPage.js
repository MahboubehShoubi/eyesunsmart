"use client";
import { useState } from "react";
import Image from "next/image";

// Components
import OtherProductAudio from "@/module/otherproductpage/OtherProductAudio";
import OtherProductPanel from "@/module/otherproductpage/OtherProductPanel";
import OtherProductSensors from "@/module/otherproductpage/OtherProductSensors";
import OtherProductSmartLock from "@/module/otherproductpage/otherProductSmartLock";

function OtherProductPage() {
  const [other, setOther] = useState("Panel");

  const OtherProduct = [
    "Panel",
    "Smart Lock",
    "Sensors",
    "Audio",
  ];

  return (
    <div className="w-full mt-28 sm:mt-20 sm:mb-20">
      <div className="container w-full md:max-w-screen-xl px-5">
        <div className="w-full flex justify-center">
          <Image
            className="w-[200px] md:w-[300px] h-[100px]"
            src="/image/tis-group/other.png"
            width={1000}
            height={700}
            alt="Tis Air"
          />
        </div>
        <div className="w-full flex justify-around flex-wrap gap-y-5 mt-10">
          {OtherProduct.map((item, index) => (
            <button
              className={
                other === `${item}`
                  ? "w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text-[1rem] bg-textBlack text-textWhite "
                  : "w-[115px] md:w-[200px] py-2 md:py-4 rounded-full text-[13px] md:text-[1rem] bg-bgRed text-textWhite hover:bg-textBlack"
              }
              onClick={(e) => setOther(item)}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="w-full flex justify-center">
          {other === "Panel" ? <OtherProductPanel /> : null}
          {other === "Smart Lock" ? <OtherProductSmartLock /> : null}
          {other === "Sensors" ? <OtherProductSensors /> : null}
          {other === "Audio" ? <OtherProductAudio /> : null}
        </div>
      </div>
    </div>
  );
}

export default OtherProductPage;
