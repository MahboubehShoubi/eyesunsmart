"use client";

import Image from "next/image";
import React from "react";

// icons
import { MdOutlineMobileScreenShare } from "react-icons/md";
import { GiAutomaticSas } from "react-icons/gi";
import { BsLampFill } from "react-icons/bs";
import { GiDeskLamp } from "react-icons/gi";
import { FaEye } from "react-icons/fa";

function MainServicess() {
  return (
    <div className=" relative w-full mt-[50px] md:mt-[100px] ">
      <div className=" container md:max-w-screen-xl relative md:h-[115vh] grid md:grid-rows-5">
        <div className="w-full  grid grid-cols-1 md:grid-cols-12 md:grid-rows-[5vh_50vh_40vh_20vh]">
          <div className=" md:col-start-1 md:col-end-8 md:row-start-2 md:row-end-3 rounded-[60px] md:rounded-l-[0] bg-bgRed p-[40px]">
            <span className="text-textWhite text-[1.1rem] md:text-titleFontSize ">خدمات ما</span>
            <h2 className=" text-[1.5rem] md:text-mainTitleFontSize text-textWhite">
              Smart Solutions, Seamless Living.
            </h2>
            <p className="text-[14px] md:text-[1rem]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <div className="md:hidden rounded-[30px] overflow-hidden mt-10">
              <Image
                className="w-full h-full object-cover"
                src="/image/main/main-services/img.jpg"
                width={1000}
                height={700}
                alt="image"
              />
            </div>
          </div>
          <div className="hidden md:block md:col-start-8 md:col-end-13 md:row-start-1 md:row-end-4 rounded-[40px] overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="/image/main/main-services/img.jpg"
              width={1000}
              height={700}
              alt="image"
            />
          </div>
        </div>

        <div className="relative md:absolute z-[2] row-start-3 row-end-6 w-full grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2 justify-between content-between px-[20px] md:px-[50px]">
          <div className=" md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <MdOutlineMobileScreenShare className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className=" text-[1.3rem] md:text-subTitle text-navyBlue">نصب دستگاه هوشمند</h3>
            <p className="text-textGray text-[14px]">
              للورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className=" md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <GiAutomaticSas className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] md:text-subTitle text-navyBlue">نصب دستگاه هوشمند</h3>
            <p className="text-textGray text-[14px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>

          <div className=" md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <BsLampFill className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] md:text-subTitle text-navyBlue">نصب دستگاه هوشمند</h3>
            <p className="text-textGray text-[14px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className=" md:col-start-2 md:col-span-1 md:row-start-2 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <FaEye className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] md:text-subTitle text-navyBlue">نصب دستگاه هوشمند</h3>
            <p className="text-textGray text-[14px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
          <div className=" md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <GiDeskLamp className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-subTitle text-navyBlue">نصب دستگاه هوشمند</h3>
            <p className="text-textGray text-[14px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServicess;
