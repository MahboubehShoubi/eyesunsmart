function MainSettingUp() {
  return (
    <div className="h-fit py-36">
      <div className=" container md:max-w-screen-xl flex flex-col items-center">
        <div className="w-full flex flex-col items-center px-5">
          <div className="flex items-center gap-x-2">
            <span className="w-[50px] h-[2px] bg-bgRed"></span>
            <h2 className=" text-bgRed">راه اندازی دستگاه های هوشمند</h2>
            <span className="w-[50px] h-[2px] bg-bgRed"></span>
          </div>
          <h3 className=" text-mainTitleFontSize md:text-[3rem]">
            راه اندازی دستگاه های هوشمند ساده شده است
          </h3>
        </div>
        <div className="relative w-full h-fit mt-10 flex justify-center">
          <div className=" hidden md:block md:absolute md:z-[-1] md:w-[80%] md:h-10 md:border-b-4 md:border-dotted md:border-indigo-600"></div>
          <div className="w-full flex flex-col gap-y-11 md:flex-row justify-between items-center">
            <div className="w-[70%] md:w-[19%] flex flex-col items-center gap-y-5 md:gap-y-8">
              <div className=" w-[70px] h-[70px] flex justify-center items-center bg-bgRed rounded-full outline outline-offset-2 outline-4 outline-bgRed">
                <span className="bg-bgRed text-textWhite text-[2rem]">01</span>
              </div>
              <div className="text-center">
                <h4 className="text-[1.2rem] font-semibold">
                  مشاوره و طراحی سفارشی{" "}
                </h4>
                <p className="mt-3 font-light">
                  هر خانه و هر مشتری منحصربه‌فرد است. تیم متخصص ما پس از بررسی
                  نیازها و زیرساخت‌های خانه شما، راهکارهایی متناسب با سبک زندگی
                  و انتظارات شما طراحی می‌کند.{" "}
                </p>
              </div>
            </div>

            <div className="w-[70%] md:w-[19%] flex flex-col items-center gap-y-5 md:gap-y-8">
              <div className=" w-[70px] h-[70px] flex justify-center items-center bg-bgRed rounded-full outline outline-offset-2 outline-4 outline-bgRed">
                <span className="bg-bgRed text-textWhite text-[2rem]">02</span>
              </div>
              <div className="text-center">
                <h4 className="text-[1.2rem] font-semibold">
                  نصب و راه‌اندازی حرفه‌ای{" "}
                </h4>
                <p className="mt-3 font-light">
                  نصب سیستم‌های هوشمند باید به دقت و با مهارت انجام شود. ما
                  تضمین می‌کنیم تمامی تجهیزات شما با بالاترین کیفیت و به شکلی
                  کاملاً یکپارچه نصب و راه‌اندازی شوند.{" "}
                </p>
              </div>
            </div>

            <div className="w-[70%] md:w-[19%] flex flex-col items-center gap-y-5 md:gap-y-8">
              <div className=" w-[70px] h-[70px] flex justify-center items-center bg-bgRed rounded-full outline outline-offset-2 outline-4 outline-bgRed">
                <span className="bg-bgRed text-textWhite text-[2rem]">03</span>
              </div>
              <div className="text-center">
                <h4 className="text-[1.1rem] font-semibold">
                  برنامه‌نویسی و شخصی‌سازی{" "}
                </h4>
                <p className="mt-3 font-light">
                  خانه هوشمند شما باید دقیقاً مطابق با نیازهای شما عمل کند. با
                  خدمات برنامه‌نویسی ما، می‌توانید سناریوهای خاص و تنظیمات
                  دلخواه خود را برای تجهیزات هوشمندتان تعریف کنید.{" "}
                </p>
              </div>
            </div>

            <div className="w-[70%] md:w-[19%] flex flex-col items-center gap-y-5 md:gap-y-8">
              <div className=" w-[70px] h-[70px] flex justify-center items-center bg-bgRed rounded-full outline outline-offset-2 outline-4 outline-bgRed">
                <span className="bg-bgRed text-textWhite text-[2rem]">04</span>
              </div>
              <div className="text-center">
                <h4 className="text-[1.2rem] font-semibold">
                  آموزش و پشتیبانی
                </h4>
                <p className="mt-3 font-light">
                  فناوری تنها زمانی مفید است که به درستی از آن استفاده شود. ما
                  تمامی آموزش‌های لازم برای بهره‌گیری از امکانات خانه هوشمند را
                  به شما ارائه می‌دهیم و در هر مرحله از استفاده، کنار شما خواهیم
                  بود.{" "}
                </p>
              </div>
            </div>
            <div className="w-[70%] md:w-[19%] flex flex-col items-center gap-y-5 md:gap-y-8">
              <div className=" w-[70px] h-[70px] flex justify-center items-center bg-bgRed rounded-full outline outline-offset-2 outline-4 outline-bgRed">
                <span className="bg-bgRed text-textWhite text-[2rem]">05</span>
              </div>
              <div className="text-center">
                <h4 className="text-[1.2rem] font-semibold">
                  به‌روزرسانی و خدمات پس از فروش
                </h4>
                <p className="mt-3 font-light">
                  فناوری هوشمند دائماً در حال پیشرفت است. خدمات ما شامل
                  به‌روزرسانی نرم‌افزارها، ارتقای سیستم‌ها و پشتیبانی 24/7 برای
                  رفع هرگونه مشکل احتمالی است.{" "}
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
