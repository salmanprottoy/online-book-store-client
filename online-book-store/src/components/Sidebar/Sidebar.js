import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="wrapper">
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
              <Link className="nav-link" to="/manageBook">
                Manage Books
              </Link>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <Link class="nav-link" to="/addBook">
                Add Book
              </Link>
            </Nav.Link>
            <Nav.Link href="#features">
              <Link className="nav-link" to="/editBook">
                Edit Book
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Sidebar;
