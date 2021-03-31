import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Books from "../Books/Books";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="home">
      <Header />
      <div className="m-2 p-3">
        <input className="" type="text" />
        <button className="btn btn-info">Search</button>
      </div>
      <div className="row row-cols-md-3 justify-content-center p-5">
        {books.map((book) => (
          <Books book={book}></Books>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
