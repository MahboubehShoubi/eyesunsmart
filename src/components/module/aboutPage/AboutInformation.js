import CircularText from "@/element/CircularText";
import Image from "next/image";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function AboutInformation() {
  return (
    <div className="w-full flex sm:py-[100px] pt-[50px] pb-[180px] relative overflow-hidden px-5 sm:px-0">
      <div className=" absolute z-[-1] w-1/2 h-full left-0 hidden sm:block">
        <Image
          src={`/image/about/shape-1.png`}
          width={1000}
          height={700}
          alt="background Image"
          className="w-full h-full object-center scale-[200%]"
        />
      </div>
      <div className="container max-w-screen-xl flex flex-col gap-[30px] sm:flex-row">
        <div className="w-full sm:w-1/2 pt-[50px]">
          <div className="flex gap-[8px] items-center">
            <div className="w-[35px] h-[3px] bg-bgRed"></div>
            <h2 className="text-[1.2rem] text-bgRed">حوزه کاری </h2>
          </div>
          <h3 className="text-[2rem] text-navyBlue mt-[30px]">
            این عضو مهارت Bulding ملاقات در اجاره.
          </h3>
          <p className="text-textGray mt-[20px] text-justify">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده،
          </p>
          <div className="w-full flex flex-col mt-[50px] gap-y-5">
            <div className="w-full flex gap-x-2 items-center">
              <IoIosCheckmarkCircleOutline className="text-bgRed w-[35px] h-[35px] items-center justify-center" />
              <p className="text-[1.2rem]">
                هوشمند سازی / اعلان حریق / سیستم ایمنی
              </p>
            </div>

            <div className="w-full flex gap-x-2 items-center">
              <IoIosCheckmarkCircleOutline className="text-bgRed w-[35px] h-[35px] items-center justify-center" />
              <p className="text-[1.2rem]">ژنراتور / موتور برق / استابلایزر</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <IoIosCheckmarkCircleOutline className="text-bgRed w-[35px] h-[35px] items-center justify-center" />
              <p className="text-[1.2rem]">پیمان کاری برق و لاین نوری</p>
            </div>
            <div className="w-full flex gap-x-2 items-center">
              <IoIosCheckmarkCircleOutline className="text-bgRed w-[35px] h-[35px] items-center justify-center" />
              <p className="text-[1.2rem]">پنل خورشیدی</p>
            </div>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 h-[300px] sm:h-[450px] mt-[30px] sm:mt-0">
          <div className="absolute w-full sm:w-8/12 h-full left-0 outline outline-[8px] outline-offset-2 outline-bgRed rounded-[10px] p-1">
            <Image
              src="/image/about/smart-home.jpg"
              width={1000}
              height={700}
              alt="project image"
              className="rounded-[10px] object-cover w-full h-full"
            />
          </div>
          {/* <div className=" absolute bottom-[-100px] right-[50px] w-[300px] h-[300px] rounded-full overflow-hidden z-10 outline outline-[8px] outline-textWhite">
          <Image
            src={`/image/about/smarthome-2.jpg`}
            width={1000}
            height={700}
            alt="project image"
            className="w-full h-full object-cover"
          />
        </div> */}
          <div className="w-full flex justify-center">
            <div
              className=" absolute bottom-[-180px] w-[250px] h-[250px] 
          sm:bottom-[-100px] sm:right-[100px] sm:w-[300px] sm:h-[300px] 
          outline outline-[12px] outline-textWhite rounded-full overflow-hidden"
            >
              <CircularText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInformation;
