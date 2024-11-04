import Image from "next/image";

import "animate.css";

function ShowListMenu({ list }) {
  return (
    <div className="w-full md:w-fit py-10 flex flex-wrap justify-between gap-y-10 md:justify-center md:gap-x-5 md:flex-nowrap animate__animated animate__zoomIn">
      {list.map((item, index) => (
        <div
          className="w-[45%] md:w-[12%] h-[260px] flex flex-col items-center hover:cursor-pointer overflow-hidden shadow-lg md:shadow-none"
          key={index}
        >
          <div className="w-[80%] md:w-[80%] h-[240px] md:h-[200px] flex justify-center items-center">
            <Image
              src={item.Image}
              className="w-full hover:scale-125 md:hover:scale-150 transition-all duration-[1500ms]"
              width={1000}
              height={700}
              alt="panel-img"
            />
          </div>
          <p className="w-full h-[20%] text-center">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default ShowListMenu;
