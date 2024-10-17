import ShowListMenu from "../ShowListMenu";

function TisBusSensors() {
  const SensorsList = [
    {
      title: "Occupancy Sensor",
      Image: "/image/tis-group/tis-bus/Sensors/Occupancy-Sensor.jpg",
    },
    {
      title: "Health Sensor",
      Image: "/image/tis-group/tis-bus/Sensors/Health-Sensor.jpg",
    },
    {
      title: "10Function Sensor",
      Image: "/image/tis-group/tis-bus/Sensors/10-Function-Sensor.jpg",
    },
    {
      title: "Motion Sensor",
      Image: "/image/tis-group/tis-bus/Sensors/Motion-Sensor.jpg",
    },
    {
      title: "Water leak Sensor",
      Image: "/image/tis-group/tis-bus/Sensors/Water-leak-Sensor.jpg",
    },
  ];

  return <ShowListMenu list={SensorsList} />;
}

export default TisBusSensors;
