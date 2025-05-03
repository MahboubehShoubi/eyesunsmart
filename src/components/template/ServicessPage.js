import MainServicess from "@/module/mainpage/MainServicess";
import ServicessBanner from "@/module/servicessPage/ServicessBanner";
import ServicessMainSection from "@/module/servicessPage/ServicessMainSection";
import ProjectCounter from "@/module/ProjectCounter";
import ContactBoxSection from "@/module/ContactBoxSection";

function ServicessPage() {
  return (
    <>
      <ServicessBanner />
      <MainServicess />
      <ServicessMainSection />
      <ProjectCounter />
      <ContactBoxSection />
    </>
  );
}

export default ServicessPage;
