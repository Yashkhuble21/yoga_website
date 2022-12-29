import { Route, Routes, Link } from "react-router-dom";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import Signin from "./Signin";

import Classes from "./Classes";
import Signup from "./Signup";
import Home from "./Home";
//import Login from "./login";

function Navigation() {
  return (
    <>
      <div>
        <Navbar bg="white" expand="lg" className="bg-ligth" variant="ligth">
          <Container fluid>
            <Navbar.Brand href="#home" className="me-5">
              <img
                src="https://codextheme.codexperts.in/templatemonster/yogwe/assets/images/logo/logo.png"
                alt="img not found"
                className="w-50 h-25"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link as={Link} to="/" className="ms-5">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Classes" className="ms-5">
                  Classes
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="ms-5">
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="ms-5">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/Signin" className="ms-5">
                  Sign in
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/Signup"
                  className="ms-5 btn btn-primary border border-2 border-opacity-50"
                >
                  Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default Navigation;
