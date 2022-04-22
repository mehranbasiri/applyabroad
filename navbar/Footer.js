import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <span>fAQs</span>
        <span>Contact Us</span>
        <span>The Links of Telegram Groups</span>
        <span>Services</span>
        <span>Work With Us</span>
        <span>Know Us Better</span>
        <span>International Studients</span>
        <span>News</span>
        <span>How To Begin</span>
      </div>
      <div className="center">
        <span>Your Account</span>
        <span>Emergency Appointment</span>
        <span>TOFEL Course</span>
        <span>GRE Course</span>
        <span>IELTS Course</span>
        <span>Terms of Use</span>
        <span>Our Privacy Policy</span>
        <span>Sitemap</span>
        <span>Home</span>
      </div>
      <div className="right">
        <span>Inquire</span>

        <label>First Name:</label>
        <input type="text" />

        <label>Last Name:</label>
        <input type="text" />

        <label>Email Address:</label>
        <input type="email" />

        <textarea rows="6" cols="70" placeholder="Lets Us Know How We Can Help">
          {" "}
        </textarea>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVXmE3XiagB_9b9D9kfI7Xct2izYT_9l7VcN-no8eQhEbVP8VKNdLfShJ4gfKZIcREM4&usqp=CAU" />
    </div>
  );
};

export default Footer;
