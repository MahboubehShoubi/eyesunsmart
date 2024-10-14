import Footer from "@/layout/Footer";
import HeaderSubPage from "@/layout/HeaderSubPage";

function ProjectsLayout({children}) {
  return (
    <>
      <HeaderSubPage />
      {children}
      <Footer/>
    </>
  )
}

export default ProjectsLayout;