import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import LogoutButton from "../element/LogoutButton";

async function Dashboardsidebar({ children, role, email }) {

  return (
    <div className="w-full py-[50px]">
      <div className=" container w-full md:max-w-screen-xl flex gap-x-5">
        <div className="w-3/12 flex flex-col gap-y-5 items-center shadow-2xl shadow-secondery rounded-xl py-10 px-5">
          <CgProfile className="text-[3rem] text-secondery" />
          {role === "ADMIN" ? "ادمین سایت" : null}
          <span className="text-navyBlue">{email}</span>
          <span className="bg-textGray w-full h-[1px]"></span>
          <div className="flex flex-col items-start w-full px-5 gap-y-4">
            <Link
              href="/dashboard"
              className="text-navyBlue hover:text-secondery"
            >
              پنل کاربری
            </Link>
            <Link
              href="/dashboard/my-educatin-film"
              className="text-navyBlue hover:text-secondery"
            >
              آموزش های من
            </Link>
            {role === "ADMIN" ? (
              <Link
                href="/admin"
                className="text-navyBlue hover:text-secondery"
              >
                افزودن محصولات
              </Link>
            ) : null}
            <LogoutButton />
          </div>
        </div>
        <div className="w-9/12 h-[300px] flex items-center justify-center shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dashboardsidebar;
