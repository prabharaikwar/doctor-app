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
<<<<<<< Updated upstream
import { Link } from "react-scroll";
import { Link as LinkAs } from "react-router-dom";
import { HOME, LOGIN, SIGNUP } from "../../helper/PageRoute";
=======
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { LOGIN, SIGNUP } from "../../helper/PageRoute";
>>>>>>> Stashed changes

const DoctorNavbar = () => {
  return (
    <div className="navbar-bg w-100 mx-auto">
      <Navbar
        className="bg-transparent justify-content-between"
        expand="md"
        variant="light"
      >
        <Container>
<<<<<<< Updated upstream
          <Navbar.Brand className="font-weight-bold">Doctor +</Navbar.Brand>
          <Form inline>
=======
          <Navbar.Brand href="#home" className="font-weight-bold">
            Doctor +
          </Navbar.Brand>
          <Form inline={"true"}>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <Nav className="me-auto">
              <Nav.Link as={LinkAs} to={HOME} className="navItem">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="service"
=======
            <Nav className="me-auto ">
              <Nav.Link className="navItem">Home</Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="service"
                smooth={true}
                duration={500}
                className="navItem"
              >
                Service
              </Nav.Link>
              <Nav.Link
                as={ScrollLink}
                to="aboutus"
>>>>>>> Stashed changes
                smooth={true}
                duration={500}
                className="navItem"
              >
<<<<<<< Updated upstream
                Service
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="aboutus"
                smooth={true}
                duration={500}
                className="navItem"
              >
                About Us
              </Nav.Link>
              <Nav.Link as={LinkAs} to={SIGNUP} className="navItem">
=======
                About Us
              </Nav.Link>
              <Nav.Link as={RouterLink} to={SIGNUP} className="navItem">
>>>>>>> Stashed changes
                Register
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="light">
<<<<<<< Updated upstream
                <LinkAs to={LOGIN} className="btn-navitem btn">
=======
                <RouterLink to={LOGIN} className="btn-navitem btn">
>>>>>>> Stashed changes
                  Login
                </RouterLink>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default DoctorNavbar;
