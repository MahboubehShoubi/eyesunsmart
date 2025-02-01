"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

// Components
import RadioList from "@/element/RadioList";
import SecondCategoryList from "@/element/SecondCategoryList";
import ThirdCategory from "@/element/ThirdCategory";
import TextInput from "@/element/TextInput";
import Loader from "@/module/Loader";
import Image from "next/image";

function AddProductsPage({ data }) {
  const [productData, setProductData] = useState({
    firstCategory: "",
    secondCategory: "",
    thirdCategory: "",
    productName: "",
    description: "",
    productColor: "",
    productIndexImage: null,
  });

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null); // ذخیره آدرس پیش‌نمایش

  const router = useRouter();

  useEffect(() => {
    if (data) {
      setProductData(data);

      // ایجاد پیش‌نمایش در صورت وجود تصویر
      if (data.productIndexImage) {
        setImagePreview(data.productIndexImage);
      }
    }
  }, [data]);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    for (let key in productData) {
      formData.append(key, productData[key]);
    }

    try {
      const res = await fetch("/api/products", {
        method: data ? "PATCH" : "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Something went wrong");

      const result = await res.json();
      toast.success(
        data ? "محصول با موفقیت ویرایش شد" : "محصول با موفقیت ثبت شد"
      );

      setLoading(false);

      // بازنشانی داده‌ها پس از ثبت موفق
      if (!data) {
        setProductData({
          firstCategory: "",
          secondCategory: "",
          thirdCategory: "",
          productName: "",
          description: "",
          productColor: "",
          productIndexImage: null,
        });
        setImagePreview(null);
      }

      router.refresh();
    } catch (error) {
      toast.error("مشکلی پیش آمد. دوباره تلاش کنید.");
      setLoading(false);
    }
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductData((prev) => ({ ...prev, productIndexImage: file }));

      // ایجاد پیش‌نمایش
      setImagePreview(URL.createObjectURL(file));
    }
  };


  
  return (
    <div className="w-full flex flex-col gap-y-5 md:shadow-2xl py-[50px] px-[25px]">
      <h3 className="text-textWhite bg-garyTisLock px-5 py-2 text-[1.7rem] w-full ">
        {data ? "ویرایش محصولات" : "افزودن محصولات"}
      </h3>
      <p className="w-full text-center px-5 py-2 bg-bgRed text-textWhite text-[1rem] md:text-[1.5rem] md:bg-transparent md:text-backgroundBlack">
        {data
          ? "در این صفحه شما می توانید محصولات خود را ویرایش کنید"
          : "در این صفحه شما می توانید محصولات خود را ثبت کنید"}
      </p>
      <div className="w-full flex flex-col gap-y-5">
        <RadioList productData={productData} setProductData={setProductData} />

        <SecondCategoryList
          productData={productData}
          setProductData={setProductData}
        />

        <ThirdCategory
          productData={productData}
          setProductData={setProductData}
        />

        <TextInput
          title="نام محصول"
          name="productName"
          dataState={productData}
          setDataState={setProductData}
        />
        <TextInput
          title="توضیحات "
          name="description"
          dataState={productData}
          setDataState={setProductData}
          textarea={true}
        />
        <TextInput
          title="رنگ محصول"
          name="productColor"
          dataState={productData}
          setDataState={setProductData}
        />
        <div className="w-full flex flex-col gap-y-5 md:flex-row ">
          <div className="w-full md:w-3/5">
            <div className="w-full flex flex-col md:flex-row">
              <label
                htmlFor="img"
                className="w-full md:w-[30%] text-[1.2rem] md:text-[1rem]"
              >
                انتخاب عکس شاخص :
              </label>
              <input
                type="file"
                id="img"
                name="productIndexImage"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <div className="w-2/5">
            <div className=" max-w-full min-w-fit border-2 flex items-center justify-center">
              {imagePreview ? (
                <Image
                  width={1000}
                  height={700}
                  src={imagePreview}
                  alt="Product Preview"
                  className="w-full object-contain"
                />
              ) : (
                <span>پیش‌نمایش تصویر</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : data ? (
        <button
          onClick={submitHandler}
          className="bg-green text-textWhite w-full md:w-[350px] p-2 rounded-lg"
        >
          ویرایش محصول
        </button>
      ) : (
        <button
          onClick={submitHandler}
          className="bg-green text-textWhite w-full md:w-[350px] p-2 rounded-lg"
        >
          ثبت محصول
        </button>
      )}

      <Toaster />
    </div>
  );
}

export default AddProductsPage;
