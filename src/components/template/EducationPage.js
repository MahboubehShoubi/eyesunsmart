"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import TextInput from "@/element/TextInput";

function EducationPage() {
  const [registration, setRegistration] = useState(null);

  const [personProfile, setPersonProfile] = useState({
    fullname: "",
    phoneNumber: "",
    job: "",
    age: "",
    city: "",
    province: "",
  });

  //هندل کردن نوع ثبت نام کاربر
  const registrationHandler = (e) => {
    const { name } = e.target;
    setRegistration(name);
   
  };


  const changeHandler = (e) => {
    const { value, name } = e.target;
    setPersonProfile({ ...personProfile, [name]: value });
  };


  //ذخیره دادهای کاربر برای ثبت نام حضوری
  const registrationButtonHandler = () => {
    const { fullname, phoneNumber, job, age, city, province } = personProfile;

    if (!fullname || !phoneNumber || !job || !age || !city || !province) {
      toast.error("لطفا تمام اطلاعات را به درستی وارد کنید!");
      return;
    }

    // const value = new Date(personProfile.age).getTime();
    // console.log(value);
    // console.log(personProfile);
    toast.success("درخواست شما به موفیت ثبت شد.منتظر تماس از طرف شرکت باشید.");
    setRegistration(null);
    setPersonProfile({
      fullname: "",
      phoneNumber: "",
      job: "",
      age: "",
      city: "",
      province: "",
    })
  };

  return (
    <div>
      <h3
        className="text-textWhite px-5 py-2 text-[1.7rem] w-full "
        style={{
          backgroundImage: `linear-gradient(to left,#898989 , #898989,transparent 100% )`,
        }}
      >
        ثبت نام / خرید دوره ای آموزشی
      </h3>

      
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-evenly mt-10">
        <button
          className={`w-[250px] p-2 rounded-[5px] ${
            registration === "InPerson"
              ? "text-textWhite bg-bgRed"
              : "text-bgRed border-2 bg-textWhite"
          }`}
          onClick={registrationHandler}
          name="InPerson"
        >
          ثبت نام حضوری
        </button>

        <button
          className={`w-[250px] p-2 rounded-[5px] ${
            registration === "Online"
              ? "text-textWhite bg-bgRed"
              : "text-bgRed border-2 bg-textWhite"
          }`}
          onClick={registrationHandler}
          name="Online"
        >
          ثبت نام آنلاین
        </button>
      </div>
     
      {registration === "InPerson" ? (
        <div className="p-5 flex flex-col gap-y-6 mt-5 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)]">
          <p className="text-bgRed border-b-2 w-fit">
            برای ثبت نام به صورت حضوری لطفا اطلاعات زبر را کامل کنید
          </p>
          <TextInput
            title="نام و نام خانوادگی"
            name="fullname"
            dataState={personProfile}
            setDataState={setPersonProfile}
          />

          <TextInput
            title="شماره تماس"
            name="phoneNumber"
            dataState={personProfile}
            setDataState={setPersonProfile}
          />

          <TextInput
            title="شغل"
            name="job"
            dataState={personProfile}
            setDataState={setPersonProfile}
          />

          <div className="flex flex-col md:flex-row">
            <p className=" w-[18%]">تاریخ تولد :</p>
            <input
              type="date"
              value={personProfile.age}
              name="age"
              onChange={changeHandler}
              className="border-[1px] border-dashed border-backgroundBlack w-full md:w-[85%] p-1 text-[1.2rem] text-secondery"
            />
          </div>

          <TextInput
            title="استان"
            name="province"
            dataState={personProfile}
            setDataState={setPersonProfile}
          />

          <TextInput
            title="شهر"
            name="city"
            dataState={personProfile}
            setDataState={setPersonProfile}
          />

          <div className="w-full flex justify-center">
            <button
              className="w-[250px] bg-green text-textWhite text-[1.1rem] p-2 rounded-[5px]"
              onClick={registrationButtonHandler}
            >
              ثبت نام
            </button>
          </div>
        </div>
      ) : registration === "Online" ? (
        <div className=" w-full p-5 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.3)] mt-10">
          <p className=" text-textGray">
            به زودی شما می توانید در این سایت برای ثبت نام در
            <span className="text-bgRed text-[1.1rem] mx-2">
              دوره‌های آنلاین{" "}
            </span>
            اقدام کنید
          </p>
        </div>
      ) : null}

      <Toaster />
    </div>
  );
}

export default EducationPage;
