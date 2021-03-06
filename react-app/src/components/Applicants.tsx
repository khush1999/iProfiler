import React from "react";
import {
  Button,
  Card,
  OverlayTrigger,
  Row,
  Tooltip
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Applicant.css";

/* Structure for Applicants' Data */ 

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
  status: string;
}

interface IState {
  status?: string;
}

type TForm = {
  passData: IForm;
};

//This component renders the details of an applicant in a card format

const Applicants = ({ passData }: TForm) => {
  
  let setGetResume;
  if (passData != null) {
    setGetResume = passData.resume_id;
  }

  return (
    <>
      <Card
        style={{ width: "18rem", backgroundColor: "#f8f8ff" }}
        className="shadow-lg p-3 mb-5 
    bg-white rounded"
      >

        <Card.Body>
          {/* Applicants' status */}
        {passData.status=="Available"?
        <OverlayTrigger
        key="top"
        placement="top"
        overlay={<Tooltip id={`tooltip-top`}>{passData.status}</Tooltip>}>
        <div className="status-tag">A</div>
        </OverlayTrigger>:
        <OverlayTrigger
        key="top"
        placement="top"
        overlay={
            <Tooltip id={`tooltip-top`}>{passData.status}</Tooltip>
        }
    >
        <div className="status-tag-1">I</div>
        </OverlayTrigger>
        }
        
          <div className="card-header-container">
            <Card.Title className="text-left card-name">
              <p className="card-display-name">
                <span>{passData.fname}</span>
                <span>{passData.lname}</span>
              </p>
            </Card.Title>

            {/* email-icon for interview invite */}
            <OverlayTrigger
              key="top"
              placement="top"
              overlay={
                <Tooltip id={`tooltip-top`}>Invite for Interview</Tooltip>
              }
            >
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
            </OverlayTrigger>
          </div>

          <hr className="card-hr" />

          {passData.pgDegree.length > 1 ? (
            <Card.Subtitle className="mb-2 text-muted card-degree">
              {passData.ugDegree} {" | "} {passData.pgDegree}
            </Card.Subtitle>
          ) : (
            <Card.Subtitle className="mb-2 text-muted card-degree">
              {passData.ugDegree}
            </Card.Subtitle>
          )}

          <Card.Text className="text-left">
            <h5 className="font-weight-bold">
              Experience of {passData.total_exp} Years
            </h5>
            
            <ul className="card-ul">
              <li>{passData.skills1} </li>
              <li> {passData.skills2} </li>
              <li> {passData.skills3}</li>
            </ul>
          </Card.Text>
          
          {/* View Applicant's Profile */}
          <Row className="justify-content-center" id="button-content">
    
              <Link
                to={{
                  pathname: "/UserProfile",
                  state: passData,
                }}
              >
                <Button
                  variant="dark align-self-end"
                  className="pricingTable-firstTable_table__getstart"
                >
                  View Profile
                </Button>
              </Link>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Applicants;
