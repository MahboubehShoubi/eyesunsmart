import MainAbout from "@/module/mainpage/MainAbout";
import MainOurProject from "@/module/mainpage/MainOurProject";
import MainServicess from "@/module/mainpage/MainServicess";
import MainSettingUp from "@/module/mainpage/MainSettingUp";

function MainPage() {
  return (
    <>
      <MainServicess />
      <MainAbout />
      <MainSettingUp />
      <MainOurProject />
    </>
  )
}

export default MainPage
