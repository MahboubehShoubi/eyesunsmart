import MainServicess from "@/module/mainpage/MainServicess";
import VideoPlayer from "@/module/VideoPlayer";
import Counter from "@/utils/Counter";

import React from "react";

// Icons
import { IoLocationOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { MdSettingsPhone } from "react-icons/md";
import ServicessBanner from "@/module/servicessPage/ServicessBanner";

function ServicessPage() {
  return (
    <>
      <ServicessBanner />
      <div className="w-full my-20">
        <div className=" container w-full md:max-w-screen-xl">
          <MainServicess />

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 mt-[50px] gap-10 sm:gap-0 px-5">
            <div className="col-span-full row-start-2 row-span-1  sm:col-start-1 sm:col-end-2 sm:row-span-full pl-5 text-justify">
              <div className="flex flex-col gap-y-2">
                <h3 className="text-[1.5rem]">چرا سیستم‌های هوشمند ما؟</h3>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    راحتی در کنترل:
                  </h4>
                  <p className="text-textGray">
                    تمام امکانات خانه را تنها با یک لمس یا فرمان صوتی کنترل کنید
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    امنیت بی‌نظیر:
                  </h4>
                  <p className="text-textGray">
                    نظارت 24/7 بر خانه شما، حتی وقتی دور هستید
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    صرفه‌جویی در انرژی:
                  </h4>
                  <p className="text-textGray">
                    مدیریت هوشمند مصرف انرژی و کاهش هزینه‌ها
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    سازگاری بالا:
                  </h4>
                  <p className="text-textGray">
                    قابلیت اتصال با انواع دستگاه‌ها و تجهیزات موجود در بازار
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-2 mt-5">
                <h3 className="text-[1.5rem]">مراحل نصب و راه‌اندازی : </h3>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    {" "}
                    مشاوره و طراحی :{" "}
                  </h4>
                  <p className="text-textGray">
                    ابتدا نیازهای شما را بررسی کرده و بهترین راه‌حل‌ها را مطابق
                    با سبک زندگی و تجهیزات خانه‌تان پیشنهاد می‌دهیم. طراحی سیستم
                    هوشمند به شکلی انجام می‌شود که تمامی امکانات دلخواه شما پوشش
                    داده شود.
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    نصب توسط متخصصان :
                  </h4>
                  <p className="text-textGray">
                    تیم فنی و مجرب ما، تجهیزات هوشمند را با دقت و سرعت نصب
                    می‌کند. از نصب سنسورها و دوربین‌ها تا راه‌اندازی
                    نرم‌افزارها، همه چیز به صورت حرفه‌ای انجام می‌شود.
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    پیکربندی و آموزش :{" "}
                  </h4>
                  <p className="text-textGray">
                    پس از نصب، تمامی سیستم‌ها بر اساس نیازهای شما تنظیم می‌شوند.
                    همچنین نحوه استفاده از امکانات هوشمند، اپلیکیشن‌ها و
                    دستگاه‌های متصل را به شما آموزش می‌دهیم تا بهترین بهره‌وری
                    را داشته باشید.
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    پشتیبانی و خدمات پس از فروش :
                  </h4>
                  <p className="text-textGray">
                    هر زمان که سوالی داشتید یا نیازی به به‌روزرسانی و تغییر
                    داشتید، تیم پشتیبانی ما در دسترس شماست.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 mt-5">
                <h3 className="text-[1.5rem]">چرا نصب و راه‌اندازی توسط ما؟</h3>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">تجربه بالا :</h4>
                  <p className="text-textGray">
                    بیش از [تعداد سال] سال تجربه در نصب و اجرای پروژه‌های خانه
                    هوشمند.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    تضمین کیفیت :
                  </h4>
                  <p className="text-textGray">
                    استفاده از تجهیزات استاندارد و فناوری‌های روز دنیا.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    پشتیبانی دائمی :
                  </h4>
                  <p className="text-textGray">
                    خدمات 24/7 برای رفع مشکلات یا بهینه‌سازی سیستم‌ها.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    قابلیت سفارشی‌سازی :
                  </h4>
                  <p className="text-textGray">
                    طراحی سیستم هوشمند متناسب با نیازها و سلیقه شما.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-full row-start-1 row-span-1 sm:col-start-2 sm:col-end-3 sm:row-span-full grid grid-cols-2 grid-rows-12 gap-4">
              <div className=" col-start-1 col-end-2 row-start-1 row-end-4 border-4 rounded-[10px]"></div>
              <div className=" col-start-1 col-end-2 row-start-4 row-end-8 border-4 rounded-[10px]"></div>
              <div className=" col-start-1 col-end-2 row-start-8 row-end-13 border-4 rounded-[10px]"></div>
              <div className=" col-start-2 col-end-3 row-start-1 row-end-6 border-4 rounded-[10px]"></div>
              <div className=" col-start-2 col-end-3 row-start-6 row-end-9 border-4 rounded-[10px]"></div>
              <div className=" col-start-2 col-end-3 row-start-9 row-end-13 border-4 rounded-[10px]"></div>
            </div>
          </div>

          <div className="w-full h-[500px] mt-10 flex justify-center">
            <VideoPlayer
              width={1200}
              height={500}
              src="/video/TIS-Automation-Technology.mp4"
            />
          </div>

          <div className="w-full grid grid-cols-2 grid-rows-1 mt-[50px]">
            <div className="col-start-1 col-end-2 row-span-full grid grid-cols-2 grid-rows-12 gap-4">
              <div className=" col-start-1 col-end-2 row-start-1 row-end-4 border-4 rounded-[10px]"></div>
              <div className=" col-start-1 col-end-2 row-start-4 row-end-8 border-4 rounded-[10px]"></div>
              <div className=" col-start-1 col-end-2 row-start-8 row-end-13 border-4 rounded-[10px]"></div>
              <div className=" col-start-2 col-end-3 row-start-1 row-end-6 border-4 rounded-[10px]"></div>
              <div className=" col-start-2 col-end-3 row-start-6 row-end-9 border-4 rounded-[10px]"></div>
              <div className=" col-start-2 col-end-3 row-start-9 row-end-13 border-4 rounded-[10px]"></div>
            </div>

            <div className="col-start-2 col-end-3 row-span-full pr-5 text-justify">
              <div className="flex flex-col gap-y-2">
                <h3 className="text-[1.5rem]">چرا سیستم‌های هوشمند ما؟</h3>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    راحتی در کنترل:
                  </h4>
                  <p className="text-textGray">
                    تمام امکانات خانه را تنها با یک لمس یا فرمان صوتی کنترل کنید
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    امنیت بی‌نظیر:
                  </h4>
                  <p className="text-textGray">
                    نظارت 24/7 بر خانه شما، حتی وقتی دور هستید
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    صرفه‌جویی در انرژی:
                  </h4>
                  <p className="text-textGray">
                    مدیریت هوشمند مصرف انرژی و کاهش هزینه‌ها
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    سازگاری بالا:
                  </h4>
                  <p className="text-textGray">
                    قابلیت اتصال با انواع دستگاه‌ها و تجهیزات موجود در بازار
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-y-2 mt-5">
                <h3 className="text-[1.5rem]">مراحل نصب و راه‌اندازی : </h3>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    {" "}
                    مشاوره و طراحی :{" "}
                  </h4>
                  <p className="text-textGray">
                    ابتدا نیازهای شما را بررسی کرده و بهترین راه‌حل‌ها را مطابق
                    با سبک زندگی و تجهیزات خانه‌تان پیشنهاد می‌دهیم. طراحی سیستم
                    هوشمند به شکلی انجام می‌شود که تمامی امکانات دلخواه شما پوشش
                    داده شود.
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    نصب توسط متخصصان :
                  </h4>
                  <p className="text-textGray">
                    تیم فنی و مجرب ما، تجهیزات هوشمند را با دقت و سرعت نصب
                    می‌کند. از نصب سنسورها و دوربین‌ها تا راه‌اندازی
                    نرم‌افزارها، همه چیز به صورت حرفه‌ای انجام می‌شود.
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    پیکربندی و آموزش :{" "}
                  </h4>
                  <p className="text-textGray">
                    پس از نصب، تمامی سیستم‌ها بر اساس نیازهای شما تنظیم می‌شوند.
                    همچنین نحوه استفاده از امکانات هوشمند، اپلیکیشن‌ها و
                    دستگاه‌های متصل را به شما آموزش می‌دهیم تا بهترین بهره‌وری
                    را داشته باشید.
                  </p>
                </div>

                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    پشتیبانی و خدمات پس از فروش :
                  </h4>
                  <p className="text-textGray">
                    هر زمان که سوالی داشتید یا نیازی به به‌روزرسانی و تغییر
                    داشتید، تیم پشتیبانی ما در دسترس شماست.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 mt-5">
                <h3 className="text-[1.5rem]">چرا نصب و راه‌اندازی توسط ما؟</h3>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">تجربه بالا :</h4>
                  <p className="text-textGray">
                    بیش از [تعداد سال] سال تجربه در نصب و اجرای پروژه‌های خانه
                    هوشمند.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    تضمین کیفیت :
                  </h4>
                  <p className="text-textGray">
                    استفاده از تجهیزات استاندارد و فناوری‌های روز دنیا.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    پشتیبانی دائمی :
                  </h4>
                  <p className="text-textGray">
                    خدمات 24/7 برای رفع مشکلات یا بهینه‌سازی سیستم‌ها.
                  </p>
                </div>
                <div>
                  <h4 className="text-secondery text-[1.2rem]">
                    قابلیت سفارشی‌سازی :
                  </h4>
                  <p className="text-textGray">
                    طراحی سیستم هوشمند متناسب با نیازها و سلیقه شما.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[40vh] bg-secondery mb-[50px]">
        <div className=" container w-full md:max-w-screen-xl h-full">
          <div className="w-full flex justify-between items-center h-full">
            <div className="w-1/3 h-[150px] flex flex-col justify-center items-center">
              <p className="text-textWhite text-[1.2rem]">پروژه های تمام شده</p>
              <p className="text-textWhite text-[2rem] h-[2rem]">
                <Counter max={100} time={100} />
              </p>
            </div>
            <div className="w-1/3 h-[150px] flex flex-col justify-center items-center">
              <p className="text-textWhite text-[1.2rem]">
                پروژه های در حال اجرا
              </p>
              <p className="text-textWhite text-[2rem] h-[2rem]">
                <Counter max={200} time={60} />
              </p>
            </div>
            <div className="w-1/3 h-[150px] flex flex-col justify-center items-center">
              <p className="text-textWhite text-[1.2rem]">
                پروژه های در حال بررسی
              </p>
              <p className="text-textWhite text-[2rem] h-[2rem]">
                <Counter max={300} time={40} />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] mb-[50px]">
        <div className=" container w-full md:max-w-screen-xl h-full flex justify-between items-center gap-5">
          <div className="w-1/3 h-[35vh] flex flex-col justify-center items-center shadow-2xl rounded-[10px]">
            <MdSettingsPhone className=" bg-bgRed text-textWhite p-2 w-[70px] h-[70px] rounded-[10px]" />
            <p className="text-[1.3rem] mt-[10px]">تماس با ما</p>
            <p className="text-textGray mt-[20px]">09112223333</p>
            <p className="text-textGray">09214445555</p>
          </div>
          <div className="w-1/3 h-[35vh] flex flex-col justify-center items-center shadow-2xl rounded-[10px]">
            <IoLocationOutline className=" bg-bgRed text-textWhite p-2 w-[70px] h-[70px] rounded-[10px]" />
            <p className="text-[1.3rem] mt-[10px]"> آدرس </p>
            <p className="text-textGray mt-[20px]">ساری خیابان 15 خرداد</p>
            <p className="text-textGray">سرخرود - خط دریا</p>
          </div>
          <div className="w-1/3 h-[35vh] flex flex-col justify-center items-center shadow-2xl rounded-[10px]">
            <BsClockHistory className=" bg-bgRed text-textWhite p-2 w-[70px] h-[70px] rounded-[10px]" />
            <p className="text-[1.3rem] mt-[10px]"> ساعت کاری </p>
            <p className="text-textGray mt-[20px]">
              شنبه – چهارشنبه: 17:30 تا 07:30
            </p>
            <p className="text-textGray">
              پـــنــجــــشـــنــبــه: 14:30 تا 07:30
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicessPage;
