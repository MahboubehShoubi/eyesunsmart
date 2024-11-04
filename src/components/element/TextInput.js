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
    <div className="flex flex-col gap-y-2">
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={productData[name]}
          onChange={changeHandler}
          className=" border-[1px] border-dashed w-[350px] p-1"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={productData[name]}
          onChange={changeHandler}
          className=" border-[1px] border-dashed w-[350px] p-1"
        />
      )}
    </div>
  );
}

export default TextInput;
