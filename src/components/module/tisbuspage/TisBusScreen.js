import ShowListMenu from "../ShowListMenu";

function TisBusScreen() {
  const ScreensList = [
    {
      title: "SAT133",
      Image: "/image/tis-group/tis-bus/Screens/SAT133.jpg",
    },
    {
      title: "SAT101",
      Image: "/image/tis-group/tis-bus/Screens/SAT101.jpg",
    },
    {
      title: "SAT40",
      Image: "/image/tis-group/tis-bus/Screens/SAT40.jpg",
    },
    {
      title: "Saturn Remote",
      Image: "/image/tis-group/tis-bus/Screens/Saturn-Remote.jpg",
    },
    {
      title: "Saturn Panel",
      Image: "/image/tis-group/tis-bus/Screens/Saturn-Panel.jpg",
    },
  ];

  return <ShowListMenu list={ScreensList} first="TisBus" second="Screen"/>;
}

export default TisBusScreen;
