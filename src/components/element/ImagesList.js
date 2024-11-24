import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function ImagesList({ title, type, dataState, setDataState }) {

  const changeHandler = (e, index) => {
    const value = e.target.files[0];
    const list = dataState[type];
    list[index] = value;
    setDataState({ ...dataState, [type]: list });
  };


  const addHandler = () => {
    setDataState({ ...dataState, [type]: [...dataState[type], ""] });
  };
  return (
    <div className="w-full flex flex-col gap-y-5">
      <p>{title}</p>
      <div className="w-full flex flex-col gap-y-5">
        {dataState[type].map((item, index) => (
          <div key={index}>
            <input
              type="file"
              name={type}
              accept="image/*"
              onChange={(e) => changeHandler(e , index)}
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
