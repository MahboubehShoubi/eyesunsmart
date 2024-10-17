import ShowListMenu from "../ShowListMenu";


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

  return <ShowListMenu list={SensorList} />;

}

export default TisAirSensor;
