import Image from "next/image";

function TisAirSensor() {
  return (
    <div className=" w-fit p-10 flex items-center">
      <div className="w-fit p-5 flex flex-col items-center">
      <div className="w-[150px] h-[250px] flex justify-center items-center">
        <Image
          src="/image/tis-group/tis-air/sensors/motion-sensor.jpg"
          className="w-full"
          width={1000}
          height={700}
          alt="panel-img"
        />
        </div>
        <p>Motion Sensor</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
      <div className="w-[150px] h-[250px] flex justify-center items-center">
        <Image
          src="/image/tis-group/tis-air/sensors/10Functiion-Sensor.jpg"
          className="w-full"
          width={1000}
          height={700}
          alt="panel-img"
        />
        </div>
        <p>10Functiion Sensor</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/sensors/3Digital-Input.jpg"
            className="w-full"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>3Digital Input</p>
      </div>
    </div>
  );
}

export default TisAirSensor;
