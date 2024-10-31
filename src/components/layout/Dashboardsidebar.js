import Link from "next/link";

import LogoutButton from "../element/LogoutButton";

// Icons
import { CgProfile } from "react-icons/cg";
import { IoMdHome } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";

async function Dashboardsidebar({ children, role, email }) {
  return (
    <div className="w-full py-[50px]">
      <div className=" container w-full md:max-w-screen-xl flex gap-x-5">
        <div className="w-3/12 flex flex-col gap-y-5 items-center shadow-2xl shadow-bgRed rounded-xl py-10 px-5">
          <CgProfile className="text-[3rem] text-bgRed" />
          {role === "ADMIN" ? "ادمین سایت" : null}
          <span className="text-navyBlue">{email}</span>
          <span className="bg-textGray w-full h-[1px]"></span>
          <div className="flex flex-col items-start w-full px-5 gap-y-4">
            {role === "ADMIN" ? (
              <div className="flex flex-col h-fit gap-y-3">
                <Link
                  href="/dashboard"
                  className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                >
                  <IoMdHome className="w-[20px] h-[20px]" />
                  پنل ادمین
                </Link>
                <Link
                  href="/admin/products"
                  className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                >
                  <AiFillProduct className="w-[20px] h-[20px]" />
                  افزودن محصولات
                </Link>
                <Link
                  href="/admin/projects"
                  className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                >
                  <FaProjectDiagram className="w-[20px] h-[20px]" />
                  افزودن پروژه ها
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  href="/dashboard"
                  className="text-navyBlue hover:text-secondery flex items-center gap-x-1"
                >
                  <IoMdHome className="w-[20px] h-[20px]" />
                  پنل کاربری
                </Link>
                {/* <Link
              href="/dashboard/my-educatin-film"
              className="text-navyBlue hover:text-secondery"
            >
              آموزش های من
            </Link> */}
              </div>
            )}
            <LogoutButton />
          </div>
        </div>
        <div className="w-9/12 shadow-2xl py-[50px] px-[25px] h-fit">
          { children }
        </div>
      </div>
    </div>
  );
}

export default Dashboardsidebar;
