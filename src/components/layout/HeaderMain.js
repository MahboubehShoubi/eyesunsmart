"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Icons
import { IoMenu } from "react-icons/io5";

function HeaderMain() {

  
  const [isShow, setIsShow] = useState(true);

  const showHandler = () => {
    setIsShow(!isShow);
  }

  useEffect(() => {
    console.log("hi");
  }, [isShow])

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full hidden md:block h-20 bg-primaryBlue items-center">
        <div className="container md:max-w-screen-xl">
          <span className="text-[#fff] mr-10">آدرس</span>
        </div>
      </div>

      <div className="w-full md:w-[90%] lg:max-w-screen-xl bg-primaryBlue md:mt-16 relative md:z-[10]">
        <div className="container md:max-w-screen-xl flex justify-between items-center">
          {/* <div className="md:hidden w-fit"></div> */}
          <button
           onClick={() => showHandler()}
            className="md:hidden w-fit sm:hover:cursor-pointer bg-green"
          >
            {/* show */}
             <IoMenu className="w-[50px] h-[50px] text-[#fff]" />
          </button>

          <div className="hidden md:block w-fit">
            <ul className="text-[#fff] flex items-center">
              <li>
                <Link className=" inline-block py-10 px-8 bg-navyBlue" href="/">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link
                  className=" inline-block py-10 px-8 bg-navyBlue"
                  href="/products"
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  className=" inline-block py-10 px-8 bg-navyBlue"
                  href="/education"
                >
                  آموزش
                </Link>
              </li>
              <li>
                <Link
                  className=" inline-block py-10 px-8 bg-navyBlue"
                  href="/servicess"
                >
                  خدمات
                </Link>
              </li>
              <li>
                <Link
                  className=" inline-block py-10 px-8 bg-navyBlue"
                  href="/projects"
                >
                  پروژه ها
                </Link>
              </li>
              <li>
                <Link className=" inline-block py-10 px-8 bg-navyBlue" href="/about">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link className=" inline-block py-10 px-8 bg-navyBlue" href="/contact">
                  ارتباط با ما
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-fit ml-[50px]">
            <Link href="/">
              <Image
                className="w-[200px]"
                src="/image/logo/logo.png"
                width={1000}
                height={700}
                alt="logo"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] mt-[-50px] relative flex items-center">
        <Image
          src="/image/slider/slider-4.jpg"
          className="h-full w-full object-cover absolute z-[-1] brightness-75"
          width={700}
          height={500}
          alt="slider"
        />
        <div className=" h-1/2 w-full px-[60px] flex flex-col justify-between">
          <span className="text-[#c04040] text-[2.5rem]">{isShow}</span>
          <h2 className="text-[#fff] text-[2.5rem]">Title 1</h2>
          <p className="text-[#fff]">
            این یک متن تصادفی به عنوات نمونه در این جا قرار دارد
          </p>
          <button className="w-fit bg-green px-10 py-2 text-lg text-[#fff] rounded-full">
            نمایش بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
