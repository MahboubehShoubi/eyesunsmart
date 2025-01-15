"use clinet";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import "animate.css";

import { FaLongArrowAltLeft } from "react-icons/fa";

function CardProject({ data }) {
  const [imgSrc, setImgSrc] = useState("");

  const router = useRouter();

  const changHandler = (img) => {
    setImgSrc(img);
    // imgIndex.className("animate__animated animate__zoomIn")
  };

  const routHandler =() => {
    router.push(`/project/${data.id}`)

  }

  // 0px 0px 20px 0px rgba(0,0,0,0.75

  return (
    <div className=" w- h-full md:w-[23.5%] flex flex-col rounded-[10px] animate__animated animate__zoomIn hover:cursor-pointer shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] p-2">
      <div className=" w-full h-[350px] overflow-hidden rounded-[8px]">
        <Image
          className="h-full w-full object-cover hover:scale-110  transition-all grayscale hover:grayscale-0 "
          src={data.imageList[0]}
          width={1000}
          height={700}
          alt="projectImag"
          // ref={imgIndex}
        />
      </div>

      <div className=" w-full py-5 px-2 flex flex-col gap-y-3">
        <p className="text-bgRed text-[15px]">
          نوع پروژه :{" "}
          <span className=" font-semibold	text-textGray">
            {data.projectType}
          </span>{" "}
        </p>
        <p className="text-bgRed text-[15px]">
          مکان پروژه :{" "}
          <span className=" font-semibold	text-textGray">
            {data.projectLocation}
          </span>{" "}
        </p>
        <button onClick={routHandler} className="bg-bgRed text-textWhite text-[12px] py-[5px] rounded-lg flex items-center justify-center gap-x-2 w-[150px]">
          جزئیات بیشتر 
          <FaLongArrowAltLeft />
        </button>
      </div>
    </div>
  );
}

export default CardProject;
