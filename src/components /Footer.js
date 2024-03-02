import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          
          <Col xs={4} sm={7} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/nawal-lamghari-9282181b5/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/nawel.el.3192/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/nawallamgharii/"><img src={navIcon3} alt="Icon" /></a>
            </div>
         </Col>
         <p className="text-center">Copyright 2024. All Rights Reserved. LAMGHARI NAWAL</p>

        </Row>
      </Container>
    </footer>
  )
}
