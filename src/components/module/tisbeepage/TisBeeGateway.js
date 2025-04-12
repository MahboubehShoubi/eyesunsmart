import Image from "next/image";
import ShowListMenu from "../ShowListMenu";
import Link from "next/link";

function TisBeeGateway() {
  const GatewayList = [
    {
      title: "Zigbee-BUS Hub",
      Image: "/image/tis-group/tis-bee/Gateway/Zigbee-BUS-Hub.jpg",
    },
  ];
  return (
    <div className=" w-full py-10 flex justify-center animate__animated animate__zoomIn ">
      {GatewayList.map((item) => (
        <Link
        key={item.id}
        href={`/products/product?first=TisBee&second=Gateway&third=${item.title}`}
        className="w-[45%] md:w-[15%] h-[260px] md:h-[190px]"
      >
        <div className="flex flex-col items-center hover:cursor-pointer overflow-hidden shadow-lg md:shadow-none">
          <div className="w-[90%] md:w-[85%] h-[240px] md:h-[160px] flex justify-center items-center">
            <Image
              src={item.Image}
              className="w-full hover:scale-125 md:hover:scale-[135%] transition-all duration-[1500ms]"
              width={1000}
              height={700}
              alt="panel-img"
            />
          </div>
          <p className="w-full text-center">{item.title}</p>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default TisBeeGateway;
