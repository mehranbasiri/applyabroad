import React, { useState, useEffect } from "react";
import { countryItems, NewsItem, ServicsData } from "../data";
import "./style.css";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DoneIcon from "@mui/icons-material/Done";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import learn_img from "/Users/BiaDigi.Com/ui-test-1/src/png/learn_img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import VideoPlayer from "react-video-js-player";

import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import CityTime from "./citytime";
export const Country = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [date]);

  const ausTime = date.toLocaleTimeString("en-US", {
    timeZone: "Australia/Sydney",
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });
  const iranTime = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Tehran",
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });
  const tokyoTime = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Tokyo",
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });
  const ChihuahuaTime = date.toLocaleTimeString("en-US", {
    timeZone: "America/Chihuahua",
    hour: "numeric",
    hour12: false,
    minute: "numeric",
  });

  const poster = "https://adabvisa.com/uploads/menutree/10/video/v1.mp4";

  return (
    <>
      <div className="country-container">
        {countryItems.map((c) => (
          <div className="country-item">
            <img src={c.flag} alt={c.name_country} />
            <p> Study in {c.name_country}</p>
          </div>
        ))}
        <h5>More About Apply</h5>
      </div>
      <div className="services">
        <h1 className="title">خدمات حرفه ای ما برای ارائه به شما</h1>
        {ServicsData.map((s) => (
          <div key={s.id} className="services-item">
            <img src={s.img} alt={s.title} />
            <h1>{s.title}</h1>
            <p>{s.desc}</p>
            <span>...ادامه مطلب</span>
          </div>
        ))}
      </div>
      <div className="done">
        <h1>انجام شده </h1>
        <p>تعداد پروژه های که با موفقیت در این مجموعه به سرانجام رسیده است </p>
        <div className="icons">
          <div className="icons-item">
            <ChatBubbleOutlineIcon className="icon" />
            <span>+25,000</span>
            <p>مشاوره های انجام شده</p>
          </div>
          <div className="icons-item">
            <img
              className="icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQToSJ8gdbKfu8DFWHrwxfiT5T9inmtAUBVRw&usqp=CAU"
            />
            <span>+25,000</span>
            <p>مشاوره های انجام شده</p>
          </div>

          <div className="icons-item">
            <DoneIcon className="icon" />
            <span>+25,000</span>
            <p>مشاوره های انجام شده</p>
          </div>
          <div className="icons-item">
            <ExitToAppIcon className="icon" />
            <span>+25,000</span>
            <p>مشاوره های انجام شده</p>
          </div>
        </div>
      </div>
      <div className="package">
        <h1>پکیج های ما :</h1>
        <div className="package-item">
          <div className="package-icon">
            <FontAwesomeIcon icon={faBookAtlas} className="icon" />
          </div>
          <div className="package-info">
            <h2>پکیج شماره 3</h2>
            <p>
              در اینجا
              <br /> پکیج شماره سه
              <br />
              اطلاعات مربوط به
            </p>
            <span>29 Apr 2021</span>
          </div>
        </div>
        <div className="package-item">
          <div className="package-icon">
            <FontAwesomeIcon icon={faBookAtlas} className="icon" />
          </div>
          <div className="package-info">
            <h2>پکیج شماره 2</h2>
            <p>
              در اینجا
              <br /> پکیج شماره دو
              <br /> اطلاعات مربوط به
            </p>
            <span>06 jul 2020</span>
          </div>
        </div>
        <div className="package-item">
          <div className="package-icon">
            <FontAwesomeIcon icon={faBookAtlas} className="icon" />
          </div>
          <div className="package-info">
            <h2>پکیج شماره 1</h2>
            <p>
              در اینجا
              <br />
              پکیج شماره یک
              <br />
              اطلاعات مربوط به{" "}
            </p>
            <span>12 dec 2020</span>
          </div>
        </div>
      </div>
      <div className="movie-container">
        <img src={learn_img} alt="learn-img" />
        <div className="info">
          <h5>...برای مهاجرت خود با ما مشورت کنید </h5>

          <VideoPlayer
            className="learn-video"
            src="https://adabvisa.com/uploads/menutree/10/video/v1.mp4"
            poster={poster}
            width="380"
            height="220"
          />
          <button className="button">درخواست مشاوره</button>
        </div>
      </div>
      <div className="clock-container">
        <h3>:ساعت جهانی </h3>
        <div className="clock-item">
          <Clock className="clock" value={ausTime} />
          <h1>سیدنی</h1>
          <h2>{ausTime}</h2>
        </div>

        <div className="clock-item">
          <Clock className="clock" value={tokyoTime} />
          <h1>توکیو</h1>
          <h2>{tokyoTime}</h2>
        </div>
        <div className="clock-item">
          <Clock className="clock" value={ChihuahuaTime} />
          <h1>شیکاگو</h1>
          <h2>{ChihuahuaTime}</h2>
        </div>
        <div className="clock-item">
          <Clock className="clock" value={iranTime} />
          <h1>تهران</h1>
          <h2>{iranTime}</h2>
        </div>
      </div>
      <div>
        <CityTime />
      </div>
      <div className="successful-cases">
        <h2>:پرونده های موفق تیم ما </h2>
        <div className="successful">
          <div className="people-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU53EcOIyxE7pOZJBvGHJGbDk39EYxvOhbdw&usqp=CAU"
              alt="nicolas"
            />
            <h1 className="people-name">نیکولاس مددی</h1>
            <h3>اقامت دائم در ایالات متحده</h3>
          </div>
          <div className="people-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Ac0HJBt0-Z7MITjq_cxAn1Dy0GXx3p5y8w&usqp=CAU"
              alt="ermira-amiri"
            />
            <h1 className="people-name">المیرا امیری </h1>
            <h3>ویزای شنگن</h3>
          </div>
          <div className="people-item">
            <img
              src="https://www.over40datingsite.co.uk/wp-content/uploads/2016/09/shutterstock_341919467.jpg"
              alt="amir-saadati"
            />
            <h1 className="people-name">امیر سعادتی</h1>
            <h3>پرونده مهاجرت به برلین</h3>
          </div>
        </div>
        <div className="result">
          <h4 className="slam">نتایج و تجربیات بقیه رو ببین</h4>
          <p>(+k20 تعداد نظرات ) </p>
        </div>
      </div>
      <div className="news">
        <h1> اخبار روز سفارت و فرودگاه</h1>
        <div className="news-items">
          {NewsItem.map((news) => (
            <div className="news-item">
              <img src={news.img} />
              <h3>{news.title}</h3>
              <p>{news.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
