import Image from "next/image";
import Link from "next/link";

function MainAbout() {
  return (
    <div className=" relative w-full h-fit py-[20px] mt-[50px] md:mt-[100px] md:h-screen">
      <Image
        className=" absolute z-[-10] w-full h-full object-cover"
        src="/image/background/background-3.jpg"
        width={1000}
        height={800}
        alt="background"
      />
      <div className="container md:max-w-screen-xl md:h-screen flex flex-col md:flex-row">
        <div className=" relative w-screen md:w-[50%] h-full">
          <div className="absolute z-[-2] w-full h-full flex justify-center items-center">
            <div className="bg-secondery w-[60%] h-[50%] rounded-3xl"></div>
          </div>
          <div className="md:w-full md:h-full grid  w-full grid-cols-12 grid-rows-[10vh_30vh_20vh_30vh_10vh] px-5">
            <div className="col-start-6 col-end-13 row-start-2 row-end-4 rounded-3xl
             overflow-hidden border-4 border-textWhite">
              <Image
                className="object-cover h-full w-full"
                src="/image/main/main-about/MainAbout-1.jpg"
                width={1000}
                height={800}
                alt="image"
              />
            </div>
            <div className="z-[-1] col-start-1 col-end-8 row-start-3 row-end-5 rounded-3xl
             overflow-hidden border-4 border-textWhite">
              <Image
                className="object-cover h-full w-full"
                src="/image/main/main-about/MainAbout-2.jpg"
                width={1000}
                height={800}
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="w-screen md:w-[50%] h-full px-5 md:py-[15vh] ">
          <h3 className="md:text-[1.2rem] text-secondery">درباره‌ی ما</h3>
          <h4 className=" text-[2.5rem] md:text-[3rem] mt-[30px]">
            پیشگام در آینده زندگی هوشمند
          </h4>
          <p  className="mt-[20px] text-textGray text-[14px] md:text-[1rem]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد 
          </p>
          <div className="w-full flex justify-around mt-10">
            <div className="flex flex-col items-center w-fit">
              <span className="text-[3rem]">50</span>
              <span>پروژهای تمام شده</span>
            </div>
            <div className="flex flex-col items-center w-fit">
              <span className="text-[3rem]">50</span>
              <span>پروژهای در حال بررسی</span>
            </div>
          </div>
          <Link href="/about" className="text-textWhite bg-secondery inline-block px-10 py-4 rounded-full mt-10
           hover:bg-navyBlue hover:scale-[90%] duration-700">ادامه مطلب</Link>
        </div>
      </div>
    </div>
  );
}

export default MainAbout;
