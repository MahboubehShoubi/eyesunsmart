"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

//Icons
import { ImUserPlus } from "react-icons/im";
import { HiUserGroup } from "react-icons/hi";
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
    if (pathname === "/admin/user") {
      setActive("");
    }
  }, [active, pathname]);

  return (
    <div
      className="w-full h-fit sm:h-[50px] flex pt-[2px] sm:rounded-r-[10px] bg-bgRed rounded-[10px] sm:bg-transparent"
      style={{
        backgroundImage: `linear-gradient(to left,#e00303 , #E51B20,transparent 100% )`,
      }}
    >
      <Link
        href="/admin/user/setting"
        className={` text-[0.8rem] sm:text-[1rem] flex flex-col sm:flex-row items-center justify-center gap-x-1 py-2 px-6  ${
          active === "new user" || pathname === "/admin/user/setting"
            ? " text-bgRed bg-textWhite"
            : " text-textWhite "
        }`}
        name="new user"
        onClick={activeHandler}
      >
        <ImUserPlus className="w-[20px] h-[20px]" />
        <span>کاربران جدید</span>
      </Link>
      <Link
        href="/admin/user/all"
        className={`text-[0.8rem] sm:text-[1rem] flex flex-col sm:flex-row items-center justify-center gap-x-1 py-2 px-6  ${
          active === "all user" || pathname === "/admin/user/all"
            ? " text-bgRed bg-textWhite "
            : " text-textWhite "
        }`}
        name="all user"
        onClick={activeHandler}
      >
        <HiUserGroup className="w-[20px] h-[20px]" />
        همه کاربران
      </Link>
      <Link
        href="/admin/customer"
        className={` text-[0.8rem] sm:text-[1rem] flex flex-col sm:flex-row items-center justify-center gap-x-1 py-2 px-6  ${
          active === "customer" || pathname === "/admin/customer"
            ? " text-bgRed bg-textWhite"
            : " text-textWhite"
        }`}
        name="customer"
        onClick={activeHandler}
      >
        <FaUserTag className="w-[20px] h-[20px]" />
        مشتریان
      </Link>
      <Link
        href="/admin/colleague"
        className={` text-[0.8rem] sm:text-[1rem] flex flex-col sm:flex-row items-center justify-center gap-x-1 py-2 px-6  ${
          active === "colleague" || pathname === "/admin/colleague"
            ? " text-bgRed bg-textWhite"
            : " text-textWhite"
        }`}
        name="colleague"
        onClick={activeHandler}
      >
        <FaBuildingUser className="w-[20px] h-[20px]" />
        همکاران
      </Link>
    </div>
  );
}

export default AdminUserPage;
