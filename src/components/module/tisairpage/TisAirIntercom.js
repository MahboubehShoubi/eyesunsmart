import Image from "next/image";

import 'animate.css';


function TisAirIntercom() {
  return (
    <div className=" w-fit p-10 flex animate__animated animate__zoomIn">
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/intercom/7-Touch-Screen.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>7-Touch Screen</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/intercom/Outdoor-Tower.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>Outdoor Tower</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/intercom/Outdoor-Building.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>Outdoor Building</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/intercom/Outdoor-Unit.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>Outdoor Unit</p>
      </div>
    </div>
  );
}

export default TisAirIntercom;
