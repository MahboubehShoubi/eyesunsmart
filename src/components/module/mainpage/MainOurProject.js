"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "animate.css";

function MainOurProject() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className=" relative w-full h-fit">
      {/* <Image
        className=" absolute z-[-10] w-full h-screen md:h-full object-cover brightness-[90%]"
        src="/image/main/main-our-project/background.jpg"
        width={1000}
        height={800}
        alt="background"
      /> */}
      <div className=" container md:max-w-screen-xl py-20">
        <div className="flex flex-col px-5 md:flex-row">
          <div className="w-full md:w-1/2">
            <h3 className="text-secondery text-titleFontSize">پروژه ها</h3>
            <h4 className="text-mainTitleFontSize mt-5">
              زندگی خود را با پروژه های هوشمند توانمند کنید
            </h4>
          </div>
          <div className="w-full md:w-1/2">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است
            </p>
            <Link
              href="/project"
              className="text-textWhite bg-secondery inline-block px-10 py-3 rounded-full mt-5 
              hover:scale-[90%] hover:bg-navyBlue duration-700"
            >
              ادامه مطلب
            </Link>
          </div>
        </div>
        <div className="flex flex-col px-10 md:flex-row md:justify-between md:gap-x-5 gap-y-8 mt-10">
          <div
            onMouseOver={() => setShow1(true)}
            onMouseOut={() => setShow1(false)}
            className="w-full h-[400px] md:w-[22.5%] grid grid-rows-5 rounded-3xl overflow-hidden bg-cover bg-center hover:cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(to top , #EC7626,transparent 80% ) , url(/image/main/main-our-project/imag-1.jpg)`,
            }}
          >
            <div
              className={
                show1
                  ? " row-start-3 row-end-6 flex flex-col justify-center items-center px-3 animate__animated animate__fadeInUp"
                  : " row-start-5 row-end-6 flex flex-col justify-center items-center px-3 animate__animated animate__fadeInDown"
              }
            >
              <h4 className="text-textWhite text-subTitle ">امنیت هوشمند</h4>
              <p
                className={
                  show1
                    ? " text-textWhite text-[12px]"
                    : "animate__animated animate__fadeOutDown text-textWhite text-[12px]"
                }
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>

          <div
            onMouseOver={() => setShow2(true)}
            onMouseOut={() => setShow2(false)}
            className="w-full h-[400px] md:w-[22.5%] grid grid-rows-5 rounded-3xl overflow-hidden bg-cover bg-center hover:cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(to top , #EC7626 ,transparent 80%) , url(/image/main/main-our-project/imag-2.jpg)`,
            }}
          >
            <div
              className={
                show2
                  ? " row-start-3 row-end-6 flex flex-col justify-center items-center px-3 animate__animated animate__fadeInUp"
                  : " row-start-5 row-end-6 flex flex-col justify-center items-center px-3 animate__animated animate__fadeInDown"
              }
            >
              <h4 className="text-textWhite text-subTitle ">امنیت هوشمند</h4>
              <p
                className={
                  show2
                    ? " text-textWhite text-[12px]"
                    : "animate__animated animate__fadeOutDown text-textWhite text-[12px]"
                }
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>

          <div
            onMouseOver={() => setShow3(true)}
            onMouseOut={() => setShow3(false)}
            className="w-full h-[400px] md:w-[22.5%] grid grid-rows-5 rounded-3xl overflow-hidden bg-cover bg-center hover:cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(to top , #EC7626 ,transparent 80%) , url(/image/main/main-our-project/imag-3.jpg)`,
            }}
          >
            <div
              className={
                show3
                  ? " row-start-3 row-end-6 flex flex-col justify-center items-center px-3 animate__animated animate__fadeInUp"
                  : " row-start-5 row-end-6 flex flex-col justify-center items-center px-3 animate__animated animate__fadeInDown"
              }
            >
              <h4 className="text-textWhite text-subTitle ">امنیت هوشمند</h4>
              <p
                className={
                  show3
                    ? " text-textWhite text-[12px]"
                    : "animate__animated animate__fadeOutDown text-textWhite text-[12px]"
                }
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>

          <div
            onMouseOver={() => setShow4(true)}
            onMouseOut={() => setShow4(false)}
            className="w-full h-[400px] md:w-[22.5%] grid grid-rows-5 rounded-3xl overflow-hidden bg-cover bg-center hover:cursor-pointer"
            style={{
              backgroundImage: `linear-gradient(to top , #EC7626 ,transparent 80% ) , url(/image/main/main-our-project/imag-4.jpg)`,
            }}
          >
            <div
              className={
                show4
                  ? " row-start-3 row-end-6 flex flex-col justify-center items-center px-3 animate__animated animate__fadeInUp"
                  : " row-start-5 row-end-6 flex flex-col justify-center items-center px-3 animate__animated animate__fadeInDown"
              }
            >
              <h4 className="text-textWhite text-subTitle ">امنیت هوشمند</h4>
              <p
                className={
                  show4
                    ? " text-textWhite text-[12px]"
                    : "animate__animated animate__fadeOutDown text-textWhite text-[12px]"
                }
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainOurProject;
