function RadioList({ productData, setProductData }) {
  const { firstCategory } = productData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  return (
    <div className="w-full">
      <p>دسته بندی</p>
      <div className="w-full flex gap-x-4 mt-2">
        <div>
          <label htmlFor="TisBus">Tis Bus</label>
          <input
            type="radio"
            name="firstCategory"
            id="TisBus"
            value="TisBus"
            checked={firstCategory === "TisBus"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="TisAir">Tis Air</label>
          <input
            type="radio"
            name="firstCategory"
            id="TisAir"
            value="TisAir"
            checked={firstCategory === "TisAir"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="TisBee">Tis Bee</label>
          <input
            type="radio"
            name="firstCategory"
            id="TisBee"
            value="TisBee"
            checked={firstCategory === "TisBee"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="TisLock">Tis Lock Smart</label>
          <input
            type="radio"
            name="firstCategory"
            id="TisLock"
            value="TisLock"
            checked={firstCategory === "TisLock"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
