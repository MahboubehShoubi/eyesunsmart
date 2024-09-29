"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import Slider from "@/module/Slider";

function HeaderMain() {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log(isShow);
  }, [isShow]);

  return (
    <div className="flex flex-col justify-center items-center h-fit">
      <div className="hidden md:block md:w-full md:h-16 md:bg-orangeColor md:items-center">
        <div className="container md:max-w-screen-xl flex md:justify-between md:items-center h-full">
          <div>
            <p className="text-textWhite">محل قرار گیری تاریخ و ساعت</p>
          </div>
          <div className="flex items-baseline gap-1">
            <RxEnter className="w-[20px] h-[20px] text-textWhite" />
            <FaUserAlt className="w-[25px] h-[25px] text-textWhite" />
          </div>
        </div>
      </div>

      <div className="w-full md:h-[100px] md:max-w-screen-xl">
        <div className="container md:max-w-screen-xl flex justify-between items-center md:h-full">
          <div className="md:hidden w-fit sm:hover:cursor-pointer">
            {isShow ? (
              <RiMenuFold2Fill
                className={
                  isShow
                    ? "text-navyBlue w-[30px] h-[30px] animate__animated animate__fadeIn"
                    : "text-navyBlue w-[30px] h-[30px] animate__animated animate__fadeOut"
                }
                onClick={() => setIsShow(!isShow)}
              />
            ) : (
              <RiMenuUnfold2Fill
                className={
                  isShow
                    ? "text-navyBlue w-[30px] h-[30px] animate__animated animate__fadeOut "
                    : "text-navyBlue w-[30px] h-[30px] animate__animated animate__fadeIn"
                }
                onClick={() => setIsShow(!isShow)}
              />
            )}
          </div>

          <div className="hidden md:block md:w-[60%] md:h-full">
            <ul className=" md:w-full md:h-full md:flex md:items-center md:justify-between">
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem] relative">
                <Link href="/products" className="flex items-center">
                  محصولات <MdKeyboardDoubleArrowDown className=" mr-1 text-secondery" />
                </Link>
                <div className=" absolute w-[200px] h-fit top-[70px] right-[70px] z-[10]">
                  <ul className=" flex flex-col w-full h-full items-center gap-y-2 bg-textWhite">
                    <li>
                      <Link href="/products/tis-air">
                        <Image
                          className="w-[150px]"
                          src="/image/tis-group/air.png"
                          width={1000}
                          height={700}
                          alt="brandImg"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/tis-bee">
                        <Image
                          className="w-[150px]"
                          src="/image/tis-group/bee.png"
                          width={1000}
                          height={700}
                          alt="brandImg"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/tis-bus">
                        <Image
                          className="w-[150px]"
                          src="/image/tis-group/bus.png"
                          width={1000}
                          height={700}
                          alt="brandImg"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/tis-lock">
                        <Image
                          className="w-[150px]"
                          src="/image/tis-group/tis-lock.png"
                          width={1000}
                          height={700}
                          alt="brandImg"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/education">آموزش</Link>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/servicess">خدمات</Link>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/projects">پروژه ها</Link>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/about">درباره ما</Link>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/contact">ارتباط با ما</Link>
              </li>
            </ul>
          </div>
          <div className="w-fit">
            <Link href="/">
              <Image
                className=" w-[80px] md:w-[120px]"
                src="/image/logo/logo.png"
                width={1000}
                height={700}
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className=" w-full h-[50vh] md:h-[80vh] flex md:items-center relative">
        <div
          className={
            isShow
              ? "md:hidden w-[80%] h-full bg-navyBlue absolute z-[2] animate__animated animate__fadeInRight"
              : "md:hidden w-[80%] h-full bg-navyBlue absolute z-[2] animate__animated animate__fadeOutRight"
          }
        >
          <ul className="text-[#fff] w-full h-full flex flex-col items-start justify-between px-8 py-5">
            <li>
              <Link
                className=" inline-block bg-navyBlue"
                href="/"
                onClick={() => isShow(false)}
              >
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block bg-navyBlue"
                href="/products"
                onClick={() => isShow(false)}
              >
                محصولات
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block bg-navyBlue"
                href="/education"
                onClick={() => isShow(false)}
              >
                آموزش
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block bg-navyBlue"
                href="/servicess"
                onClick={() => isShow(false)}
              >
                خدمات
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block bg-navyBlue"
                href="/projects"
                onClick={() => isShow(false)}
              >
                پروژه ها
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block bg-navyBlue"
                href="/about"
                onClick={() => isShow(false)}
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                className=" inline-block bg-navyBlue"
                href="/contact"
                onClick={() => isShow(false)}
              >
                ارتباط با ما
              </Link>
            </li>
          </ul>
        </div>

        <div className="h-full w-full" onClick={() => setIsShow(false)}>
          <Slider
            silderInfo={[
              {
                // title: "تیتر دوم",
                // text: "یک متن کوتاه برای تیتر دوم",
                src: "/image/slider/slider-2.jpg",
                // link: "/project",
              },
              {
                // title: "تیتر سوم",
                // text: "یک متن کوتاه برای تیتر سوم",
                src: "/image/slider/slider-3.jpg",
                // link: "/",
              },
              {
                // title: "تیتر سوم",
                // text: "یک متن کوتاه برای تیتر سوم",
                src: "/image/slider/slider-4.jpg",
                // link: "/",
              },
              {
                // title: "تیتر سوم",
                // text: "یک متن کوتاه برای تیتر سوم",
                src: "/image/slider/slider-5.jpg",
                // link: "/",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
