import ShowListMenu from "../ShowListMenu";

function OtherProductSmartLock() {

    const SmartLockList = [
        {
          title: "Lock",
          Image: "/image/tis-group/tis-air/controllers/ADS-Controller.jpg",
        }
      ];
      return <ShowListMenu list={SmartLockList} />;

}

export default OtherProductSmartLock;
