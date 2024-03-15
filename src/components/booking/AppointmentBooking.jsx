import React from "react";
import "./AppointmentBooking.css";
import { Container, Row, Button, Col } from "react-bootstrap";
import { GrMap } from "react-icons/gr";
import { MdOutlineSchedule } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

const AppointmentBooking = () => {
  return (
    <Container className="appointment-book mt-5 w-100 p-4 text-center">
      <Row className="justify-content-around">
        <h2 className="">Easy way to Book your Appointment</h2>
        <Button variant="light" size="lg" className="appointment-btn">
          Book Appointment
        </Button>
      </Row>
      <Row className="justify-content-center m-2">
        <Col md={4}>
          <div className="booking-round-circle mx-4">
            <div>
              <GrMap size={30} className="text-success" />
            </div>
            <span>Search the location and serach near by doctor</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="booking-round-circle mx-4">
            <div>
              <MdOutlineSchedule size={30} className="text-danger" />
            </div>
            <span>Search the location and serach near by doctor</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="booking-round-circle mx-4">
            <div>
              <MdOutlinePayment size={30} className="text-primary" />
            </div>
            <span>Search the location and serach near by doctor</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentBooking;
