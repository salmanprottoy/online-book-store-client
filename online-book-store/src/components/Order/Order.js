import React from "react";
import { useContext } from "react";
import { UserContext } from "../../App";

const Order = (props) => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <tbody>
      {loggerInUser.email === props.order.email && (
        <tr>
          <td>{props.order.product}</td>
          <td>${props.order.price}</td>
          <td>{props.order.orderTime}</td>
        </tr>
      )}
    </tbody>
  );
};

export default Order;
