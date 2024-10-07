import HeaderSubPage from "@/layout/HeaderSubPage";
import Footer from "@/layout/Footer";

function layout({children}) {
  return (
    <>
    <HeaderSubPage />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default layout
