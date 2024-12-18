"use client";

import Link from "next/link";

import "animate.css";

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import LogoutButton from "../element/LogoutButton";

function DashboardMenu({ role, showMenu, setShowMenu }) {
  return (
    <div className=" relative w-full px-[20px]">
      <p
        onClick={() => setShowMenu(!showMenu)}
        className="w-fit flex gap-x-1 border-[2px] border-grayTisAir rounded-xl p-2 cursor-pointer"
      >
        <PiDotsThreeOutlineVerticalFill />
        منوی حساب کاربری
      </p>
      <div
        className={
          showMenu
            ? "absolute w-full flex flex-col items-start bg-textWhite gap-y-6 shadow-lg shadow-backgroundBlack p-5 animate__animated animate__zoomIn"
            : "absolute w-full flex flex-col items-start bg-textWhite gap-y-6 shadow-lg shadow-backgroundBlack p-5 animate__animated animate__zoomOut"
        }
      >
        {role === "ADMIN" ? (
          <div className=" flex flex-col h-fit gap-y-6 ">
            <Link
              href="/dashboard"
              className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
            >
              <IoMdHome className="w-[20px] h-[20px]" />
              پنل ادمین
            </Link>
            <Link
              href="/dashboard"
              className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
            >
              <IoMdHome className="w-[20px] h-[20px]" />
              مدیریت کاربران 
            </Link>
            <Link
              href="/admin/products/add"
              className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
            >
              <AiFillProduct className="w-[20px] h-[20px]" />
              افزودن محصولات
            </Link>
            <Link
              href="/admin/products/edite"
              className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
            >
              <AiFillProduct className="w-[20px] h-[20px]" />
              ویرایش محصولات
            </Link>
            <Link
              href="/admin/projects/edite"
              className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
            >
              <FaProjectDiagram className="w-[20px] h-[20px]" />
              ویرایش پروژه ها
            </Link>
          </div>
        ) : (
          <div>
            <Link
              href="/dashboard"
              className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
            >
              <IoMdHome className="w-[20px] h-[20px]" />
              پنل کاربری
            </Link>
            {/* <Link
                    href="/dashboard/my-educatin-film"
                    className="text-navyBlue hover:text-secondery"
                  >
                    آموزش های من
                  </Link> */}
          </div>
        )}
        <LogoutButton />
      </div>
    </div>
  );
}

export default DashboardMenu;
