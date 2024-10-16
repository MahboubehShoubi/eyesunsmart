import Image from "next/image";

import "animate.css";

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

  return (
    <div className=" w-fit p-10 flex animate__animated animate__zoomIn">
      {GatewaysList.map((item) => (
        <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
          <div className="w-[150px] h-[250px] flex justify-center items-center">
            <Image
              src={item.Image}
              className="w-full hover:scale-150 transition-all duration-[1500ms]"
              width={1000}
              height={700}
              alt="panel-img"
            />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TisAirGateways;
