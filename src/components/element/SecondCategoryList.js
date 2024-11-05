import SelectOptionList from "./SelectOptionList";

function SecondCategoryList({ productData, setProductData }) {
  const { firstCategory } = productData;

  const TisAirList = [
    "panel",
    "controllers",
    "sensors",
    "intercom",
    "gateways",
  ];
  const TisBeeList = [
    "Wall Switch",
    "Controller",
    "Security/Sensor",
    "Lights",
    "Gateway",
  ];
  const TisBusList = [
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

  const TisLockList = ["Hotel Lock", "Smart Lock", "Other"];
  
  if (!firstCategory)
    return (
      <div className="w-full flex">
      <label className="w-[15%] text-[1.2rem]">دسته بندی دوم :</label>
      <select className="border-2 w-[300px] text-[1.1rem]">
          <option>پیش فرض</option>
        </select>
      </div>
    );

  return (
    <div>
      {firstCategory === "TisBus" && (
        <SelectOptionList
          title="دسته بندی دوم"
          tisList={TisBusList}
          productData={productData}
          setProductData={setProductData}
        />
      )}
      {firstCategory === "TisAir" && (
        <SelectOptionList
          title="دسته بندی دوم"
          tisList={TisAirList}
          productData={productData}
          setProductData={setProductData}
        />
      )}
      {firstCategory === "TisBee" && (
        <SelectOptionList
          title="دسته بندی دوم"
          tisList={TisBeeList}
          productData={productData}
          setProductData={setProductData}
        />
      )}
      {firstCategory === "TisLock" && (
        <SelectOptionList
          title="دسته بندی دوم"
          tisList={TisLockList}
          productData={productData}
          setProductData={setProductData}
        />
      )}
    </div>
  );
}

export default SecondCategoryList;
