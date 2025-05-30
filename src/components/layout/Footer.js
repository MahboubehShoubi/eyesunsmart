import Image from "next/image";
import Link from "next/link";

import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidLeftArrow } from "react-icons/bi";

function Footer() {
  return (
    <div className="w-full bg-navyBlue h-fit">
      <div className=" container w-full sm:max-w-screen-xl sm:py-12 px-5 py-10">
        <div className="w-full sm:h-[60vh] flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-20">
          <div className="w-full h-full sm:w-1/4 flex flex-col gap-y-5 items-start">
            <Image
              src="/image/logo/logo.png"
              className="w-[120px]"
              width={1000}
              height={700}
              alt="logo"
            />
            <p className="text-textWhite text-justify w-full">
              Sed ut perspiciatis unde omnis iste natus delavirot voluptatem
              accusantium doloremque laudanti totam aperiam inventore veritatis
              congueu. Olutpat elit nec nisi congue tristique eu at velit.
            </p>
          </div>
          <div className="sm:w-3/4 w-full h-full">
            <div className="w-full flex justify-between items-center border-b-2 border-textGray pb-5">
              <div className="w-1/3 flex flex-col sm:flex-row items-center justify-center gap-x-4">
                <div className="text-bgRed text-[1.5rem] sm:text-[2.5rem]">
                  <FaPhone />
                </div>
                <div className=" flex flex-col items-center">
                  <span className="text-bgRed">تلفن</span>
                  <span className="text-textWhite text-[0.8rem] sm:text-[1rem]">
                    09112223333
                  </span>
                  <span className="text-textWhite text-[0.8rem] sm:text-[1rem]">
                    09114445555
                  </span>
                </div>
              </div>
              <div className="w-1/3 flex flex-col sm:flex-row items-center justify-center gap-x-4">
                <div className="text-bgRed text-[1.5rem] sm:text-[2.5rem]">
                  <TfiEmail />
                </div>
                <div className=" flex flex-col items-center">
                  <span className="text-bgRed">ایمیل</span>
                  <span className="text-textWhite text-[0.8rem] sm:text-[1rem]">
                    Email-1@gmail.com
                  </span>
                  <span className="text-textWhite text-[0.8rem] sm:text-[1rem]">
                    Email-1@gmail.com
                  </span>
                </div>
              </div>
              <div className="w-1/3 flex flex-col sm:flex-row items-center justify-center gap-x-4">
                <div className="text-bgRed text-[1.5rem] sm:text-[2.5rem]">
                  <FaMapLocationDot />
                </div>
                <div className=" flex flex-col items-center">
                  <span className="text-bgRed">آدرس</span>
                  <span className="text-textWhite text-[0.8rem] sm:text-[1rem]">
                    ساری - خیابان 15 خرداد
                  </span>
                  <span className="text-textWhite text-[0.8rem] sm:text-[1rem]">
                    سرخرود-خط دریا
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full h-fit flex flex-col justify-between items-center mt-5">
              <div className="w-full hidden sm:block">
                <div className="w-full flex">
                  <p className="w-1/3 text-bgRed text-titleFontSize text-center">
                    دسترسی سریع
                  </p>
                  <p className="text-bgRed text-titleFontSize w-2/3 text-center">
                    آدرس دفتر مرکزی : ساری
                  </p>
                </div>
              </div>
              <div className="w-full sm:h-[220px] flex sm:mt-5 flex-col-reverse sm:flex-row">
                <div className=" w-full h-full sm:w-1/3 flex flex-col justify-center gap-4">
                  <p className="block sm:hidden text-bgRed text-center text-[14px] mt-[25px]">
                    دسترسی سریع
                  </p>
                  <div className="w-full h-full flex sm:flex-col justify-between items-center">
                    <Link
                      href="/"
                      className="text-textWhite text-[9px] sm:text-[14px] hover:text-bgRed w-full flex items-center gap-x-2"
                    >
                      <BiSolidLeftArrow className="text-bgRed" />
                      صفحه اصلی
                    </Link>
                    {/* <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-bgRed w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-bgRed" />
                    محصولات
                  </Link> */}
                    {/* <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-bgRed w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-bgRed" />
                    اموزش
                  </Link> */}
                    <Link
                      href="/services"
                      className="text-textWhite text-[9px] sm:text-[14px] hover:text-bgRed w-full flex items-center gap-x-2"
                    >
                      <BiSolidLeftArrow className="text-bgRed" />
                      خدمات
                    </Link>
                    <Link
                      href="/project"
                      className="text-textWhite text-[9px] sm:text-[14px] hover:text-bgRed w-full flex items-center gap-x-2"
                    >
                      <BiSolidLeftArrow className="text-bgRed" />
                      پروژه ها
                    </Link>
                    <Link
                      href="/about-us"
                      className="text-textWhite text-[9px] sm:text-[14px] hover:text-bgRed w-full flex items-center gap-x-2"
                    >
                      <BiSolidLeftArrow className="text-bgRed" />
                      درباره ما
                    </Link>
                    <Link
                      href="/contact"
                      className="text-textWhite text-[9px] sm:text-[14px] hover:text-bgRed w-full flex items-center gap-x-2"
                    >
                      <BiSolidLeftArrow className="text-bgRed" />
                      ارتباط با ما
                    </Link>
                  </div>
                </div>
                <div className=" w-full sm:w-2/3 h-[150px] sm:h-full flex justify-center">
                  <div className="w-full sm:w-[80%] h-full border-2 border-textWhite">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.5901841900937!2d53.075083931457115!3d36.56064501407739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f853f0047acd169%3A0xb91ff561a272f2c!2z2LTYsdqp2Kog2YHZhiDYp9mI2LHYp9mGINmH2YjYtNmF2YbYryDYs9in2YYgVElT!5e1!3m2!1sfa!2s!4v1731183988895!5m2!1sfa!2s"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-textWhite mt-10 text-[0.8rem] sm:mt-0 sm:text-[1rem]">&copy; طراحی شده توسط M.Shoubi</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
