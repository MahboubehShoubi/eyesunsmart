"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CardUser from "@/module/CardUser";
import SearchUser from "@/module/SearchUser";


function AllUserPage({ usersData }) {
  

  const [searchUserData, setSearchUserData] = useState(null);

  
  useEffect(() => {
    console.log("searchUserData updated:", searchUserData);
  }, [searchUserData]);

  return (
    <>
      <SearchUser
        usersData={usersData}
        searchUserData={searchUserData}
        setSearchUserData={setSearchUserData}
        title="کاربر"
      />
      

      {/* نمایش نتیجه */}
      <div>
        {searchUserData ? (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            <CardUser key={searchUserData.id} userData={searchUserData} />
          </div>
        ) : (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            {usersData.map((user) => (
              <CardUser key={user.id} userData={user} />
            ))}
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
}

export default AllUserPage;
