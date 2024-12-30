"use client";

import CardUser from "@/module/tislockpage/CardUser";
import { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

function SettingUserPage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {}, []);

  const searchHandler = () => {};
  return (
    <div>
      {/* <p className="text-[1.2rem] ">
        در این قسمت باید تمام کابران جدید که عضو سایت می شوند را ببینیم و ادمین
        تصمیم میگیرد که هر کاربر کدام هویت (کاربر ساده - مشتری باشگاه - همکار )
        را داشته باشد{" "}
      </p>
      <p className="text-[1.2rem] ">
        اگر مورد تائید بود گزینه تائید نهایی را میزند
      </p>
      <p className="text-[1.2rem] mb-[30px]">
        اگر نیاز به ویرایش وضعیت کاربر بود باید گزینه ویرایش وضعیت را بزند و
        گزینه های کاربر فعال شود تا ادمین بتواند وضعیت را تغییر دهد
      </p> */}

      <h4 className="bg-grayTisAir text-textWhite text-[1.5rem] px-5 py-2">
        جستجوی کاربر
      </h4>
      <p className="mt-[20px] text-bgRed">استفاده از یکی از گزینه های زیر برای جستجو کافی است!</p>
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
      <div className="py-[50px]">
        <CardUser userData={userData} />
      </div>
    </div>
  );
}

export default SettingUserPage;
