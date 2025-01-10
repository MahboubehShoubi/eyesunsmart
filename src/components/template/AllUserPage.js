"use client";

import CardUser from "@/module/CardUser";
import { useEffect, useState } from "react";

import { IoSearchSharp } from "react-icons/io5";

function AllUserPage() {
  const [userData, setUserData] = useState([]);

  const searchHandler = () => {};

  useEffect(() => {
    setUserData();
  }, []);

  return (
    <div>
      <div>
        <h4 className="bg-grayTisAir text-textWhite text-[1.5rem] px-5 py-2">
          جستجوی کاربر
        </h4>
        <p className="mt-[20px] text-bgRed">
          استفاده از یکی از گزینه های زیر برای جستجو کافی است!
        </p>
        <div className=" py-5 border-b-4 flex flex-col gap-y-5">
          <div>
            <label className="w-[150px] inline-block">
              نام و نام خانوادگی :{" "}
            </label>
            <input type="text" className="border-[1px] w-[300px] p-2" />
          </div>
          <div>
            <label className="w-[150px] inline-block">کد ملی : </label>
            <input type="text" className="border-[1px] w-[300px] p-2" />
          </div>
          <div>
            <label className="w-[150px] inline-block">شماره تماس : </label>
            <input type="text" className="border-[1px] w-[300px] p-2" />
          </div>

          <button
            className="flex justify-center p-2 w-[300px] bg-green rounded-[10px] mr-[150px] "
            onClick={searchHandler}
          >
            <IoSearchSharp className="w-[20px] h-[20px]" />
            جستجو
          </button>
        </div>
      </div>
      <div className="py-[50px]">
        <CardUser userData={userData} />
      </div>
    </div>
  );
}

export default AllUserPage;
