import ShowListMenu from "../ShowListMenu";

function OtherProductSensors() {
    const SensorsList = [
        {
          title: "CO Detector",
          Image: "/image/tis-group/tis-air/controllers/ADS-Controller.jpg",
        },
        {
          title: "Smook Detector",
          Image: "/image/tis-group/tis-air/controllers/ACM-Switch.jpg",
        },
        {
          title: "Motion Sensor",
          Image: "/image/tis-group/tis-air/controllers/ACM-Switch.jpg",
        },
      ];
      return <ShowListMenu list={SensorsList} first="OtherProduct" second="Sensors"/>;
}

export default OtherProductSensors;
