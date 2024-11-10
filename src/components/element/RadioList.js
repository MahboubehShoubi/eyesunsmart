function RadioList({ productData, setProductData }) {
  const { firstCategory} = productData;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    // setProductData({...productData,[name]: value});
    setProductData({
      firstCategory: value,
      secondCategory: "",
      thirdCategory: "",
      productName: "",
      description: "",
      productColor: "",
      productIndexImage: "",
    });
  };
  return (
    <div className="w-full flex items-center">
      <p className="w-[15%] text-[1.2rem]"> دسته بندی اول :</p>
      <div className="w-[70%] flex justify-between mt-2">
        <div>
          <label htmlFor="TisBus" className="text-[1.2rem]">
            Tis Bus
          </label>
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
          <label htmlFor="TisAir" className="text-[1.2rem]">
            Tis Air
          </label>
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
          <label htmlFor="TisBee" className="text-[1.2rem]">
            Tis Bee
          </label>
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
          <label htmlFor="TisLock" className="text-[1.2rem]">
            Tis Smart Lock
          </label>
          <input
            type="radio"
            name="firstCategory"
            id="TisLock"
            value="TisLock"
            checked={firstCategory === "TisLock"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="Other" className="text-[1.2rem]">
            Other
          </label>
          <input
            type="radio"
            name="firstCategory"
            id="Other"
            value="Other"
            checked={firstCategory === "Other"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
