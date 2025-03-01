import Dashboardsidebar from "@/layout/Dashboardsidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HeaderSubPage from "@/layout/HeaderSubPage";
import Footer from "@/layout/Footer";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";

async function UserLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  return (
    <>
      <HeaderSubPage />
      <Dashboardsidebar email={user.email} role={user.role} userId={user._id}>
        {children}
      </Dashboardsidebar>
      <Footer />
    </>
  );
}

export default UserLayout;
