import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";

const BookElement = ({ book }) => {
  const history = useHistory();
  const deleteBook = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        if (result) {
          alert("Order confirmed");
          history.push("/manageBook");
        }
      });
  };
  return (
    <tr>
      <td>{book.bookName}</td>
      <td>{book.authorName}</td>
      <td>${book.bookPrice}</td>
      <td>
        <button className="btn btn-success m-1">
          <FontAwesomeIcon className="m-auto" icon={faEdit} />
        </button>
        <button
          onClick={() => deleteBook(book._id)}
          className="btn btn-danger m-1"
        >
          <FontAwesomeIcon className="m-auto" icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default BookElement;
