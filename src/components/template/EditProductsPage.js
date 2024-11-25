"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RadioList from "@/element/RadioList";
import SecondCategoryList from "@/element/SecondCategoryList";
import ThirdCategory from "@/element/ThirdCategory";
import CardProduct from "@/module/CardProduct";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdImageSearch } from "react-icons/md";

function EditProductsPage() {

  const exampleList = [
    {
      id:"01",
      image: "/image/example/img-1.png",
      name: "Luna TFT LCD Panel",
      description:
        "این پنل با صفحه نمایش لمسی 4.3 اینچی و سنسور دمای LCD یک رابط شیک و پیچیده برای مدیریت نور، موسیقی، آب و هوا، موتورها، امنیت، خلق و خوی و سایر دستگاه های شخص ثالث ارائه می دهد. همچنین یادآورها و هشدارها را از طریق صفحه نمایش با وضوح بالا نمایش می دهد.",
      color: "طلایی",
    },
    {
      id:"02",
      image: "/image/example/img-2.png",
      name: "Luna BedSide",
      description:
        "سری لونا پنل های بیشتری را برای استفاده در هتل ارائه می دهد که به مهمانان شما تجربه فناوری بالا در اتاق هایشان را می دهد و مدیریت ایمنی و راحتی آنها را آسان تر می کند.",
      color: "مشکی",
    },
    {
      id:"03",
      image: "/image/example/img-3.png",
      name: "Luna 9Gangs",
      description:
        "پنل LUNA 9 Gang با صفحه نمایش لمسی 4.3 اینچی و 9 دکمه، یک رابط شیک برای مدیریت نور، موتورها، حالت‌ها و سایر دستگاه‌های شخص ثالث ارائه می‌دهد.",
      color: "مشکی",
    },
  ];

  const [productData, setProductData] = useState({
    firstCategory: "",
    secondCategory: "",
    thirdCategory: "",
  });

  const router = useRouter();

  const searchHandler = () => {};

  const editHandler = (productId) => {
    router.push(`/admin/products/edit/${productId}`)
  };

  const deleteHandler = () => {};

  

  return (
    <div className="w-full flex flex-col gap-y-5">
      <div className="w-full md:shadow-2xl pt-[50px] pb-[25px] px-[25px]">
        <h3 className="text-textWhite bg-garyTisLock px-5 py-2 text-[1.7rem] w-full ">
          ویرایش محصولات
        </h3>
        <p className="w-full text-center px-5 py-2 bg-bgRed text-textWhite text-[1rem] md:text-[1.5rem] md:bg-transparent md:text-backgroundBlack">
          در این صفحه شما می توانید محصولات خود را ویرایش کنید
        </p>
        <div className="w-full flex flex-col gap-y-5">
          <RadioList
            productData={productData}
            setProductData={setProductData}
          />

          <SecondCategoryList
            productData={productData}
            setProductData={setProductData}
          />

          <ThirdCategory
            productData={productData}
            setProductData={setProductData}
          />
          <button
            onClick={searchHandler}
            className="w-[50%] py-2 bg-green text-textWhite rounded-[10px] flex justify-center items-center gap-2"
          >
            جستجوی محصول
            <MdImageSearch  className="text-[1.5rem]"/>
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-10">
        {exampleList.map((i) => (
          <div className="w-full flex flex-col py-[20px] px-[25px] gap-y-5 border-4 rounded-[20px] border-garyTisLock">
            <CardProduct key={i.id} data={i} />
            <div className="w-full flex gap-x-10">
              <button
                onClick={() => editHandler(i.id)}
                className="text-green border-2 border-green px-20 py-2 text-[1.2rem] flex gap-x-3 items-center rounded-[10px]"
              >
                <FaRegEdit />
                ویرایش محصول
              </button>
              <button
                onClick={deleteHandler}
                className="text-bgRed border-2 border-bgRed px-20 py-2 text-[1.2rem] flex gap-x-3 items-center rounded-[10px]"
              >
                <MdDeleteForever />
                حذف محصول
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EditProductsPage;
