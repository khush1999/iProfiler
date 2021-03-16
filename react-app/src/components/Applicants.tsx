import React from "react";
import { Card } from "react-bootstrap";
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
    <Card style={{ width: '18rem', backgroundColor: "#595959" }} className="text-white mb-2">
      <Card.Img variant="top" src={profile} width="100%" />
      <Card.Body>
        <Card.Title> {passData.fname}{" "}{passData.lname} </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{passData.pgDegree}{", "}{passData.ugDegree}
        </Card.Subtitle>
        <Card.Text>
          <ArrowRight />{passData.skills1}<br />
          <ArrowRight />{passData.skills2}<br />
          <ArrowRight />{passData.skills3}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Applicants;

