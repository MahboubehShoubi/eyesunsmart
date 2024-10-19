import ShowListMenu from "../ShowListMenu";

function TisBeeSecuritySensor() {
  const SecuritySensorList = [
    {
      title: "Door Contact",
      Image: "/image/tis-group/tis-bee/Security-Sensor/Door-Contact.jpg",
    },
    {
      title: "PIR Sensor",
      Image: "/image/tis-group/tis-bee/Security-Sensor/PIR-Sensor.jpg",
    },
    {
      title: "Smoke Detector",
      Image: "/image/tis-group/tis-bee/Security-Sensor/Smoke-Detector.jpg",
    },
    {
      title: "Gas Sensor",
      Image: "/image/tis-group/tis-bee/Security-Sensor/Gas-Sensor.jpg",
    },
    {
      title: "Water-Leak",
      Image: "/image/tis-group/tis-bee/Security-Sensor/Water-Leak.jpg",
    },
    {
      title: "CO Sensor",
      Image: "/image/tis-group/tis-bee/Security-Sensor/CO-Sensor.jpg",
    },
    {
      title: "Key-Fob",
      Image: "/image/tis-group/tis-bee/Security-Sensor/Key-Fob.jpg",
    },
    {
      title: "Siren",
      Image: "/image/tis-group/tis-bee/Security-Sensor/Siren.jpg",
    },
  ];
  return <ShowListMenu list={SecuritySensorList} />;
}

export default TisBeeSecuritySensor;
