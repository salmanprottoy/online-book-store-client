import React from "react";
import { Table } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import BookElement from "../BookElement/BookElement";

const ManageBook = () => {
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
    <div className="container mt-3">
      {loading ? (
        <br />
      ) : (
        <ReactBootstrap.Spinner animation="border" variant="info" />
      )}
      <Table striped bordered hover className="mt-1">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookElement book={book}></BookElement>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageBook;
