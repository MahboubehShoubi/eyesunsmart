"use client";

import { useState } from "react";
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

  const { data } = useSession();

  return (
    <div className="flex flex-col justify-center items-center h-fit sticky top-0 z-[999]">
      {/*-------------------- باکس ورود و ثبت نام کاربر ------------------*/}
      {showSignup && (
        <div className="w-full h-full flex justify-center items-center absolute z-[100]">
          <SignInUpPage showSignup={showSignup} setShowSignup={setShowSignup} />
        </div>
      )}
      {/*------------------------- قسمت هدر سایت --------------------------*/}
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

      {/* ----------------------------------باکس منو و لوگو ---------------------------------------*/}
      <div className=" relative w-full md:h-[100px]">
        <div className="w-full h-full bg-navyBlue md:bg-[#ffffffec] absolute z-[-1] blur"></div>
        <div className="container md:max-w-screen-xl flex justify-between items-center md:h-full px-5 py-2 md:px-0 md:py-0">
          {/* --------------------------------همبرگر منو ----------------------------------------------*/}
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

          {/*----------------------- منو در حالت دسکتاپ ----------------------------------*/}
          <div className="hidden md:block md:w-[60%] md:h-full">
            <ul className=" md:w-full md:h-full md:flex md:items-center md:justify-between">
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
      <div className="md:hidden w-full">
        <ShowMenuMobile
          isShow={isShow}
          setIsShow={setIsShow}
          subMenu={subMenu}
          setSubMenu={setSubMenu}
        />
      </div>
    </div>
  );
}

export default HeaderSubPage;
