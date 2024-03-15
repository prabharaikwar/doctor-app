import React from "react";
import "./DoctorNavbar.css";
import {
  Navbar,
  Form,
  Row,
  Col,
  Container,
  Nav,
  Button,
} from "react-bootstrap";
import { Link } from "react-scroll";
import { Link as LinkAs } from "react-router-dom";

const DoctorNavbar = () => {
  return (
    <div className="navbar-bg w-100 mx-auto">
      <Navbar
        className="bg-transparent justify-content-between"
        expand="md"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home" className="font-weight-bold">
            Doctor +
          </Navbar.Brand>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search doctor"
                  className=" mr-sm-2"
                />
              </Col>
            </Row>
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className=" justify-content-center"
          >
            <Nav className="me-auto ">
              <Nav.Link>
                <LinkAs to="/" className="navItem">
                  Home
                </LinkAs>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to="service"
                  smooth={true}
                  duration={500}
                  className="navItem"
                >
                  Service
                </Link>
              </Nav.Link>
              <Nav.Link href="#home">
                <Link
                  to="aboutus"
                  smooth={true}
                  duration={500}
                  className="navItem"
                >
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <LinkAs to="/register" className="navItem">
                  Register
                </LinkAs>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="light">
                <LinkAs to="/login" className="btn-navitem btn">
                  Login
                </LinkAs>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DoctorNavbar;
