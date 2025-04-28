import AboutBanner from "@/module/aboutPage/AboutBanner";
import AboutInformation from "@/module/aboutPage/AboutInformation";
import MainProduct from "@/module/mainpage/MainProduct";
import MainSettingUp from "@/module/mainpage/MainSettingUp";

function AboutUsPage() {
  return (
    <div className="w-full sm:mt-40 mt-20">
      <AboutBanner />
      <AboutInformation />
      <MainSettingUp />
      <MainProduct />


      {/* <div className=" container max-w-screen-xl">
        <Image src={`/image/about/shape.png`} width={1000} height={700} alt="image"/>
      </div> */}
    </div>
  );
}

export default AboutUsPage;
