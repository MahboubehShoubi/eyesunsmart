import ShowListMenu from "../ShowListMenu";

function TisBeeWallSwitch() {
  const WallSwitchList = [
    {
      title: "Dion Curtain Switch",
      Image: "/image/tis-group/tis-bee/Wall-Switch/Dion-Curtain-Switch.jpg",
    },
    {
      title: "Venera Zigbee Switch",
      Image: "/image/tis-group/tis-bee/Wall-Switch/Venera-Zigbee-Switch.jpg",
    },
    {
      title: "Dion Switch",
      Image: "/image/tis-group/tis-bee/Wall-Switch/Dion-Switch.jpg",
    },
    {
      title: "Dion Wall Remote",
      Image: "/image/tis-group/tis-bee/Wall-Switch/Dion-Wall-Remote.jpg",
    },
  ];
  return <ShowListMenu list={WallSwitchList} />;
}

export default TisBeeWallSwitch;
