import React, { useState } from "react";

function ProjectStatusRadioList({title, name, dataState, setDataState}) {
  // const [status, setStatus] = useState();
  
  const changeHandler = (e) => {
    const {name , value} = e.target;
    setDataState({...dataState , [name]:value})
  }

  return (
    <div className="w-full flex  flex-col md:flex-row ">
      <p className="w-full md:w-[15%] text-[1.2rem]"> {title} :</p>
      <div className="w-full md:w-[85%] flex flex-col gap-2">
        <div className="w-fit flex gap-1">
          <label htmlFor="FirstStage" className="text-grayTisBee">
            مشاوره و طراحی و ارائه فاکتور
          </label>
          <input
            type="radio"
            name={name}
            id="FirstStage"
            value="20"
            checked={dataState[name] === "20"}
            onChange={changeHandler}
          />
        </div>
        <div className="w-fit flex gap-1">
          <label htmlFor="SecondStage" className="text-grayTisBee">
            بازدیدهای مرحله ای از زیرساخت هوشمند
          </label>
          <input
            type="radio"
            name={name}
            id="SecondStage"
            value="40"
            checked={dataState[name] === "40"}
            onChange={changeHandler}
          />
        </div>
        <div className="w-fit flex gap-1">
          <label htmlFor="ThirdStage" className="text-grayTisBee">
            نصب و راه‌اندازی و برنامه نویسی حرفه‌ای
          </label>
          <input
            type="radio"
            name={name}
            id="ThirdStage"
            value="60"
            checked={dataState[name] === "60"}
            onChange={changeHandler}
          />
        </div>
        <div className="w-fit flex gap-1">
          <label htmlFor="FourthStage" className="text-grayTisBee">
            آموزش و پشتیبانی
          </label>
          <input
            type="radio"
            name={name}
            id="FourthStage"
            value="80"
            checked={dataState[name] === "80"}
            onChange={changeHandler}
          />
        </div>
        <div className="w-fit flex gap-1">
          <label htmlFor="FifthStage" className="text-grayTisBee">
            به‌روزرسانی و خدمات پس از فروش
          </label>
          <input
            type="radio"
            name={name}
            id="FifthStage"
            value="100"
            checked={dataState[name] === "100"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectStatusRadioList;
