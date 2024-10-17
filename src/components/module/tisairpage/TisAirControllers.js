import ShowListMenu from "../ShowListMenu";

function TisAirControllers() {
  const ControllersList = [
    {
      title: "ADS-Controller",
      Image: "/image/tis-group/tis-air/controllers/ADS-Controller.jpg",
    },
    {
      title: "ACM Switch",
      Image: "/image/tis-group/tis-air/controllers/ACM-Switch.jpg",
    },
    {
      title: "AIR Socket",
      Image: "/image/tis-group/tis-air/controllers/AIR-Socket.jpg",
    },
    {
      title: "AIR IR Emitter",
      Image: "/image/tis-group/tis-air/controllers/AIR-IR-Emitter.jpg",
    },
    {
      title: "TRV Controller",
      Image: "/image/tis-group/tis-air/controllers/TRV-Controller.jpg",
    },
  ];
  return <ShowListMenu list={ControllersList} />;
}

export default TisAirControllers;
