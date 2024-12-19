"use client";

import { useState } from "react";
import Link from "next/link";

import LogoutButton from "../element/LogoutButton";

// Icons
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { MdRebaseEdit } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";

import DashboardMenu from "@/module/DashboardMenu";

function Dashboardsidebar({ children, role, email }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full py-[50px]">
      <div className=" container w-full md:max-w-screen-xl flex flex-col gap-y-5 md:flex-row md:gap-x-5">
        <div className=" md:hidden w-full flex">
          <div className="w-1/2">
            <DashboardMenu
              role={role}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>
          <div className="w-1/2" onClick={() => setShowMenu(false)}></div>
        </div>
        <div className=" hidden md:block w-3/12">
          <div className=" w-full flex flex-col gap-y-5 items-center shadow-2xl rounded-xl py-10 px-5">
            <CgProfile className="text-[3rem]" />
            {role === "ADMIN" ? "ادمین سایت" : null}
            <span className="text-navyBlue">{email}</span>
            <span className="bg-textGray w-full h-[1px]"></span>
            <div className="flex flex-col items-start w-full px-5 gap-y-4">
              {role === "ADMIN" ? (
                <div className="flex flex-col h-fit gap-y-3">
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
                    href="/admin/products/edit"
                    className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                  >
                    <RiEdit2Fill className="w-[20px] h-[20px]" />
                    ویرایش محصولات
                  </Link>
                  <Link
                    href="/admin/projects/add"
                    className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                  >
                    <FaProjectDiagram className="w-[20px] h-[20px]" />
                    افزودن پروژه ها
                  </Link>
                  <Link
                    href="/admin/projects/edit"
                    className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                  >
                    <MdRebaseEdit className="w-[20px] h-[20px]" />
                    ویرایش پروژه ها
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col h-fit gap-y-3">
                  <Link
                    href="/dashboard"
                    className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                  >
                    <IoMdHome className="w-[20px] h-[20px]" />
                    پنل کاربری
                  </Link>
                  <Link
                    href="/user/edit"
                    className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                  >
                    <FaUserEdit className="w-[20px] h-[20px]" />
                    ویرایش اطلاعات
                  </Link>
                  <Link
                    href="/user/education"
                    className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                  >
                    <MdCastForEducation className="w-[20px] h-[20px]" />
                    آموزش 
                  </Link>
                  {role === "CUSTOMERS" ? (
                    <Link
                      href="/user/customer"
                      className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                    >
                      <IoMdHome className="w-[20px] h-[20px]" />
                      باشگاه مشتریان
                    </Link>
                  ) : role === "COLLEAGUE" ? (
                    <Link
                      href="/user/colleague"
                      className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
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
        </div>
        <div
          onClick={() => setShowMenu(false)}
          className=" w-full md:w-9/12 h-fit"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dashboardsidebar;
