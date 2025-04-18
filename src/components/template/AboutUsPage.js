import AboutBanner from "@/module/aboutPage/AboutBanner";
import AboutInformation from "@/module/aboutPage/AboutInformation";

function AboutUsPage() {
  return (
    <div className="w-full">
      <AboutBanner />
      <div className=" container max-w-screen-xl">
        <AboutInformation />
      </div>
    </div>
  );
}

export default AboutUsPage;
