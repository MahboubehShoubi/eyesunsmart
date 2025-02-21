import React from "react";

function AdminProductsSetting() {
  return (
    <div className="mt-[30px]">
      <p className="text-[20px]">
        با انتخاب هر کدام از گزینه های بالا می توانید به اطلاعات مربوطه دسترسی
        داشته باشید
      </p>
      <div className="mt-[20px]">
        <span className="text-bgRed border-b-[3px] w-fit text-[1.2rem]">
          افزودن محصولات :
        </span>
        <p className="mt-[10px] text-justify">
          شما می توانید در این صفحه محصولات خود را وارد کنید تا در دیتا بیس
          ذخیره شود
        </p>
      </div>
      <div className="mt-[20px]">
        <span className="text-bgRed border-b-[3px] w-fit text-[1.2rem]">
          ویرایش محصولات :
        </span>
        <p className="mt-[10px] text-justify">
          در این صفحه شما می توانید در صورت نیاز به ویرایش اطلاعات محصولی خاص،
          آن را جستجو کنید و اطلاعات محصول را ویرایش کنید
        </p>
      </div>
    </div>
  );
}

export default AdminProductsSetting;
