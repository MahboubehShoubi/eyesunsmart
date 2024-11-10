"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import SignInUpPage from "@/module/SignUserPage";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

import Slider from "@/module/Slider";
import { My_Day } from "@/utils/ShowDay";

import "animate.css";

function HeaderMain() {
  const [isShow, setIsShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const { data } = useSession();

  return (
    <div className="relative w-full h-fit">
      {/*--------------------------------- باکس ورود و ثبت نام کاربر ---------------------------------*/}
      {showSignup && (
        <div className="w-full h-full flex justify-center items-center absolute z-[100]">
          <SignInUpPage showSignup={showSignup} setShowSignup={setShowSignup} />
        </div>
      )}

      {/*----------------------------------- قسمت هدر سایت ---------------------------------------*/}
      <div className="hidden md:block md:w-full md:h-16 md:bg-bgRed md:items-center">
        <div className="container md:max-w-screen-xl flex md:justify-between md:items-center h-full">
          <div className="w-fit flex gap-x-2">
            <span className="text-textWhite text-[14px]">{My_Day} :</span>
            <span className="text-textWhite text-[14px]">
              {new Date().toLocaleDateString("fa-IR")}
            </span>
          </div>
          <div>
            {data ? (
              <div className="flex items-center gap-x-2">
                <div className="flex flex-col">
                  <span className="text-textWhite">خوش آمدید</span>
                  <span className="text-textWhite text-[14px]">
                    {data.user.email}
                  </span>
                </div>
                <Link
                  href="/dashboard"
                  className="flex items-baseline gap-1 cursor-pointer bg-textWhite p-2 rounded-full"
                >
                  <FaUserAlt className="w-[25px] h-[25px] text-secondery" />
                </Link>
              </div>
            ) : (
              <button
                className="flex items-baseline gap-1 cursor-pointer"
                onClick={(e) => setShowSignup(true)}
              >
                <RxEnter className="w-[20px] h-[20px] text-textWhite" />
                <FaUserAlt className="w-[25px] h-[25px] text-textWhite" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* --------------------------باکس منو و لوگو --------------------------------*/}
      <div className="w-full md:h-[100px] bg-navyBlue md:bg-textWhite">
        <div className="container md:max-w-screen-xl flex justify-between items-center md:h-full px-5 py-2 md:px-0 md:py-0">
          {/* ---------------------------همبرگر منو -------------------------------------*/}
          <div className="md:hidden w-fit sm:hover:cursor-pointer">
            {isShow ? (
              <RiMenuFold2Fill
                className={
                  isShow
                    ? "text-textWhite w-[30px] h-[30px] animate__animated animate__fadeIn"
                    : "text-textWhite w-[30px] h-[30px] animate__animated animate__fadeOut"
                }
                onClick={() => setIsShow(!isShow)}
              />
            ) : (
              <RiMenuUnfold2Fill
                className={
                  isShow
                    ? "text-textWhite w-[30px] h-[30px] animate__animated animate__fadeOut "
                    : "text-textWhite w-[30px] h-[30px] animate__animated animate__fadeIn"
                }
                onClick={() => setIsShow(!isShow)}
              />
            )}
          </div>

          {/*---------------------------------- منو در حالت دسکتاپ -----------------------------------*/}
          <div className="hidden md:block md:w-[60%] md:h-full">
            <ul className=" md:w-full md:h-full md:flex md:items-start md:justify-between">
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/">صفحه اصلی</Link>
              </li>
              <li
                onMouseEnter={() => setSubMenu(true)}
                onMouseLeave={() => setSubMenu(false)}
                onMouseDown={() => setSubMenu(true)}
                className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem] relative cursor-pointer"
              >
                محصولات
                <MdKeyboardDoubleArrowDown className=" mr-1 text-secondery" />
                <ul
                  className={
                    subMenu
                      ? "absolute w-[1250px] h-fit top-[65px] right-[-100px] z-[10] flex items-center justify-between bg-textWhite py-10 px-6 shadow-2xl"
                      : " hidden"
                  }
                  onMouseEnter={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}
                >
                  <li>
                    <Link href="/products/tis-bus">
                      <Image
                        className="w-[200px] h-[110px]"
                        src="/image/tis-group/bus.png"
                        width={1000}
                        height={700}
                        alt="brandImg"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/tis-air">
                      <Image
                        className="w-[200px] h-[110px]"
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
                        className="w-[200px] h-[110px]"
                        src="/image/tis-group/bee.png"
                        width={1000}
                        height={700}
                        alt="brandImg"
                      />
                    </Link>
                  </li>

                  <li>
                    <Link href="/products/tis-lock">
                      <Image
                        className="w-[200px] h-[110px]"
                        src="/image/tis-group/tis-lock.png"
                        width={1000}
                        height={700}
                        alt="brandImg"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/other">
                      <Image
                        className="w-[150px] h-[55px]"
                        src="/image/tis-group/other.png"
                        width={1000}
                        height={700}
                        alt="brandImg"
                      />
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/education">آموزش</Link>
              </li> */}
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/servicess">خدمات</Link>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/project">پروژه ها</Link>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/about">درباره ما</Link>
              </li>
              <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                <Link href="/contact">ارتباط با ما</Link>
              </li>
            </ul>
          </div>

          <div className="w-fit flex items-center">
            {/* ----------------------------- ورود کاربر در حالت موبایل -------------------------------------*/}
            <div className=" md:hidden w-fit ml-5">
              {data ? (
                <div className="flex items-center gap-x-2">
                  {/* <div className="flex flex-col items-end">
                  <span className="text-bgRed text-[12px]">خوش آمدید</span>
                  <span className="text-bgRed text-[10px]">
                    {data.user.email}
                  </span>
                </div> */}
                  <Link
                    href="/dashboard"
                    className="flex items-baseline gap-1 cursor-pointer bg-textWhite p-2 rounded-full"
                  >
                    <FaUserAlt className="w-[15px] h-[15px] text-bgRed" />
                  </Link>
                </div>
              ) : (
                <button
                  className="flex items-baseline gap-1 cursor-pointer"
                  onClick={(e) => setShowSignup(true)}
                >
                  <RxEnter className="w-[20px] h-[20px] text-textWhite" />
                  <FaUserAlt className="w-[25px] h-[25px] text-textWhite" />
                </button>
              )}
            </div>
            {/*------------------------------ لوگوی سایت ----------------------------------*/}
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
      </div>

      {/* ----------------------------------- باکس زیر منو در حالت موبایل و باکس اسلایدر -------------------------------------*/}
      <div className=" w-full md:h-[80vh] flex md:items-center relative">
        {/*---------------------------------------- منو در حالت موبایل ----------------------------------------------*/}
        <div className="md:hidden">
          <div
            className={
              isShow
                ? "w-[80%] h-screen bg-navyBlue absolute z-[2] animate__animated animate__fadeInRight"
                : "w-[80%] h-screen bg-navyBlue absolute z-[2] animate__animated animate__fadeOutRight"
            }
          >
            <ul className="text-[#fff] w-full h-full flex flex-col items-start gap-y-5 px-8 py-5">
              <li className="w-full">
                <Link
                  className=" inline-block bg-navyBlue"
                  href="/"
                  onClick={() => isShow(false)}
                >
                  صفحه اصلی
                </Link>
              </li>
              <li className="w-full hover:text-secondery text-[1.2rem] relative">
                <span
                  className="flex items-center"
                  onMouseEnter={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}
                  onClick={() => setSubMenu(!subMenu)}
                >
                  محصولات
                  <MdKeyboardDoubleArrowDown className=" mr-1 text-secondery" />
                </span>
                <ul
                  className={
                    subMenu
                      ? "absolute w-[85%] h-[50vh] top-[30px] right-[70px] z-[10] flex flex-col items-center justify-between bg-textWhite py-4 animate__animated animate__fadeIn"
                      : "absolute w-[85%] h-[50vh] top-[30px] right-[70px] z-[10] flex flex-col items-center justify-between bg-textWhite py-4 animate__animated animate__fadeOut"
                  }
                  onMouseEnter={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}
                >
                  <li>
                    <Link href="/products/tis-bus">
                      <Image
                        className="w-[110px]"
                        src="/image/tis-group/bus.png"
                        width={1000}
                        height={700}
                        alt="brandImg"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/tis-air">
                      <Image
                        className="w-[100px]"
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
                        className="w-[100px]"
                        src="/image/tis-group/bee.png"
                        width={1000}
                        height={700}
                        alt="brandImg"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/tis-lock">
                      <Image
                        className="w-[100px]"
                        src="/image/tis-group/tis-lock.png"
                        width={1000}
                        height={700}
                        alt="brandImg"
                      />
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li>
              <Link
                className=" inline-block bg-navyBlue"
                href="/education"
                onClick={() => isShow(false)}
              >
                آموزش
              </Link>
            </li> */}
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
        </div>

        {/*-------------------------------------- سلایدر در حالت های دستکتاپ و موبایل -------------------------------------*/}
        <div className="h-[80vh] w-full" onClick={() => setIsShow(false)}>
          <Slider
            silderInfo={[
              {
                sliderName: "تیتر دوم",
                // text: "یک متن کوتاه برای تیتر دوم",
                src: "/image/slider/slider-2.jpg",
                // link: "/project",
              },
              {
                sliderName: "تیتر سوم",
                // text: "یک متن کوتاه برای تیتر سوم",
                src: "/image/slider/slider-3.jpg",
                // link: "/",
              },
              {
                sliderName: "تیتر سوم",
                // text: "یک متن کوتاه برای تیتر سوم",
                src: "/image/slider/slider-4.jpg",
                // link: "/",
              },
              {
                sliderName: "تیتر سوم",
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
