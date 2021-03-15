import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Cards } from './Card';

const divColor = { backgroundColor: '#cce7ff' };

export const Applicants = () => (
    <Container style={divColor} className="mt-5 pt-2 pb-2">
        <Row>
            <Col md={2}>
                <a href="/">Apply Filters</a>
            </Col>
            <Col md={2}>
                <a href="/">Send Invitations</a>
            </Col>
        </Row>
        <Cards /><Cards /><Cards />
    </Container>
);