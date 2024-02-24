import React from "react";
import Search from "../images/search.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="input_details">
          <input type="text" />
          <img src={Search} alt="" />
        </div>
        <div className="header_details">
          <p>Categories</p>
          <p>Website Builders</p>
          <p>Today's deals</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
