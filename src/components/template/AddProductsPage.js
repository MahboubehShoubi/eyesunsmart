"use client";

import { useState } from "react";
import TextInput from "../element/TextInput";

function AddProductsPage() {
  const [productData, setProductData] = useState({
    firstCategory: "",
    secondCategory: "",
    thirdCategory: "",
    productName: "",
    description: "",
    productColor: "",
    productImage: "",
  });
  return (
    <div>
      <h3 className="text-textWhite bg-bgRed px-5 py-2 text-[1.7rem] w-full ">
        محصولات
      </h3>
      <p className="w-fit px-5 py-2  text-bgRed mt-5">
        در این صفحه شما می توانید محصولات خود را اضافه کنید
      </p>
      <div className="w-full flex flex-col">
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
    </div>
  );
}

export default AddProductsPage;
