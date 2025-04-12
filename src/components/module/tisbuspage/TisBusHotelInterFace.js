import ShowListMenu from "../ShowListMenu";

function TisBusHotelInterFace() {
  const HotelInterFaceList = [
    {
      title: "Mercury Hotel series",
      Image:
        "/image/tis-group/tis-bus/Hotel-InterFace/Mercury-Hotel-series.jpg",
    },
    {
      title: "Click Series",
      Image: "/image/tis-group/tis-bus/Hotel-InterFace/Click-Series.jpg",
    },
    {
      title: "IO Hotel Series",
      Image: "/image/tis-group/tis-bus/Hotel-InterFace/IO-Hotel-Series.jpg",
    },
    {
      title: "Luna Hotel Series",
      Image: "/image/tis-group/tis-bus/Hotel-InterFace/Luna-Hotel-Series.jpg",
    },
    {
      title: "Terre Hotel Series",
      Image: "/image/tis-group/tis-bus/Hotel-InterFace/Terre-Hotel-Series.jpg",
    },
  ];

  return <ShowListMenu list={HotelInterFaceList} first="TisBus" second="HotelInterFace"/>;

}

export default TisBusHotelInterFace;
