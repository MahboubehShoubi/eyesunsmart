"use client";

import { useState } from "react";
import TextInput from "../element/TextInput";
import RadioList from "../element/RadioList";
import SecondCategoryList from "../element/SecondCategoryList";
import SelectOptionList from "../element/SelectOptionList";
import ThirdCategory from "../element/ThirdCategory";

function AddProductsPage() {
  const [productData, setProductData] = useState({
    firstCategory: "",
    secondCategory: "",
    thirdCategory: "",
    productName: "",
    description: "",
    productColor: "",
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
      productColor: "",
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
      </div>
      <button
        onClick={submitHandler}
        className=" bg-green text-textWhite w-[350px] p-2 rounded-lg"
      >
        ثبت محصول
      </button>
    </div>
  );
}

export default AddProductsPage;
