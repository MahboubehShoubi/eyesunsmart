"use client";

import { useState } from "react";
import Image from "next/image";

import "animate.css";

function MainSettingUp({ main = false }) {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  return (
    <div className="h-fit pt-[100px] sm:pt-[150px] px-5 sm:px-0">
      <div className=" container sm:max-w-screen-xl flex flex-col items-center">
        <div className="w-full flex flex-col items-center px-5 sm:mb-[50px]">
          <div className="flex items-center gap-x-2">
            <span className="w-[25px] sm:w-[50px] h-[2px] bg-bgRed"></span>
            <h2 className=" text-bgRed">راه اندازی دستگاه های هوشمند</h2>
            <span className="w-[25px] sm:w-[50px] h-[2px] bg-bgRed"></span>
          </div>
          <h3 className=" text-mainTitleFontSize sm:text-[3rem] text-center mt-[20px]">
            راه اندازی دستگاه های هوشمند ساده شده است
          </h3>
        </div>
        <div className="relative w-full h-fit flex flex-col sm:flex-row justify-center mt-[50px]">
          <div className="hidden sm:block sm:absolute sm:z-[-1] sm:w-[81%]">
            <Image
              src={`/image/main/road-line.png`}
              width={1000}
              height={700}
              alt="image"
              className="w-full "
            />
          </div>
          <div className=" w-full flex flex-col sm:flex-row justify-between items-center">
            <div
              onMouseOver={() => setShow1(true)}
              onMouseOut={() => setShow1(false)}
              className={`w-[70%] sm:w-[18%] h-[350px] grid grid-rows-7 sm:mt-[30px] cursor-pointer`}
            >
              <div className="row-start-1 row-span-3 w-full flex justify-center items-center ">
                <div className=" relative w-[100px] h-[100px] flex justify-center items-center bg-textWhite rounded-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
                  <span className=" text-bgRed text-[2rem]">01</span>
                  <div className=" absolute bg-bgRed z-[-1] w-full h-full mt-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="row-start-4 row-span-1 ">
                <h4 className="text-[1.2rem] font-semibold text-center">
                  مشاوره و طراحی و ارائه فاکتور
                </h4>
              </div>

              <div className="row-start-5 row-span-3">
                <p
                  className={`font-light text-justify sm:transition-max-height sm:duration-[0.8s] sm:ease-in-out sm:overflow-hidden ${
                    main && show1 ? "max-h-full" : "max-h-0"
                  }`}
                >
                  هر خانه و هر مشتری منحصربه‌فرد است. تیم متخصص ما پس از بررسی
                  نیازها و زیرساخت‌های خانه شما، راهکارهایی متناسب با سبک زندگی
                  و انتظارات شما طراحی می‌کند.
                </p>
                <p
                  className={`font-light text-justify ${
                    !main ? " h-full" : "hidden"
                  }`}
                >
                  هر خانه و هر مشتری منحصربه‌فرد است. تیم متخصص ما پس از بررسی
                  نیازها و زیرساخت‌های خانه شما، راهکارهایی متناسب با سبک زندگی
                  و انتظارات شما طراحی می‌کند.
                </p>
              </div>
            </div>

            <div
              onMouseOver={() => setShow2(true)}
              onMouseOut={() => setShow2(false)}
              className="w-[70%] sm:w-[18%] h-[350px] grid grid-rows-7 sm:mt-[-170px] cursor-pointer"
            >
              <div className="row-start-1 row-span-3 w-full flex justify-center items-center ">
                <div className=" relative w-[100px] h-[100px] flex justify-center items-center bg-textWhite rounded-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
                  <span className=" text-bgRed text-[2rem]">02</span>
                  <div className=" absolute bg-bgRed z-[-1] w-full h-full mt-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="row-start-4 row-span-1 ">
                <h4 className="text-[1.2rem] font-semibold text-center">
                  بازدیدهای مرحله ای از زیرساخت هوشمند
                </h4>
              </div>
              <div className="row-start-5 row-span-3">
                <p
                  className={`font-light text-justify sm:transition-max-height sm:duration-[0.8s] sm:ease-in-out sm:overflow-hidden ${
                    main && show2 ? " max-h-full" : "max-h-0"
                  }`}
                >
                  نصب سیستم‌های هوشمند باید به دقت و با مهارت انجام شود. ما
                  تضمین می‌کنیم تمامی تجهیزات شما با بالاترین کیفیت و به شکلی
                  کاملاً یکپارچه نصب و راه‌اندازی شوند.
                </p>
                <p
                  className={`font-light text-justify ${
                    !main ? " h-full mt-3" : "hidden"
                  }`}
                >
                  نصب سیستم‌های هوشمند باید به دقت و با مهارت انجام شود. ما
                  تضمین می‌کنیم تمامی تجهیزات شما با بالاترین کیفیت و به شکلی
                  کاملاً یکپارچه نصب و راه‌اندازی شوند.
                </p>
              </div>
            </div>

            <div
              onMouseOver={() => setShow3(true)}
              onMouseOut={() => setShow3(false)}
              className={`w-[70%] sm:w-[18%] h-[350px] grid grid-rows-7 sm:mt-[30px] cursor-pointer`}
            >
              <div className="row-start-1 row-span-3 w-full flex justify-center items-center ">
                <div className=" relative w-[100px] h-[100px] flex justify-center items-center bg-textWhite rounded-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
                  <span className=" text-bgRed text-[2rem]">03</span>
                  <div className=" absolute bg-bgRed z-[-1] w-full h-full mt-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="row-start-4 row-span-1 ">
                <h4 className="text-[1.1rem] font-semibold text-center">
                  نصب و راه اندازی و برنامه نویسی حرفه‌ای
                </h4>
              </div>
              <div className="row-start-5 row-span-3">
                <p
                  className={`font-light text-justify sm:transition-max-height sm:duration-[0.8s] sm:ease-in-out sm:overflow-hidden ${
                    main && show3 ? " max-h-full" : "max-h-0"
                  }`}
                >
                  خانه هوشمند شما باید دقیقاً مطابق با نیازهای شما عمل کند. با
                  خدمات برنامه‌نویسی ما، می‌توانید سناریوهای خاص و تنظیمات
                  دلخواه خود را برای تجهیزات هوشمندتان تعریف کنید.
                </p>
                <p
                  className={`font-light text-justify ${
                    !main ? " h-full mt-3" : "hidden"
                  }`}
                >
                  خانه هوشمند شما باید دقیقاً مطابق با نیازهای شما عمل کند. با
                  خدمات برنامه‌نویسی ما، می‌توانید سناریوهای خاص و تنظیمات
                  دلخواه خود را برای تجهیزات هوشمندتان تعریف کنید.
                </p>
              </div>
            </div>

            <div
              onMouseOver={() => setShow4(true)}
              onMouseOut={() => setShow4(false)}
              className="w-[70%] sm:w-[18%] h-[350px] grid grid-rows-7 sm:mt-[-170px] cursor-pointer"
            >
              <div className="row-start-1 row-span-3 w-full flex justify-center items-center ">
                <div className=" relative w-[100px] h-[100px] flex justify-center items-center bg-textWhite rounded-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
                  <span className=" text-bgRed text-[2rem]">04</span>
                  <div className=" absolute bg-bgRed z-[-1] w-full h-full mt-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="row-start-4 row-span-1 ">
                <h4 className="text-[1.2rem] font-semibold text-center">
                  آموزش و پشتیبانی
                </h4>
              </div>
              <div className="row-start-5 row-span-3">
                <p
                  className={`font-light text-justify sm:transition-max-height sm:duration-[0.8s] sm:ease-in-out sm:overflow-hidden ${
                    main && show4 ? " max-h-full" : "max-h-0"
                  }`}
                >
                  فناوری تنها زمانی مفید است که به درستی از آن استفاده شود. ما
                  تمامی آموزش‌های لازم برای بهره‌گیری از امکانات خانه هوشمند را
                  به شما ارائه می‌دهیم و در هر مرحله از استفاده، کنار شما خواهیم
                  بود.
                </p>
                <p
                  className={`font-light text-justify ${
                    !main ? " h-full" : "hidden"
                  }`}
                >
                  فناوری تنها زمانی مفید است که به درستی از آن استفاده شود. ما
                  تمامی آموزش‌های لازم برای بهره‌گیری از امکانات خانه هوشمند را
                  به شما ارائه می‌دهیم و در هر مرحله از استفاده، کنار شما خواهیم
                  بود.
                </p>
              </div>
            </div>

            <div
              onMouseOver={() => setShow5(true)}
              onMouseOut={() => setShow5(false)}
              className={`w-[70%] sm:w-[18%] h-[350px] grid grid-rows-7 sm:mt-[30px] cursor-pointer`}
            >
              <div className="row-start-1 row-span-3 w-full flex justify-center items-center ">
                <div className=" relative w-[100px] h-[100px] flex justify-center items-center bg-textWhite rounded-full shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
                  <span className=" text-bgRed text-[2rem]">05</span>
                  <div className=" absolute bg-bgRed z-[-1] w-full h-full mt-[10px] rounded-full"></div>
                </div>
              </div>
              <div className="row-start-4 row-span-1 ">
                <h4 className="text-[1.2rem] font-semibold text-center">
                  به‌روزرسانی و خدمات پس از فروش
                </h4>
              </div>
              <div className="row-start-5 row-span-3">
                <p
                  className={`font-light text-justify sm:transition-max-height sm:duration-[0.8s] sm:ease-in-out sm:overflow-hidden ${
                    main && show5 ? " max-h-full" : "max-h-0"
                  }`}
                >
                  فناوری هوشمند دائماً در حال پیشرفت است. خدمات ما شامل
                  به‌روزرسانی نرم‌افزارها، ارتقای سیستم‌ها و پشتیبانی 24/7 برای
                  رفع هرگونه مشکل احتمالی است.
                </p>
                <p
                  className={`font-light text-justify ${
                    !main ? " h-full mt-3" : "hidden"
                  }`}
                >
                  فناوری هوشمند دائماً در حال پیشرفت است. خدمات ما شامل
                  به‌روزرسانی نرم‌افزارها، ارتقای سیستم‌ها و پشتیبانی 24/7 برای
                  رفع هرگونه مشکل احتمالی است.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSettingUp;
