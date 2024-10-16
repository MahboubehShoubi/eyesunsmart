import Image from "next/image";

import "animate.css";

function TisAirSensor() {
  const SensorList = [
    {
      title: "Motion Sensor",
      Image: "/image/tis-group/tis-air/sensors/motion-sensor.jpg",
    },
    {
      title: "10Functiion Sensor",
      Image: "/image/tis-group/tis-air/sensors/10Functiion-Sensor.jpg",
    },
    {
      title: "3Digital Input",
      Image: "/image/tis-group/tis-air/sensors/3Digital-Input.jpg",
    },
  ];

  return (
    <div className=" w-fit p-10 flex animate__animated animate__zoomIn">
      {SensorList.map((item) => (
        <div className="w-fit p-5 flex flex-col items-center">
          <div className="w-[150px] h-[250px] flex justify-center items-center hover:cursor-pointer">
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

export default TisAirSensor;
