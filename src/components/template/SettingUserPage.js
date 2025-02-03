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
    <div>
      <div className="pt-[50px]">
        <h2 className="text-textWhite bg-garyTisLock px-5 py-2 text-[1.7rem] w-full">
          مدیریت کاربران جدید
        </h2>
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
