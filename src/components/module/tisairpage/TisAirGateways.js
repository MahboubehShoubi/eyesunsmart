import Image from "next/image"

function TisAirGateways() {
  return (
    <div className=" w-fit p-10 flex">
    <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
      <div className="w-[150px] h-[250px] flex justify-center items-center">
        <Image
          src="/image/tis-group/tis-air/gateways/Modbus-VRF-UPB-Gateway.jpg"
          className="w-full hover:scale-150 transition-all duration-700"
          width={1000}
          height={700}
          alt="panel-img"
        />
      </div>
      <p>Modbus VRF UPB Gateway</p>
    </div>
    <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
      <div className="w-[150px] h-[250px] flex justify-center items-center">
        <Image
          src="/image/tis-group/tis-air/gateways/AIR-BUS-CONVERTER.jpg"
          className="w-full hover:scale-150 transition-all duration-700"
          width={1000}
          height={700}
          alt="panel-img"
        />
      </div>
      <p>AIR BUS CONVERTER</p>
    </div>
  </div>
  )
}

export default TisAirGateways
