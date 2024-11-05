
function SelectOptionList({ tisList, productData, setProductData , title , type }) {

  const changeHandler = (e) => {
    const {value } = e.target;
    setProductData({...productData , [type]:value})
  }
  
  return (
    <div className="w-full flex">
      <label className="w-[15%] text-[1.2rem]">{title} :</label>
      <select value={productData[type]} onChange={changeHandler} className="border-2 w-[300px] text-[1.1rem] rounded-l-full px-2 hover:cursor-pointer">
        {tisList.map((item, index) => (
          <option key={index} value={item} className=" hover:cursor-pointer">{item}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectOptionList;
