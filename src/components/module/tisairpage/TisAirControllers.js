import Image from "next/image"

function TisAirControllers() {
  return (
    <div className=" w-fit p-10 flex">
      <div className="w-fit p-5 flex flex-col items-center">
        <Image
          src="/image/tis-group/tis-air/controllers/ADS-Controller.jpg"
          className="w-[150px]"
          width={1000}
          height={700}
          alt="panel-img"
        />
        <p>ADS-Controller</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <Image
          src="/image/tis-group/tis-air/controllers/ACM-Switch.jpg"
          className="w-[150px]"
          width={1000}
          height={700}
          alt="panel-img"
        />
        <p>ACM Switch</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <Image
          src="/image/tis-group/tis-air/controllers/AIR-Socket.jpg"
          className="w-[150px]"
          width={1000}
          height={700}
          alt="panel-img"
        />
        <p>AIR Socket</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <Image
          src="/image/tis-group/tis-air/controllers/AIR-IR-Emitter.jpg"
          className="w-[150px]"
          width={1000}
          height={700}
          alt="panel-img"
        />
        <p>AIR IR Emitter</p>
      </div>
      <div className="w-fit p-5 flex flex-col items-center">
        <Image
          src="/image/tis-group/tis-air/controllers/TRV-Controller.jpg"
          className="w-[150px]"
          width={1000}
          height={700}
          alt="panel-img"
        />
        <p>TRV Controller</p>
      </div>
    </div>
  )
}

export default TisAirControllers
