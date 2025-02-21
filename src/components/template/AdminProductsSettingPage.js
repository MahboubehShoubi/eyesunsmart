"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

//Icons
import { AiFillProduct } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";


function AdminProductsSettingPage() {
  const pathname = usePathname();

  const [active, setActive] = useState("");

  const activeHandler = (e) => {
    const type = e.target.name;
    setActive(type);
  };

  useEffect(() => {
    if (pathname === "/admin/products") {
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
          href="/admin/products/add"
          className={
            active === "add product" || pathname === "/admin/products/add"
              ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
              : " text-textWhite flex items-center gap-x-1 py-2 px-6"
          }
          name="add product"
          onClick={activeHandler}
        >
          <AiFillProduct className="w-[20px] h-[20px]" />
          افزودن محصولات
        </Link>
        <Link
          href="/admin/products/edit"
          className={
            active === "edit product" || pathname === "/admin/products/edit"
              ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
              : " text-textWhite flex items-center gap-x-1 py-2 px-6"
          }
          name="edit product"
          onClick={activeHandler}
        >
          <RiEdit2Fill className="w-[20px] h-[20px]" />
          ویرایش محصولات
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default AdminProductsSettingPage;
