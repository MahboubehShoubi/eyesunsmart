
function SelectOptionList({ tisList, productData, setProductData , title }) {
  return (
    <div className="w-full flex">
      <label className="w-[15%] text-[1.2rem]">{title} :</label>
      <select className="border-2 w-[300px] text-[1.1rem]">
        {tisList.map((item, index) => (
          <option key={index} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectOptionList;
