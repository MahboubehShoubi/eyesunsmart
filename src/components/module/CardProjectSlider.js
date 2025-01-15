import "animate.css";
import Slider from "./Slider";

//icons
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdMapsHomeWork } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";
import { BsBuildingFillCheck } from "react-icons/bs";




function CardProjectSlider({ data }) {
  return (
    <div className="w-full h-[400px] flex shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] p-2 rounded-xl my-[50px]">
      <div className="w-3/5 rounded-lg overflow-hidden">
        <Slider silderInfo={data} />
      </div>
      <div className="w-2/5 h-full flex flex-col py-5 px-3 divide-y">
        <p className="flex gap-x-2 items-center pb-2">
          <PiMapPinAreaFill className="text-bgRed w-[1.1rem] h-[1.1rem]" />
          مکان پروژه :{" "}
          <span className=" font-semibold	text-textGray">
            {data.projectLocation}
          </span>{" "}
        </p>
        <p className="flex gap-x-2 items-end py-2">
          <MdMapsHomeWork className="text-bgRed w-[1.1rem] h-[1.1rem]" />
          نوع پروژه :{" "}
          <span className=" font-semibold	text-textGray">
            {data.projectType}
          </span>{" "}
        </p>
        <p className="flex gap-x-2 items-end py-2">
          <AiOutlineAreaChart className="text-bgRed w-[1.1rem] h-[1.1rem]" />
          مساحت :{" "}
          <span className=" font-semibold	text-textGray">
            {data.projectArea}
          </span>{" "}
        </p>
        <p className="flex gap-x-2 items-baseline py-2">
          <BsBuildingFillCheck className="text-bgRed w-[1.1rem] h-[1.1rem]" />
          تعداد طبقات :{" "}
          <span className=" font-semibold	text-textGray">
            {data.numberOfFloors}
          </span>{" "}
        </p>
      </div>
    </div>
  );
}

export default CardProjectSlider;
