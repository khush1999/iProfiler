import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import "./apply.css";

// Interface for Applicant Form
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
  resume_id: string;
  status: string;
}

// Type for IForm
type TForm = {
  passData: IForm;
};

// Apply page for Applicants
const Apply = ({ passData }: TForm) => {

  // Structure of our passData
  const ip = {
    "jobId": "",
    "jobRole": "",
    "jobOffer": "",
    "jobCtc": "",
    "skills1": "",
    "skills2": "",
    "skills3": "",
    "jobDes": "",
  }

  // variables to store onChange values
  let fname = "",
    lname = "",
    email = "",
    phone = "",
    total_exp = 0,
    ug_University = "",
    pg_University = "",
    ugDegree = "",
    pgDegree = "",
    skills1 = "",
    skills2 = "",
    skills3 = "",
    Companies_worked_at = "",
    resume_id = "",
    status = "available";

  // PreFilling initial values in the form
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
    resume_id = passData.resume_id;
  }

  // States for job data and applicant data
  const [jobData, setJobData] = useState(false);
  const [data, setData] = useState([ip]);


  //Getting Job Data for Designation dropdown
  function GetData() {
    useEffect(() => {
      if (jobData == false) {
        axios.get("/getJobData").then((res) => {
          console.log("////////////////////////////////////", res.data);
          setData(res.data);
          setJobData(true);
        });
      }
    }, [data]);
  }

  // Form Validation:
  const [validated, setValidated] = useState(false);
  const handleSubmit1 = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <>
      {/* Fetching all the job data */}
      {GetData()}
      <div className="main-form mb-4 shadow-lg p-4">
        <Form
          noValidate
          validated={validated}
          action="/create"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit1}
        >
          <br></br>
          <h2>General Details</h2>
          <br></br>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label className="required">First Name</Form.Label>
              <Form.Control
                type="text"
                id="fname"
                name="fname"
                placeholder="Enter First Name"
                required
                defaultValue={fname}
                onChange={(e) => (fname = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter First Name.{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label className="required">Last Name</Form.Label>
              <Form.Control
                type="text"
                id="lname"
                name="lname"
                placeholder="Enter Last Name"
                required
                defaultValue={lname}
                onChange={(e) => (lname = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter Last Name.{" "}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridDOB">
              <Form.Label className="required">Select DOB</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                id="dob"
                required
                placeholder="Date of Birth"
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter DOB.{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="required">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                required
                defaultValue={email}
                onChange={(e) => (email = e.target.value)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter valid Email.{" "}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress">
            <Form.Label className="required">Address</Form.Label>
            <Form.Control
              name="address"
              id="address"
              placeholder="1234 Main St"
              required
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label className="required">City</Form.Label>
              <Form.Control
                name="city"
                id="city"
                required
                placeholder="Enter City"
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter your current location.{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label className="required">State</Form.Label>
              <Form.Control
                name="state"
                id="state"
                required
                placeholder="Enter State"
              ></Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label className="required">Zip</Form.Label>
              <Form.Control
                name="zip"
                id="zip"
                minLength={6}
                maxLength={6}
                required
                placeholder="Enter 6 digit pincode"
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPhone1">
              <Form.Label className="required">Contact Number</Form.Label>
              <Form.Control
                type="tel"
                id="phone1"
                name="phone1"
                maxLength={10}
                minLength={10}
                required
                placeholder="eg:- 932154XXXX"
                pattern="((\+*)((0[ -]+)*|(91 )*)(\d{12}+|\d{10}+))|\d{5}([- ]*)\d{6}"
                defaultValue={phone}
                onChange={(e) => (phone = e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter valid phone no.{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="Phone2">
              <Form.Label>Alternate Contact Number</Form.Label>
              <Form.Control
                type="tel"
                id="phone2"
                name="phone2"
                maxLength={10}
                minLength={10}
                placeholder="eg:- 932154XXXX"
              />
            </Form.Group>
          </Form.Row>

          <br></br>
          <h2>Educational Details</h2>
          <br></br>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPostGraduation">
              <Form.Label>Post Graduation Course</Form.Label>
              <Form.Control
                type="text"
                id="pgDegree"
                name="pgDegree"
                placeholder="Enter PG Course"
                defaultValue={pgDegree}
                onChange={(e) => (pgDegree = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPGCollege">
              <Form.Label>College</Form.Label>
              <Form.Control
                type="text"
                id="pg_University"
                name="pg_University"
                placeholder="Enter PG College"
                defaultValue={pg_University}
                onChange={(e) => (pg_University = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPGPercentage">
              <Form.Label>Percentage</Form.Label>
              <Form.Control
                type="number"
                id="pgPercentage"
                name="pgPercentage"
                placeholder="Enter PG Percentage"
                min={0}
                max={100}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridUnderGraduation">
              <Form.Label className="required">Under Graduation Course</Form.Label>
              <Form.Control
                type="text"
                id="ugDegree"
                required
                name="ugDegree"
                placeholder="Enter UG Course"
                defaultValue={ugDegree}
                onChange={(e) => (ugDegree = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter valid degree.{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPGCollege">
              <Form.Label className="required">College</Form.Label>
              <Form.Control
                id="ug_University"
                required
                name="ug_University"
                type="text"
                placeholder="Enter UG College"
                defaultValue={ug_University}
                onChange={(e) => (ug_University = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter your university.{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPGPercentage">
              <Form.Label className="required">Percentage</Form.Label>
              <Form.Control
                id="ugPercentage"
                name="ugPercentage"
                required
                type="number"
                placeholder="Enter UG Percentage"
                min={0}
                max={100}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter your Percentage.{" "}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <br></br>
          <h2>Job Skills and Past Experience</h2>
          <br></br>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridSkill1">
              <Form.Label className="required">Skill 1</Form.Label>
              <Form.Control
                type="text"
                id="skills1"
                required
                name="skills1"
                placeholder="Enter Skill"
                defaultValue={skills1}
                onChange={(e) => (skills1 = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Mention your skill{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSkill2">
              <Form.Label className="required">Skill 2</Form.Label>
              <Form.Control
                type="text"
                id="skills2"
                required
                name="skills2"
                placeholder="Enter Skill"
                defaultValue={skills2}
                onChange={(e) => (skills2 = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Mention your skill{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridSkill3">
              <Form.Label className="required">Skill 3</Form.Label>
              <Form.Control
                type="text"
                id="skills3"
                required
                name="skills3"
                placeholder="Enter Skill"
                defaultValue={skills3}
                onChange={(e) => (skills3 = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Mention your skill{" "}
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label className="required">Total Experience </Form.Label>
              <Form.Control
                name="total_exp"
                id="total_exp"
                required
                placeholder=" Experience in years"
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please Enter total experience (in years..){" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDesignation">
              <Form.Label className="required">Applying For</Form.Label>
              <Form.Control as="select" defaultValue="Choose..."
                id="desig"
                name="desig"
                required
                type="text">
                <option>Choose...</option>
                {jobData && data.map((des) =>
                  <option>{des.jobRole}</option>
                )}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPreCom">
              <Form.Label className="required">Previous Company</Form.Label>
              <Form.Control
                name="Companies_worked_at"
                id="Companies_worked_at"
                required
                placeholder="Previous Company"
              />
              <Form.Control.Feedback type="invalid">
                Please enter previous company. Write NA if not available{" "}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSkillDes">
              <Form.Label className="required">Resume ID</Form.Label>
              <Form.Control
                id="resume_id"
                name="resume_id"
                required
                type="text"
                placeholder="Resume ID"
                value={resume_id}
              />
              <Form.Control.Feedback type="invalid">
                {" "}
              Please enter resume ID{" "}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridSkillDes">
              <Form.Label className="required">Status</Form.Label>
              <Form.Control
                id="status"
                name="status"
                required
                type="text"
                placeholder="Resume ID"
                value={status}
              />
              <Form.Control.Feedback type="invalid">status</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <input
            type="submit"
            value="Submit"
            className="btn btn-dark btn-block mt-4 mb-4 
                apply-button"
            style={{ width: "30%" }}
          />
        </Form>
      </div>
    </>
  );
};

export default Apply;