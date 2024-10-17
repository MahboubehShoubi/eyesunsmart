import ShowListMenu from "../ShowListMenu";

function TisAirGateways() {
  const GatewaysList = [
    {
      title: "Modbus VRF UPB Gateway",
      Image: "/image/tis-group/tis-air/gateways/Modbus-VRF-UPB-Gateway.jpg",
    },
    {
      title: "AIR BUS CONVERTER",
      Image: "/image/tis-group/tis-air/gateways/AIR-BUS-CONVERTER.jpg",
    },
  ];

  return <ShowListMenu list={GatewaysList} />;

}

export default TisAirGateways;
