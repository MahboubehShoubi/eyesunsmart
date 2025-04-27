"use client";

import Link from "next/link";
import Image from "next/image";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function ShowMenuMobile({ isShow, setIsShow, subMenu, setSubMenu }) {
  return (
    <div className="relative w-full h-fit z-[2]">
      <div
        onClick={(e) => setIsShow(false)}
        className={
          isShow ? "absolute w-full h-screen bg-backgroundBlack" : null
        }
      ></div>
      {/* --------------------------- منو در حالت موبایل ----------------------- */}
      <div
        className={
          isShow
            ? "container absolute w-[80%] h-screen bg-navyBlue animate__animated animate__fadeInRight"
            : "container absolute w-[80%] h-screen bg-navyBlue animate__animated animate__fadeOutRight"
        }
      >
        <ul className="text-[#fff] w-full h-full flex flex-col items-start gap-y-5 px-8 py-5">
          <li>
            <Link
              className="inline-block bg-navyBlue"
              href="/"
              onClick={(e) => setIsShow(false)}
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
                <Link href="/products/tis-bus" onClick={() => setIsShow(false)}>
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
                <Link href="/products/tis-air" onClick={() => setIsShow(false)}>
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
                <Link href="/products/tis-bee" onClick={() => setIsShow(false)}>
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
                <Link
                  href="/products/tis-lock"
                  onClick={() => setIsShow(false)}
                >
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
  );
}

export default ShowMenuMobile;
