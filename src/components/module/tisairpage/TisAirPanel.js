import Image from "next/image";

import "animate.css";

function TisAirPanel() {
  const PanelList = [
    {
      title: "Venera Switch",
      Image: "/image/tis-group/tis-air/panel/venera-switch.jpg",
    },
    {
      title: "Venera Dimmer",
      Image: "/image/tis-group/tis-air/panel/venera-dimmer.jpg",
    },
    {
      title: "Venera Thermostat",
      Image: "/image/tis-group/tis-air/panel/venera-thermostat.jpg",
    },
  ];

  return (
    <div className=" w-fit p-10 flex animate__animated animate__zoomIn">
      {PanelList.map((item) => (
        <div className="w-fit p-5 flex flex-col items-center">
          <div className="w-[150px] h-[250px] flex justify-center items-center hover:cursor-pointer">
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

export default TisAirPanel;
