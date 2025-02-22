"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

//Icons
import { FaProjectDiagram } from "react-icons/fa";
import { MdRebaseEdit } from "react-icons/md";

function AdminProjectSettingPage() {
  const pathname = usePathname();

  const [active, setActive] = useState("");

  const activeHandler = (e) => {
    const type = e.target.name;
    setActive(type);
  };

  useEffect(() => {
    if (pathname === "/admin/projects") {
      setActive("");
    }
  }, [active, pathname]);

  return (
    <div>
      <div
        className="w-full h-[50px] flex pt-[2px] rounded-r-[10px]"
        style={{
          backgroundImage: `linear-gradient(to left,#e00303 , #E51B20,transparent 100% )`,
        }}
      >
        <Link
          href="/admin/projects/add"
          className={
            active === "add project" || pathname === "/admin/projects/add"
              ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
              : " text-textWhite flex items-center gap-x-1 py-2 px-6"
          }
          name="add project"
          onClick={activeHandler}
        >
          <FaProjectDiagram className="w-[20px] h-[20px]" />
          افزودن پروژه
        </Link>
        <Link
          href="/admin/projects/edit"
          className={
            active === "edit project" || pathname === "/admin/peojects/edit"
              ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
              : " text-textWhite flex items-center gap-x-1 py-2 px-6"
          }
          name="edit project"
          onClick={activeHandler}
        >
          <MdRebaseEdit className="w-[20px] h-[20px]" />
          ویرایش پروژه
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default AdminProjectSettingPage;
