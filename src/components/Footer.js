import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logoFG.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

import React, { useState, useEffect } from 'react';

{/*export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
         {/*<MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/felix-g-b9aaa6217/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/FelixG28" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/glix29/"target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}*/}


export const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the value as per your needs
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check the initial width on mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          {!isMobile && (
            <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col>
          )}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon"> 
              <a href="https://www.linkedin.com/in/felix-g-b9aaa6217/" target="_blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/FelixG28" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/glix29/" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
