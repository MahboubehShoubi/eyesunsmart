"use client";

import Image from "next/image";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

function ProjectDetailsPage({ data }) {
  return (
    <>
      <div className="w-full h-[80vh] border-[3px]">
        <Image
          src=""
          className="w-full h-full object-cover"
          width={1000}
          height={700}
          alt="project image"
        />
      </div>
      <div className=" container w-full md:max-w-screen-xl">
        <div className="w-full flex flex-col md:flex-row">
          <div className=" w-full md:w-1/2 h-[300px] flex flex-col md:flex-row justify-around items-center">
            <div className="md:w-2/3 text-center">
              <p className="text-primaryBlue text-[2rem]">مجتمع مسکونی</p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center gap-y-10">
              {/* <div className="border-[10px] border-primaryBlue w-[120px] h-[120px] rounded-full flex justify-center items-center">
                <Counter max={80} time={100} />
              </div> */}

              <div className="w-[150px] h-[150px]">
                <CircularProgressbar value={50} text={`50%`} />
              </div>

              <p className="text-textGray">پیشرفت پروژه</p>
            </div>
          </div>
          <div className="md:w-1/2 px-5 py-10">
            <p className="text-justify text-textGray leading-8">
              پیشرفت پروژه این پروژه با طراحی و امکانات منحصر بفرد و عالی با
              ۳۳۷۱۲ مترمربع زیربنا کل و زیربنای خالص مسکونی ۱۸،۷۸۴ مترمربع در ۱۳
              طبقه (۳ طبقه زیرزمین، همکف و ۹ طبقه روی همکف) در یکی از بهترین
              مناطق شمال تهران در زمینی به مساحت ۷،۸۴۴ مترمربع شامل ۱۴۵ واحد
              مسکونی به صورت مشارکتی با شرکت سرمایه‌گذاری و ساختمانی تجارت ساخته
              شده است. این پروژه از شمال به بزرگراه صدر، از طریق خیابان دولت به
              خیابانهای شریعتی و بزرگراه صیاد شیرازی دسترسی دارد.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectDetailsPage;
