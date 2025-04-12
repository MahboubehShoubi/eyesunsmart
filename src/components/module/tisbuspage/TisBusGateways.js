import ShowListMenu from "../ShowListMenu";

function TisBusGateways() {
  const GatewaysList = [
    {
      title: "232_485",
      Image: "/image/tis-group/tis-bus/Gateways/232_485.jpg",
    },
    {
      title: "1AC-GTY",
      Image: "/image/tis-group/tis-bus/Gateways/1AC-GTY.jpg",
    },
    {
      title: "VRF AC GATEWAY",
      Image: "/image/tis-group/tis-bus/Gateways/VRF-AC-GATEWAY.jpg",
    },
    {
      title: "Modbus VRF UPB-Gateway",
      Image: "/image/tis-group/tis-bus/Gateways/Modbus-VRF-UPB-Gateway.jpg",
    },
    {
      title: "AIR BUS CONVERTER",
      Image: "/image/tis-group/tis-bus/Gateways/AIR-BUS-CONVERTER.jpg",
    },
    {
      title: "KNX Gateway",
      Image: "/image/tis-group/tis-bus/Gateways/KNX-Gateway.jpg",
    },
  ];

  return <ShowListMenu list={GatewaysList} first="TisBus" second="Gateways"/>;
}

export default TisBusGateways;
