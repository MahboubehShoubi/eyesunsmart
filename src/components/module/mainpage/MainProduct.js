import Image from "next/image";
import Link from "next/link";

function MainProduct() {
  return (
    <div className="w-full h-fit md:h-[80vh] relative flex items-center ">
      <Image
        src="/image/background/background-4.jpg"
        className=" absolute z-[-1] w-full h-full"
        width={1000}
        height={700}
        alt="backgroundImg"
      />
      <div className=" container md:max-w-screen-xl  px-5 mb-[100px] md:mb-0">
        <div className=" w-full flex flex-col items-center text-center mt-28 md:mt-0">
          <div className="flex items-center gap-x-2">
            <span className="w-[50px] h-[2px] bg-bgRed"></span>
            <h2 className="text-bgRed md:text-[2rem]">تجهیزات خانه هوشمند</h2>
            <span className="w-[50px] h-[2px] bg-bgRed"></span>
          </div>
          <p className="w-full md:w-[60%] text-[14px] md:[1rem] text-justify md:text-center">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-10 w-full justify-between mt-10">
          <div className="w-full h-[150px] md:h-[100px] md:w-[19%] md:px-5 flex justify-center items-center shadow-xl rounded-xl bg-backgroundWhite">
            <Link href="/products/tis-air">
              <Image
                className="w-full"
                src="/image/tis-group/air.png"
                width={1000}
                height={700}
                alt="berandImg"
              />
            </Link>
          </div>
          <div className="w-full h-[150px] md:h-[100px] md:w-[19%] md:px-5 flex justify-center items-center shadow-xl rounded-xl bg-backgroundWhite">
            <Link href="/products/tis-bee">
              <Image
                className="w-full"
                src="/image/tis-group/bee.png"
                width={1000}
                height={700}
                alt="berandImg"
              />
            </Link>
          </div>
          <div className="w-full h-[150px] md:h-[100px] md:w-[19%] md:px-5 flex justify-center items-center shadow-xl rounded-xl bg-backgroundWhite">
            <Link href="/products/tis-bus">
              <Image
                className="w-full"
                src="/image/tis-group/bus.png"
                width={1000}
                height={700}
                alt="berandImg"
              />
            </Link>
          </div>
          <div className=" w-full h-[150px] md:h-[100px] md:w-[19%] md:px-5 flex justify-center items-center shadow-2xl rounded-xl bg-backgroundWhite">
            <Link href="/products/tis-lock">
              <Image
                className="w-full"
                src="/image/tis-group/tis-lock.png"
                width={1000}
                height={700}
                alt="berandImg"
              />
            </Link>
          </div>
          <div className=" w-full h-[150px] md:h-[100px] md:w-[19%] md:px-5 flex justify-center items-center shadow-2xl rounded-xl bg-backgroundWhite ">
            <Link href="/products/other">
              <Image
                className="w-full h-[70px] md:w-[150px] md:h-[50px]"
                src="/image/tis-group/other.png"
                width={1000}
                height={700}
                alt="berandImg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProduct;
