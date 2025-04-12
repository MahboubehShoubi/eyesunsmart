import ShowListMenu from "../ShowListMenu";

function TisBusRelays() {
  const RelaysList = [
    {
      title: "Relays",
      Image: "/image/tis-group/tis-bus/Relays/Relays.jpg",
    },
    {
      title: "HVAC",
      Image: "/image/tis-group/tis-bus/Relays/HVAC.jpg",
    },
    {
      title: "Mini Relay",
      Image: "/image/tis-group/tis-bus/Relays/Mini-Relay.jpg",
    },
    {
      title: "Rcu Controller",
      Image: "/image/tis-group/tis-bus/Relays/Rcu-Controller.jpg",
    },
  ];

  return <ShowListMenu list={RelaysList} first="TisBus" second="Relays"/>;
}

export default TisBusRelays;
