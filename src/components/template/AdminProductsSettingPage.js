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
        className="w-full h-fit sm:h-[50px] flex pt-[2px] sm:rounded-r-[10px] bg-bgRed rounded-[10px] sm:bg-transparent"
        style={{
          backgroundImage: `linear-gradient(to left,#e00303 , #E51B20,transparent 100% )`,
        }}
      >
        <Link
          href="/admin/products/add"
          className={` text-[0.8rem] sm:text-[1rem] flex flex-col sm:flex-row items-center justify-center gap-x-1 py-2 px-6 
            ${
              active === "add product" || pathname === "/admin/products/add"
                ? " text-bgRed bg-textWhite"
                : " text-textWhite"
            }
          `}
          name="add product"
          onClick={activeHandler}
        >
          <AiFillProduct className="w-[20px] h-[20px]" />
          افزودن محصولات
        </Link>
        <Link
          href="/admin/products/edit"
          className={` text-[0.8rem] sm:text-[1rem] flex flex-col sm:flex-row items-center justify-center gap-x-1 py-2 px-6 
           ${
             active === "edit product" || pathname === "/admin/products/edit"
               ? " text-bgRed bg-textWhite"
               : " text-textWhite"
           }
          `}
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
