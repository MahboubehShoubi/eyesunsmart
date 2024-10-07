import HeaderSubPage from "@/layout/HeaderSubPage";
import Dashboardsidebar from "@/layout/Dashboardsidebar";
import Footer from "@/layout/Footer";

function DashboardLayout({ children }) {
  return (
    <>
      <HeaderSubPage />
      <Dashboardsidebar>{children}</Dashboardsidebar>
      <Footer />
    </>
  );
}

export default DashboardLayout;
