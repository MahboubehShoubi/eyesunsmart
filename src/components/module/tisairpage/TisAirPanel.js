
import ShowListMenu from "../ShowListMenu";

function TisAirPanel() {
  const PanelList = [
    {
      title: "Venera Switch",
      Image: "/image/tis-group/tis-air/panel/venera-switch.jpg",
    },
    {
      title: "Venera Dimmer",
      Image: "/image/tis-group/tis-air/panel/venera-dimmer.jpg",
    },
    {
      title: "Venera Thermostat",
      Image: "/image/tis-group/tis-air/panel/venera-thermostat.jpg",
    },
  ];

  return <ShowListMenu list={PanelList} first="TisAir" second="Panel"/>;

}

export default TisAirPanel;
