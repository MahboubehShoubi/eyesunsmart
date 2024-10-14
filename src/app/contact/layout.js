import Footer from "@/layout/Footer";
import HeaderSubPage from "@/layout/HeaderSubPage";

function ContactLayout({children}) {
  return (
    <>
      <HeaderSubPage />
      {children}
      <Footer/>
    </>
  )
}

export default ContactLayout;
