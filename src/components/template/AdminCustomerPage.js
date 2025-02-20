"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import CardUser from "@/module/CardUser";
import SearchUser from "@/module/SearchUser";

function AdminCustomerPage({ customerData }) {
  const [searchCustomerData, setSearchCustomerData] = useState(null);

  useEffect(() => {
    console.log("searchUserData updated:", searchCustomerData);
  }, [searchCustomerData]);

  return (
    <div>
      <SearchUser
        usersData={customerData}
        searchUserData={searchCustomerData}
        setSearchUserData={setSearchCustomerData}
        title="مشتری"
      />

      <div>
        {searchCustomerData ? (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            <CardUser
              key={searchCustomerData.id}
              userData={searchCustomerData}
            />
          </div>
        ) : (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            {customerData.map((user) => (
              <CardUser key={user.id} userData={user} />
            ))}
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default AdminCustomerPage;
