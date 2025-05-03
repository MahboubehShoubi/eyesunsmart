import Counter from "@/utils/Counter";

function ProjectCounter() {
  return (
    <div className="w-full sm:h-[40vh] mb-[50px] bg-no-repeat bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(to top , #000 ,transparent 150% ) , url(/image/counter/background-image-1.jpg)`,
    }}>
      <div className=" container w-full md:max-w-screen-xl sm:h-full">
        <div className="w-full flex flex-col sm:flex-row sm:justify-between items-center h-full px-5 py-10 gap-5 sm:gap-0">
          <div className=" w-full sm:w-1/3 h-fit py-5 sm:h-[150px] flex gap-5 sm:flex-col justify-center items-baseline sm:items-center">
            <p className="text-textWhite text-[1.2rem]">پروژه های تمام شده</p>
            <p className="text-textWhite text-[2.5rem] sm:text-[2rem] h-[2rem]">
              <Counter max={100} time={100} />
            </p>
          </div>
          <div className=" w-full sm:w-1/3 h-fit py-5 sm:h-[150px] flex gap-5 sm:flex-col justify-center items-baseline sm:items-center">
            <p className="text-textWhite text-[1.2rem]">
              پروژه های در حال اجرا
            </p>
            <p className="text-textWhite text-[2.5rem] sm:text-[2rem] h-[2rem]">
              <Counter max={200} time={60} />
            </p>
          </div>
          <div className=" w-full sm:w-1/3 h-fit py-5 sm:h-[150px] flex gap-5 sm:flex-col justify-center items-baseline sm:items-center">
            <p className="text-textWhite text-[1.2rem]">
              پروژه های در حال بررسی
            </p>
            <p className="text-textWhite text-[2.5rem] sm:text-[2rem] h-[2rem]">
              <Counter max={300} time={40} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCounter;
