import './apply.css';
import { Form, Col, Button, Modal } from "react-bootstrap";
import axios from 'axios';

import { useState } from 'react';
import { NavigationBar } from '../components/NavigationBar';
interface IForm {
    email: string;
    phone: string;
    name: string;
    total_exp: number;
    university: string[];
    designition: string[];
    degree: string[];
    skills: string[];
    Companies_worked_at: string[];
}

type TForm = {
    passData: IForm,
}

const Apply = ({ passData }: TForm) => {
    let fname = "", lname = "", email = "", phone = "", total_exp = 0, ug_University = "", pg_University = "", ugDegree = "", pgDegree = "", skills1 = "", skills2 = "", skills3 = "";
    if (passData != null) {
        fname = passData.name.split(" ")[0];
        lname = passData.name.split(" ")[1];
        email = passData.email;
        phone = passData.phone;
        total_exp = passData.total_exp;
        pg_University = passData.university[0];
        ug_University = passData.university[1];
        pgDegree = passData.degree[0];
        ugDegree = passData.degree[1];
        skills1 = passData.skills[0];
        skills2 = passData.skills[1];
        skills3 = passData.skills[2];
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const OnSubmit = async (jsondata) => {
        if (jsondata != null) {
            try {
                console.log(jsondata)
                const res = await axios.post("/create", jsondata,
                    {
                        headers: {
                            "content_type": "application/json",
                        },
                    }
                );

            }
            catch (err) {
                if (err.response.status === 500) {
                    console.log('There was a problem with the server');
                } else {
                    console.log(err.response.data.msg);
                }
            }

        }
    };

    // Form Validation:
    const [validated, setValidated] = useState(false);

    const handleSubmit1 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        if(form.checkValidity() === true) {
            handleShow();
        }
        setValidated(true);
    };
    return (
        <div className="main-form">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Application has been submitted !!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Form noValidate validated={validated} action="/create" method="POST"
                encType="multipart/form-data" onSubmit={handleSubmit1}>

                <br></br>
                <h2>General Details</h2>
                <br></br>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" id="fname" name="fname" placeholder="Enter First Name" required defaultValue={fname} onChange={(e) => fname = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Please Enter First Name. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" id="lname" name="lname" placeholder="Enter Last Name" required defaultValue={lname} onChange={(e) => lname = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Please Enter Last Name. </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>Select DOB</Form.Label>
                        <Form.Control type="date" name="dob" id="dob" required placeholder="Date of Birth" />
                        <Form.Control.Feedback type="invalid"> Please Enter DOB. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id="email" name="email" placeholder="Enter Email" required defaultValue={email} onChange={(e) => email = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Please Enter valid Email. </Form.Control.Feedback>
                    </Form.Group>

                </Form.Row>
                
                <Form.Row>
                <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Total Experience </Form.Label>
                    <Form.Control name="total_exp" id="total_exp" required placeholder=" Experience in years" />
                    <Form.Control.Feedback type="invalid"> Please Enter total experience (in years..) </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control name="address" id="address" placeholder="1234 Main St" />
                </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control name="city" id="city" required placeholder="Enter City" />
                        <Form.Control.Feedback type="invalid"> Please Enter your current location. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control name="state" id="state" required placeholder="Enter State">
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control name="zip" id="zip" required placeholder="Enter 6 digit pincode" />
                    </Form.Group>

                </Form.Row>

                <Form.Row>

                    <Form.Group as={Col} controlId="formGridPhone1">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control id="phone1" name="phone1" required placeholder="eg:- 932154XXXX" defaultValue={phone} onChange={(e) => phone = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Please Enter phone no. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Phone2">
                        <Form.Label>Alternate Contact Number</Form.Label>
                        <Form.Control id="phone2" name="phone2" placeholder="eg:- 932154XXXX" />
                    </Form.Group>

                </Form.Row>

                <Form.Group controlId="formGridSkillDes">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control id ="desig" name="desig" required type="text" placeholder="Write Designation applying for" />
                    <Form.Control.Feedback type="invalid"> Please Enter Post applying for. </Form.Control.Feedback>
                </Form.Group>

                <br></br>
                <h2>Educational Details</h2>
                <br></br>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPostGraduation">
                        <Form.Label>Post Graduation Course</Form.Label>
                        <Form.Control type="text" id="pgDegree" name="pgDegree" placeholder="Enter PG Course" defaultValue={pgDegree} onChange={(e) => pgDegree = e.target.value} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGCollege">
                        <Form.Label>College</Form.Label>
                        <Form.Control type="text" id="pg_University" name="pg_University" placeholder="Enter PG College" defaultValue={pg_University} onChange={(e) => pg_University = e.target.value} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGPercentage">
                        <Form.Label>Percentage</Form.Label>
                        <Form.Control type="text" id="pgPercentage" name="pgPercentage" placeholder="Enter PG Percentage" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridUnderGraduation">
                        <Form.Label>Under Graduation Course</Form.Label>
                        <Form.Control type="text" id="ugDegree" required name="ugDegree" placeholder="Enter UG Course" defaultValue={ugDegree} onChange={(e) => ugDegree = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Please Enter valid degree. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGCollege">
                        <Form.Label>College</Form.Label>
                        <Form.Control id="ug_University" required name="ug_University" type="text" placeholder="Enter UG College" defaultValue={ug_University} onChange={(e) => ug_University = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Please Enter your university. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGPercentage">
                        <Form.Label>Percentage</Form.Label>
                        <Form.Control id="ugPercentage" name="ugPercentage" required type="text" placeholder="Enter UG Percentage" />
                        <Form.Control.Feedback type="invalid"> Please Enter your Percentage. </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <br></br>
                <h2>Job Skills</h2>
                <br></br>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSkill1">
                        <Form.Label>Skill 1</Form.Label>
                        <Form.Control type="text" id="skills1" required name="skills1" placeholder="Enter Skill" defaultValue={skills1} onChange={(e) => skills1 = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Mention your skill </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSkill2">
                        <Form.Label>Skill 2</Form.Label>
                        <Form.Control type="text" id="skills2" required name="skills2" placeholder="Enter Skill" defaultValue={skills2} onChange={(e) => skills2 = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Mention your skill </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSkill3">
                        <Form.Label>Skill 3</Form.Label>
                        <Form.Control type="text" id="skills3" required name="skills3" placeholder="Enter Skill" defaultValue={skills3} onChange={(e) => skills3 = e.target.value} />
                        <Form.Control.Feedback type="invalid"> Mention your skill </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <input type='submit' value='Submit' className='btn btn-primary btn-block mt-4 mb-4' />
            </Form>
        </div>
    );
}

export default Apply;