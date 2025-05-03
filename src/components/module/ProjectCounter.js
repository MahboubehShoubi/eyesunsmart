import Counter from "@/utils/Counter";

function ProjectCounter() {
  return (
    <div className="w-full h-[40vh] bg-secondery mb-[50px]">
            <div className=" container w-full md:max-w-screen-xl h-full">
              <div className="w-full flex justify-between items-center h-full">
                <div className="w-1/3 h-[150px] flex flex-col justify-center items-center">
                  <p className="text-textWhite text-[1.2rem]">پروژه های تمام شده</p>
                  <p className="text-textWhite text-[2rem] h-[2rem]">
                    <Counter max={100} time={100} />
                  </p>
                </div>
                <div className="w-1/3 h-[150px] flex flex-col justify-center items-center">
                  <p className="text-textWhite text-[1.2rem]">
                    پروژه های در حال اجرا
                  </p>
                  <p className="text-textWhite text-[2rem] h-[2rem]">
                    <Counter max={200} time={60} />
                  </p>
                </div>
                <div className="w-1/3 h-[150px] flex flex-col justify-center items-center">
                  <p className="text-textWhite text-[1.2rem]">
                    پروژه های در حال بررسی
                  </p>
                  <p className="text-textWhite text-[2rem] h-[2rem]">
                    <Counter max={300} time={40} />
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ProjectCounter
