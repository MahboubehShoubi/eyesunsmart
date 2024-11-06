"use client";

import { useState } from "react";

import RadioList from "@/element/RadioList";
import SecondCategoryList from "@/element/SecondCategoryList";
import ThirdCategory from "@/element/ThirdCategory";
import TextInput from "@/element/TextInput";
import ImagesList from "@/element/ImagesList";
function AddProductsPage() {
  const [ productData , setProductData ] = useState({
    firstCategory: "",
    secondCategory: "",
    thirdCategory: "",
    productName: "",
    description: "",
    productIndexImage: "",
    productAllphotos: [],
  });

  const submitHandler = () => {
    console.log(productData);
    setProductData({
      firstCategory: "",
      secondCategory: "",
      thirdCategory: "",
      productName: "",
      description: "",
      productIndexImage: "",
      productAllphotos: [],
    });
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

        <ThirdCategory productData={productData} setProductData={setProductData} />

        <TextInput title="نام محصول" name="productName" productData={productData} setProductData={setProductData} />
        <TextInput title="توضیحات " name="description" productData={productData} setProductData={setProductData} textarea={true} />
        <div className="w-full flex">
          <label for="img" className="w-[15%]">
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
        <ImagesList title="  گالری تصاویر : " type="productAllphotos" productData={productData} setProductData={setProductData} />
      </div>
      <button
        onClick={submitHandler}
        className="bg-green text-textWhite w-[350px] p-2 rounded-lg"
      >
        ثبت محصول
      </button>
    </div>
  );
}

export default AddProductsPage;
