import MainAbout from "@/module/mainpage/MainAbout";
import MainBannerSlider from "@/module/mainpage/MainBannerSlider";
import MainDownload from "@/module/mainpage/MainDownload";
import MainOurProject from "@/module/mainpage/MainOurProject";
import MainProduct from "@/module/mainpage/MainProduct";
import MainServicess from "@/module/mainpage/MainServicess";
import MainSettingUp from "@/module/mainpage/MainSettingUp";

function MainPage() {
  return (
    <>
      <MainBannerSlider />
      <MainServicess />
      <MainAbout />
      <MainSettingUp main={true} />
      <MainDownload />
      <MainOurProject />
      <MainProduct />
    </>
  );
}

export default MainPage;
