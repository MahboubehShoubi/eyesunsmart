import ShowListMenu from "../ShowListMenu";

function TisBusMeters() {
    const MetersList = [
        {
          title: "Water Meter",
          Image: "/image/tis-group/tis-bus/Meters/Water-Meter.jpg",
        },
        {
          title: "3Phase Energy Meter",
          Image: "/image/tis-group/tis-bus/Meters/3Phase-Energy-Meter.jpg",
        },
        {
          title: "Energy Meter",
          Image: "/image/tis-group/tis-bus/Meters/Energy-Meter.jpg",
        },
        {
          title: "Weather Station",
          Image: "/image/tis-group/tis-bus/Meters/Weather-Station.jpg",
        },
      ];
    
      return <ShowListMenu list={MetersList} first="TisBus" second="Meters"/>;
}

export default TisBusMeters;
