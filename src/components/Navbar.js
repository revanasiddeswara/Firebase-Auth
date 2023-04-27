import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

function NavBar() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar className="ml-auto" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="#home">Breezi.ai</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/link">Link</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <span
            style={{
              fontFamily: "Papyrus",
              color: "white",
              marginLeft: "250%",
            }}
          >
            <Nav.Link>{user && user.email}</Nav.Link>
            <Nav.Link
              style={{ fontFamily: "Papyrus", color: "white" }}
              onClick={handleLogout}
            >
              Logout
            </Nav.Link>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
