// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
// import nextId from "react-id-generator";


// interface IProps {
//     show: boolean;
//     handleClose: () => void;
// }

export const EditJobPost = () => {

//     let JobId = nextId("job-id-");

//     // Form Validation:
//     const [validated, setValidated] = useState(false);
//     const handleSubmit1 = (event) => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//             event.preventDefault();
//             event.stopPropagation();
//         }
//         setValidated(true);
//     };

//     const ip = {
//         "jobId": "",
//         "jobRole": "",
//         "jobOffer": "",
//         "jobCtc": "",
//         "skills1": "",
//         "skills2": "",
//         "skills3": "",
//         "jobDes": ""
//     }

//     const [show, setShow] = useState(false);
//     const [jobData, setJobData] = useState(false);
//     const [data, setData] = useState([ip]);

//     const handleShow = () => {
//         setShow(true);
//     };
//     const handleClose = () => {
//         setShow(false);
//     };

//     function GetData() {
//         useEffect(() => {
//             if (jobData == false) {
//                 axios.get("/getJobData").then((res) => {
//                     console.log("////////////////////////////////////", res.data);
//                     setData(res.data);
//                     setJobData(true);
//                 });
//             }
//         }, [data]);
//     }
    
    return (
        <div></div>
//         <>
//             {GetData()}
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Post a Job</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Form
//                         noValidate
//                         validated={validated}
//                         action="/job_update"
//                         method="POST"
//                         encType="multipart/form-data"
//                         onSubmit={handleSubmit1}
//                         className="p-1"
//                     >
//                         <Form.Row>
//                             <Form.Group as={Col} controlId="job-id">
//                                 <Form.Label>Job ID</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     id="jobId"
//                                     name="jobId"
//                                     placeholder="Enter Job ID"
//                                     disabled
//                                     defaultValue={data}
//                                 />
//                             </Form.Group>
//                             <Form.Group as={Col} controlId="job-role">
//                                 <Form.Label>Job Role</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     id="jobRole"
//                                     name="jobRole"
//                                     placeholder="Enter Job Role"
//                                     required
//                                     onChange={(e) => (e.target.value)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {" "}
//                             Please Enter Job Role.{" "}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                         </Form.Row>

//                         <Form.Row>
//                             <Form.Group as={Col} controlId="job-offer">
//                                 <Form.Label>Job Offer</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     id="jobOffer"
//                                     name="jobOffer"
//                                     placeholder="Enter Job Offer"
//                                     required
//                                     onChange={(e) => (e.target.value)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {" "}
//                             Please Enter Job offer.{" "}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} controlId="job-ctc">
//                                 <Form.Label>CTC</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     id="jobCtc"
//                                     name="jobCtc"
//                                     placeholder="Enter Job CTC"
//                                     required
//                                     onChange={(e) => (e.target.value)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {" "}
//                             Please Enter Job CTC.{" "}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                         </Form.Row>

//                         <Form.Row>
//                             <Form.Group as={Col} controlId="job-skill1">
//                                 <Form.Label>Skill 1</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     id="skills1"
//                                     name="skills1"
//                                     placeholder="Enter Skill"
//                                     required
//                                     onChange={(e) => (e.target.value)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {" "}
//                             Please Enter Skill.{" "}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} controlId="job-skill2">
//                                 <Form.Label>Skill 2</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     id="skills2"
//                                     name="skills2"
//                                     placeholder="Enter Skill"
//                                     required
//                                     onChange={(e) => (e.target.value)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {" "}
//                             Please Enter Skill.{" "}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group as={Col} controlId="job-skill3">
//                                 <Form.Label>Skill 3</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     id="skills3"
//                                     name="skills3"
//                                     placeholder="Enter Skill"
//                                     required
//                                     onChange={(e) => (e.target.value)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {" "}
//                             Please Enter Skill.{" "}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                         </Form.Row>
//                         <Modal.Footer>
//                             <Form.Group as={Row}>
//                                 <Col sm={{ span: 10, offset: 2 }}>
//                                     <Button
//                                         variant="dark"
//                                         type="submit"
//                                         style={{ width: "130%", height: "3rem" }}
//                                     >
//                                         Create Job
//                                     </Button>
//                                 </Col>
//                             </Form.Group>
//                         </Modal.Footer>
//                     </Form>
//                 </Modal.Body>
//             </Modal>
        // </>
    );
}