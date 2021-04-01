import React from "react";
import { Table } from "react-bootstrap";
import { useEffect } from "react";
import { useState } from "react";
import BookElement from "../BookElement/BookElement";

const ManageBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://banana-custard-69431.herokuapp.com/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="container mt-5">
      <Table striped bordered hover>
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
