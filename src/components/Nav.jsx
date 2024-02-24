import React from "react";
import Tick from "../images/tick.svg";
import Info from "../images/info.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav_container">
        <h1 className="nav_heading">Best Website builders in the US</h1>
        <hr className="hr" />
        <div className="nav_details">
          <div className="nav_detail">
            <img src={Tick} alt="" />
            <p>Last Updated - February 22, 2020</p>
            <img src={Info} alt="" />
            <p>Advertising Disclosure</p>
          </div>
          <div>
            <select name="" id="">
              <option value=""> Top Relevent</option>
            </select>
          </div>
        </div>
        <hr className="hr" />
        <div className="nav_details_two">
          <p>Tools</p>
          <p>AWS Builder</p>
          <p>Start Build</p>
          <p>Build Supplies</p>
          <p>Tooling</p>
          <p>Blue Hosting</p>
        </div>
        <div className="breadcrumbs">
          <p>Home</p>
          <p>{" > "}</p>
          <p>Hosting for all</p>
          <p>{" > "}</p>
          <p>Hosting</p>
          <p>{" > "}</p>
          <p>Hosting6</p>
          <p>{" > "}</p>
          <p>Hosting5</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
