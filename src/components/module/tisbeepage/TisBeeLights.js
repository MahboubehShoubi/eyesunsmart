import Image from "next/image";
import ShowListMenu from "../ShowListMenu";

function TisBeeLights() {
  const LightsList = [
    {
      title: "RGBW-Bulb",
      Image: "/image/tis-group/tis-bee/Lights/RGBW-Bulb.jpg",
    },
  ];
  return (
    <div className=" w-full py-10 flex justify-center animate__animated animate__zoomIn ">
      {LightsList.map((item) => (
        <div className="w-[45%] md:w-[12%] h-[260px] flex flex-col items-center hover:cursor-pointer overflow-hidden shadow-lg md:shadow-none">
          <div className="w-[80%] md:w-[90%] h-[240px] flex justify-center items-center">
            <Image
              src={item.Image}
              className="w-full hover:scale-125 md:hover:scale-[140%] transition-all duration-[1500ms]"
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

export default TisBeeLights;
