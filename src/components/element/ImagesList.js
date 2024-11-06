import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function ImagesList({ title, type, productData, setProductData }) {

  const changeHandler = (e, index) => {
    const {value} = e.target;
    const list = productData[type];
    list[index] = value;
    setProductData({ ...productData, [type]: list });
  };


  const addHandler = () => {
    setProductData({ ...productData, [type]: [...productData[type], ""] });
  };
  return (
    <div className="w-full flex flex-col gap-y-5">
      <p>{title}</p>
      <div className="w-full flex flex-col gap-y-5">
        {productData[type].map((item, index) => (
          <div key={index}>
            <input
              type="file"
              name={type}
              accept="image/*"
              onChange={(e) =>changeHandler(e , index)}
              value={productData.productAllphotos[index]}
            />
          </div>
        ))}
      </div>

      <button
        onClick={addHandler}
        className="w-fit  flex gap-x-1 bg-primaryBlue text-textWhite px-2 py-1 text-[13px] rounded-md"
      >
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default ImagesList;
