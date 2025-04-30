"use client";

import Image from "next/image";
import React from "react";

// icons

import { RiCustomerService2Fill } from "react-icons/ri";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { MdOutlineWifiPassword } from "react-icons/md";

function MainServicess() {
  return (
    <div className=" relative w-full px-3 sm:px-0 mt-[50px] sm:mt-[100px] h-fit">
      <div className=" container sm:max-w-screen-xl relative sm:h-[150vh] grid sm:grid-rows-5">
        <div className="w-full sm:row-start-1 sm:row-end-6 grid grid-cols-1 sm:grid-cols-12 sm:grid-rows-[7vh_60vh_50vh_33vh] ">
          <div className=" sm:col-start-1 sm:col-end-8 sm:row-start-2 sm:row-end-3 rounded-[60px] sm:rounded-l-[0] bg-bgRed p-[40px]">
            <div className="flex items-center gap-x-2">
              <span className="w-[30px] h-[2px] bg-textWhite"></span>
              <span className="text-textWhite text-[1.1rem] sm:text-titleFontSize">
                خدمات ما
              </span>
            </div>

            <h2 className=" text-[1.5rem] sm:text-mainTitleFontSize text-textWhite mt-5">
              خدمات خانه هوشمند
            </h2>
            <h2 className=" text-[1.5rem] sm:text-mainTitleFontSize text-textWhite">
              تجربه زندگی مدرن و هوشمند
            </h2>
            <p className="text-[13px] sm:text-[1rem] text-textWhite mt-5 text-justify">
              خانه شما شایسته بهترین‌هاست! خدمات خانه هوشمند ما طراحی شده‌اند تا
              آسایش، امنیت و بهره‌وری را به زندگی شما بیاورند. از طراحی و نصب
              گرفته تا پشتیبانی و آموزش، تمامی نیازهای شما برای داشتن یک خانه
              هوشمند در یک مکان ارائه می‌شود.
            </p>
            <div className="sm:hidden rounded-[30px] overflow-hidden mt-10">
              <Image
                className="w-full h-full object-cover"
                src="/image/main/main-services/img.jpg"
                width={1000}
                height={700}
                alt="image"
              />
            </div>
          </div>
          <div className="hidden sm:block sm:col-start-8 sm:col-end-13 sm:row-start-1 sm:row-end-4 rounded-[40px] overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src="/image/main/main-services/img.jpg"
              width={1000}
              height={700}
              alt="image"
            />
          </div>
        </div>

        <div className="relative sm:absolute z-[2] row-start-3 row-end-6 w-full grid grid-cols-1 gap-8 sm:grid-cols-3 sm:grid-rows-2 justify-between content-between px-[20px] sm:px-[50px]">
          <div className="sm:col-start-1 sm:col-span-1 sm:row-start-1 sm:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <FaShopify className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className=" text-[1.3rem] sm:text-subTitle text-navyBlue">
              فروش سیستم های هوشمند
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              آیا می‌خواهید راحتی، امنیت و بهره‌وری را به خانه خود بیاورید؟
              سیستم‌های هوشمند ما طراحی شده‌اند تا زندگی شما را آسان‌تر و
              مدرن‌تر کنند.{" "}
            </p>
          </div>
          <div className=" sm:col-start-2 sm:col-span-1 sm:row-start-1 sm:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <BsFillHouseGearFill className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] sm:text-subTitle text-navyBlue">
              نصب و راه اندازی سیستم های هوشمند
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              راه‌اندازی سیستم‌های هوشمند شاید پیچیده به نظر برسد، اما با خدمات
              حرفه‌ای ما، شما تنها چند قدم با خانه‌ای مدرن و هوشمند فاصله دارید.
              تیم ما از ابتدا تا انتها همراه شماست تا تجربه‌ای بدون دردسر و
              کاملاً مطمئن داشته باشید.{" "}
            </p>
          </div>

          <div className=" sm:col-start-1 sm:col-span-1 sm:row-start-2 sm:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <MdOutlineWifiPassword className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] sm:text-subTitle text-navyBlue">
              برنامه نویسی سیستم های هوشمند
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              خانه هوشمند شما باید دقیقاً مطابق با نیازها و سبک زندگی شما عمل
              کند. به همین دلیل، ما خدمات برنامه‌نویسی سفارشی را ارائه می‌دهیم
              تا عملکرد سیستم‌های هوشمند را به طور کامل شخصی‌سازی کنید.{" "}
            </p>
          </div>
          <div className=" sm:col-start-2 sm:col-span-1 sm:row-start-2 sm:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <RiCustomerService2Fill className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] sm:text-subTitle text-navyBlue">
              خدمات پس از فروش
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              خانه هوشمند تنها با خرید تجهیزات به پایان نمی‌رسد؛ پشتیبانی و
              خدمات پس از فروش حرفه‌ای بخش جدایی‌ناپذیر تجربه‌ای مطمئن و لذت‌بخش
              است. ما در کنار شما هستیم تا از عملکرد بی‌نقص سیستم‌های هوشمند
              خانه‌تان اطمینان حاصل کنید.{" "}
            </p>
          </div>
          <div className=" sm:col-start-3 sm:col-span-1 sm:row-start-2 sm:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <GiOpenBook className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-subTitle text-navyBlue">
              آموزش سیستم های هوشمند
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              خانه هوشمند شما مجهز به تکنولوژی‌های پیشرفته است، اما برای استفاده
              بهینه از امکانات آن، آموزش صحیح ضروری است. ما در کنار شما هستیم تا
              تمامی جنبه‌های استفاده از سیستم‌های هوشمند را به زبانی ساده و
              کاربردی آموزش دهیم.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServicess;
