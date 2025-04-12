import ShowListMenu from "../ShowListMenu";

function TisLockHotelLock() {
  const HotelLockList = [
    {
      title: "TIS-E908",
      Image: "/image/tis-group/tis-lock/hotel-lock/TIS-E908.jpg",
    },
    {
      title: "TIS-S181",
      Image: "/image/tis-group/tis-lock/hotel-lock/TIS-S181.jpg",
    },
    {
      title: "TIS-E901",
      Image: "/image/tis-group/tis-lock/hotel-lock/TIS-E901.jpg",
    },
    {
      title: "TIS-E300",
      Image: "/image/tis-group/tis-lock/hotel-lock/TIS-E300.jpg",
    },
    {
      title: "TIS-E200",
      Image: "/image/tis-group/tis-lock/hotel-lock/TIS-E200.jpg",
    },
  ];

  return <ShowListMenu list={HotelLockList} first="TisLock" second="HotelLock"/>;
}

export default TisLockHotelLock;
