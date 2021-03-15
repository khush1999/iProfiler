import React from "react";
import { Card } from "react-bootstrap";

interface IForm {
  email: string;
  phone: string;
  fname: string;
  lname: string;
  total_exp: number;
  university: string[];
  designition: string[];
  degree: string[];
  skills1: string;
  skills2: string;
  skills3: string;
  Companies_worked_at: string[];
}

type TForm = {
  passData: IForm,
}

const Applicant = () => {
              console.log("heeeeeeeeeee")

    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
    <Card.Title> Helloooooooooo </Card.Title>
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
  
export default Applicant;