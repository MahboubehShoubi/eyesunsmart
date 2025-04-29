import Image from "next/image";
import Link from "next/link";

function AboutBanner() {
  return (
    <div className="w-full h-[20vh] sm:h-[40vh] relative">
      <Image
        src={`/image/about/about-banner.jpg`}
        width={1000}
        height={700}
        alt="about banner"
        className="w-full h-full object-cover absolute z-[-1] brightness-75"
      />
      <div className="container sm:max-w-screen-xl h-full">
        <div className="w-full h-1/2 sm:h-full flex items-baseline sm:items-center gap-[10px] p-5 sm:p-0">
        <span className=" text-[0.9rem] sm:text-[1.1rem] text-textWhite">
            <Link href="/">صفحه اصلی</Link>
          </span>
          <span className="text-[0.8rem] sm:text-[1.1rem] text-textWhite">/</span>
          <span className="text-[1.2rem] sm:text-[2rem] text-yellowTisBee">درباره ما</span>
          
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
