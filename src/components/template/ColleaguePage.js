
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// import ProposedProject from "./ProposedProjectPage";

//Icons
import { FaDiagramProject } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";



function ColleaguePage({colleagueId}) {

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
          href="/user/colleague/project/proposed"
          className={
            active === "add product" || pathname === "/user/colleague/project/proposed"
              ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
              : " text-textWhite flex items-center gap-x-1 py-2 px-6"
          }
          name="add product"
          onClick={activeHandler}
        >
          <FaDiagramProject className="w-[20px] h-[20px]" />
          پروژه های پیشنهادی 
        </Link>
        <Link
          href="/user/colleague/project/registered"
          className={
            active === "edit product" || pathname === "/user/colleague/project/registered"
              ? " text-bgRed flex items-center gap-x-1 bg-textWhite py-2 px-6"
              : " text-textWhite flex items-center gap-x-1 py-2 px-6"
          }
          name="edit product"
          onClick={activeHandler}
        >
          <GrProjects className="w-[20px] h-[20px]" />
           پروژه های ثبت شده
        </Link>
      </div>
      <div></div>
    </div>
  );
   
  
}
  
  

export default ColleaguePage;
