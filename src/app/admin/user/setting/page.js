import React from "react";
import SettingUserPage from "@/template/SettingUserPage";

function user() {
  
  const usersDetail = [
    {
      id: "01",
      fullName: "محبوبه شوبی",
      phone: "09112223344",
      email: "mah@gmail.com",
      idCode: "111112222",
      job: "آزاد",
      age: "20",
      province: "مازندران",
      city: "چالوس",
      role: "ADMIN",
      status: "pendding",
    },
    {
      id: "02",
      fullName: "نیما بذری ",
      phone: "09112223344",
      email: "nima@gmail.com",
      idCode: "33334444",
      job: "آزاد",
      age: "35",
      province: "مازندران",
      city: "بابل",
      role: "USER",
      status: "pendding",
    },
  ];

  return <SettingUserPage usersData={usersDetail} />;
}

export default user;
