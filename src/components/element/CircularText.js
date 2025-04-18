import Image from "next/image";

function CircularText() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-[#000] rounded-full">
      {/* آیکون مرکزی */}
      <div className="absolute w-[110px] h-[110px] bg-black rounded-full flex items-center justify-center z-10">
        <span className="text-orange-500 text-xl font-bold">
          <Image
            src="/image/logo/logo.png"
            width={1000}
            height={700}
            alt="logo"
          />
        </span>
      </div>

      {/* متن دایره‌ای متحرک */}
      <svg
        className="absolute w-full h-full animate-spin-slow"
        viewBox="0 0 200 200"
      >
        <defs>
          <path
            id="circlePath"
            d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
          />
        </defs>
        <text fill="white" fontSize="12" textAnchor="middle">
          <textPath href="#circlePath" startOffset="50%" textLength="180" className="">
           خانه خو را با TIS هوشمند سازی کنید 
          </textPath>
        </text>
        
      </svg>
    </div>
  );
}

export default CircularText;
