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

  const router = useRouter();

  useEffect(() => {
    if (data) setProductData(data);
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(productData);
    setLoading(true);

    const formData = new FormData();
    for (let i in productData) {
      formData.append(i, productData[i]);
    }

    const res = await fetch("", {
      method: "PATCH",
      body: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const result = await res.json();

    setLoading(false);
    console.log(formData);

    // بعد از انجام عملیات ادیت ضفحه را رفرش می کنیم تا تغییرات نمایش داده شود
    router.refresh();
    // setProductData({
    //   firstCategory: "",
    //   secondCategory: "",
    //   thirdCategory: "",
    //   productName: "",
    //   description: "",
    //   productColor:"",
    //   productIndexImage: "",
    // });
  };

  const editHandler = async () => {
    e.preventDefault();
    console.log(productData);
    setLoading(true);

    const formData = new FormData();
    for (let i in productData) {
      formData.append(i, productData[i]);
    }

    const res = await fetch("", {
      method: "PATCH",
      body: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const result = await res.json();

    setLoading(false);
    console.log(formData);

    // بعد از انجام عملیات ادیت ضفحه را رفرش می کنیم تا تغییرات نمایش داده شود
    router.refresh();
    // setProductData({
    //   firstCategory: "",
    //   secondCategory: "",
    //   thirdCategory: "",
    //   productName: "",
    //   description: "",
    //   productColor:"",
    //   productIndexImage: "",
    // });  
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
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    productIndexImage: e.target.files[0],
                  })
                }
              />
            </div>
          </div>
          <div className="w-2/5">
            <div className="w-full h-[150px] border-2">
              {/* {productData.productIndexImage ? (
                <Image src="" width={1000} height={700} alt="Index Image" />
              ) : null} */}
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : data ? (
        <button
          onClick={editHandler}
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
