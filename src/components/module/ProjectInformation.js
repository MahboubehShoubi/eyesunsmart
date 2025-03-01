"use client";

import TextInput from "@/element/TextInput";
import { useState } from "react";

function ProjectInformation({
  setProposedProject,
  setNewProject,
  projectState,
  colleagueId,
}) {
  const [projectInformation, setProjectInformation] = useState({
    colleagueId,
    projectState,
    employerName: "",
    localProject: "",
  });

  const saveProjectHandler = () => {
    console.log(projectInformation);
  };

  const cancelHandler = () => {
    setProjectInformation({
      colleagueId,
      projectState,
      employerName: "",
      localProject: "",
    });

    setProposedProject("");
    setNewProject("");
  };

  return (
    <div className=" w-full flex flex-col gap-y-5 mt-5 bg-[#f3f2f2] pb-5">
      <p className="bg-garyTisLock text-textWhite p-2 ">
        اطلاعات پروژه را وارد کنید
      </p>
      <div className="px-5 flex flex-col gap-y-5">
        <TextInput
          title="نام کارفرما"
          name="employerName"
          dataState={projectInformation}
          setDataState={setProjectInformation}
        />

        <TextInput
          title="مکان پروژه"
          name="localProject"
          dataState={projectInformation}
          setDataState={setProjectInformation}
        />
      </div>

      <div className="px-5 flex gap-x-5">
        <button
          className="w-1/2 bg-green py-2 rounded-[10px] text-textWhite"
          onClick={saveProjectHandler}
        >
          ثبـــــــت
        </button>
        <button
          className="w-1/2 bg-bgRed py-2 rounded-[10px] text-textWhite mr-5"
          onClick={cancelHandler}
        >
          لغــــــــو
        </button>
      </div>
    </div>
  );
}

export default ProjectInformation;
