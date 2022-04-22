import React, { useState, useEffect } from "react";

import { TimeZone } from "../data";

const CityTime = () => {
  const [city, setCity] = useState({
    cityName: "Asia/Tehran",
  });

  const addOption = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setCity({
      ...city,
      [e.target.name]: value,
    });
    e.preventDefault();
  };

  const str =
    city?.cityName &&
    new Date().toLocaleTimeString("en-US", {
      timeZone: city.cityName,
      hour: "numeric",
      hour12: false,
      minute: "numeric",
    });
  return (
    <div className="world-clock-con">
      <div className="world-clock">
        <select
          defaultValue={city.cityName}
          className="city"
          name="cityName"
          onChange={addOption}
        >
          {TimeZone.map((t) => (
            <option key={t.id}>{t}</option>
          ))}
        </select>
        <p className="time"></p>
        <span>
          ساعت
          {str}می باشد .,{city.cityName}
          هم اکنون در
        </span>
      </div>
      <div className="mm">
        <p>:لطفا منطقه زمانی خودرا انتخاب نمایید</p>
      </div>
    </div>
  );
};

export default CityTime;
