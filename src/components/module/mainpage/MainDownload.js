"use client";

import { useState } from "react";
import Image from "next/image";

import "animate.css";

function MainDownload() {
  const [moveImg , setMoveImg] = useState(false);

  return (
    <div className="w-full h-auto md:h-[600px] md:grid md:grid-rows-10 ">
      <div className=" md:row-start-3 md:row-end-10 bg-navyBlue">
        <div className="container px-6 pt-8 h-full md:max-w-screen-xl flex flex-col gap-y-10 md:flex-row md:justify-between items-center ">
          <div className=" w-full md:w-1/2 flex flex-col justify-center gap-y-5">
            <h2 className="text-textWhite text-[2.5rem] md:text-[3.2rem] text-left">
              Download TIS App
            </h2>
            <p className="text-textWhite text-[14px] md:text-[1rem] text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <div className=" flex">
              <Image
                className="w-[120px] ml-3 hover:scale-[90%] duration-1000"
                src="/image/main/main-download/img-2.png"
                width={1000}
                height={700}
                alt="imgApp"
              />
              <Image
                className="w-[120px] hover:scale-[90%] duration-1000"
                src="/image/main/main-download/img-3.png"
                width={1000}
                height={700}
                alt="imgApp"
              />
            </div>
          </div>
          <div
            className=" w-full md:w-1/2 flex items-center justify-center mb-[-80px]"
            onMouseOver={() => setMoveImg(true)}
            onMouseOut={() => setMoveImg(false)}
          >
            <Image
              className={moveImg ?"w-[75%] animate__animated animate__pulse animate__slower animate__infinite" : "w-[75%]" }
              src="/image/main/main-download/img-1.png"
              width={1000}
              height={700}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDownload;
