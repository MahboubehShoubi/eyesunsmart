import ShowListMenu from "../ShowListMenu";

function TisBeeGateway() {
  const GatewayList = [
    {
      title: "Zigbee-BUS Hub",
      Image: "/image/tis-group/tis-bee/Gateway/Zigbee-BUS-Hub.jpg",
    },
  ];
  return <ShowListMenu list={GatewayList} />;
}

export default TisBeeGateway;
