import Image from "next/image";

import 'animate.css';


function TisAirControllers() {
  return (
    <div className=" w-fit p-10 flex animate__animated animate__zoomIn">
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/controllers/ADS-Controller.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>ADS-Controller</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/controllers/ACM-Switch.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>ACM Switch</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/controllers/AIR-Socket.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>AIR Socket</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/controllers/AIR-IR-Emitter.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>AIR IR Emitter</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center hover:cursor-pointer">
        <div className="w-[150px] h-[250px] flex justify-center items-center">
          <Image
            src="/image/tis-group/tis-air/controllers/TRV-Controller.jpg"
            className="w-full hover:scale-150 transition-all duration-[1500ms]"
            width={1000}
            height={700}
            alt="panel-img"
          />
        </div>
        <p>TRV Controller</p>
      </div>
    </div>
  );
}

export default TisAirControllers;
