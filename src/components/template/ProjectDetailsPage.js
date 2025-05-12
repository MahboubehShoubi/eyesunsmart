"use client";

import CircularProgress from "@/element/CircularProgress";
import CardProjectSlider from "@/module/CardProjectSlider";
import Image from "next/image";
import React from "react";

function ProjectDetailsPage({ data }) {
  return (
    <div className="w-full mt-20 sm:mt-40">
      <div className="w-full sm:h-[80vh] ">
        <Image
          src={data.imageList[0]}
          className="w-full h-full object-cover"
          width={1000}
          height={700}
          alt="project image"
        />
      </div>
      <div className=" container w-full sm:max-w-screen-xl sm:mt-10 px-5 sm:px-0">
        <div className="w-full h-full grid grid-cols-1 grid-rows-5 sm:grid-rows-1 sm:grid-cols-12">
          <div className=" row-start-1 row-span-1 sm:row-span-full sm:col-start-1 sm:col-end-4 flex justify-center items-center">
            <p className="text-primaryBlue text-[2rem]">
              پروژه : {data.projectType}
            </p>
          </div>
          <div className=" row-start-4 row-span-2 sm:row-span-full sm:col-start-4 sm:col-span-4 h-[300px] flex flex-row-reverse sm:flex-col justify-around items-center">
            <div className="w-[150px] h-[150px]">
              <CircularProgress
                size={150}
                strokeWidth={10}
                progress={40}
                duration={2}
                color={"#4D4C7D"}
                bgColor={"rgb(236, 236, 236)"}
              />
            </div>
            <div>
              <p className="text-textGray text-[1.5rem] sm:font-normal sm:text-[1.2rem]">
                پیشرفت پروژه
              </p>
            </div>
          </div>
          <div className=" row-start-2 row-span-2 sm:row-span-full sm:col-start-8 sm:col-end-13 sm:py-5">
            <p className="text-justify text-textGray leading-8">
              {data.description}
            </p>
          </div>
        </div>
        <div className="w-full">
          <CardProjectSlider data={data} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
