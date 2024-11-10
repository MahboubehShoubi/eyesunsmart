import SelectOptionList from "./SelectOptionList";

function SecondCategoryList({ productData, setProductData }) {
  const { firstCategory } = productData;

  const TisAirList = [
    "پیش فرض",
    "panel",
    "controllers",
    "sensors",
    "intercom",
    "gateways",
  ];
  const TisBeeList = [
    "پیش فرض",
    "Wall Switch",
    "Controller",
    "Security/Sensor",
    "Lights",
    "Gateway",
  ];
  const TisBusList = [
    "پیش فرض",
    "panels",
    "Hotel InterFace",
    "Screens",
    "Dimmers",
    "Relays",
    "Sensors",
    "BMS/PMS",
    "Motors",
    "Audio/Video",
    "Meters",
    "Gateways",
    "Other",
  ];

  const Other = [
    "پیش فرض",
    "Panel",
    "Smart Lock",
    "Sensors",
    "Audio",
  ];

  const TisLockList = ["پیش فرض", "Hotel Lock", "Smart Lock", "Other"];

  if (!firstCategory)
    return (
      <div className="w-full flex">
        <label className="w-[15%] text-[1.2rem]">دسته بندی دوم :</label>
        <select className="border-2 w-[300px] text-[1.1rem] rounded-l-full px-2 hover:cursor-pointer">
          <option className=" hover:cursor-pointer">پیش فرض</option>
        </select>
      </div>
    );

  return (
    <div>
      {firstCategory === "TisBus" && (
        <SelectOptionList
          title="دسته بندی دوم"
          type="secondCategory"
          list={TisBusList}
          productData={productData}
          setProductData={setProductData}
        />
      )}
      {firstCategory === "TisAir" && (
        <SelectOptionList
          title="دسته بندی دوم"
          type="secondCategory"
          list={TisAirList}
          productData={productData}
          setProductData={setProductData}
        />
      )}
      {firstCategory === "TisBee" && (
        <SelectOptionList
          title="دسته بندی دوم"
          type="secondCategory"
          list={TisBeeList}
          productData={productData}
          setProductData={setProductData}
        />
      )}
      {firstCategory === "TisLock" && (
        <SelectOptionList
          title="دسته بندی دوم"
          type="secondCategory"
          list={TisLockList}
          productData={productData}
          setProductData={setProductData}
        />
      )}
      {firstCategory === "Other" && (
        <SelectOptionList
          title="دسته بندی دوم"
          type="secondCategory"
          list={Other}
          productData={productData}
          setProductData={setProductData}
        />
      )}
    </div>
  );
}

export default SecondCategoryList;
