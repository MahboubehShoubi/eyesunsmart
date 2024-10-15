import Image from "next/image";

function TisAirPanel() {
  return (
    <div className=" w-fit p-10 flex">
      <div className="w-fit p-5 flex flex-col items-center">
        <div className="w-[150px] h-[250px] flex justify-center items-center hover:cursor-pointer">
          <Image
            src="/image/tis-group/tis-air/panel/venera-switch.jpg"
            className="w-full hover:scale-150 transition-all duration-700"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>Venera Switch</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <div className="w-[150px] h-[250px] flex justify-center items-center hover:cursor-pointer">
          <Image
            src="/image/tis-group/tis-air/panel/venera-dimmer.jpg"
            className="w-full hover:scale-150 transition-all duration-700"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>Venera Dimmer</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <div className="w-[150px] h-[250px] flex justify-center items-center hover:cursor-pointer">
          <Image
            src="/image/tis-group/tis-air/panel/venera-thermostat.jpg"
            className="w-full hover:scale-150 transition-all duration-700"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>Venera Thermostat</p>
      </div>
    </div>
  );
}

export default TisAirPanel;
