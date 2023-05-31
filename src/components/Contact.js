import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/email.gif";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrackVisibility from "react-on-screen";
import { validate } from "email-validator";
import { FaEnvelope } from "react-icons/fa";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!validate(formDetails.email)) {
      toast.error("Please fill in all the fields or email me directly");
      return;
    }

    // Email validation
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formDetails.email)) {
      toast.error("Please enter a valid email address or email me directly ");
      return;
    }
    setButtonText("Sending...");

    try {
      await emailjs.send("service_7pr0dsc", "template_v6oqht8", formDetails, "Kbd5DAscDYv1le_5y");
      setFormDetails(formInitialDetails);
      toast.success("Message sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Something went wrong, please try again later.");
    }

    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <ToastContainer position="top-right" autoClose={5000} />
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  
                  <p>
                  <h6>EMAIL ME DIRECTLY</h6>
                    <a href="mailto:felixgayawon28@gmail.com" className="email-link">
                      <FaEnvelope className="email-icon" /> 
                      felixgayawon28@gmail.com
                    </a>
                  </p>
                  <h2>Write me a Message 👇</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.name} placeholder="Full Name" onChange={(e) => onFormUpdate("name", e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate("email", e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                        <button type="submit" onClick={handleSubmit} className="Toastify__toast-icon Toastify--animate-icon Toastify__zoom-enter">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
