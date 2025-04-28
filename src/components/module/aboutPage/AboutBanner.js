import Image from "next/image";
import Link from "next/link";

function AboutBanner() {
  return (
    <div className="w-full h-[20vh] sm:h-[40vh] relative border-4">
      <Image
        src={`/image/about/about-banner.jpg`}
        width={1000}
        height={700}
        alt="about banner"
        className="w-full h-full object-cover absolute z-[-1] brightness-75"
      />
      <div className="container max-w-screen-xl sm:h-full">
        <div className="w-full h-full flex items-center gap-[10px]">
        <span className="text-[1.1rem] text-textWhite">
            <Link href="/">صفحه اصلی</Link>
          </span>
          <span className="text-[1.1rem] text-textWhite">/</span>
          <span className="text-[2rem] text-yellowTisBee">درباره ما</span>
          
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
