"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/element/LogoutButton";

import "animate.css";

//Icons

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { FaUserCog } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { MdSettingsSuggest } from "react-icons/md";
import { FaCommentDots } from "react-icons/fa6";

function DashboardMenu({ role, showMenu, setShowMenu, isShow, setIsShow }) {
  const pathname = usePathname();

  const showMunuHandler = () => {
    setIsShow(true);
    setShowMenu(!showMenu);
  };

  return (
    <div className=" relative w-full px-[20px]">
      <p
        onClick={showMunuHandler}
        className="w-fit flex gap-x-1 border-[2px] border-grayTisAir rounded-xl p-2 cursor-pointer"
      >
        <PiDotsThreeOutlineVerticalFill />
        منوی حساب کاربری
      </p>
      <div
        className={` absolute w-full flex flex-col items-start bg-textWhite gap-y-6 shadow-lg shadow-backgroundBlack p-5
          ${isShow ? "block" : "hidden"}
         ${
           showMenu
             ? "animate__animated animate__zoomIn"
             : "animate__animated animate__zoomOut"
         }
        `}
      >
        {role === "ADMIN" ? (
          <div className=" flex flex-col h-fit gap-y-6 ">
            <Link
              href="/dashboard"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/dashboard")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <IoMdHome className="w-[20px] h-[20px]" />
              پنل ادمین
            </Link>
            <Link
              href="/admin/user"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/admin/user") ||
                pathname.includes("/admin/customer") ||
                pathname.includes("/admin/colleague")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <FaUserCog className="w-[20px] h-[20px]" />
              مدیریت کاربران
            </Link>
            <Link
              href="/admin/products"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/admin/products")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <AiFillProduct className="w-[20px] h-[20px]" />
              مدیریت محصولات
            </Link>
            <Link
              href="/admin/projects"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/admin/projects")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <FaProjectDiagram className="w-[20px] h-[20px]" />
              مدیریت پروژه ها
            </Link>
            <Link
              href="/admin/suggested-projects"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/admin/suggested-projects")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <MdSettingsSuggest className="w-[20px] h-[20px]" />
              پروژه های پیشنهادی
            </Link>
            <Link
              href="/admin/comments"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/admin/comments")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <FaCommentDots className="w-[20px] h-[20px]" />
              نظرات کاربران
            </Link>
          </div>
        ) : (
          <div className="flex flex-col h-fit gap-y-3">
            <Link
              href="/dashboard"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/dashboard")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <IoMdHome className="w-[20px] h-[20px]" />
              {role === "USER"
                ? " پنل کاربری"
                : role === "CUSTOMERS"
                ? "پنل مشتری"
                : role === "COLLEAGUE"
                ? "پنل همکار"
                : null}
            </Link>
            <Link
              href="/user/edit"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/user/edit")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <FaUserEdit className="w-[20px] h-[20px]" />
              ویرایش اطلاعات
            </Link>
            {/* <Link
                    href="/user/movie"
                    className={`flex items-center gap-x-1  ${
                      pathname.includes("/user/movie")
                        ? "text-bgRed"
                        : "text-navyBlue hover:text-bgRed "
                    } `}
                  >
                    <RiMovieFill className="w-[20px] h-[20px]" />
                    فیلم های آموزشی
                  </Link> */}
            <Link
              href="/user/education"
              className={`flex items-center gap-x-1  ${
                pathname.includes("/user/education")
                  ? "text-bgRed"
                  : "text-navyBlue hover:text-bgRed "
              } `}
            >
              <MdCastForEducation className="w-[20px] h-[20px]" />
              ثبت نام دوره‌های آموزشی
            </Link>
            {role === "CUSTOMERS" ? (
              <Link
                href={`/user/customer/${userId}`}
                className={`flex items-center gap-x-1  ${
                  pathname.includes(`/user/customer/${userId}`)
                    ? "text-bgRed"
                    : "text-navyBlue hover:text-bgRed "
                } `}
              >
                <IoMdHome className="w-[20px] h-[20px]" />
                باشگاه مشتریان
              </Link>
            ) : role === "COLLEAGUE" ? (
              <Link
                href={`/user/colleague/${userId}`}
                className={`flex items-center gap-x-1  ${
                  pathname.includes(`/user/colleague/${userId}`)
                    ? "text-bgRed"
                    : "text-navyBlue hover:text-bgRed "
                } `}
              >
                <IoMdHome className="w-[20px] h-[20px]" />
                باشگاه همکاران
              </Link>
            ) : null}
          </div>
        )}
        <LogoutButton />
      </div>
    </div>
  );
}

export default DashboardMenu;
