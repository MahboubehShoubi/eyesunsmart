"use client";

import ImagesList from "@/element/ImagesList";
import TextInput from "@/element/TextInput";
import Loader from "@/module/Loader";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

function AddProjectPage({ data }) {
  const [projectData, setProjectData] = useState({
    projectType: "",
    projectLocation: "",
    description: "",
    imageList: [],
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    // if (data) setProjectData(data);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(projectData);
    // setLoading(true);

    // const formData = new FormData();
    // for (let i in projectData) {
    //   formData.append(i, projectData[i]);
    // }

    // const res = await fetch("", {
    //   method: "PATCH",
    //   body: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    // const result = await res.json();

    // setLoading(false);
    // console.log(formData);

    // بعد از انجام عملیات ادیت ضفحه را رفرش می کنیم تا تغییرات نمایش داده شود
    // router.refresh();
  };

  const editHandler = async () => {
    e.preventDefault();
    console.log(projectData);
    // setLoading(true);

    // const formData = new FormData();
    // for (let i in projectData) {
    //   formData.append(i, projectData[i]);
    // }

    // const res = await fetch("", {
    //   method: "PATCH",
    //   body: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    // const result = await res.json();

    // setLoading(false);
    // console.log(formData);

    // بعد از انجام عملیات ادیت ضفحه را رفرش می کنیم تا تغییرات نمایش داده شود
    // router.refresh();
  };

  return (
    <div className="w-full flex flex-col gap-y-5 md:shadow-2xl py-[50px] px-[25px]">
      <h3 className="text-textWhite bg-garyTisLock px-5 py-2 text-[1.7rem] w-full ">
        {data ? "ویرایش پروژه" : "افزودن پروژه"}
      </h3>
      <p className="w-full text-center px-5 py-2 bg-bgRed text-textWhite text-[1rem] md:text-[1.5rem] md:bg-transparent md:text-backgroundBlack">
        {data
          ? "در این صفحه شما می توانید پروژه های خود را ویرایش کنید"
          : "در این صفحه شما می توانید پروژه های خود را ثبت کنید"}
      </p>
      <div className="w-full flex flex-col gap-y-5">
        <TextInput
          title="نوع پروژه"
          name="projectType"
          dataState={projectData}
          setDataState={setProjectData}
        />
        <TextInput
          title="مکان پروژه"
          name="projectLocation"
          dataState={projectData}
          setDataState={setProjectData}
        />
        <TextInput
          title="توضیحات "
          name="description"
          dataState={projectData}
          setDataState={setProjectData}
          textarea={true}
        />
        <ImagesList
          title=" عکس های پروژه"
          type="imageList"
          dataState={projectData}
          setDataState={setProjectData}
        />
      </div>
      {loading ? (
        <Loader />
      ) : data ? (
        <button
          onClick={editHandler}
          className="bg-green text-textWhite w-full md:w-[350px] p-2 rounded-lg"
        >
          ویرایش پروژه
        </button>
      ) : (
        <button
          onClick={submitHandler}
          className="bg-green text-textWhite w-full md:w-[350px] p-2 rounded-lg"
        >
          ثبت پروژه
        </button>
      )}

      <Toaster />
    </div>
  );
}

export default AddProjectPage;