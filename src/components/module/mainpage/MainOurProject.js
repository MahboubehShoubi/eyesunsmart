import Image from "next/image";
import Link from "next/link";

function MainOurProject() {
  return (
    <div className=" relative w-full h-screen md:h-fit">
      <Image
        className=" absolute z-[-10] w-full h-full object-cover"
        src="/image/main/main-our-project/background.jpg"
        width={1000}
        height={800}
        alt="background"
      />
      <div className=" container md:max-w-screen-xl py-20">
        <div className="flex flex-col px-5 md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="text-secondery text-titleFontSize">پروژه ها</h3>
            <h4 className="text-mainTitleFontSize mt-5">
              زندگی خود را با پروژه های هوشمند توانمند کنید
            </h4>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-textGray">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <Link
              href="/project"
              className="text-textWhite bg-secondery inline-block px-10 py-3 rounded-full mt-5"
            >
              ادامه مطلب
            </Link>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:justify-between md:gap-x-5 gap-y-8  mt-10">
          <div className="w-full md:w-1/4 flex flex-col items-center px-5">
            <Image src="/image/main/main-our-project/img-1.jpg" width={1000} height={700} alt="img"/>
            <div className="bg-textWhite text-center w-[70%] py-10 -mt-14 shadow-sm">
              <span>هتل هوشمند</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center px-5">
            <Image src="/image/main/main-our-project/img-2.jpg" width={1000} height={700} alt="img"/>
            <div className="bg-textWhite text-center w-[70%] py-10 -mt-14 shadow-sm">
              <span>محل کار هوشمند</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center px-5">
            <Image src="/image/main/main-our-project/img-3.jpg" width={1000} height={700} alt="img"/>
            <div className="bg-secondery md:bg-textWhite md:hover:bg-secondery md:hover:text-textWhite text-textWhite md:text-textBlack text-center w-[70%] py-10 -mt-14 shadow-sm ">
              <span>آپارتمان هوشمند</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center px-5">
            <Image src="/image/main/main-our-project/img-4.jpg" width={1000} height={700} alt="img"/>
            <div className="bg-textWhite text-center w-[70%] py-10 -mt-14 shadow-sm">
              <span>ویلا هوشمند</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainOurProject;
