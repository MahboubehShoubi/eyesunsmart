"use client";

import CardUser from "@/module/CardUser";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { IoSearchSharp } from "react-icons/io5";

function AllUserPage({ usersData }) {
  const [search, setSearch] = useState({
    fullName: "",
    idCode: "",
    phone: "",
  });

  const [searchUserData, setSearchUserData] = useState(null);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const searchHandler = () => {
    if (!search.fullName && !search.idCode && !search.phone) {
      toast.error("لطفا اطلاعات معتبر وارد کنید");
      return;
    }

    const result = usersData.find((user) => {
      return (
        (search.fullName && user.fullName === search.fullName) ||
        (search.idCode && user.idCode === search.idCode) ||
        (search.phone && user.phone === search.phone)
      );
    });

    if (!result) {
      toast.error("این کاربر با این مشخصات وجو ندارد");
    }

    if (JSON.stringify(result) !== JSON.stringify(searchUserData)) {
      setSearchUserData(result || null);
    } else {
      toast.error("اطلاعات وارد شده تکراری است.");
    }

    setSearch({
      fullName: "",
      idCode: "",
      phone: "",
    });
  };

  useEffect(() => {
    console.log("searchUserData updated:", searchUserData);
  }, [searchUserData]);

  return (
    <div>
      <div className="pt-[50px]">
        <h4 className="text-textWhite bg-garyTisLock px-5 py-2 text-[1.7rem] w-full">
          جستجوی کاربر
        </h4>
        <p className="mt-[20px] text-bgRed">
          استفاده از یکی از گزینه های زیر برای جستجو کافی است!
        </p>
        <div className=" py-5 border-b-4 flex flex-col gap-y-5">
          <div>
            <label htmlFor="fullName" className="w-[150px] inline-block">
              نام و نام خانوادگی :
            </label>
            <input
              type="text"
              className="border-[1px] w-[300px] p-2"
              id="fullName"
              name="fullName"
              value={search.fullName}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="idCode" className="w-[150px] inline-block">
              کد ملی :
            </label>
            <input
              type="text"
              className="border-[1px] w-[300px] p-2"
              id="idCode"
              name="idCode"
              value={search.idCode}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="phone" className="w-[150px] inline-block">
              شماره تماس :
            </label>
            <input
              type="text"
              className="border-[1px] w-[300px] p-2"
              id="phone"
              name="phone"
              value={search.phone}
              onChange={changeHandler}
            />
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
      {/* نمایش نتیجه */}
      <div>
        {searchUserData ? (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            <CardUser key={searchUserData.id} userData={searchUserData} />
          </div>
        ) : (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            {usersData.map((user) => (
              <CardUser key={user.id} userData={user} />
            ))}
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default AllUserPage;
