import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import Order from "../Order/Order";
import * as ReactBootstrap from "react-bootstrap";

const Orders = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://banana-custard-69431.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
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
            <th>Price</th>
            <th>Ordered Date</th>
          </tr>
        </thead>

        {orders.map((order) => (
          <Order order={order}></Order>
        ))}
      </Table>
    </div>
  );
};

export default Orders;
