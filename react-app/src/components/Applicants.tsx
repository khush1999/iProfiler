import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserProfile } from "../pages/UserProfile";

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
  passData: IForm;
};

const Applicants = ({ passData }: TForm) => {
  // const [getResume, setGetResume] = useState('');
  let setGetResume;
  if (passData != null) {
    setGetResume = passData.resume_id;
  }

  // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  // console.log(setGetResume);

  function handleResume() {
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(passData.resume_id);
    axios
      .get(`http://0.0.0.0:5000/getData/` + passData.resume_id, {
        headers: {
          "Content-type": "application/pdf",
        },
        responseType: "blob",
      })
      .then(function (response) {
        console.log(response.data);
        const blobUrl = URL.createObjectURL(response.data);

        // Create a link element
        const link = document.createElement("a");

        // Set link's href to point to the Blob URL
        link.href = blobUrl;
        link.download = passData.resume_id;

        // Append link to the body
        document.body.appendChild(link);

        // Dispatch click event on the link
        // This is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );

        // Remove link from body
        document.body.removeChild(link);
      });
  }
  // const url = "http://127.0.0.1:5000/getData/" + passData.resume_id;

  return (
    <Card
      style={{ width: "18rem", backgroundColor: "#f8f8ff" }}
      className="shadow p-3 mb-5 
    bg-white rounded"
    >
      <Card.Body>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Card.Title className="text-left">
            {passData.fname} {passData.lname}
          </Card.Title>
          <Link
            to={{
              pathname: "/IncommingRounds",
              state: passData,
            }}
          >
            <i
              className="fa fa-envelope"
              style={{ fontSize: "1.75em", color: "#AE4DFF" }}
            ></i>
          </Link>
        </div>

        <hr />
        {/* <Card.Subtitle className="mb-2 text-muted">
        {passData.pgDegree.length()>1?({passData.ugDegree} + {'-'} + {passData.pgdegree}):{passData.ugDegree}}
        </Card.Subtitle> */}

        {passData.pgDegree.length > 1 ? (
          <Card.Subtitle className="mb-2 text-muted">
            {passData.ugDegree} {" | "} {passData.pgDegree}
          </Card.Subtitle>
        ) : (
          <Card.Subtitle className="mb-2 text-muted">
            {passData.ugDegree}
          </Card.Subtitle>
        )}

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
            <Link
              to={{
                pathname: "/UserProfile",
                state: passData,
              }}
            >
              <Button variant="dark align-self-end">View Profile</Button>
            </Link>
          </Col>
          <Col sm={6}>
            <Button variant="dark align-self-end" onClick={handleResume}>
              View Resume
            </Button>

            {/* <Link to={url} target="_blank" download>
              Download
            </Link> */}
            {/* <a href={require('../resumes/Resume.pdf')} target="_blank">Download Pdf</a> */}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Applicants;
