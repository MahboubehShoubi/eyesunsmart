import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

async function Dashboardsidebar({ children }) {

  const session = await getServerSession(authOptions);
  return (
    <div className="w-full ">
      <div className=" container w-full md:max-w-screen-xl flex">
        <div className="w-2/12 flex flex-col gap-y-5 items-center shadow-2xl shadow-secondery rounded-xl py-10">
          <CgProfile className="text-[3rem] text-secondery" />
          <span className="text-navyBlue">{session.user.email}</span>
          <Link href="/dashboard" className="text-navyBlue hover:text-secondery">پنل کاربری</Link>
          <Link href="/dashboard/my-educatin-film" className="text-navyBlue hover:text-secondery">آموزش های من</Link>
        </div>
        <div className="w-10/12 h-[300px] flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Dashboardsidebar;
