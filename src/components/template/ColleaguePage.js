
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

//Icons
import { FaDiagramProject } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";



function ColleaguePage({colleagueId}) {
  
  const pathname = usePathname();
  
  const [active, setActive] = useState("");
  const [id , setId] = useState(colleagueId);

  const activeHandler = (e) => {
    const type = e.target.name;
    setActive(type);
  };


  useEffect(() => {
    const userId  = pathname.split("/");
    setId(userId[3]);

    if (pathname === `/user/colleague/${colleagueId}`) {
      setActive("");
    }
  }, [active, pathname]);
  

  return (
    <div className=" mb-5">
      <div
        className="w-full h-[50px] flex pt-[2px] rounded-r-[10px]"
        style={{
          backgroundImage: `linear-gradient(to left,#e00303 , #E51B20,transparent 100% )`,
        }}
      >
        <Link
          href={`/user/colleague/${id}/project/proposed`}
          className={
            active === "add product" || pathname.includes("/project/proposed")
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
          href={`/user/colleague/${id}/project/registered`}
          className={
            active === "edit product" || pathname.includes("/project/registered")
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
    </div>
  );
   
  
}
  
  

export default ColleaguePage;
