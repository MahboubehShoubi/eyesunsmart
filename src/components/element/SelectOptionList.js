
function SelectOptionList({ list, productData, setProductData , title , type }) {

  const changeHandler = (e) => {
    const {value } = e.target;
    setProductData({...productData , [type]:value})
  }
  
  return (
    <div className="w-full flex flex-col md:flex-row">
      <label className="w-full md:w-[15%] text-[1.2rem]">{title} :</label>
      <select value={productData[type]} onChange={changeHandler} className="w-[300px] text-[1.1rem] text-secondery rounded-l-full px-2 hover:cursor-pointer border-2 border-backgroundBlack">
        {list.map((item, index) => (
          <option key={index} value={item} className=" hover:cursor-pointer">{item}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectOptionList;
