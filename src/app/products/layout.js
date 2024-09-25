import Footer from "@/layout/Footer"
import HeaderMain from "@/layout/HeaderMain"

function layout({children}) {
  return (
    <>
    <HeaderMain />
    <div>{children}</div>
    <Footer />
    </>
  )
}

export default layout
