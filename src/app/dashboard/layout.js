import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { redirect } from "next/navigation";
import HeaderSubPage from "@/layout/HeaderSubPage";
import Dashboardsidebar from "@/layout/Dashboardsidebar";
import Footer from "@/layout/Footer";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/");

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  if (!user) return <h3>مشکلی پیش آمده است</h3>;

  return (
    <>
      <HeaderSubPage />
      <Dashboardsidebar role={user.role} email={user.email}>
        {children}
      </Dashboardsidebar>
      <Footer />
    </>
  );
}

export default DashboardLayout;
