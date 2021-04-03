import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

/* Structure for Modal props */
interface IProps {
  show: boolean;
  handleClose: () => void;
  handleFilterSubmit: (data: any) => void;
}

/* Structure for data from Modal */
let data = {
  Skills: "",
  Experience: "",
  Designation: "",
};

/*This component allows HR to filter Applicants based on skills, designation and experience*/
const FilterForm: React.FC<IProps> = ({
  show,
  handleClose,
  handleFilterSubmit,
}) => {

  let filterData = data;

  /* Structure for job post */
  const ip = {
    "jobId": "",
    "jobRole": "",
    "jobOffer": "",
    "jobCtc": "",
    "skills1": "",
    "skills2": "",
    "skills3": "",
    "jobDes":"",
  }

  const [jobData, setJobData] = useState(false);
  const [desData, setDesData] = useState([ip]);

  /* Setting target value for Skils */
  const handleSkills = (e) => {
    if (e.target.value === "All") {
      filterData.Skills = "";
    } else {
      filterData.Skills = e.target.value;
    }
  };

  /* Setting target value for Experience */
  const handleExperience = (e) => {
    if (e.target.value === "All") {
      filterData.Experience = "";
    } else {
      filterData.Experience = e.target.value;
    }
  };

  /* Setting target value for Designation */
  const handleDesignation = (e) => {
    if (e.target.value === "All") {
      filterData.Designation = "";
    } else {
      filterData.Designation = e.target.value;
    }
  };

  /* Function that submits the filter request */
  const submitFilter = (e) => {
    e.preventDefault();
    handleFilterSubmit(filterData);
    handleClose();
  };


  /* Axios call for fetching the Job Data */
  function GetData() {
    useEffect(() => {
      if (jobData == false) {
        axios.get("/getJobData").then((res) => {
          setDesData(res.data);
          setJobData(true);
        });
      }
    }, [data]);
  }

  return (
    <>
      {GetData()}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filtering Options</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={submitFilter} className="p-1">

            <fieldset onChange={handleSkills}>
              <Form.Group as={Row} className="align-items-baseline">
                <Form.Label as="legend" column sm={3}>
                  Skills
                </Form.Label>
                <Col sm={9}>
                  <Form.Check
                    type="radio"
                    label="All"
                    value="All"
                    name="Skills"
                    id="all"
                    required
                  />
                  <Form.Check
                    type="radio"
                    label="Java"
                    value="Java"
                    name="Skills"
                    id="java"
                  />
                  <Form.Check
                    type="radio"
                    label="Python"
                    value="Python"
                    name="Skills"
                    id="python"
                  />
                  <Form.Check
                    type="radio"
                    label="React"
                    value="React"
                    name="Skills"
                    id="react"
                  />
                  <Form.Check
                    type="radio"
                    label="C/C++"
                    value="C/C++"
                    name="Skills"
                    id="c"
                  />
                  <Form.Check
                    type="radio"
                    label="Django"
                    value="Django"
                    name="Skills"
                    id="django"
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset onChange={handleExperience}>
              <Form.Group as={Row} className="align-items-baseline">
                <Form.Label as="legend" column sm={3}>
                  Experience
                </Form.Label>
                <Col sm={9}>
                  <Form.Check
                    type="radio"
                    label="All"
                    value="All"
                    name="Experience"
                    id="all"
                    required
                  />
                  <Form.Check
                    type="radio"
                    label="0-3 Years"
                    value="0-3 Years"
                    name="Experience"
                    id="0_3years"
                  />
                  <Form.Check
                    type="radio"
                    label="3-6 Years"
                    value="3-6 Years"
                    name="Experience"
                    id="3_6years"
                  />
                  <Form.Check
                    type="radio"
                    label="6-9 Years"
                    value="6-9 Years"
                    name="Experience"
                    id="6_9years"
                  />
                  <Form.Check
                    type="radio"
                    label="9+ Years"
                    value="9+ Years"
                    name="Experience"
                    id="9_years"
                  />
                </Col>
              </Form.Group>
            </fieldset>

            <fieldset onChange={handleDesignation}>
              <Form.Group as={Row} className="align-items-baseline">
                <Form.Label as="legend" column sm={3}>
                  Designation
                </Form.Label>
                <Col sm={9}>
                  <Form.Check
                    type="radio"
                    label="All"
                    value="All"
                    name="designation"
                    id="all"
                    required
                  />
                  {jobData &&
                    desData.map((job) =>
                      <Form.Check
                        type="radio"
                        label={job.jobRole}
                        value={job.jobRole}
                        name="designation"
                        id={job.jobRole.toLowerCase()}
                        required
                      />
                    )}
                  
                </Col>
              </Form.Group>
            </fieldset>

            <Modal.Footer>
              <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button
                    variant="dark"
                    type="submit"
                    style={{ width: "130%", height: "3rem" }}
                  >
                    Apply Filters
                  </Button>
                </Col>
              </Form.Group>
            </Modal.Footer>

          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FilterForm;

