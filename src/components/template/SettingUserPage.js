
import CardUser from "@/module/CardUser";

// import { usePathname } from "next/navigation";

function SettingUserPage({ usersData }) {
  // const pathname = usePathname();
  // const arrayUrl = pathname.split("/");
  // const findUrl = arrayUrl.find((item) => {
  //   const isExist = item === "setting";
  //   return isExist;
  // });
  // console.log(findUrl);

  return (
    <div className="pb-[50px] w-full flex flex-col gap-y-[30px]">
      {usersData.map((user) => (
        <CardUser key={user.id} userData={user} />
      ))}
    </div>
  );
}

export default SettingUserPage;
