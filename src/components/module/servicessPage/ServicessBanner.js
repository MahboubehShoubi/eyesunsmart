import Image from "next/image";
import Link from "next/link";


function ServicessBanner() {
  return (
    <div className="w-full h-[40vh] mt-20 sm:mt-40 relative flex justify-center">
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
  );
}

export default ServicessBanner;
