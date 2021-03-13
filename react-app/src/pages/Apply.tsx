import './apply.css';
import { Form, Col, Button } from "react-bootstrap";
import axios from 'axios';

import { useState } from 'react';
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
}

type TForm = {
    passData: IForm,
}

const Apply = ({ passData }: TForm) => {
    let fname = "", lname = "", email = "", phone = "", total_exp = 0, ug_University = "", pg_University = "", ugDegree = "", pgDegree = "", skills1 = "", skills2 = "", skills3 = "";
    if (passData != null) {
    fname=passData.name.split(" ")[0];
    lname=passData.name.split(" ")[1];
    email=passData.email;
    phone=passData.phone;
    total_exp=passData.total_exp;
    pg_University=passData.university[0];
    ug_University=passData.university[1];
    pgDegree=passData.degree[0];
    ugDegree=passData.degree[1];
    skills1=passData.skills[0];
    skills2=passData.skills[1];
    skills3=passData.skills[2];        
    }
    // const [fname, setFName] = useState("")
    // const [lname, setLName] = useState("")
    // const [email, setEmail] = useState("")
    // const [phone, setPhone] = useState("")
    // const [total_exp, setTotalExp] = useState(0)
    // const [ug_University, setUGUniversity] = useState("")
    // const [pg_university, setPGUniversity] = useState("")
    // const [ugDegree, setUGDegree] = useState("")
    // const [pgDegree, setPGDegree] = useState("")
    // const [skills1, setSkills1] = useState("")
    // const [skills2, setSkills2] = useState("")
    // const [skills3, setSkills3] = useState("")
 
    const OnSubmit = async(jsondata) =>
    {
        try {
            console.log(jsondata)
        const res = await axios.post("/create", jsondata,
        {
          headers:{
            "content_type":"application/json",
            },
        }
        );

    }
    catch (err) {
      if (err.response.status === 500) {
        console.log('There was a problem with the server');
      } else {
        console.log(err.response.data.msg);
      }
    }

    
  };
    

    return (
            <div className="main-form">
            <Form action = "/create" method = "POST"
         encType = "multipart/form-data">

                <h2>Resume Upload</h2>
                <br></br>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Upload your Resume" name="file" />
                </Form.Group>
                {/* <Button variant="primary" type="submit">
                    Upload
                </Button> */}
                <br></br>
                <br></br>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" id="fname" name="fname" placeholder="Enter First Name" defaultValue={fname} onChange={(e) => fname=e.target.value} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" id="lname" name="lname" placeholder="Enter Last Name" defaultValue={lname} onChange={(e) => lname=e.target.value}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>Select DOB</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id="email" name="email" placeholder="Enter Email"  defaultValue={ email} onChange={(e) => email=e.target.value}/>
                    </Form.Group>

                </Form.Row>

                <Form.Group controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control placeholder="Enter City" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control placeholder="Enter State">
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control placeholder="Enter 6 digit pincode" />
                    </Form.Group>

                </Form.Row>

                <Form.Row>

                    <Form.Group as={Col} controlId="formGridPhone1">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control id="phone" name="phone" placeholder="eg:- 932154XXXX" defaultValue={phone} onChange={(e) => phone=e.target.value}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="Phone2">
                        <Form.Label>Alternate Contact Number</Form.Label>
                        <Form.Control placeholder="eg:- 932154XXXX" />
                    </Form.Group>

                </Form.Row>

                <br></br>
                <h2>Educational Details</h2>
                <br></br>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridPostGraduation">
                        <Form.Label>Post Graduation Course</Form.Label>
                        <Form.Control type="text" placeholder="Enter PG Course" defaultValue={ pgDegree} onChange={(e) => pgDegree=e.target.value}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGCollege">
                        <Form.Label>College</Form.Label>
                        <Form.Control type="text" placeholder="Enter PG College" defaultValue={ pg_University} onChange={(e) => pg_University=e.target.value}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGPercentage">
                        <Form.Label>Percentage</Form.Label>
                        <Form.Control type="text" placeholder="Enter PG Percentage" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridUnderGraduation">
                        <Form.Label>Under Graduation Course</Form.Label>
                        <Form.Control type="text" placeholder="Enter UG Course" defaultValue={ ugDegree} onChange={(e) => ugDegree=e.target.value}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGCollege">
                        <Form.Label>College</Form.Label>
                        <Form.Control type="text" placeholder="Enter UG College" defaultValue={ ug_University} onChange={(e) => ug_University=e.target.value}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGPercentage">
                        <Form.Label>Percentage</Form.Label>
                        <Form.Control type="text" placeholder="Enter UG Percentage" />
                    </Form.Group>
                </Form.Row>

                <br></br>
                <h2>Job Skills</h2>
                <br></br>

                <Form.Group controlId="formGridSkillDes">
                    <Form.Label>Skills Description</Form.Label>
                    <Form.Control type="description" placeholder="Write Description" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridSkill1">
                        <Form.Label>Skill 1</Form.Label>
                        <Form.Control type="text" placeholder="Enter Skill" defaultValue={ skills1} onChange={(e) => skills1=e.target.value}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSkill2">
                        <Form.Label>Skill 2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Skill" defaultValue={ skills2} onChange={(e) => skills2=e.target.value}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSkill3">
                        <Form.Label>Skill 3</Form.Label>
                        <Form.Control type="text" placeholder="Enter Skill" defaultValue={ skills3} onChange={(e) => skills3=e.target.value} />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <input type='submit' value='Submit' className='btn btn-primary btn-block mt-4'/>
            </Form>
        </div>
    );
}

export default Apply;