import React from "react";
import Books from "../Books/Books";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />

      <div className="m-2 p-2">
        <input className="" type="text" />
        <button className="btn btn-info">Serach</button>
      </div>
      <Books />
      <Footer />
    </div>
  );
};

export default Home;
