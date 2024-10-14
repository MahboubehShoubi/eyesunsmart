import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import HeaderSubPage from "@/layout/HeaderSubPage";
import Dashboardsidebar from "@/layout/Dashboardsidebar";
import Footer from "@/layout/Footer";

async function DashboardLayout({ children }) {
  const session = await getServerSession(authOptions);
  // console.log(session);
  if (!session) return redirect("/");
  return (
    <>
      <HeaderSubPage />
      <Dashboardsidebar>{children}</Dashboardsidebar>
      <Footer />
    </>
  );
}

export default DashboardLayout;
