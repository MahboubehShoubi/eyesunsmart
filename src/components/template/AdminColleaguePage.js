"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import SearchUser from "@/module/SearchUser";
import CardUser from "@/module/CardUser";

function AdminColleaguePage({ colleagueData }) {
  const [searchColleagueData, setSearchColleagueData] = useState(null);

  useEffect(() => {
    console.log("searchColleagueData updated:", searchColleagueData);
  }, [searchColleagueData]);

  return (
    <div>
      <SearchUser
        usersData={colleagueData}
        searchUserData={searchColleagueData}
        setSearchUserData={setSearchColleagueData}
        title="همکار"
      />

      <div>
        {searchColleagueData ? (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            <CardUser
              key={searchColleagueData.id}
              userData={searchColleagueData}
            />
          </div>
        ) : (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            {colleagueData.map((user) => (
              <CardUser key={user.id} userData={user} />
            ))}
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default AdminColleaguePage;
