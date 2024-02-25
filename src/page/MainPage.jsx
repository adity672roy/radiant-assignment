import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Deals from "../components/Deals";
import Details from "../components/Details";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Details />
      <Deals />
      <Footer />
    </div>
  );
};

export default MainPage;
