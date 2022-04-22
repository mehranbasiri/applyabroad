import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Navbar } from "../navbar/navbar";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import { VisaExperienceItem } from "../components/data";
import Footer from "../navbar/Footer";
const Experinces = () => {
  const [color, setColor] = useState("visa");
  const [test, setTest] = useState([
    {
      type: "visa",
    },
  ]);
  console.log("ss", test);
  const FilterClick = (button) => {
    setColor(button);
    console.log(button);
    setTest(VisaExperienceItem.filter((i) => i.type == button));
  };

  console.log(test);
  return (
    <div className="experinces">
      <Navbar />
      <div className="experinces-pic-title">
        <div className="experinces-pic-title-info">
          <h1>Results &</h1>
          <h2>Experinces</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="experince-type">
        <h1>Choose Your Experience Type To See </h1>
        <div className="experinces-type-item">
          <button
            onClick={() => FilterClick("visa")}
            className={`${color === "visa" ? "btn2" : "btn"}`}
          >
            <FontAwesomeIcon icon={faCcVisa} /> Visa experience
          </button>
          <button
            onClick={() => FilterClick("Reception")}
            className={`${color === "Reception" ? "btn2" : "btn"}`}
          >
            <FontAwesomeIcon icon={faCcVisa} /> Reception experience
          </button>
          <button
            onClick={() => FilterClick("Preparation")}
            className={`${color === "Preparation" ? "btn2" : "btn"}`}
          >
            <FontAwesomeIcon icon={faCcVisa} /> Preparation of documents
          </button>
          <button
            onClick={() => FilterClick("Foreign")}
            className={`${color === "Foreign" ? "btn2" : "btn"}`}
          >
            <FontAwesomeIcon icon={faCcVisa} /> Foreign language classes
          </button>
          <button
            onClick={() => FilterClick("Counseling")}
            className={`${color === "Counseling" ? "btn2" : "btn"}`}
          >
            <FontAwesomeIcon icon={faCcVisa} /> Counseling experience
          </button>
        </div>
        <div className="color"></div>
        <div className="visa-exp">
          {Array.isArray(test) &&
            test.map((v) => (
              <div key={v.id} className="visa-exp-item">
                <img src={v.img} />
                <h1>{v.title}</h1>
                <h2>{v.secondTitle}</h2>
                <p>{v.desc}</p>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experinces;
