"use client";
import { useEffect, useState } from "react";

import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

function CardUser({ userData }) {
  
  const [user, setUser] = useState({
    id: "",
    fullName: "",
    phone: "",
    email: "",
    idCode: "",
    job: "",
    age: "",
    province: "",
    city: "",
    role: "",
    status: "",
  });

  useEffect(() => {
    setUser({
      id: userData.id,
      fullName: userData.fullName,
      phone: userData.phone,
      email: userData.email,
      idCode: userData.idCode,
      job: userData.job,
      age: userData.age,
      province: userData.province,
      city: userData.city,
      role: userData.role,
      status: userData.status,
    });
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
      setUser({ ...user, [name]: value });
  };

  const finalHandler = (id) => {
    setUser({ ...user, ["status"]: "complate" });
  };

  return (
    <div className="px-5 py-4 rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)]">
      <div className=" w-full grid grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex gap-x-2 ">
          <label htmlFor="" className="text-bgRed ">
            نام و نام خانوادگی :{" "}
          </label>
          <p>{user.fullName}</p>
        </div>
        <div className="flex gap-x-2">
          <label htmlFor="" className="text-bgRed ">
            کد ملی :
          </label>
          <p>{user.idCode} </p>
        </div>
        <div className="flex gap-x-2">
          <label htmlFor="" className="text-bgRed ">
            شماره تماس :
          </label>
          <p>{user.phone} </p>
        </div>
        <div className="flex gap-x-2">
          <label htmlFor="" className="text-bgRed ">
            شغل :
          </label>
          <p>{user.job}</p>
        </div>
        <div className="flex gap-x-2">
          <label htmlFor="" className="text-bgRed ">
            استان :
          </label>
          <p>{user.province}</p>
        </div>
        <div className="flex gap-x-2">
          <label htmlFor="" className="text-bgRed ">
            شهر :
          </label>
          <p>{user.city}</p>
        </div>
        <div className="flex gap-x-2">
          <label htmlFor="" className="text-bgRed ">
            سن :
          </label>
          <p>{user.age}</p>
        </div>
      </div>
      <div className=" flex items-baseline">
        <p className="w-[150px] text-bgRed"> تعیین وضعیت :</p>
        <div className="w-full flex md:justify-between md:items-end md:pl-20">
          <div className="w-fit flex gap-x-3">
            <label htmlFor="Admin" className="">
              ادمین سایت
            </label>
            <input
              type="radio"
              name="role"
              id="Admin"
              value="ADMIN"
              onChange={(e) => changeHandler(e)}
              checked={user.role === "ADMIN"}
            />
          </div>

          <div className="w-fit flex gap-x-2">
            <label htmlFor="User" className="">
              کاربر عادی
            </label>
            <input
              type="radio"
              name="role"
              id="User"
              value="USER"
              onChange={(e) => changeHandler(e)}
              checked={user.role === "USER"}
            />
          </div>

          <div className="w-fit flex gap-x-2">
            <label htmlFor="Customer" className="">
              باشگاه مشتریان
            </label>
            <input
              type="radio"
              name="role"
              id="Customer"
              value="CUSTOMER"
              onChange={(e) => changeHandler(e)}
              checked={user.role === "CUSTOMER"}
            />
          </div>

          <div className="w-fit flex gap-x-2">
            <label htmlFor="Colleague" className="">
              همکار
            </label>
            <input
              type="radio"
              name="role"
              id="Colleague"
              value="COLLEAGUE"
              onChange={(e) => changeHandler(e)}
              checked={user.role === "COLLEAGUE"}
            />
          </div>
        </div>
      </div>
      {user.status === "pendding" ? (
        <div className="mt-10 flex gap-x-[5%] ">
          <button
            className="w-1/2 bg-green text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
            onClick={() => finalHandler(user.id)}
          >
            <IoMdCheckboxOutline className="w-[22px] h-[22px]" />
            تائید نهایی
          </button>
          <button className="w-1/2 bg-bgRed text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
            <MdDeleteForever className="w-[22px] h-[22px]" />
            حذف کاربر
          </button>
        </div>
      ) : (
        <div className="mt-10 flex gap-x-[5%] ">
          <button className="w-1/3 bg-green text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
            <IoMdCheckboxOutline className="w-[22px] h-[22px]" />
            تائید نهایی
          </button>
          <button className="w-1/3 bg-yellowTisBee text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
            <CiEdit className="w-[22px] h-[22px]" />
            ویرایش اطلاعات
          </button>
          <button className="w-1/3 bg-bgRed text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
            <MdDeleteForever className="w-[22px] h-[22px]" />
            حذف کاربر
          </button>
        </div>
      )}
    </div>
  );
}

export default CardUser;
