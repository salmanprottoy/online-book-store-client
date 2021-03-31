import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    errorMsg: "",
  });

  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  const handleFacebookSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const sinnedInUser = { name: displayName, email };
        setLoggedInUser(sinnedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const sinnedInUser = { name: displayName, email };
        setLoggedInUser(sinnedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  const handleBlur = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  const upadateUserName = (name) => {
    var userProfile = firebase.auth().currentUser;
    console.log("user profile", userProfile);
    userProfile
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated successfully", userProfile);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleSubmit = (e) => {
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUser = { ...user };
          newUser.errorMsg = "";
          setUser(newUser);
          setLoggedInUser(newUser);
          history.replace(from);
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
    <div className="login">
      <div className="container">
        <form
          onSubmit={() => handleSubmit()}
          className="border border-info p-3 m-2 rounded"
        >
          <h3 className="text-center text-info">Login</h3>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onBlur={handleBlur}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onBlur={handleBlur}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkLogin"
            />
            <label className="form-check-label" for="checkLogin">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-info m-2"
            style={{ width: "12rem" }}
          >
            Login
          </button>
          <br />
          <small>
            Don't have an account? <Link to="/signup"> click here </Link>{" "}
          </small>
        </form>
      </div>
      <hr />
      <div className="container p-1">
        <button
          className="btn btn-success m-1 text-left"
          style={{ width: "16rem" }}
          onClick={handleGoogleSignIn}
        >
          <FontAwesomeIcon className="mr-3" icon={faGoogle} /> Connect with
          Google
        </button>
        <br />
        <button
          className="btn btn-primary m-1 text-left"
          style={{ width: "16rem" }}
          onClick={handleFacebookSignIn}
        >
          <FontAwesomeIcon className="mr-3" icon={faFacebook} /> Connect with
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
