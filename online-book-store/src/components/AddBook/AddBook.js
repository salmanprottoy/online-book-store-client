import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const AddBook = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const handleImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imgData = new FormData();
    imgData.set("key", "75fc47c76e48fe35cc2f339599503525");
    imgData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    const bookData = {
      key: data.bookKey,
      bookName: data.bookName,
      authorName: data.authorName,
      bookPrice: data.bookPrice,
      imgURL: imgURL,
    };
    const url = "http://localhost:5000/addBook";
    console.log(bookData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookData),
    }).then((response) => console.log("server response", response));
  };
  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border border-info p-3 m-2 rounded"
      >
        <div className="form-group">
          <p className="text-info">Book Key </p>
          <input name="bookKey" defaultValue="" ref={register} />
        </div>
        <div className="form-group">
          <p className="text-info">Book Name </p>
          <input name="bookName" defaultValue="" ref={register} />
        </div>
        <div className="form-group">
          <p className="text-info">Author Name </p>
          <input name="authorName" ref={register({ required: true })} />
        </div>
        <div className="form-group">
          <p className="text-info">Add Price </p>
          <input name="bookPrice" ref={register({ required: true })} />
        </div>
        <div className="form-group">
          <p className="text-info">Add Book Cover Photo </p>
          <input
            className=""
            name="bookPhoto"
            type="file"
            onChange={handleImgUpload}
          />
        </div>
        <input
          className="btn btn-info text-white"
          type="submit"
          value="Add Book"
        />
      </form>
    </div>
  );
};

export default AddBook;
