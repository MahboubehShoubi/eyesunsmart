"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Loader from "@/module/Loader";
import toast, { Toaster } from "react-hot-toast";
import { MdClose } from "react-icons/md";
import "animate.css";





function SignInUpPage({ showSignup, setShowSignup }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);


  const signupHandler = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      toast.success(data.message);
      setLogin(true);
      setEmail("");
      setPassword("");
      setRePassword("");
    } else {
      toast.error(data.error);
    }
  };


  const signinHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      setShowSignup(false);
    }
  };


  return (
    <div className="w-full h-full flex justify-center items-center bg-backgroundBlack">
      <div
        className={
          showSignup
            ? " container w-2/3 h-fit md:w-1/2 md:h-[60vh] md:max-w-screen-xl flex flex-col md:flex-row bg-backgroundWhite animate__animated animate__zoomIn rounded-3xl overflow-hidden"
            : " container w-2/3 h-fit md:w-1/2 md:h-[60vh] md:max-w-screen-xl flex flex-col md:flex-row bg-backgroundWhite animate__animated animate__zoomOut rounded-3xl overflow-hidden"
        }
      >
        {login ? (
          <div className="w-full md:w-1/2 md:h-full">
            <div className="w-full h-10 px-4 py-4">
              <MdClose
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={(e) => setShowSignup(false)}
              />
            </div>
            <h3 className="text-[1.6rem] md:text-[2rem] w-full text-center">فرم ورود</h3>
            <form className="w-full flex flex-col justify-center rounded-lg px-5 py-5 md:px-8 md:py-10 md:gap-y-5 gap-y-2">
              <input
                className="border-[1px] px-2 py-1 rounded-lg text-[14px] md:text-[1rem]"
                placeholder="ایمیل"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border-[1px] px-2 py-1 rounded-lg text-[14px] md:text-[1rem]"
                placeholder="رمز عبور"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {loading ? (
                <Loader />
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-md text-textWhite bg-secondery py-1"
                  onClick={signinHandler}
                >
                  ورود
                </button>
              )}
            </form>
          </div>
        ) : (
          <div className="w-full md:w-1/2 md:h-full">
            <div className="w-full h-10 px-4 py-4">
              <MdClose
                className="w-[30px] h-[30px] cursor-pointer"
                onClick={(e) => setShowSignup(false)}
              />
            </div>
            <h3 className="text-[1.6rem] md:text-[2rem] w-full text-center">فرم ثبت نام</h3>
            <form className="w-full flex flex-col justify-center rounded-lg px-5 py-5 md:px-8 md:py-10 md:gap-y-5 gap-y-2">
              <input
                className="border-[1px] px-2 py-1 rounded-lg text-[14px] md:text-[1rem]"
                placeholder="ایمیل"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border-[1px] px-2 py-1 rounded-lg text-[14px] md:text-[1rem]"
                placeholder="رمز عبور"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className="border-[1px] px-2 py-1 rounded-lg text-[14px] md:text-[1rem]"
                placeholder="تکرار رمز عبور "
                type="text"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              {loading ? (
                <Loader />
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-md text-textWhite bg-secondery py-1"
                  onClick={signupHandler}
                >
                  ثبت نام
                </button>
              )}
            </form>
          </div>
        )}

        {login ? (
          <div className="w-full md:w-1/2 md:h-full flex flex-col justify-center items-center gap-y-4 bg-navyBlue rounded-t-[10%] md:rounded-r-[30%] p-5">
            <p className="text-textWhite text-[1.5rem]">سلام دوست من !</p>
            <p className="text-textWhite text-center">
              برای ایجاد حساب کاربری جدید از لینک زیر وارد شوید
            </p>
            <button
              className="text-[14px] w-[200px] text-textWhite border-[1px] border-textWhite px-5 py-2 rounded-md transition duration-700	hover:bg-secondery hover:scale-[90%]"
              onClick={(e) => setLogin(false)}
            >
              ایجاد حساب
            </button>
          </div>
        ) : (
          <div className="w-full md:w-1/2 md:h-full flex flex-col justify-center items-center gap-y-4 bg-navyBlue rounded-t-[10%] md:rounded-r-[30%] p-5">
            <p className="text-textWhite text-[1.5rem]">سلام دوست من !</p>
            <p className="text-textWhite text-center">
              برای ورود به حساب کاربری از لینک زیر وارد شوید
            </p>
            <button
              className="text-[14px] w-[200px] text-textWhite border-[1px] border-textWhite px-5 py-2 rounded-md transition duration-700	hover:bg-secondery hover:scale-[90%]"
              onClick={(e) => setLogin(true)}
            >
              ورود
            </button>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default SignInUpPage;
