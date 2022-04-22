import React, { useState, useEffect } from "react";
import axios from "axios";
const Testapi = () => {
  const [product, setProduct] = useState([]);
  const postt = {
    name: "Mehran",
    avatar: "https://cdn.fakercloud.com/avatars/brenton_clarke_128.jpg",
    id: 96,
  };
  useEffect(() => {
    axios
      .get(`https://624d56a4c172b69d693148aa.mockapi.io/users`)

      .then((resp) => setProduct(resp.data))
      .catch((error) => console.log("err", error));
  }, []);
  console.log("test", product);
  return (
    <div className="test-api">
      {product.map((d) => (
        <div>
          <h1>{d.name}</h1>
          <img src={d.avatar} />
        </div>
      ))}
    </div>
  );
};

export default Testapi;
