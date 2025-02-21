"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';


//Icons
import { FaUserCog } from "react-icons/fa";
import { ImUserPlus } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
import { HiUsers } from "react-icons/hi2";
import { FaUserTag } from "react-icons/fa";
import { FaBuildingUser } from "react-icons/fa6";




function AdminUserPage() {

  const pathname = usePathname();

  const [active, setActive] = useState("");

  const activeHandler = (e) => {
    const type = e.target.name;
    setActive(type);
  };

  useEffect(() => {
    console.log("activ Tab :"  , active)
  } , [active])


  return (
    <div>
      <div className="w-full h-[50px] flex pt-[2px] rounded-r-[10px]"
      style={{
        backgroundImage: `linear-gradient(to left,#e00303 , #E51B20,transparent 100% )`
      }}
      >
        <Link
          href="/admin/user/setting"
          className={
            active === "new user" || pathname === "/admin/user/setting"
              ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
              : " text-textWhite flex items-center gap-x-1 py-2 px-6"
          }
          name="new user"
          onClick={activeHandler}
        >
          <ImUserPlus className="w-[20px] h-[20px]" />
          کاربران جدید
        </Link>
        <Link
          href="/admin/user/all"
          className={
            active === "all user" || pathname === "/admin/user/all"
            ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
            : " text-textWhite flex items-center gap-x-1  py-2 px-6"
          }
          name="all user"
          onClick={activeHandler}
        >
          <HiUserGroup className="w-[20px] h-[20px]" />
          همه کاربران
        </Link>
        <Link
          href="/admin/customer"
          className={
            active === "customer" || pathname === "/admin/customer"
            ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
            : " text-textWhite flex items-center gap-x-1  py-2 px-6"
          }
          name="customer"
          onClick={activeHandler}
        >
          <FaUserTag className="w-[20px] h-[20px]" />
          مشتریان
        </Link>
        <Link
          href="/admin/colleague"
          className={
            active === "colleague" || pathname === "/admin/colleague"
            ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
            : " text-textWhite flex items-center gap-x-1  py-2 px-6"
          }
          name="colleague"
          onClick={activeHandler}
        >
          <FaBuildingUser className="w-[20px] h-[20px]" />
          همکاران
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default AdminUserPage;
