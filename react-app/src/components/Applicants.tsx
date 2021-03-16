import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import profile from '../assets/cardImage.png';

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
  Companies_worked_at: string[];
  address: string;
  dob: string;
  city: string;
  state: string;
  zip: string;
  resume: string;
}

type TForm = {
  passData: IForm,
}

const Applicants = ({ passData }: TForm) => {
  // console.log(passData);
  return (
    <Card style={{ width: '18rem', backgroundColor: "#f8f8ff" }} className="shadow p-3 mb-5 
    bg-white rounded">
      <Card.Body>
        <Card.Title className="text-left">{passData.fname}{" "}{passData.lname}</Card.Title>
        <hr />
        <Card.Subtitle className="mb-2 text-muted">{passData.ugDegree}{","}{passData.pgDegree}
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
            <Button variant="primary">View Profile</Button>
          </Col>
          <Col sm={6}>
            <Button variant="primary">View Resume</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Applicants;

