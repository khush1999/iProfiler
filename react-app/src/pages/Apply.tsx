import './apply.css';
import { Form, Col, Button } from "react-bootstrap";
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
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [total_exp, setTotalExp] = useState(0)
    const [university, setUniversity] = useState([])
    const [designation, setDesignation] = useState([])
    const [degree, setDegree] = useState([])
    const [skills, setSkills] = useState([])
    const [worked,setWorked] = useState([])

    setName(passData.name);
    setEmail(passData.email);
    // setPhone(passData.phone);
    // setTotalExp(passData.total_exp);
    // setUniversity(passData.university);
    // setDesignation(passData.designition);
    // setPhone(passData.phone);
    // setTotalExp(passData.total_exp);
    
    return (
            <div className="main-form">
            <Form action="/upload" method="POST" encType="multipart/form-data">

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
                        <Form.Control type="text" placeholder="Enter First Name" defaultValue={passData.name} onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" defaultValue={passData.name} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>Select DOB</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email"  defaultValue={ passData.email}/>
                    </Form.Group>

                </Form.Row>

                <Form.Group controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" defaultValue={ passData.email}/>
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
                        <Form.Control placeholder="eg:- 932154XXXX" defaultValue={passData.phone} />
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
                        <Form.Control type="text" placeholder="Enter PG Course"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGCollege">
                        <Form.Label>College</Form.Label>
                        <Form.Control type="text" placeholder="Enter PG College" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGPercentage">
                        <Form.Label>Percentage</Form.Label>
                        <Form.Control type="text" placeholder="Enter PG Percentage" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridUnderGraduation">
                        <Form.Label>Under Graduation Course</Form.Label>
                        <Form.Control type="text" placeholder="Enter UG Course" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPGCollege">
                        <Form.Label>College</Form.Label>
                        <Form.Control type="text" placeholder="Enter UG College" />
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
                        <Form.Control type="text" placeholder="Enter Skill" defaultValue={passData.skills[1]}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSkill2">
                        <Form.Label>Skill 2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Skill" defaultValue={passData.skills[2]}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSkill3">
                        <Form.Label>Skill 3</Form.Label>
                        <Form.Control type="text" placeholder="Enter Skill" defaultValue={passData.skills[0]} />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Apply;
