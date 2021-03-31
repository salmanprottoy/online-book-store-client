import React from "react";
import { useContext } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
  const [loggerInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="">
      <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Navbar.Brand>
          <Link className="nav-link text-white" to="/">
            Online Book Store
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link class="nav-link" to="/orders">
                Orders
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link className="nav-link" to="/deals">
                Deals
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              {loggerInUser.name ? (
                <Link className="nav-link" to="/">
                  {loggerInUser.name}
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <Navbar bg="light" variant="light">
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            City Riding Service
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link class="nav-link" to="/destination">
              Destination
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </Nav.Link>
          <Nav.Link href="">
            {loggerInUser.name ? (
              <Link className="nav-link" to="/">
                {loggerInUser.name}
              </Link>
            ) : (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            )}
          </Nav.Link>
        </Nav>
      </Navbar> */}
    </div>
  );
};

export default Header;
