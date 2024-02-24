import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Deals from "./components/Deals";
import Details from "./components/Details";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Details />
      <Deals />
      <Footer />
    </div>
  );
};

export default App;
