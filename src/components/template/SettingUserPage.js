"use client";

import CardUser from "@/module/CardUser";
import { useEffect, useState } from "react";

function SettingUserPage() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData();
  }, []);

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

      <div className="py-[50px]">
        <CardUser userData={userData} />
      </div>
    </div>
  );
}

export default SettingUserPage;
