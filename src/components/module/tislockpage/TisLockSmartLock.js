import ShowListMenu from "../ShowListMenu";

function TisLockSmartLock() {
    const SmartLockList = [
        {
          title: "TIS-K710",
          Image: "/image/tis-group/tis-lock/smart-lock/TIS-K710.jpg",
        },
        {
          title: "TIS-H168",
          Image: "/image/tis-group/tis-lock/smart-lock/TIS-H168.jpg",
        },
        {
          title: "TIS-A270",
          Image: "/image/tis-group/tis-lock/smart-lock/TIS-A270.jpg",
        },
        {
          title: "TIS-A233",
          Image: "/image/tis-group/tis-lock/smart-lock/TIS-A233.jpg",
        },
        {
          title: "TIS-A210",
          Image: "/image/tis-group/tis-lock/smart-lock/TIS-A210.jpg",
        },
      ];
    
      return <ShowListMenu list={SmartLockList} first="TisLock" second="SmartLock"/>;
}

export default TisLockSmartLock;
