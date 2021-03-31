import React from 'react';
import { Nav, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './BannerDashboard.css';

export const BannerDashboard = () => {
    return (
        <div>
            <Row className="heading-style">
                <h3 className="welcome-content">Welcome User</h3>
                <div className="icons-container">
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-top`}>Invite Applicant</Tooltip>
                        }
                    >
                        <LinkContainer to="/SendEmail">
                            <Nav.Link className="p-0">
                                <i
                                    className="fa fa-user-plus"
                                    style={{
                                        fontSize: "1.75em",
                                        color: "darkslategray",
                                        paddingLeft: "1.5rem",
                                    }}
                                ></i>
                            </Nav.Link>
                        </LinkContainer>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={<Tooltip id={`tooltip-top`}>Notifications</Tooltip>}
                    >
                        <LinkContainer to="#">
                            <Nav.Link className="p-0">
                                <i
                                    className="fa fa-bell"
                                    style={{
                                        fontSize: "1.75em",
                                        color: "darkslategray",
                                        paddingLeft: "1.5rem",
                                    }}
                                ></i>
                            </Nav.Link>
                        </LinkContainer>
                    </OverlayTrigger>
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={<Tooltip id={`tooltip-top`}>Hello, User</Tooltip>}
                    >
                        <LinkContainer to="#">
                            <Nav.Link className="p-0">
                                <i
                                    className="fa fa-user-circle-o"
                                    style={{
                                        fontSize: "1.75em",
                                        color: "darkslategray",
                                        paddingLeft: "1.5rem",
                                    }}
                                ></i>
                            </Nav.Link>
                        </LinkContainer>
                    </OverlayTrigger>
                </div>
            </Row>
        </div>
    )
}
