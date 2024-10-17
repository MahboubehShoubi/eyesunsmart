import ShowListMenu from "../ShowListMenu";

function TisBusDimmers() {
  const ScreensList = [
    {
      title: "Loading Edge Dimmer",
      Image: "/image/tis-group/tis-bus/Dimmers/Loading-Edge-Dimmer.jpg",
    },
    {
      title: "Trailing Edge Dimmer",
      Image: "/image/tis-group/tis-bus/Dimmers/Trailing-Edge-Dimmer.jpg",
    },
    {
      title: "0-10V Dimmer",
      Image: "/image/tis-group/tis-bus/Dimmers/0-10V-Dimmer.jpg",
    },
    {
      title: "DALI",
      Image: "/image/tis-group/tis-bus/Dimmers/DALI.jpg",
    },
    {
      title: "DMX",
      Image: "/image/tis-group/tis-bus/Dimmers/DMX.jpg",
    },
    {
      title: "Industrial Dimmers",
      Image: "/image/tis-group/tis-bus/Dimmers/Industrial-Dimmers.jpg",
    },
  ];

  return <ShowListMenu list={ScreensList} />;
}

export default TisBusDimmers;
