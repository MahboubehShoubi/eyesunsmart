import React from "react";

function AdminUser() {
  return (
    <>
      <p className="text-[20px] mt-[30px] w-full">
         با انتخاب هر کدام از گزینه های بالا می توانید به اطلاعات
        مربوطه دسترسی داشته باشید
      </p>
      <div className="mt-[20px]">
        <span className="text-bgRed border-b-[3px] w-fit text-[1.2rem]">
          کاربران جدید :
        </span>
        <p className="mt-[10px] text-justify">
           شما می توانید کاربران جدید که ثبت نام کرده اند را مشاهده و
          نسبت به درخواست آنها به عنوان کاربر عادی، مشتری، همکار و یا ادمین سایت
          بررسی و مدیریت و تایید نمایید
        </p>
      </div>
      <div className="mt-[20px]">
        <span className="text-bgRed border-b-[3px] w-fit text-[1.2rem]">
          همه کاربران :
        </span>
        <p className="mt-[10px] text-justify">
           شما می توانید همه کاربران ثبت نام شده را مشاهده کنید .
          همچنین می توانید کاربر خاصی که مد نظر شماست را جستجو کنید و اگر نیاز
          به ویرایش اطلاعات داشته باشید عمل ویرایش روی اطلاعات را انجام دهید
        </p>
      </div>
      <div className="mt-[20px]">
        <span className="text-bgRed border-b-[3px] w-fit text-[1.2rem]">
          مشتریان  :
        </span>
        <p className="mt-[10px] text-justify">
           شما می توانید همه مشتریان ثبت نام شده را مشاهده کنید .
          همچنین می توانید مشتری خاصی که مد نظر شماست را جستجو کنید و اگر نیاز
          به ویرایش اطلاعات داشته باشید عمل ویرایش روی اطلاعات را انجام دهید
        </p>
      </div>
      <div className="mt-[20px]">
        <span className="text-bgRed border-b-[3px] w-fit text-[1.2rem]">
          همکاران  :
        </span>
        <p className="mt-[10px] text-justify">
           شما می توانید همه همکاران ثبت نام شده را مشاهده کنید .
          همچنین می توانید همکار خاصی که مد نظر شماست را جستجو کنید و اگر نیاز
          به ویرایش اطلاعات داشته باشید عمل ویرایش روی اطلاعات را انجام دهید
        </p>
      </div>
    </>
  );
}

export default AdminUser;
