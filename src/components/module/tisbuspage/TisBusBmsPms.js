import ShowListMenu from "../ShowListMenu";

function TisBusBmsPms() {
  const BmsPmsList = [
    {
      title: "22DL",
      Image: "/image/tis-group/tis-bus/BMS-PMS/22DL.jpg",
    },
    {
      title: "0-10V Input",
      Image: "/image/tis-group/tis-bus/BMS-PMS/0-10V-Input.jpg",
    },
    {
      title: "4-20mA Module",
      Image: "/image/tis-group/tis-bus/BMS-PMS/4-20mA-Module.jpg",
    },
    {
      title: "4-Zone Input",
      Image: "/image/tis-group/tis-bus/BMS-PMS/4-Zone-Input.jpg",
    },
    {
      title: "4Temperature Sensor",
      Image: "/image/tis-group/tis-bus/BMS-PMS/4Temperature-Sensor.jpg",
    },
    {
      title: "Aut Timer",
      Image: "/image/tis-group/tis-bus/BMS-PMS/Aut-Timer.jpg",
    },
    {
      title: "Security Module",
      Image: "/image/tis-group/tis-bus/BMS-PMS/Security-Module.jpg",
    },
  ];

  return <ShowListMenu list={BmsPmsList} first="TisBus" second="BmsPms"/>;
}

export default TisBusBmsPms;
