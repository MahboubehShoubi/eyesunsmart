import Footer from "@/layout/Footer";
import HeaderSubPage from "@/layout/HeaderSubPage";

function EducationLayout({children}) {
  return (
    <>
      <HeaderSubPage />
      {children}
      <Footer/>
    </>
  )
}

export default EducationLayout;
