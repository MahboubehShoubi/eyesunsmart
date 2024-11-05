import SelectOptionList from "./SelectOptionList";

function ThirdCategory({ productData, setProductData }) {
  const { firstCategory, secondCategory } = productData;

  // Tis Air Category-----------------------------------------------------------------
  const TisAirControllers = [
    "پیش فرض",
    "ADS-Controller",
    "ACM Switch",
    "AIR Socket",
    "AIR IR Emitter",
    "TRV Controller",
  ];
  const TisAirGateways = [
    "پیش فرض",
    "Modbus VRF UPB Gateway",
    "AIR BUS CONVERTER",
  ];
  const TisAirIntercom = [
    "پیش فرض",
    "7-Touch Screen",
    "Outdoor Tower",
    "Outdoor Building",
    "Outdoor Unit",
  ];
  const TisAirPanel = [
    "پیش فرض",
    "Venera Switch",
    "Venera Dimmer",
    "Venera Thermostat",
  ];
  const TisAirSensor = [
    "پیش فرض",
    "Motion Sensor",
    "10Functiion Sensor",
    "3Digital Input",
  ];

  // Tis Bee Category----------------------------------------------------------

  const TisBeeGateway = ["پیش فرض", "Zigbee-BUS Hub"];
  const TisBeeLights = ["پیش فرض", "RGBW-Bulb"];
  const TisBeeController = [
    "پیش فرض",
    "Zigbee Motor",
    "Plug (UK/EU)",
    "Valve (Gas/Water)",
    "Switch Module(1/2 gang)",
    "Dimmer Module",
    "Shutter Module",
    "RGBW Driver",
  ];

  const TisBeeSecuritySensor = [
    "پیش فرض",
    "Door Contact",
    "PIR Sensor",
    "Smoke Detector",
    "Gas Sensor",
    "Water-Leak",
    "CO Sensor",
    "Key-Fob",
    "Siren",
  ];

  const TisBeeWallSwitch = [
    "پیش فرض",
    "Dion Curtain Switch",
    "Venera Zigbee Switch",
    "Dion Switch",
    "Dion Wall Remote",
  ];

  // Tis Bus Category-------------------------------------------------------------
  // const TisBusList = [
  //   "panels",
  //   "Hotel InterFace",
  //   "Screens",
  //   "Dimmers",
  //   "Relays",
  //   "Sensors",
  //   "BMS/PMS",
  //   "Motors",
  //   "Audio/Video",
  //   "Meters",
  //   "Gateways",
  //   "Other",
  // ];

  // const TisBusGroup = [
  //   "TisBusPanels",
  //   "TisBusHotelInterFace",
  //   "TisBusScreen",
  //   "TisBusDimmers",
  //   "TisBusRelays",
  //   "TisBusSensors",
  //   "TisBusBmsPms",
  //   "TisBusMotors",
  //   "TisBusAudioVideo",
  //   "TisBusMeters",
  //   "TisBusGateways",
  //   "TisBusOther"
  // ];

  const TisBusAudioVideo = [
    "پیش فرض",
    "4Zone Amplifier",
    "Audio Player PL17100",
    "AV IP Matrix",
    "Audio Matrix",
    "IR Emitter",
    "Speakers",
  ];

  const TisBusBmsPms = [
    "پیش فرض",
    "22DL",
    "0-10V Input",
    "4-20mA Module",
    "4-Zone Input",
    "4Temperature Sensor",
    "Aut Timer",
    "Security Module",
  ];

  const TisBusDimmers = [
    "پیش فرض",
    "Loading Edge Dimmer",
    "Trailing Edge Dimmer",
    "0-10V Dimmer",
    "DALI",
    "DMX",
    "Industrial Dimmers",
  ];

  const TisBusGateways = [
    "پیش فرض",
    "232_485",
    "1AC-GTY",
    "VRF AC GATEWAY",
    "Modbus VRF UPB-Gateway",
    "AIR BUS CONVERTER",
    "KNX Gateway",
  ];

  const TisBusHotelInterFace = [
    "پیش فرض",
    "Mercury Hotel series",
    "Click Series",
    "IO Hotel Series",
    "Luna Hotel Series",
    "Terre Hotel Series",
  ];

  const TisBusMeters = [
    "پیش فرض",
    "Water Meter",
    "3Phase Energy Meter",
    "Energy Meter",
    "Weather Station",
  ];

  const TisBusMotors = [
    "پیش فرض",
    "Curtain Motor",
    "Roller Motor",
    "Projector Lift",
  ];

  const TisBusOther = [
    "پیش فرض",
    "Remote Control",
    "Power Supply",
    "Cable Manager",
    "IR Learner",
    "Accessories",
    "Distributor Box",
    "Panel Addition",
  ];

  const TisBusPanels = [
    "پیش فرض",
    "Luna Series",
    "Titan&Titania",
    "Van Bus",
    "Mercury Series",
    "SOL Series",
    "Terre Series",
    "Europe Series",
    "Sirius Series",
    "Mars Series",
  ];

  const TisBusRelays = [
    "پیش فرض",
    "Relays",
    "HVAC",
    "Mini Relay",
    "Rcu Controller",
  ];

  const TisBusScreen = [
    "پیش فرض",
    "SAT133",
    "SAT101",
    "SAT40",
    "Saturn Remote",
    "Saturn Panel",
  ];

  const TisBusSensors = [
    "پیش فرض",
    "Occupancy Sensor",
    "Health Sensor",
    "10Function Sensor",
    "Motion Sensor",
    "Water leak Sensor",
  ];

  // Tis Lock Category-----------------------------------------------------------------

  const TisLockHotelLock = [
    "پیش فرض",
    "TIS-E908",
    "TIS-S181",
    "TIS-E901",
    "TIS-E300",
    "TIS-E200",
  ];

  const TisLockSmartLock = [
    "پیش فرض",
    "TIS-K710",
    "TIS-H168",
    "TIS-A270",
    "TIS-A233",
    "TIS-A210",
  ];

  // ---------------------------------------------------------------------
  if (!firstCategory || !secondCategory)
    return (
      <div className="w-full flex">
        <label className="w-[15%] text-[1.2rem]">دسته بندی سوم :</label>
        <select className="border-2 w-[300px] text-[1.1rem] rounded-l-full px-2 hover:cursor-pointer">
          <option className=" hover:cursor-pointer">پیش فرض</option>
        </select>
      </div>
    );

  // ----------------- Tis bus --------------------------------------------
  if (firstCategory === "TisBus") {
    // TisBusList.map((item , index) => {
    //   if (secondCategory === `${item}`) {
    //     return (
    //       <SelectOptionList
    //         title="دسته بندی سوم"
    //         type="thirdCategory"
    //         tisList={TisBusGroup[index]}
    //         productData={productData}
    //         setProductData={setProductData}
    //       />
    //     );
    //   }
    // })

    if (secondCategory === "panels") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusPanels}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Hotel InterFace") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusHotelInterFace}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Screens") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusScreen}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Dimmers") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusDimmers}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Relays") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusRelays}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Sensors") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusSensors}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "BMS/PMS") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusBmsPms}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Motors") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusMotors}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Audio/Video") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusAudioVideo}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Meters") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusMeters}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Gateways") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusGateways}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Other") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBusOther}
          productData={productData}
          setProductData={setProductData}
        />
      );
    }
  }

  // ------------ Tis Air ----------------------------------------------------------------
  if (firstCategory === "TisAir") {
    if (secondCategory === "panel") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisAirPanel}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "controllers") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisAirControllers}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "sensors") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisAirSensor}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "intercom") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisAirIntercom}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "gateways") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisAirGateways}
          productData={productData}
          setProductData={setProductData}
        />
      );
    }
  }

  // -------------------- Tis Bee --------------------------------------------------
  if (firstCategory === "TisBee") {
    if (secondCategory === "Wall Switch") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBeeWallSwitch}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Controller") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBeeController}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Security/Sensor") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBeeSecuritySensor}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Lights") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBeeLights}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Gateway") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisBeeGateway}
          productData={productData}
          setProductData={setProductData}
        />
      );
    }
  }

  // -------------- Tis Lock -----------------------------------------------------
  if (firstCategory === "TisLock") {
    if (secondCategory === "Hotel Lock") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisLockHotelLock}
          productData={productData}
          setProductData={setProductData}
        />
      );
    } else if (secondCategory === "Smart Lock") {
      return (
        <SelectOptionList
          title="دسته بندی سوم"
          type="thirdCategory"
          tisList={TisLockSmartLock}
          productData={productData}
          setProductData={setProductData}
        />
      );
    }
  }
}

export default ThirdCategory;
