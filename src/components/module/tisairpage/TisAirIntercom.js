
import ShowListMenu from "../ShowListMenu";

function TisAirIntercom() {
  const IntercomList = [
    {
      title: "7-Touch Screen",
      Image: "/image/tis-group/tis-air/intercom/7-Touch-Screen.jpg",
    },
    {
      title: "Outdoor Tower",
      Image: "/image/tis-group/tis-air/intercom/Outdoor-Tower.jpg",
    },
    {
      title: "Outdoor Building",
      Image: "/image/tis-group/tis-air/intercom/Outdoor-Building.jpg",
    },
    {
      title: "Outdoor Unit",
      Image: "/image/tis-group/tis-air/intercom/Outdoor-Unit.jpg",
    },
  ];

  return <ShowListMenu list={IntercomList} />;

}

export default TisAirIntercom;
