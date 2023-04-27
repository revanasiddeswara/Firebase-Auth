import React from "react";
import { Button, Container, Navbar, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Sidebar from "./Sidebar";
import NavBar from "./Navbar";

const Home = () => {
  const [show, setShow] = useState(false);
  const closeSidebar = () => setShow(false);
  const showSidebar = () => setShow(true);
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
    <>
      {/* Navigation Bar */}
      <NavBar />
      {/* Sidebar */}
      <Sidebar />
      <div>
        <p
          style={{
            fontFamily: "Papyrus",
            fontSize: "60px",
            fontWeight: "700",
            color: "white",
          }}
        >
          Hello World
        </p>{" "}
        <br />
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
