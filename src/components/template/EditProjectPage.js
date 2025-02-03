"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import AdminCardProject from "@/module/AdminCardProject";

import { IoSearchSharp } from "react-icons/io5";

function EditProjectPage({ projectsData }) {
  const [search, setSearch] = useState({
    fullName: "",
    phone: "",
  });

  const [searchProjectData, setSearchProjectData] = useState(null);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const searchHandler = () => {
    if (!search.fullName && !search.phone) {
      toast.error("لطفا اطلاعات معتبر وارد کنید");
      return;
    }

    const result = projectsData.find((project) => {
      return (
        (search.fullName && project.mployerFullName === search.fullName) ||
        (search.phone && project.employerPhone === search.phone)
      );
    });

    if (!result) {
      toast.error("این کاربر با این مشخصات وجو ندارد");
    }

    if (JSON.stringify(result) !== JSON.stringify(searchProjectData)) {
      setSearchProjectData(result || null);
    } else {
      toast.error("اطلاعات وارد شده تکراری است.");
    }

    setSearch({
      fullName: "",
      phone: "",
    });
  };

  useEffect(() => {
    console.log("searchProjectData updated:", searchProjectData);
  }, [searchProjectData]);

  return (
    <div>
      <div className="w-full flex flex-col gap-y-5 md:shadow-2xl py-[50px] px-[25px]">
        <h3 className="text-textWhite bg-garyTisLock px-5 py-2 text-[1.7rem] w-full ">
          جستجوی پروژه
        </h3>
        <p className="mt-[20px] text-bgRed">
          استفاده از یکی از گزینه های زیر برای جستجو کافی است!
        </p>
        <div className=" py-5 flex flex-col gap-y-5">
          <div>
            <label htmlFor="fullName" className="w-[150px] inline-block">
              نام و نام خانوادگی :
            </label>
            <input
              type="text"
              className="border-[1px] w-[300px] p-2"
              id="fullName"
              name="fullName"
              value={search.fullName}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label htmlFor="phone" className="w-[150px] inline-block">
              شماره تماس :
            </label>
            <input
              type="text"
              className="border-[1px] w-[300px] p-2"
              id="phone"
              name="phone"
              value={search.phone}
              onChange={changeHandler}
            />
          </div>

          <button
            className="flex justify-center p-2 w-[300px] bg-green rounded-[10px] mr-[150px] "
            onClick={searchHandler}
          >
            <IoSearchSharp className="w-[20px] h-[20px]" />
            جستجو
          </button>
        </div>
      </div>
      <div className="mt-[30px]">
        {searchProjectData ? (
          <div className="py-[50px] w-full flex flex-col gap-y-[30px]">
            <AdminCardProject
              key={searchProjectData.id}
              project={searchProjectData}
            />
          </div>
        ) : (
          <div className="w-full flex flex-col gap-y-10">
            {projectsData.map((project) => (
              <AdminCardProject key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default EditProjectPage;
