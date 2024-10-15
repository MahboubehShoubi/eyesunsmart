import Image from "next/image";

function TisAirPanel() {
  return (
    <div className=" w-fit p-10 flex">
      <div className="w-fit p-5 flex flex-col items-center">
        <Image
          src="/image/tis-group/tis-air/panel/venera-switch.jpg"
          className="w-[150px]"
          width={1000}
          height={700}
          alt="panel-img"
        />
        <p>Venera Switch</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <Image
          src="/image/tis-group/tis-air/panel/venera-dimmer.jpg"
          className="w-[150px]"
          width={1000}
          height={700}
          alt="panel-img"
        />
        <p>Venera Dimmer</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <Image
          src="/image/tis-group/tis-air/panel/venera-thermostat.jpg"
          className="w-[150px]"
          width={1000}
          height={700}
          alt="panel-img"
        />
        <p>Venera Thermostat</p>
      </div>
    </div>
  );
}

export default TisAirPanel;
