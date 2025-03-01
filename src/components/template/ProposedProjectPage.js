"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import ProjectInformation from "@/module/ProjectInformation";

import "animate.css";


function ProposedProjectPage({colleagueId}) {

    const [proposedProject, setProposedProject] = useState("");
    const [newProject, setNewProject] = useState("");

    const router = useRouter();
  
  
    const changHandler = (e) => {
      setProposedProject(e.target.value);
    };
  
  
    const changNewHandler = (e) => {
      setNewProject(e.target.value);
    };
  
  
  
    useEffect(() => {
      if(proposedProject === "true") setNewProject(""); 
      if(newProject === "false") router.push(`/user/${colleagueId}`);
    }, [proposedProject, newProject]);
  
  
  
    return (
      <div>
        <p
          className="text-textWhite text-[1.5rem] px-5 py-2 rounded-r-[10px]"
          style={{
            backgroundImage: `linear-gradient(to left,#898989 , #898989,transparent 100% )`,
          }}
        >
          پروژه های پیشنهادی :
        </p>
        <div
          className={`${
            proposedProject === "false" && "divide-y-2 divide-textGray"
          }`}
        >
          <div className="my-5">
            <p className="text-[1.2rem] text-textGray">
              آیا تا کنون پروژه ای به شرکت ما معرفی کرده اید ؟
            </p>
            <div>
              <label htmlFor="yes">بله</label>
              <input
                type="radio"
                id="yes"
                value="true"
                name="proposedProject"
                onChange={changHandler}
                checked={proposedProject === "true"}
              />
            </div>
            <div>
              <label htmlFor="no">خیر</label>
              <input
                type="radio"
                id="no"
                value="false"
                name="proposedProject"
                onChange={changHandler}
                checked={proposedProject === "false"}
              />
            </div>
          </div>
  
          <div
            className={` ${
              proposedProject === "false"
                ? "animate__animated animate__fadeIn"
                : " hidden "
            }`}
          >
            <p className="text-[1.2rem] text-textGray mt-5">آیا قصد معرفی پروژه جدید را دارید ؟</p>
            <div>
              <label htmlFor="yes">بله</label>
              <input
                type="radio"
                id="yes"
                value="true"
                name="newProject"
                onChange={changNewHandler}
                checked={newProject === "true"}
              />
            </div>
            <div>
              <label htmlFor="no">خیر</label>
              <input
                type="radio"
                id="no"
                value="false"
                name="newProject"
                onChange={changNewHandler}
                checked={newProject === "false"}
              />
            </div>
          </div>
        </div>
  
        <div
          className={`${
            proposedProject === "true"
              ? "animate__animated animate__fadeIn"
              : "hidden"
          }`}
        >
          <ProjectInformation
            setProposedProject={setProposedProject}
            setNewProject={setNewProject}
            projectState="old"
            colleagueId={colleagueId}
          />
        </div>
  
        <div
          className={`${
            newProject === "true" ? "animate__animated animate__fadeIn" : "hidden"
          }`}
        >
          <ProjectInformation
            setProposedProject={setProposedProject}
            setNewProject={setNewProject}
            projectState="new"
            colleagueId={colleagueId}
          />
        </div>
      </div>
    );
  }

export default ProposedProjectPage;
