"use client";

import CircularProgress from "@/element/CircularProgress";
import CardProjectSlider from "@/module/CardProjectSlider";
import Image from "next/image";
import React from "react";

import "react-circular-progressbar/dist/styles.css";

function ProjectDetailsPage({ data }) {
  return (
    <>
      <div className="w-full h-[80vh] border-[3px]">
        <Image
          src={data.imageList[0]}
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
              <p className="text-primaryBlue text-[2rem]">
                {" "}
                پروژه : {data.projectType}{" "}
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center gap-y-10">
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
              <p className="text-textGray">پیشرفت پروژه</p>
            </div>
          </div>
          <div className="md:w-1/2 px-5 py-10">
            <p className="text-justify text-textGray leading-8">
              {data.description}
            </p>
          </div>
        </div>
        <div className="w-full">
          <CardProjectSlider data={data} />
        </div>
      </div>
    </>
  );
}

export default ProjectDetailsPage;
