import React from "react";
import {data} from "../data";

const Deals = () => {
  return (
    <div className="deals">
      <div className="deals_container">
        <h1 className="heading">Related deals you might like for</h1>

        <div className="container">
          {data &&
            data.map((d) => {
              return (
                <div key={d.id} className="data_container">
                  <div className="img_container">
                    <img src={d.img} alt="" />
                  </div>
                  <div className="data_details">
                    <div className="discount">
                      <p>{d.discount}</p>
                      <p>{d.time}</p>
                    </div>
                    <p className="data_title">{d.title}</p>
                    <p className="data_desc">{d.desc}</p>
                    <div className="data_price_detail">
                      <p className="data_price">{d.price}</p>
                      <p className="ori_price">{d.originalPrice}</p>
                      <p className="data_discount">
                        {"("}
                        {d.discount}
                        {")"}
                      </p>
                    </div>
                    <button className="btn">View Deal</button>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="signup">
          <h1 className="heading">Sign up and get exclusive special deals</h1>
          <div>
            <input type="text" className="input" />
            <button className="signup-btn">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
