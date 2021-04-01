import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";
import Order from "../Order/Order";

const Orders = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div className="container mt-5">
      <Table striped bordered hover>
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
