import CircularText from "@/element/CircularText";
import Image from "next/image";

function AboutInformation() {
  return (
    <div className="w-full flex py-[100px]">
      <div className="w-1/2">
        <h3>حوزه کاری </h3>
        <h2>این عضو مهارت Bulding ملاقات در اجاره.</h2>
        <p>
          If you are going to use a passage of Lorem Ipsu, you need this be sure
          there isn't anything embarrassing hidden in the best middle of text.
          All the Lorem Ipsum generators.
        </p>
      </div>
      <div className="w-1/2 relative h-[450px]">
        <div className="w-8/12 h-full absolute left-0 outline outline-[8px] outline-offset-2 outline-bgRed rounded-[10px] p-1">
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
        <div className=" absolute bottom-[-100px] right-[100px] w-[300px] h-[300px] outline outline-[12px] outline-textWhite rounded-full overflow-hidden">
          <CircularText />
        </div>
      </div>
    </div>
  );
}

export default AboutInformation;
