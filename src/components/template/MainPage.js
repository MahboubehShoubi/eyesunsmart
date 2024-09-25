import MainAbout from "@/module/mainpage/MainAbout";
import MainDownload from "@/module/mainpage/MainDownload";
import MainOurProject from "@/module/mainpage/MainOurProject";
import MainServicess from "@/module/mainpage/MainServicess";
import MainSettingUp from "@/module/mainpage/MainSettingUp";

function MainPage() {
  return (
    <>
      <MainServicess />
      <MainAbout />
      <MainSettingUp />
      <MainDownload />
      <MainOurProject />
    </>
  )
}

export default MainPage
