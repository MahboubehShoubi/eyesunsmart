import Footer from "@/layout/Footer";
import HeaderSubPage from "@/layout/HeaderSubPage";

function ServicessLayout({children}) {
  return (
    <>
      <HeaderSubPage />
      {children}
      <Footer/>
    </>
  )
}

export default ServicessLayout;
