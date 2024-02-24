import React from "react";

const Footer = () => {
  const categories = [
    "Web Builder",
    "Hosting",
    "Data Center",
    "Robotic-Automation",
  ];
  const contact = [
    "Contact",
    "Privacy Policy",
    "Terms Of Service",
    "Categories",
    "About",
  ];
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="categories">
          <h4>CATEGORIES</h4>
          {categories &&
            categories.map((c) => {
              return <p className="list">{c}</p>;
            })}
        </div>
        <div className="contact">
          <h4>CONTACT</h4>
          {contact &&
            contact.map((c) => {
              return <p className="list">{c}</p>;
            })}
        </div>
        <div className="country">
          <select name="" id="">
            <option value="">United state</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
