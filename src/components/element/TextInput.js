import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  productData,
  setProductData,
  textarea = false,
}) {
  const changeHandler = (e) => {
     const {name , value} = e.target;
     setProductData({...productData , [name]:p2e(value)})
  };
  return (
    <div className="flex ">
      <p className="w-[15%] text-[1.2rem]">{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={productData[name]}
          onChange={changeHandler}
          className=" border-[1px] border-dashed w-[85%] p-1 text-[1.2rem]"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={productData[name]}
          onChange={changeHandler}
          className=" border-[1px] border-dashed w-[85%] p-1 text-[1.2rem]"
        />
      )}
    </div>
  );
}

export default TextInput;
