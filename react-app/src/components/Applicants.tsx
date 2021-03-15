import React from "react";
import { Card } from "react-bootstrap";

interface IForm {
  email: string;
  phone1: string;
  phone2: string;
  fname: string;
  lname: string;
  total_exp: number;
  designition: string[];
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
  console.log(passData);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> {passData.fname} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">brooooooo</Card.Subtitle>
        <Card.Text>
          qwerty
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Applicants;

