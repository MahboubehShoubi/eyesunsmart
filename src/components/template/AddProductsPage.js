"use client";

import { useState } from "react";
import TextInput from "../element/TextInput";
import RadioList from "../element/RadioList";

function AddProductsPage() {
  const [productData, setProductData] = useState({
    firstCategory: "",
    secondCategory: "",
    thirdCategory: "",
    productName: "",
    description: "",
    productColor: "",
    productIndexImage: "",
    productAllphotos : [],
  });

  const submitHandler = () => {
    console.log(productData);
  }
  return (
    <div className="w-full flex flex-col gap-y-5">
      <h3 className="text-textWhite bg-bgRed px-5 py-2 text-[1.7rem] w-full ">
        محصولات
      </h3>
      <p className="w-fit px-5 py-2  text-bgRed ">
        در این صفحه شما می توانید محصولات خود را اضافه کنید
      </p>
      <div className="w-full flex flex-col gap-y-5">
        <RadioList productData={productData} setProductData={setProductData} />

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
          textarea= {true}
        />
        
      </div>
      <button onClick={submitHandler} className=" bg-green text-textWhite w-[350px] p-2 rounded-lg">ثبت محصول</button>
    </div>
  );
}

export default AddProductsPage;
