import React, { useState } from 'react'

function ProjectStatusRadioList() {
    const [status , setStatus] = useState();
  return (
    <div className="w-full flex items-center flex-col md:flex-row">
      <p className="w-full md:w-[15%] text-[1.2rem]"> دسته بندی اول :</p>
      <div className="w-full md:w-[70%] flex md:justify-between flex-wrap gap-x-12 gap-y-3 mt-2">
        <div className="w-fit">
          <label htmlFor="TisBus" className="text-[1.2rem]">
            Tis Bus
          </label>
          <input
            type="radio"
            name="firstCategory"
            id="TisBus"
            value="TisBus"
            checked={firstCategory === "TisBus"}
            onChange={changeHandler}
          />
        </div>
        <div className="w-fit">
          <label htmlFor="TisAir" className="text-[1.2rem]">
            Tis Air
          </label>
          <input
            type="radio"
            name="firstCategory"
            id="TisAir"
            value="TisAir"
            checked={firstCategory === "TisAir"}
            onChange={changeHandler}
          />
        </div>
        <div className="w-fit">
          <label htmlFor="TisBee" className="text-[1.2rem]">
            Tis Bee
          </label>
          <input
            type="radio"
            name="firstCategory"
            id="TisBee"
            value="TisBee"
            checked={firstCategory === "TisBee"}
            onChange={changeHandler}
          />
        </div>
        <div className="w-fit">
          <label htmlFor="TisLock" className="text-[1.2rem]">
            Tis Smart Lock
          </label>
          <input
            type="radio"
            name="firstCategory"
            id="TisLock"
            value="TisLock"
            checked={firstCategory === "TisLock"}
            onChange={changeHandler}
          />
        </div>
        <div className="w-fit">
          <label htmlFor="Other" className="text-[1.2rem]">
            Other
          </label>
          <input
            type="radio"
            name="firstCategory"
            id="Other"
            value="Other"
            checked={firstCategory === "Other"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectStatusRadioList
