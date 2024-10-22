import Image from "next/image";

function TisBusPanels() {

  const PanelsList = [
    {
      title: "Luna Series",
      Image: "/image/tis-group/tis-bus/panels/Luna-Series.jpg",
    },
    {
      title: "Titan&Titania",
      Image: "/image/tis-group/tis-bus/panels/Titan&Titania.jpg",
    },
    {
      title: "Van Bus",
      Image: "/image/tis-group/tis-bus/panels/Van-Bus.jpg",
    },
    {
      title: "Mercury Series",
      Image: "/image/tis-group/tis-bus/panels/Mercury-Series.jpg",
    },
    {
      title: "SOL Series",
      Image: "/image/tis-group/tis-bus/panels/SOL-Series.jpg",
    },
    {
      title: "Terre Series",
      Image: "/image/tis-group/tis-bus/panels/Terre-Series.jpg",
    },
    {
      title: "Europe Series",
      Image: "/image/tis-group/tis-bus/panels/Europe-Series.jpg",
    },
    {
      title: "Sirius Series",
      Image: "/image/tis-group/tis-bus/panels/Sirius-Series.jpg",
    },
    {
      title: "Mars Series",
      Image: "/image/tis-group/tis-bus/panels/Mars-Series.jpg",
    },
  ];
  
  return (
    <div className=" w-full py-10 flex flex-wrap justify-between gap-y-10 md:flex-nowrap animate__animated animate__zoomIn ">
      {PanelsList.map((item) => (
        <div className="w-[45%] md:w-[11%] h-[260px] flex flex-col items-center hover:cursor-pointer overflow-hidden shadow-lg md:shadow-none">
          <div className="w-[80%] md:w-[90%] h-[240px] md:h-[200px] flex justify-center items-center">
            <Image
              src={item.Image}
              className="w-full hover:scale-125 md:hover:scale-150 transition-all duration-[1500ms]"
              width={1000}
              height={700}
              alt="panel-img"
            />
          </div>
          <p className="w-full text-center">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TisBusPanels;
