import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderItems } from "../data";
import "./style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
const Slider = () => {
  const [counter, setCounter] = useState(0);
  const titleAnim = {
    hidden: { x: 1000, transition: { duration: 0.5 } },
    show: { x: 0, transition: { duration: 1 } },
  };
  const titleAnim2 = {
    hidden: { x: 1000, transition: { duration: 0.5 } },
    show: { x: 0, transition: { duration: 1.5 } },
  };
  const imgAnim = {
    hidden: { y: 1000, transition: { duration: 1 } },
    show: {
      y: 0,
      transition: {
        duration: 1.5,
      },
    },
  };
  console.log(counter);
  return (
    <div className="slider">
      <Swiper
        pagination
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
        onSlideChange={() => setCounter(counter + 1)}
      >
        {sliderItems.map((item, i) => (
          <SwiperSlide>
            <div className="slide-item">
              <div
                key={Math.random() * ((i + 1) * counter) + 1}
                className="img-container"
              >
                <motion.img
                  variants={imgAnim}
                  initial="hidden"
                  animate="show"
                  src={item.img}
                />
              </div>
              <div className="info-container">
                <motion.h1
                  key={Math.random() * ((i + 1) * counter) + 1}
                  variants={titleAnim}
                  initial="hidden"
                  animate="show"
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  key={Math.random() * ((i + 1) * counter)}
                  variants={titleAnim2}
                  initial="hidden"
                  animate="show"
                >
                  {item.desc}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
