import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiEdit } from "react-icons/ci";


function CardUser({ userData }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...userData, [name]: value });
  };

  return (
    <div>
      {/* {userData.map((user) => ( */}
      <div className="px-5 py-4 rounded-[10px] shadow-2xl">
        <div className=" w-full grid grid-cols-2 md:grid-cols-3 gap-5">
          <div className="flex gap-x-2 ">
            <label htmlFor="" className="text-bgRed ">
              نام و نام خانوادگی :{" "}
            </label>
            <p>محبوبه شوبی</p>
          </div>
          <div className="flex gap-x-2">
            <label htmlFor="" className="text-bgRed ">
              {" "}
              کد ملی :{" "}
            </label>
            <p>2060000000 </p>
          </div>
          <div className="flex gap-x-2">
            <label htmlFor="" className="text-bgRed ">
              {" "}
              شماره تماس :{" "}
            </label>
            <p>09112223344 </p>
          </div>
          <div className="flex gap-x-2">
            <label htmlFor="" className="text-bgRed ">
              {" "}
              شغل :{" "}
            </label>
            <p>آزاد</p>
          </div>
          <div className="flex gap-x-2">
            <label htmlFor="" className="text-bgRed ">
              {" "}
              استان :{" "}
            </label>
            <p>مازندران</p>
          </div>
          <div className="flex gap-x-2">
            <label htmlFor="" className="text-bgRed ">
              {" "}
              شهر :{" "}
            </label>
            <p>چالوس</p>
          </div>
          <div className="flex gap-x-2">
            <label htmlFor="" className="text-bgRed ">
              {" "}
              سن :{" "}
            </label>
            <p>30</p>
          </div>
        </div>
        <div className=" flex items-baseline">
          <p className="w-[150px] text-bgRed"> تعیین وضعیت :</p>
          <div className="w-full md:w-[500px] flex md:justify-between md:items-end p-2 ">
            <div className="w-fit flex gap-x-2">
              <label htmlFor="User" className="">
                کاربر عادی
              </label>
              <input
                type="radio"
                name="status"
                id="User"
                value="USER"
                //   onChange={changeHandler}
                //   checked={user.status === "USER"}
              />
            </div>

            <div className="w-fit flex gap-x-2">
              <label htmlFor="Customer" className="">
                باشگاه مشتریان
              </label>
              <input
                type="radio"
                name="status"
                id="Customer"
                value="CUSTOMER"
                //   onChange={changeHandler}
                //   checked={user.status === "CUSTOMER"}
              />
            </div>

            <div className="w-fit flex gap-x-2">
              <label htmlFor="Colleague" className="">
                همکار
              </label>
              <input
                type="radio"
                name="status"
                id="Colleague"
                value="COLLEAGUE"
                //   onChange={changeHandler}
                //   checked={user.status === "COLLEAGUE"}
              />
            </div>
          </div>
        </div>
        {/* {user.status === "pendding" ? ( */}
          <div className="mt-10 flex gap-x-[5%] ">
            <button className="w-1/2 bg-green text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
              <IoMdCheckboxOutline className="w-[22px] h-[22px]" />
              تائید نهایی
            </button>
            <button className="w-1/2 bg-bgRed text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
              <MdDeleteForever className="w-[22px] h-[22px]" />
              حذف کاربر
            </button>
          </div>
        {/* ) : ( */}
          <div className="mt-10 flex gap-x-[5%] "> 
            <button className="w-1/3 bg-green text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
              <IoMdCheckboxOutline className="w-[22px] h-[22px]" />
              تائید نهایی
            </button>
            <button className="w-1/3 bg-yellowTisBee text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
              <CiEdit className="w-[22px] h-[22px]" />
               ویرایش اطلاعات
            </button>
            <button className="w-1/3 bg-bgRed text-textWhite p-2 text-[1.2rem] rounded-[10px] flex justify-center">
              <MdDeleteForever className="w-[22px] h-[22px]" />
              حذف کاربر
            </button>
          </div>
        {/* )} */}
      </div>
      {/* ))} */}
    </div>
  );
}

export default CardUser;
