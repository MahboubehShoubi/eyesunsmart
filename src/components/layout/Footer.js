import Image from "next/image";
import Link from "next/link";

import { FaPhone } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaMapLocationDot } from "react-icons/fa6";
import { BiSolidLeftArrow } from "react-icons/bi";

function Footer() {
  return (
    <div className="w-full bg-navyBlue h-fit">
      <div className=" container w-full md:max-w-screen-xl flex flex-col md:flex-row md:justify-between md:items-center md:py-12 gap-x-10">
        <div className="md:w-1/4 flex flex-col gap-y-5">
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
          <p className="text-textWhite mt-[100px]">
            &copy; طراحی شده توسط M.Shoubi
          </p>
        </div>
        <div className="md:w-3/4">
          <div className="w-full flex justify-between items-center border-b-2 border-textGray pb-5">
            <div className="w-1/3 flex items-center justify-center gap-x-4">
              <div className="text-secondery text-[2.5rem]">
                <FaPhone />
              </div>
              <div className=" flex flex-col items-center">
                <span className="text-secondery">تلفن</span>
                <span className="text-textWhite">09112223333</span>
                <span className="text-textWhite">09114445555</span>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-center gap-x-4">
              <div className="text-secondery text-[2.5rem]">
                <TfiEmail />
              </div>
              <div className=" flex flex-col items-center">
                <span className="text-secondery">ایمیل</span>
                <span className="text-textWhite">Email-1@gmail.com</span>
                <span className="text-textWhite">Email-1@gmail.com</span>
              </div>
            </div>
            <div className="w-1/3 flex items-center justify-center gap-x-4">
              <div className="text-secondery text-[2.5rem]">
                <FaMapLocationDot />
              </div>
              <div className=" flex flex-col items-center">
                <span className="text-secondery">آدرس</span>
                <span className="text-textWhite">ساری-خیابان قارن</span>
                <span className="text-textWhite">سرخرود-خط اول دریا</span>
              </div>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col justify-between items-center mt-5">
            <div className="w-full flex">
              <p className="w-1/3 text-secondery text-titleFontSize text-center">
                دسترسی سریع
              </p>
              <p className="text-secondery text-titleFontSize w-2/3 text-center">
                آدرس دفتر مرکزی : سرخرود
              </p>
            </div>
            <div className="w-full h-[220px] flex mt-5">
              <div className=" w-full h-full md:w-1/3 flex justify-center">
                <div className="w-fit h-full flex flex-col justify-between">
                  <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-secondery w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-secondery" />
                    صفحه اصلی
                  </Link>
                  <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-secondery w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-secondery" />
                    محصولات
                  </Link>
                  <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-secondery w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-secondery" />
                    اموزش
                  </Link>
                  <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-secondery w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-secondery" />
                    خدمات
                  </Link>
                  <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-secondery w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-secondery" />
                    پروژه ها
                  </Link>
                  <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-secondery w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-secondery" />
                    درباره ما
                  </Link>
                  <Link
                    href="/"
                    className="text-textWhite text-[14px] hover:text-secondery w-full flex items-center gap-x-2"
                  >
                    <BiSolidLeftArrow className="text-secondery" />
                    ارتباط با ما
                  </Link>
                </div>
              </div>
              <div className="w-2/3 h-full flex justify-center">
                <div className="w-[80%] h-full border-2 border-textWhite">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2896.043425962957!2d51.4255905!3d36.6689187!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sfa!2s!4v1727380337175!5m2!1sfa!2s"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
