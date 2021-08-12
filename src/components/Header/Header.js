import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../images/fifo-iso-logo-2.png";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={logo}
            width="100"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              style={{ color: "#1cc7c1" }}
              className="mr-5"
              as={Link}
              to="/dashboard"
            >
              Agent Login
            </Nav.Link>
            <Nav.Link
              style={{ color: "#1cc7c1" }}
              className="mr-5"
              as={Link}
              to="/admin/login"
            >
              <FontAwesomeIcon icon={faUser} />
              Admin Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
