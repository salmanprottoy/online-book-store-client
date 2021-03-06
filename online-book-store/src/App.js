import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import NoMatch from "./components/NoMatch/NoMatch";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Sidebar from "./components/Sidebar/Sidebar";
import AddBook from "./components/AddBook/AddBook";
import EditBook from "./components/EditBook/EditBook";
import ManageBook from "./components/ManageBook/ManageBook";
import Checkout from "./components/Checkout/Checkout";

export const UserContext = createContext();

function App() {
  const [loggerInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggerInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/orders">
              <Header />
              <Orders />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Sidebar />
              <Admin />
              <Footer />
            </PrivateRoute>
            <Route path="/deals">
              <Header />
              <Footer />
            </Route>
            <Route path="/login">
              <Header />
              <Login />
              <Footer />
            </Route>
            <Route path="/signup">
              <Header />
              <Signup />
              <Footer />
            </Route>
            <PrivateRoute path="/checkout/:key">
              <Header />
              <Checkout />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/editBook">
              <Sidebar />
              <EditBook />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/addBook">
              <Sidebar />
              <AddBook />
              <Footer />
            </PrivateRoute>
            <PrivateRoute path="/manageBook">
              <Sidebar />
              <ManageBook />
              <Footer />
            </PrivateRoute>
            <Route path="*">
              <Header />
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
