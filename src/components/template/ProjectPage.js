"use client";

import CardProject from "@/module/CardProject";
import Image from "next/image";

function ProjectPage({ projectsData }) {
  return (
    <>
      <div className="w-full sm:h-[60vh] flex justify-center mt-20 sm:mt-40">
        <Image
          src="/image/project/header-background/Page1_2.jpg"
          className="w-full h-full"
          width={1000}
          height={700}
          alt="background-image"
        />
      </div>

      <div className="container w-full sm:max-w-screen-xl my-[50px] px-5">
        <div>
          <div className="w-full flex justify-center items-center gap-x-3">
            <span className=" w-[25px] sm:w-[50px] h-[2px] bg-bgRed"></span>
            <h1 className="text-[1.2rem] sm:text-[2rem] w-fit ">
              پروژه‌های خانه هوشمند
            </h1>
            <span className=" w-[25px] sm:w-[50px] h-[2px] bg-bgRed"></span>
          </div>
          <p className="mt-10 text-textGray text-justify">
            در بخش پروژه‌های ما، شما می‌توانید نمونه‌های موفق و نوآورانه از
            سیستم‌های خانه هوشمند را که توسط تیم متخصص ما طراحی و اجرا شده‌اند،
            مشاهده کنید. هر پروژه نشان‌دهنده تعهد ما به ارائه راه‌حل‌های پیشرفته
            و سفارشی برای بهبود کیفیت زندگی و افزایش کارایی انرژی است.
          </p>
          <h3 className="text-grayTisBee mt-5 sm:text-[1.5rem]">
            برخی از پروژه‌های برجسته ما عبارتند از:
          </h3>
          <p className=" text-textGray text-justify">
            <span className="text-bgRed">ویلای هوشمند :</span>
            یک سیستم یکپارچه برای کنترل روشنایی، دما، امنیت و سرگرمی با قابلیت
            کنترل از راه دور.
          </p>
          <p className=" text-textGray text-justify">
            <span className="text-bgRed">آپارتمان شهری مدرن:</span>
            اتوماسیون پیشرفته برای بهینه‌سازی مصرف انرژی و افزایش راحتی ساکنان
          </p>
          <p className="text-textGray mt-5 text-justify">
            هر پروژه با جزئیات کامل، شامل چالش‌های خاص، راه‌حل‌های ارائه شده و
            نتایج حاصل، معرفی شده است. ما به نوآوری مداوم و استفاده از آخرین
            فناوری‌ها برای ارائه بهترین تجربه خانه هوشمند به مشتریان خود افتخار
            می‌کنیم.
          </p>
          <p className=" mt-5 text-justify">
            برای کسب اطلاعات بیشتر درباره هر پروژه یا مشاوره درباره چگونگی
            هوشمندسازی خانه یا محل کار خود، با ما تماس بگیرید.
          </p>
        </div>
        <div className="w-full flex sm:gap-x-5 sm:gap-y-10 flex-wrap justify-center items-center sm:justify-start gap-y-10 mt-16">
          {projectsData.map((project) => (
            <CardProject data={project} key={project.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectPage;
