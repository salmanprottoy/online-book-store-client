import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const BookElement = ({ book }) => {
  return (
    <tr>
      <td>{book.bookName}</td>
      <td>{book.authorName}</td>
      <td>${book.bookPrice}</td>
      <td>
        <button className="btn btn-success">
          <FontAwesomeIcon className="m-auto" icon={faEdit} />
        </button>
        <button className="btn btn-danger">
          <FontAwesomeIcon className="m-auto" icon={faTrashAlt} />
        </button>
      </td>
    </tr>
  );
};

export default BookElement;
