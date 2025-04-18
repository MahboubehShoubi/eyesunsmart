import AboutBanner from "@/module/aboutPage/AboutBanner";
import AboutInformation from "@/module/aboutPage/AboutInformation";
import MainProduct from "@/module/mainpage/MainProduct";

function AboutUsPage() {
  return (
    <div className="w-full">
      <AboutBanner />
      <AboutInformation />
      <div className=" container max-w-screen-xl">
        {/* <Image src={`/image/about/shape.png`} width={1000} height={700} alt="image"/> */}
        
        <MainProduct />
      </div>
    </div>
  );
}

export default AboutUsPage;
