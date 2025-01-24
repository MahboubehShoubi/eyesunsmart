"use client";
import { useEffect, useState } from "react";

//Icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

import "animate.css";

function CardUser({ userData }) {
  const [role, setRole] = useState(userData.role);
  const [showDetails, setShowDetails] = useState(false); // کنترل نمایش اطلاعات اضافی

  const changeHandler = (e) => {
    setRole(e.target.value);
  };

  const toggleDetails = () => {
    setShowDetails((prev) => !prev);
  };

  // ارسال تغییرات به سرور
  const saveRoleToDatabase = async () => {
    const body = {
      id: userData.id,
      role,
      status: "complate", // وضعیت جدید
    };
    console.log(body);

    // try {
    //   const response = await fetch(`/api/update-role`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(body),
    //   });

    //   if (response.ok) {
    //     alert("Role updated successfully!");
    //   } else {
    //     alert("Failed to update role.");
    //   }
    // } catch (error) {
    //   console.error("Error updating role:", error);
    //   alert("An error occurred while updating role.");
    // }
  };

  const deleteUserHandler = () => {
    const userDeletedId = userData.id;
    console.log("deleted user : ", userDeletedId);
  };

  const editUserHandler = () => {};

  return (
    <div className="px-5 py-8 rounded-[10px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)]">
      {/* اطلاعات اصلی */}
      <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 items-center">
        <div className="flex gap-x-2 col-span-2 ">
          <label className="text-bgRed">نام و نام خانوادگی:</label>
          <p>{userData.fullName}</p>
        </div>
        <div className="flex gap-x-2 col-span-2">
          <label className="text-bgRed">کد ملی:</label>
          <p>{userData.idCode}</p>
        </div>
        <div className="flex gap-x-2 col-span-2">
          <label className="text-bgRed">شماره تماس:</label>
          <p>{userData.phone}</p>
        </div>
        {/* دکمه نمایش جزئیات */}
        <div className="flex justify-end col-span-1">
          <button
            onClick={toggleDetails}
            className="rounded-[5px] bg-primaryBlue text-textWhite w-full py-[5px] text-[12px] flex gap-x-1 justify-center items-center"
          >
            {showDetails ? "نمایش کمتر" : "نمایش بیشتر"}
            {showDetails ? (
              <IoIosArrowUp className="w-[15px] h-[15px]" />
            ) : (
              <IoIosArrowDown className="w-[15px] h-[15px]" />
            )}
          </button>
        </div>
      </div>

      {/* اطلاعات اضافی */}
      <div
        className={`transition-max-height duration-[1s] ease-in-out overflow-hidden ${
          showDetails ? "max-h-[250px]" : "max-h-0"
        }`}
      >
        <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 mt-5 items-center">
          <div className="flex gap-x-2 col-span-2">
            <label className="text-bgRed">شغل:</label>
            <p>{userData.job}</p>
          </div>
          <div className="flex gap-x-2 col-span-2">
            <label className="text-bgRed">استان:</label>
            <p>{userData.province}</p>
          </div>
          <div className="flex gap-x-2 col-span-2">
            <label className="text-bgRed">شهر:</label>
            <p>{userData.city}</p>
          </div>
          <div className="flex gap-x-2 col-span-2">
            <label className="text-bgRed">سن:</label>
            <p>{userData.age}</p>
          </div>
        </div>

        <div className="flex items-baseline mt-4">
          <p className="w-[150px] text-bgRed">تعیین وضعیت:</p>
          <div className="w-full flex md:justify-between md:items-end md:pl-20">
            <div className="w-fit flex gap-x-3">
              <label htmlFor={`Admin-${userData.id}`}>
                <input
                  type="radio"
                  name={`role-${userData.id}`}
                  id={`Admin-${userData.id}`}
                  value="ADMIN"
                  onChange={changeHandler}
                  checked={role === "ADMIN"}
                />
                ادمین سایت
              </label>
            </div>
            <div className="w-fit flex gap-x-2">
              <label htmlFor={`User-${userData.id}`}>
                <input
                  type="radio"
                  name={`role-${userData.id}`}
                  id={`User-${userData.id}`}
                  value="USER"
                  onChange={changeHandler}
                  checked={role === "USER"}
                />
                کاربر عادی
              </label>
            </div>
            <div className="w-fit flex gap-x-2">
              <label htmlFor={`Customer-${userData.id}`}>
                <input
                  type="radio"
                  name={`role-${userData.id}`}
                  id={`Customer-${userData.id}`}
                  value="CUSTOMER"
                  onChange={changeHandler}
                  checked={role === "CUSTOMER"}
                />
                باشگاه مشتریان
              </label>
            </div>
            <div className="w-fit flex gap-x-2">
              <label htmlFor={`Colleague-${userData.id}`}>
                <input
                  type="radio"
                  name={`role-${userData.id}`}
                  id={`Colleague-${userData.id}`}
                  value="COLLEAGUE"
                  onChange={changeHandler}
                  checked={role === "COLLEAGUE"}
                />
                همکار
              </label>
            </div>
          </div>
        </div>

        {userData.status === "pendding" ? (
          <div className="mt-10 flex gap-x-[5%] ">
            <button
              className="w-1/2 bg-green text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
              onClick={saveRoleToDatabase}
            >
              <IoMdCheckboxOutline className="w-[22px] h-[22px]" />
              تائید نهایی
            </button>
            <button
              className="w-1/2 bg-bgRed text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
              onClick={deleteUserHandler}
            >
              <MdDeleteForever className="w-[22px] h-[22px]" />
              حذف کاربر
            </button>
          </div>
        ) : (
          <div className="mt-10 flex gap-x-[5%] ">
            <button
              className="w-1/3 bg-green text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
              onClick={saveRoleToDatabase}
            >
              <IoMdCheckboxOutline className="w-[22px] h-[22px]" />
              تائید نهایی
            </button>
            <button
              className="w-1/3 bg-yellowTisBee text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
              onClick={editUserHandler}
            >
              <CiEdit className="w-[22px] h-[22px]" />
              ویرایش اطلاعات
            </button>
            <button
              className="w-1/3 bg-bgRed text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
              onClick={deleteUserHandler}
            >
              <MdDeleteForever className="w-[22px] h-[22px]" />
              حذف کاربر
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardUser;

// {userData.status === "pendding" ? (
//   <div className="mt-10 flex gap-x-[5%] ">
//     <button
//       className="w-1/2 bg-green text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
//       onClick={saveRoleToDatabase}
//     >
//       <IoMdCheckboxOutline className="w-[22px] h-[22px]" />
//       تائید نهایی
//     </button>
//     <button
//       className="w-1/2 bg-bgRed text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
//       onClick={deleteUserHandler}
//     >
//       <MdDeleteForever className="w-[22px] h-[22px]" />
//       حذف کاربر
//     </button>
//   </div>
// ) : (
//   <div className="mt-10 flex gap-x-[5%] ">
//     <button
//       className="w-1/3 bg-green text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
//       onClick={saveRoleToDatabase}
//     >
//       <IoMdCheckboxOutline className="w-[22px] h-[22px]" />
//       تائید نهایی
//     </button>
//     <button className="w-1/3 bg-yellowTisBee text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center" onClick={editUserHandler}>
//       <CiEdit className="w-[22px] h-[22px]" />
//       ویرایش اطلاعات
//     </button>
//     <button
//       className="w-1/3 bg-bgRed text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center"
//       onClick={deleteUserHandler}
//     >
//       <MdDeleteForever className="w-[22px] h-[22px]" />
//       حذف کاربر
//     </button>
//   </div>
// )}

{
  /* <div
className={`overflow-hidden transition-all duration-500 ${
  showDetails ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
}`}
> */
}

{
  /* <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          showDetails ? "max-h-[500px]" : "max-h-0"
        }`}
      ></div> */
}
