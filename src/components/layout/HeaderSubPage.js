"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

// Components
import { My_Day } from "@/utils/ShowDay";
import SignInUpPage from "@/module/SignUserPage";
import ShowMenuMobile from "@/module/ShowMenuMobile";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { RxEnter } from "react-icons/rx";
import { RiMenuUnfold2Fill } from "react-icons/ri";
import { RiMenuFold2Fill } from "react-icons/ri";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function HeaderSubPage() {
  const [isShow, setIsShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setMobileMenu(false);
  }, []);

  const showMobileMenuHandler = () => {
    setMobileMenu(true);
    setIsShow(!isShow);
  };

  const { data } = useSession();

  // h-[100vh] flex justify-center items-center relative z-[100]

  //${showSignup ? "z-[999]" : "z-[10]"}

  return (
    <div
      className={`w-full flex flex-col justify-center items-center z-[999] fixed top-0`}
    >
      <div className="w-full">
        {/*-------------------- باکس ورود و ثبت نام کاربر ------------------*/}
        <div className={`w-full ${showSignup && " absolute z-[1000]"}`}>
          {showSignup && (
            <SignInUpPage
              showSignup={showSignup}
              setShowSignup={setShowSignup}
            />
          )}
        </div>

        {/* ${showSignup ? "z-[-1]" : "z-[0]"} */}

        {/*------------------------- قسمت هدر سایت --------------------------*/}
        <div
          className={`hidden sm:block sm:w-full sm:h-16 sm:bg-bgRed sm:items-center`}
        >
          <div className="container sm:max-w-screen-xl flex sm:justify-between sm:items-center h-full">
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

        {/* ----------------------------------باکس منو و لوگو ---------------------------------------*/}
        <div className=" relative w-full h-20 sm:h-24">
          <div className="w-full h-full bg-navyBlue md:bg-[#ffffffec] absolute z-[-1] blur"></div>
          <div className="container sm:max-w-screen-xl flex justify-between items-center sm:h-full px-5 py-2 sm:px-0 sm:py-0">
            {/* --------------------------------همبرگر منو ----------------------------------------------*/}
            <div className="sm:hidden w-fit sm:hover:cursor-pointer">
              {isShow ? (
                <RiMenuFold2Fill
                  className={
                    isShow
                      ? "text-textWhite w-[30px] h-[30px] animate__animated animate__fadeIn"
                      : "text-textWhite w-[30px] h-[30px] animate__animated animate__fadeOut"
                  }
                  onClick={showMobileMenuHandler}
                />
              ) : (
                <RiMenuUnfold2Fill
                  className={
                    isShow
                      ? "text-textWhite w-[30px] h-[30px] animate__animated animate__fadeOut "
                      : "text-textWhite w-[30px] h-[30px] animate__animated animate__fadeIn"
                  }
                  onClick={showMobileMenuHandler}
                />
              )}
            </div>

            {/*----------------------- منو در حالت دسکتاپ ----------------------------------*/}
            <div className="hidden sm:block sm:w-[60%] sm:h-full">
              <ul className=" sm:w-full sm:h-full sm:flex sm:items-center sm:justify-between">
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
                  <Link href="/about-us">درباره ما</Link>
                </li>
                <li className=" w-full h-full flex justify-center items-center hover:text-secondery text-[1.2rem]">
                  <Link href="/contact">ارتباط با ما</Link>
                </li>
              </ul>
            </div>

            <div className="w-fit flex items-center">
              {/* ------------------------------------- ورود کاربر در حالت موبایل ----------------------------------------*/}
              <div className=" sm:hidden w-fit ml-5">
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
                    <RxEnter className="w-[15px] h-[15px] text-textWhite" />
                    <FaUserAlt className="w-[20px] h-[20px] text-textWhite" />
                  </button>
                )}
              </div>
              {/*------------------- لوگوی سایت ----------------------*/}
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

        {/* ----------------------- باکس زیر منو در حالت موبایل  ----------------------------*/}
        {mobileMenu && (
          <div className="sm:hidden w-full">
            <ShowMenuMobile
              isShow={isShow}
              setIsShow={setIsShow}
              subMenu={subMenu}
              setSubMenu={setSubMenu}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderSubPage;
