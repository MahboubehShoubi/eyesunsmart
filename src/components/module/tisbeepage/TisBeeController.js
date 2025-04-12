import ShowListMenu from "../ShowListMenu";

function TisBeeController() {
  const ControllerList = [
    {
      title: "Zigbee Motor",
      Image: "/image/tis-group/tis-bee/Controller/Zigbee-Motor.jpg",
    },
    {
      title: "Plug (UK/EU)",
      Image: "/image/tis-group/tis-bee/Controller/Plug(UK-EU).jpg",
    },
    {
      title: "Valve (Gas/Water)",
      Image: "/image/tis-group/tis-bee/Controller/Valve(Gas-Water).jpg",
    },
    {
      title: "Switch Module(1/2 gang)",
      Image: "/image/tis-group/tis-bee/Controller/Switch-Module(1-2gang).jpg",
    },
    {
      title: "Dimmer Module",
      Image: "/image/tis-group/tis-bee/Controller/Dimmer-Module.jpg",
    },
    {
      title: "Shutter Module",
      Image: "/image/tis-group/tis-bee/Controller/Shutter-Module.jpg",
    },
    {
      title: "RGBW Driver",
      Image: "/image/tis-group/tis-bee/Controller/RGBW-Driver.jpg",
    },
  ];
  return <ShowListMenu list={ControllerList} first="TisBee" second="Controller"/>;
}

export default TisBeeController;
