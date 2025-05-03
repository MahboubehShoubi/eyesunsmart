// Icons
import { IoLocationOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { MdSettingsPhone } from "react-icons/md";

function ContactBoxSection() {
  return (
    <div className="w-full sm:h-[50vh] mb-[50px]">
      <div className=" container w-full sm:max-w-screen-xl h-full flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-5 px-5">
        <div className=" w-full sm:w-1/3 h-fit py-7 sm:py-0 sm:h-[35vh] flex flex-col justify-center items-center shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] rounded-[10px]">
          <MdSettingsPhone className=" bg-bgRed text-textWhite p-2 w-[70px] h-[70px] rounded-[10px]" />
          <p className="text-[1.3rem] mt-[10px]">تماس با ما</p>
          <p className="text-textGray mt-[20px]">09112223333</p>
          <p className="text-textGray">09214445555</p>
        </div>
        <div className="w-full sm:w-1/3 h-fit py-7 sm:py-0 sm:h-[35vh] flex flex-col justify-center items-center shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] rounded-[10px]">
          <IoLocationOutline className=" bg-bgRed text-textWhite p-2 w-[70px] h-[70px] rounded-[10px]" />
          <p className="text-[1.3rem] mt-[10px]"> آدرس </p>
          <p className="text-textGray mt-[20px]">ساری خیابان 15 خرداد</p>
          <p className="text-textGray">سرخرود - خط دریا</p>
        </div>
        <div className="w-full sm:w-1/3 h-fit py-7 sm:py-0 sm:h-[35vh] flex flex-col justify-center items-center shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] rounded-[10px]">
          <BsClockHistory className=" bg-bgRed text-textWhite p-2 w-[70px] h-[70px] rounded-[10px]" />
          <p className="text-[1.3rem] mt-[10px]"> ساعت کاری </p>
          <p className="text-textGray mt-[20px]">
            شنبه – چهارشنبه: 17:30 تا 07:30
          </p>
          <p className="text-textGray">
            پـــنــجــــشـــنــبــه: 14:30 تا 07:30
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactBoxSection;
