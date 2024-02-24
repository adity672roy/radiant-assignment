import React from "react";
import { detailsPart } from "../data";
import star2 from "../images/star2.svg";
import img1 from "../images/download.png";
import tick2 from "../images/tick2.svg";

const Details = () => {
  return (
    <div className="details">
      {detailsPart &&
        detailsPart.map((d) => {
          return (
            <div className="details_container" key={d.id}>
              <div className="content">
                {d.tag && d.tagimage ? (
                  <div className="absolute">
                    <img src={d.tagimage} alt="" />
                    <p>{d.tag}</p>
                  </div>
                ) : (
                  ""
                )}
                <p className="points ">{d.id}</p>

                <div className="image_part">
                  <img src={d.mainImg} alt="" />
                  <p>{d.name} </p>
                </div>

                <div className="details_part">
                  <p>
                    <b>{d.desc1_bold}</b>
                    {d.desc1}
                  </p>
                  <h4>Main highlights</h4>
                  <p className="second-p">{d.desc2}</p>
                  <select name="" id="">
                    <option value="">Show more</option>
                  </select>
                </div>

                <div className="rating_part">
                  <div className="rating_part-one">
                    <p className="rating">{d.rating}</p>
                    <p className="exceptional">{d.exceptional}</p>
                    <p>
                      <img src={d.starImg} alt="" />
                    </p>
                  </div>
                  <div className="btn">View</div>
                </div>
              </div>
            </div>
          );
        })}
      <div className="details_container">
        <div className="content">
          <p className="points ">4</p>

          <div className="image_part">
            <img src={img1} alt="" />
            <p>CDK </p>
          </div>

          <div className="details_part">
            <p>
              <b>CDK Resposive Builder: </b> An extensive library of widgets and
              apps, and detailed step-by-step guides
            </p>
            <div>
              <p className="detail_discount">20% off</p>
            </div>

            <h4>Main highlights</h4>
            <div className="fourth_part  ">
              <p>
                <span>9.9</span>Building Responsive
              </p>
              <p>
                <span>8.9</span>Cool
              </p>
              <p>
                <span>8.9</span>Docs
              </p>
            </div>

            <div className="fifth_part">
              <p>Why we love it</p>
              <ul className="list">
                <li>
                  <img src={tick2} alt="" />
                  Documentation
                </li>
                <li>
                  <img src={tick2} alt="" />
                  Easy to use
                </li>
                <li>
                  <img src={tick2} alt="" />
                  Out of box
                </li>
              </ul>
            </div>
            <select name="" id="">
              <option value="">Show more</option>
            </select>
          </div>

          <div className="rating_part">
            <div className="rating_part-one">
              <p className="rating">9.1</p>
              <p className="exceptional">Very Good</p>
              <p>
                <img src={star2} alt="" />
              </p>
            </div>
            <div className="btn">View</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
