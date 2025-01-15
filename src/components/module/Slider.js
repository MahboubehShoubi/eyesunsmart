// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "animate.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Slider({ silderInfo : {imageList} }) {

  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        effect={"fade"}
        speed={2000}
        dir="rtl"
        navigation={{ clickable: true }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="w-full h-full"
      >
        {imageList.map((slider , index) => (
          <SwiperSlide className="w-full h-full relative" key={index}>
            <Image
              src={slider}
              width={1000}
              height={700}
              alt="bg-image"
              className="h-full w-full object-cover absolute z-[-1] "
            />
            <div className="w-full h-full flex flex-col justify-center items-center">
              <div className="w-full h-fit flex flex-col justify-start px-20 gap-y-3 md:gap-y-5">
                {/* <h1 className="text-textWhite text-[14px] md:text-[1.2rem] animate__animated animate__fadeInDown animate__delay-1s">{slider.title}</h1> */}
                {/* <p className="text-textWhite text-[1.5rem] md:text-[3rem] animate__animated animate__fadeInRight animate__delay-2s	">{slider.text}</p> */}
                {/* <Link href={slider.link} className=" text-textWhite text-[14px] md:text-[1rem] bg-secondery w-fit inline-block px-8 py-2 md:px-10 md:py-3 rounded-full animate__animated animate__zoomIn animate__delay-3s	">ادامه مطلب</Link> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
