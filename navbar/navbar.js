import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <ul>
        <button>ورود / ثبت نام</button>

        <li>همکاری با ما</li>
        <Link to="/product">
          <li>درخواست مشاوره </li>
        </Link>

        <li>لینک گروه های مهاجرت تحصیلی</li>
        <Link className="link" to="/Experinces">
          <li>تجربه ها</li>
        </Link>
        <Link className="link" to="/position">
          <li>پوزیشن</li>
        </Link>

        <li>دپارتمان خدمات</li>
        <Link className="link" to="/packages">
          <li>پکیج ها</li>
        </Link>
        <Link className="link" to="/">
          <h1 className="brand">Apply Abroad.</h1>
        </Link>
      </ul>
    </div>
  );
};
