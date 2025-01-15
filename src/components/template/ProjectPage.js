"use client";

import CardProject from "@/module/CardProject";
import Image from "next/image";

function ProjectPage({ projectsData }) {
  return (
    <>
      <div className="w-full md:h-[60vh] flex justify-center">
        <Image
          // src="/image/project/header-background/mazandaran.jpg"
          // src="/image/project/header-background/mazandaran1.jpg"
          src="/image/project/header-background/Page1_2.jpg"
          // src="/image/project/header-background/Page3_2.jpg"
          className="w-full h-full"
          width={1000}
          height={700}
          alt="background-image"
        />
      </div>

      <div className="container w-full md:max-w-screen-xl mt-[50px]">
        <div className="w-full flex justify-center items-center gap-x-3">
          <span className="w-[50px] h-[2px] bg-bgRed"></span>
          <h1 className="text-[1.2rem] md:text-[2rem] w-fit ">
            پروژه‌های خانه هوشمند
          </h1>
          <span className="w-[50px] h-[2px] bg-bgRed"></span>
        </div>
        <p className="mt-10 text-textGray">
          در بخش پروژه‌های ما، شما می‌توانید نمونه‌های موفق و نوآورانه از
          سیستم‌های خانه هوشمند را که توسط تیم متخصص ما طراحی و اجرا شده‌اند،
          مشاهده کنید. هر پروژه نشان‌دهنده تعهد ما به ارائه راه‌حل‌های پیشرفته و
          سفارشی برای بهبود کیفیت زندگی و افزایش کارایی انرژی است.
        </p>
        <h3 className="text-grayTisBee mt-5 md:text-[1.5rem]">
          برخی از پروژه‌های برجسته ما عبارتند از:
        </h3>
        <p className=" text-textGray">
          <span className="text-bgRed">ویلای هوشمند :</span>
          یک سیستم یکپارچه برای کنترل روشنایی، دما، امنیت و سرگرمی با قابلیت
          کنترل از راه دور.
        </p>
        <p className=" text-textGray">
          <span className="text-bgRed">آپارتمان شهری مدرن:</span>
          اتوماسیون پیشرفته برای بهینه‌سازی مصرف انرژی و افزایش راحتی ساکنان
        </p>
        <p className="text-textGray mt-5">
          هر پروژه با جزئیات کامل، شامل چالش‌های خاص، راه‌حل‌های ارائه شده و
          نتایج حاصل، معرفی شده است. ما به نوآوری مداوم و استفاده از آخرین
          فناوری‌ها برای ارائه بهترین تجربه خانه هوشمند به مشتریان خود افتخار
          می‌کنیم.
        </p>
        <p className=" mt-5">
          برای کسب اطلاعات بیشتر درباره هر پروژه یا مشاوره درباره چگونگی
          هوشمندسازی خانه یا محل کار خود، با ما تماس بگیرید.
        </p>
      </div>
      <div className="container w-full md:max-w-screen-xl flex gap-x-5 gap-y-10  my-10 flex-wrap mt-[100px]">
        {projectsData.map((project) => (
          // <div key={project.id} className="border-t-4 py-10">
          //   <div className="w-full h-fit">
              <CardProject data={project} key={project.id} />
          //   </div>
          // </div>
        ))}
      </div>
    </>
  );
}

export default ProjectPage;
