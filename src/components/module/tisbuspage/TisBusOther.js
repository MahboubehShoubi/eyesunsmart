import ShowListMenu from "../ShowListMenu";

function TisBusOther() {
  const OtherList = [
    {
      title: "Remote Control",
      Image: "/image/tis-group/tis-bus/Other/Remote-Control.jpg",
    },
    {
      title: "Power Supply",
      Image: "/image/tis-group/tis-bus/Other/Power-Supply.jpg",
    },
    {
      title: "Cable Manager",
      Image: "/image/tis-group/tis-bus/Other/Cable-Manager.jpg",
    },
    {
      title: "IR Learner",
      Image: "/image/tis-group/tis-bus/Other/IR-Learner.jpg",
    },
    {
      title: "Accessories",
      Image: "/image/tis-group/tis-bus/Other/Accessories.jpg",
    },
    {
      title: "Distributor Box",
      Image: "/image/tis-group/tis-bus/Other/Distributor-Box.jpg",
    },
    {
      title: "Panel Addition",
      Image: "/image/tis-group/tis-bus/Other/Panel-Addition.jpg",
    },
  ];

  return <ShowListMenu list={OtherList} />;
}

export default TisBusOther;
