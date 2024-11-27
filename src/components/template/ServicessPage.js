import MainServicess from "@/module/mainpage/MainServicess";
import VideoPlayer from "@/module/VideoPlayer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServicessPage() {
  return (
    <>
      <div className="w-full h-[40vh] relative flex justify-center">
        <Image
          src="/image/servicess-page/background.jpg"
          className=" absolute w-full h-full object-cover brightness-50"
          width={1000}
          height={700}
          alt="background"
        />
        <div className=" absolute z-[2] container w-full h-full md:max-w-screen-xl flex flex-col justify-center">
          <p className="w-fit text-textWhite  text-[3rem]">جزئیات خدمات</p>
          <p className="text-textWhite flex gap-2">
            <Link href="/" className="text-yellowTisBee">
              صفحه اصلی
            </Link>
            <span>-</span>
            <span>جزئیات خدمات</span>
          </p>
        </div>
      </div>
      <div className="w-full my-20">
        <div className=" container w-full md:max-w-screen-xl">
          <MainServicess />

          <div className="w-full grid grid-cols-2 grid-rows-1 mt-[50px]">
            <div className="col-start-1 col-end-2 row-span-full pl-5 text-justify">
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
            <div className="col-start-2 col-end-3 row-span-full grid grid-cols-2 grid-rows-12 border-4"></div>
          </div>

          <div className="w-full h-[500px] mt-10 flex justify-center">
            <VideoPlayer width={1200} height={500} src="/video/TIS-Automation-Technology.mp4" />
          </div>

          <div className="w-full grid grid-cols-2 grid-rows-1 mt-[50px]">
            <div className="col-start-1 col-end-2 row-span-full grid grid-cols-2 grid-rows-12 border-4"></div>

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
            <p className="text-textWhite text-[2rem]">100</p>
            <p className="text-textWhite text-[2rem]">200</p>
            <p className="text-textWhite text-[2rem]">300</p>
            <p className="text-textWhite text-[2rem]">400</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicessPage;

{
  /* <div className=" w-full h-[500px] flex border-2">
            <div className="w-2/3 h-full"></div>
            <div className="w-1/3 h-full bg-secondery">
              <Image src="" width={1000} height={700} alt="img" />
            </div>
          </div> */
}
{
  /* <div className="w-full h-screen mt-10 grid grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-5">
            <div className="  border-2 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2">
              <div className="w-full h-1/3  bg-secondery">
                <Image src="" width={1000} height={700} alt="img" />
              </div>
            </div>
            <div className=" md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 grid grid-cols-1  md:grid-rows-2 gap-5">
              <div className=" col-start-1 col-end-2 md:row-start-1 md:row-end-2 border-2">
                <div className="w-full h-1/3 bg-secondery">
                  <Image src="" width={1000} height={700} alt="img" />
                </div>
              </div>
              <div className=" col-start-1 col-end-2 md:row-start-2 md:row-end-3 border-2">
                <div className="w-full h-1/3 bg-secondery">
                  <Image src="" width={1000} height={700} alt="img" />
                </div>
              </div>
            </div>
          </div> */
}
{
  /* <div className=" w-full h-[500px] flex border-2 mt-10">
            <div className="w-2/3 h-full"></div>
            <div className="w-1/3 h-full bg-secondery">
              <Image src="" width={1000} height={700} alt="img" />
            </div>
          </div> */
}
