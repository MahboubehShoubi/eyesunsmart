"use client";

import Image from "next/image";
import React from "react";

// icons

import { RiCustomerService2Fill } from "react-icons/ri";
import { BsFillHouseGearFill } from "react-icons/bs";
import { FaShopify } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineWifiPassword } from "react-icons/md";





function MainServicess() {
  return (
    <div className=" relative w-full mt-[50px] md:mt-[100px] h-fit">
      <div className=" container md:max-w-screen-xl relative md:h-[150vh] grid md:grid-rows-5">
        <div className="w-full md:row-start-1 md:row-end-6 grid grid-cols-1 md:grid-cols-12 md:grid-rows-[7vh_60vh_50vh_33vh] ">
          <div className=" md:col-start-1 md:col-end-8 md:row-start-2 md:row-end-3 rounded-[60px] md:rounded-l-[0] bg-bgRed p-[40px]">
            <span className="text-textWhite text-[1.1rem] md:text-titleFontSize border-b-2">
              خدمات ما
            </span>
            <h2 className=" text-[1.5rem] md:text-mainTitleFontSize text-textWhite mt-5">
              خدمات خانه هوشمند
            </h2>
            <h2 className=" text-[1.5rem] md:text-mainTitleFontSize text-textWhite">
              تجربه زندگی مدرن و هوشمند
            </h2>
            <p className="text-[13px] md:text-[1rem] text-textWhite mt-5 text-justify">
              خانه شما شایسته بهترین‌هاست! خدمات خانه هوشمند ما طراحی شده‌اند تا
              آسایش، امنیت و بهره‌وری را به زندگی شما بیاورند. از طراحی و نصب
              گرفته تا پشتیبانی و آموزش، تمامی نیازهای شما برای داشتن یک خانه
              هوشمند در یک مکان ارائه می‌شود.
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
          <div className="md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <FaShopify className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className=" text-[1.3rem] md:text-subTitle text-navyBlue">
              فروش سیستم های هوشمند
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              آیا می‌خواهید راحتی، امنیت و بهره‌وری را به خانه خود بیاورید؟
              سیستم‌های هوشمند ما طراحی شده‌اند تا زندگی شما را آسان‌تر و
              مدرن‌تر کنند.{" "}
            </p>
          </div>
          <div className=" md:col-start-2 md:col-span-1 md:row-start-1 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <BsFillHouseGearFill className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] md:text-subTitle text-navyBlue">
              نصب و راه اندازی سیستم های هوشمند
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              راه‌اندازی سیستم‌های هوشمند شاید پیچیده به نظر برسد، اما با خدمات
              حرفه‌ای ما، شما تنها چند قدم با خانه‌ای مدرن و هوشمند فاصله دارید.
              تیم ما از ابتدا تا انتها همراه شماست تا تجربه‌ای بدون دردسر و
              کاملاً مطمئن داشته باشید.{" "}
            </p>
          </div>

          <div className=" md:col-start-1 md:col-span-1 md:row-start-2 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <MdOutlineWifiPassword  className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] md:text-subTitle text-navyBlue">
              برنامه نویسی سیستم های هوشمند
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              خانه هوشمند شما باید دقیقاً مطابق با نیازها و سبک زندگی شما عمل
              کند. به همین دلیل، ما خدمات برنامه‌نویسی سفارشی را ارائه می‌دهیم
              تا عملکرد سیستم‌های هوشمند را به طور کامل شخصی‌سازی کنید.{" "}
            </p>
          </div>
          <div className=" md:col-start-2 md:col-span-1 md:row-start-2 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
            <RiCustomerService2Fill className="w-[55px] h-[55px] bg-navyBlue text-textWhite p-2 rounded-full hover:bg-secondery cursor-pointer" />
            <h3 className="text-[1.3rem] md:text-subTitle text-navyBlue">
              خدمات پس از فروش
            </h3>
            <p className="text-textGray text-[14px] text-justify">
              خانه هوشمند تنها با خرید تجهیزات به پایان نمی‌رسد؛ پشتیبانی و
              خدمات پس از فروش حرفه‌ای بخش جدایی‌ناپذیر تجربه‌ای مطمئن و لذت‌بخش
              است. ما در کنار شما هستیم تا از عملکرد بی‌نقص سیستم‌های هوشمند
              خانه‌تان اطمینان حاصل کنید.{" "}
            </p>
          </div>
          <div className=" md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1 bg-backgroundWhite rounded-3xl px-[30px] py-[30px] hover:shadow-lg">
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
