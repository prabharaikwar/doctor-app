import React from "react";
import "./AppointmentBooking.css";
import { Container, Row, Button, Col } from "react-bootstrap";
import { GrMap } from "react-icons/gr";
import { MdOutlineSchedule } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
<<<<<<< Updated upstream
import { Link } from "react-scroll";
=======
import { scroller } from "react-scroll";
>>>>>>> Stashed changes

const AppointmentBooking = () => {
  const handleBookAppointment = () => {
    scroller.scrollTo("scroll-to-booking", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Container className="appointment-book mt-5 w-100 p-4 text-center">
      <Row className="justify-content-around">
        <h2 className="">Easy way to Book your Appointment</h2>
<<<<<<< Updated upstream
        <Button variant="light" size="lg" className="appointment-btn">
          <Link to="booking" smooth={true} duration={500}>
            Book Appointment
          </Link>
=======
        <Button
          variant="light"
          size="lg"
          className="appointment-btn"
          onClick={handleBookAppointment}
        >
          Book Appointment
>>>>>>> Stashed changes
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
            <span>Schedule and book your date and time for appointment</span>
          </div>
        </Col>
        <Col md={4}>
          <div className="booking-round-circle mx-4">
            <div>
              <MdOutlinePayment size={30} className="text-primary" />
            </div>
<<<<<<< Updated upstream
            <span>Easy way to make Payment in multiple gateways</span>
=======
            <span>Easy way to make payment in multiple gateways</span>
>>>>>>> Stashed changes
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AppointmentBooking;
