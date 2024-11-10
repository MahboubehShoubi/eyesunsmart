"use client";

import { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

// Components
import RadioList from "@/element/RadioList";
import SecondCategoryList from "@/element/SecondCategoryList";
import ThirdCategory from "@/element/ThirdCategory";
import TextInput from "@/element/TextInput";


function AddProductsPage() {

  const [productData, setProductData] = useState({
    firstCategory: "",
    secondCategory: "",
    thirdCategory: "",
    productName: "",
    description: "",
    productColor:"",
    productIndexImage: "",
  });


  const submitHandler = (e) => {
    e.preventDefault();
    const {firstCategory ,secondCategory ,thirdCategory , productName , productIndexImage} = productData;

    if(!firstCategory || !secondCategory ||!thirdCategory || !productName || !productIndexImage){
      toast.error("لطفا اطلاعات را درست وارد کنید");
    }
    setProductData({
      firstCategory: "",
      secondCategory: "",
      thirdCategory: "",
      productName: "",
      description: "",
      productColor:"",
      productIndexImage: "",
    });
    console.log(productData);
  };

  return (
    <div className="w-full flex flex-col gap-y-5">
      <h3 className="text-textWhite bg-garyTisLock px-5 py-2 text-[1.7rem] w-full ">
        افزودن محصولات
      </h3>
      <p className="w-full text-center px-5 py-2 text-[1.5rem]">
        در این صفحه شما می توانید محصولات خود را اضافه کنید
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
          productData={productData}
          setProductData={setProductData}
        />
        <TextInput
          title="توضیحات "
          name="description"
          productData={productData}
          setProductData={setProductData}
          textarea={true}
        />
         <TextInput
          title="رنگ محصول"
          name="productColor"
          productData={productData}
          setProductData={setProductData}
        />
        <div className="w-full flex">
          <div className="w-3/5">
            <div className="w-full flex">
              <label for="img" className="w-[30%]">
                انتخاب عکس شاخص :
              </label>
              <input
                type="file"
                id="img"
                name="productIndexImage"
                accept="image/*"
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    productIndexImage: e.target.value,
                  })
                }
                value={productData.productIndexImage}
              />
            </div>
          </div>
          <div className="w-2/5">
            <div className="w-full h-[150px] border-2">
              {productData.productIndexImage ? (
                <Image
                  src=""
                  width={1000}
                  height={700}
                  alt="Index Image"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={submitHandler}
        className="bg-green text-textWhite w-[350px] p-2 rounded-lg"
      >
        ثبت محصول
      </button>
      <Toaster/>
    </div>
  );
}

export default AddProductsPage;
