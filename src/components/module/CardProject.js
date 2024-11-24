"use clinet";

import Image from "next/image";
import React, { useState } from "react";

import "animate.css";


function CardProject({data}) {

  const [imgSrc, setImgSrc] = useState("");

  const changHandler = (img) => {
    setImgSrc(img);
    // imgIndex.className("animate__animated animate__zoomIn")
  };

  return (
    <div className="w-full flex">
      <div className="w-1/2">
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
        <div className="w-full flex flex-wrap gap-5 mt-5">
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
      <div className="w-1/2">
        <div className=" w-full h-[350px] p-10 flex flex-col justify-around">
          <p>
            نوع پروژه : <span className=" font-semibold	">{data.projectType}</span>{" "}
          </p>
          <p>
            مکان پروژه :{" "}
            <span className=" font-semibold	">{data.projectLocation}</span>{" "}
          </p>
          <p>
            توضیحات پروژه :{" "}
            <span className=" font-semibold	">{data.description}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
