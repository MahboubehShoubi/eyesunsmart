"use client";

import React, { useState } from "react";

function EditUserPage() {
  const [user, setUser] = useState({
    fullName: "",
    phone: "",
    email: "",
    idCode: "",
    job: "",
    age: "",
    province: "",
    city: "",
    status: "USER",
  });
  // const [fullName, setFullName] = useState("");
  // const [phone, setPhone] = useState("");
  // const [idCode, setIdCode] = useState("");
  // const [job, setJob] = useState("");
  // const [age, setAge] = useState("");
  // const [province, setProvince] = useState("");
  // const [city, setCity] = useState("");
  // const [status, setStatus] = useState("USER");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const editHandler = () => {
    console.log(user);
  };

  return (
    <div className="p-10 ">
      <div>
        <h2 className=" bg-garyTisLock px-5 py-2 text-[1.2rem] text-textWhite ">
          ویرایش اطلاعات کاربری
        </h2>
        <p className="text-textGray mt-5">
          اطلاعات خود را به‌روزرسانی کنید تا تجربه‌ای بهتر و شخصی‌تر در استفاده
          از خدمات ما داشته باشید.
        </p>
      </div>

      <div className="flex flex-col gap-y-8 mt-10">
        <div>
          <label className=" w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]">
            نام و نام خانوادگی :
          </label>
          <input
            type="text"
            value={user.fullName}
            name="fullName"
            onChange={changeHandler}
            className=" shadow-md border-none p-2 w-[500px]"
          />
        </div>

        <div>
          <label className=" w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]">
            شماره تماس همراه :
          </label>
          <input
            type="tel"
            value={user.phone}
            name="phone"
            onChange={changeHandler}
            className=" shadow-md border-none p-2 w-[500px]"
          />
        </div>

        <div>
          <label className=" w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]"> ایمیل :</label>
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={changeHandler}
            className=" shadow-md border-none p-2 w-[500px]"
          />
        </div>

        <div>
          <label className="w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]">کد ملی :</label>
          <input
            type="text"
            value={user.idCode}
            name="idCode"
            onChange={changeHandler}
            className=" shadow-md border-none p-2 w-[500px]"
          />
        </div>

        <div>
          <label className=" w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]">شغل :</label>
          <input
            type="text"
            value={user.job}
            name="job"
            onChange={changeHandler}
            className=" shadow-md border-none p-2 w-[500px]"
          />
        </div>

        <div>
          <label className=" w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]">تاریخ تولد :</label>
          <input
            type="date"
            value={user.age}
            name="age"
            onChange={changeHandler}
            className=" shadow-md border-none p-2 w-[500px]"
          />
        </div>

        <div>
          <label className="w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]">استان :</label>
          <input
            type="text"
            value={user.province}
            name="province"
            onChange={changeHandler}
            className=" shadow-md border-none p-2 w-[500px]"
          />
        </div>

        <div>
          <label className=" w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]">شهر :</label>
          <input
            type="text"
            value={user.city}
            name="city"
            onChange={changeHandler}
            className=" shadow-md border-none p-2 w-[500px]"
          />
        </div>

        <div className=" flex items-baseline">
          <p className="w-[150px] inline-block bg-grayTisAir py-2 px-4 rounded-r-[10px]"> تعیین وضعیت :</p>
          <div className="w-full md:w-[500px] flex md:justify-between md:items-end p-2 shadow-md">
            <div className="w-fit flex gap-x-2">
              <label htmlFor="User" className="">
                کاربر عادی
              </label>
              <input
                type="radio"
                name="status"
                id="User"
                value="USER"
                onChange={changeHandler}
                checked={user.status === "USER"}
              />
            </div>

            <div className="w-fit flex gap-x-2">
              <label htmlFor="Customer" className="">
              باشگاه مشتریان 
              </label>
              <input
                type="radio"
                name="status"
                id="Customer"
                value="CUSTOMER"
                onChange={changeHandler}
                checked={user.status === "CUSTOMER"}
              />
            </div>

            <div className="w-fit flex gap-x-2">
              <label htmlFor="Colleague" className="">
                همکار
              </label>
              <input
                type="radio"
                name="status"
                id="Colleague"
                value="COLLEAGUE"
                onChange={changeHandler}
                checked={user.status === "COLLEAGUE"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center mt-10">
        <button
          onClick={editHandler}
          className=" bg-green py-2 w-[500px] rounded-[10px]"
        >
          ویرایش اطلاعات
        </button>
      </div>
    </div>
  );
}

export default EditUserPage;
