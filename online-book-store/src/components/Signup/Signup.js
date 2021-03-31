import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    cPassword: "",
    errorMsg: "",
  });

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "name") {
    }
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      console.log(isFieldValid);
    }
    if (e.target.name === "password") {
      const inPasswordValid = e.target.value.length >= 6;
      const isPasswordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = inPasswordValid && isPasswordHasNumber;
      console.log(isFieldValid);
    }
    if (e.target.name === "confirmPassword") {
    }
    if (isFieldValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };

  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUser = { ...user };
          newUser.errorMsg = "";
          setUser(newUser);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.errorMsg = error.message;
          setUser(newUser);
        });
    }
    e.preventDefault();
  };
  return (
    <div>
      <div className="container">
        <form
          className="border border-info p-3 m-2 rounded"
          onSubmit={() => handleSubmit()}
        >
          <h3 className="text-center text-info">Signup</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              onBlur={handleBlur}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onBlur={handleBlur}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onBlur={handleBlur}
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              required
              onBlur={handleBlur}
            />
            <small>{}</small>
          </div>
          <button
            type="submit"
            class="btn btn-info"
            style={{ width: "12rem" }}
            onClick={handleSubmit}
          >
            Signup
          </button>
          <br />
          <small>
            Already have an account? <Link to="/login"> click here </Link>{" "}
          </small>
        </form>
        <small className="text-danger">{user.errorMsg}</small>
      </div>
    </div>
  );
};

export default Signup;