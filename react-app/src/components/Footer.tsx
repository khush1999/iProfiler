import React from "react";
import { Col, Row } from "react-bootstrap";
import './footer.css';

const Footer = () => {
    return(
    <Row className="footer">
        <Col>
        Hashedin Technologies
        </Col>
        <Col>
        About Us
        </Col>
        <Col>
        Contact Us
        </Col>
        <Col>
        Address
        </Col>
    </Row>
    );
}

export default Footer