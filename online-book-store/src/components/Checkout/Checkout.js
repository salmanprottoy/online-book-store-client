import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const [book, setBook] = useState([]);
  const { key } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`https://banana-custard-69431.herokuapp.com/book/${key}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(true);
      });
  }, []);

  const handleOrderConfirm = () => {
    const orderDetails = {
      ...loggerInUser,
      product: book.bookName,
      price: book.bookPrice,
      orderTime: new Date(),
    };

    fetch("https://banana-custard-69431.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("Order confirmed");
          history.push("/orders");
        }
      });
  };
  return (
    <div className="container mt-5">
      {loading ? (
        <br />
      ) : (
        <ReactBootstrap.Spinner animation="border" variant="info" />
      )}
      <h2 className="text-info text-left m-2 p-2">Checkout</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{book.bookName}</td>
            <td>1</td>
            <td>${book.bookPrice}</td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <button className="btn btn-info" onClick={handleOrderConfirm}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
