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
    <div >
      <div>
        <h2 className="text-textWhite bg-grayTisAir px-3 py-1 text-[1.5rem]">مدیریت کاربران جدید</h2>
      </div>
      <div className="py-[30px] w-full flex flex-col gap-y-[30px]">
        {usersData.map((user) => (
          <CardUser key={user.id} userData={user} />
        ))}
      </div>
    </div>
  );
}

export default SettingUserPage;
