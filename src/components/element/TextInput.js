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
    <div className="flex flex-col md:flex-row">
      <p className="w-full md:w-[15%] text-[1.2rem]">{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={productData[name]}
          onChange={changeHandler}
          className=" border-[1px] border-dashed border-backgroundBlack w-full md:w-[85%] p-1 text-[1.2rem] text-secondery"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={productData[name]}
          onChange={changeHandler}
          className=" border-[1px] border-dashed border-backgroundBlack w-full md:w-[85%] p-1 text-[1.2rem] text-secondery"
        />
      )}
    </div>
  );
}

export default TextInput;
