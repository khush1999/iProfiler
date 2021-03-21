import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

interface IForm {
  email: string;
  phone1: string;
  phone2: string;
  fname: string;
  lname: string;
  total_exp: number;
  designition: string;
  pgDegree: string;
  ugDegree: string;
  pg_University: string;
  ug_University: string;
  ugPercentage: string;
  pgPercentage: string;
  skills1: string;
  skills2: string;
  skills3: string;
  Companies_worked_at: string;
  address: string;
  dob: string;
  city: string;
  state: string;
  zip: string;
  resume_id: string;
}

type TForm = {
  passData: IForm,
}

const Applicants = ({ passData }: TForm) => {  

  // const [getResume, setGetResume] = useState('');
  let setGetResume;
  if(passData != null) {
    setGetResume = passData.resume_id;
  }
  
  console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  console.log(setGetResume);
  // function handleResume() {
  //   console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  //   console.log(passData.resume_id);
  //   axios.get('/upload/', {
  //     params: {
  //       path: setGetResume
  //     }
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  // }
  return (
    <Card style={{ width: '18rem', backgroundColor: "#f8f8ff" }} className="shadow p-3 mb-5 
    bg-white rounded">
      <Card.Body>
        <Card.Title className="text-left">{passData.fname}{" "}{passData.lname}</Card.Title>
        <hr />
        <Card.Subtitle className="mb-2 text-muted">{passData.ugDegree}{" "}{passData.pgDegree}
        </Card.Subtitle>
        <Card.Text className="text-left">
          <h6>Total Experience: {passData.total_exp}</h6>
          <h6>Skills:</h6>
          <ul>
            <li>{passData.skills1}</li>
            <li>{passData.skills2}</li>
            <li>{passData.skills3}</li>
          </ul>
        </Card.Text>
        <Row>
          <Col sm={6}>
            <Button variant="primary align-self-end">View Profile</Button>
          </Col>
          <Col sm={6}>
            {/* <Button variant="primary align-self-end" onClick = {handleResume}>View Resume</Button> */}
            {/* <Link to={`../resumes/${setGetResume}`} target="_blank" download> Download</Link> */}
            <a href={require('../resumes/Resume.pdf')} target="_blank">Download Pdf</a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Applicants;

