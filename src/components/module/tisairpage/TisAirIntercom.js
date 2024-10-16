import Image from "next/image";

import "animate.css";

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

  return (
    <div className=" w-fit p-10 flex animate__animated animate__zoomIn">
      {IntercomList.map((item) => (
        <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
          <div className="w-[150px] h-[250px] flex justify-center items-center">
            <Image
              src={item.Image}
              className="w-full hover:scale-150 transition-all duration-[1500ms]"
              width={1000}
              height={700}
              alt="panel-img"
            />
          </div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TisAirIntercom;
