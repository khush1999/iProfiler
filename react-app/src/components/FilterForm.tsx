import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

interface IProps {
    show: boolean;
    handleClose: () => void;
}

const FilterForm: React.FC<IProps> = ({ show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Filtering Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Skills
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Java"
                                        name="Java"
                                        id="java"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Python"
                                        name="Python"
                                        id="python"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="React"
                                        name="React"
                                        id="react"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="C/C++"
                                        name="C"
                                        id="c"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Django"
                                        name="Django"
                                        id="django"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Experience
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="0-3 Years"
                                        name="0_3Years"
                                        id="0_3years"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="3-6 Years"
                                        name="3_6Years"
                                        id="3_6years"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="6-9 Years"
                                        name="6_9Years"
                                        id="6_9years"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="9+ Years"
                                        name="9_Years"
                                        id="9_years"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Form.Label as="legend" column sm={2}>
                                    Designation
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="SDE"
                                        name="SDE"
                                        id="sde"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="SDET"
                                        name="SDET"
                                        id="sdet"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="HR"
                                        name="HR"
                                        id="hr"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="DevOps"
                                        name="DevOps"
                                        id="devops"
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Apply Filters</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FilterForm;