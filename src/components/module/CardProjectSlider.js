"use client";

import Image from "next/image";
import React, { useState } from "react";

import "animate.css";


function CardProjectSlider() {
     const [imgSrc, setImgSrc] = useState("");
    
      const changHandler = (img) => {
        setImgSrc(img);
        // imgIndex.className("animate__animated animate__zoomIn")
      };

  return (
    <div className="w-full flex">
          <div className="w-3/5">
            <div className=" w-full h-[350px] flex justify-center items-center shadow-lg">
              <Image
                className="h-full w-full object-cover animate__animated animate__zoomIn"
                src={imgSrc || data.imageList[0]}
                width={1000}
                height={700}
                alt="projectImag"
                // ref={imgIndex}
              />
            </div>
            <div className="w-full flex flex-wrap gap-1 mt-5">
              {data.imageList.map((img, index) => (
                <Image
                  className="w-1/6 border-2 border-textBlack rounded-[5px]"
                  src={img}
                  key={index}
                  width={1000}
                  height={700}
                  alt="projectImg"
                  onClick={() => changHandler(img)}
                />
              ))}
            </div>
          </div>
          <div className="w-2/5">
            <div className=" w-full p-10">
              <div className="h-[100px]">
                <p className="text-bgRed">
                  نوع پروژه :{" "}
                  <span className=" font-semibold	text-textGray">{data.projectType}</span>{" "}
                </p>
                <p className="text-bgRed">
                  مکان پروژه :{" "}
                  <span className=" font-semibold	text-textGray">{data.projectLocation}</span>{" "}
                </p>
              </div>
              <div className="w-full h-1/2 border-t-2 pt-5">
                <p className="w-full bg-grayTisAir font-semibold p-2">
                  توضیحات پروژه :{" "}
                </p>
                <p className=" text-textGray mt-5">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
  )
}

export default CardProjectSlider;
