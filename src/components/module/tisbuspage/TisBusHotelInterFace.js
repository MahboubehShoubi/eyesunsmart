import Image from "next/image";

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
  return (
    <div className=" w-fit p-10 flex animate__animated animate__zoomIn">
      {HotelInterFaceList.map((item) => (
        <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
          <div className="w-[150px] h-[200px] flex justify-center items-center">
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

export default TisBusHotelInterFace;
