import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import Books from "../Books/Books";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import "./Home.css";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://banana-custard-69431.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className="home">
      <Header />
      <div className="container p-3">
        <input className="" type="text" />
        <br />
        <button className="btn btn-info m-2">
          <FontAwesomeIcon className="m-auto" icon={faSearch} /> Search
        </button>
      </div>
      {loading ? (
        <br />
      ) : (
        <ReactBootstrap.Spinner animation="border" variant="info" />
      )}

      <div className="row row-cols-md-3 justify-content-center p-5 m-auto">
        {books.map((book) => (
          <Books book={book}></Books>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
