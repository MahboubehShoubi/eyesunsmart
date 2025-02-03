"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function AdminCardProject({ project }) {
  const [image, setImage] = useState();

  const router = useRouter();

  const editHandler = (id) => {
    router.push(`/admin/projects/edit/${id}`);
  };
  

  const deleteHandler = () => {};


  const setImageHandler = (item) => {
    setImage(item);
  };


  return (
    <div
      key={project.id}
      className="w-full pt-[30px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] p-5 rounded-[10px]"
    >
      <div className="w-full h-fit flex">
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          <p>
            <span className="text-bgRed">کارفرما : </span>
            <span>{project.mployerFullName}</span>
          </p>
          <p>
            <span className="text-bgRed">شماره تماس : </span>
            <span>{project.employerPhone}</span>
          </p>
          <p>
            <span className="text-bgRed">مکان پروژه : </span>
            <span>{project.projectLocation}</span>
          </p>
          <p>
            <span className="text-bgRed">نوع پروژه : </span>
            <span>{project.projectType}</span>
          </p>
        </div>
        <div className="w-full md:w-2/3 flex">
          <div className="w-full md:w-1/2 h-fit flex flex-wrap gap-5 ">
            {project.imageList.map((item, index) => (
              <div
                key={index}
                className="w-[75px] h-[75px] rounded-[5px] overflow-hidden border-[2px]"
                onClick={() => setImageHandler(item)}
              >
                <Image
                  src={item}
                  width={1000}
                  height={700}
                  alt="project image"
                  className="w-full h-full cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/2 h-[300px] overflow-hidden rounded-[8px]">
            <Image
              src={image || project.imageList[0]}
              width={1000}
              height={700}
              alt="image project"
              className=" object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex justify-between gap-5 mt-5">
        <button
          className="w-1/2 p-2 rounded-lg bg-green text-textWhite"
          onClick={() => editHandler(project.id)}
        >
          ویرایش پروژه
        </button>
        <button
          className="w-1/2 p-2 rounded-lg bg-bgRed text-textWhite "
          onClick={deleteHandler}
        >
          حذف پروژه
        </button>
      </div>
    </div>
  );
}

export default AdminCardProject;
