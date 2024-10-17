import Image from "next/image";

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

  return (
    <div className=" w-fit p-10 flex animate__animated animate__zoomIn">
      {ScreensList.map((item) => (
        <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
          <div className="w-[130px] h-[200px] flex justify-center items-center">
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

export default TisBusScreen;
