import Footer from "@/layout/Footer";
import HeaderSubPage from "@/layout/HeaderSubPage";

function AboutUsLayout({children}) {
  return (
    <>
      <HeaderSubPage />
      {children}
      <Footer/>
    </>
  )
}

export default AboutUsLayout;
