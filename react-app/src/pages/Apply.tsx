import react, { useEffect, useState } from 'react';
import './apply.css';
import { Form, Col, Button } from "react-bootstrap";
import { info } from 'console';


const Apply = () => {
    const[data,setData] = useState<Array<Object>>([]);
    
    function GetData() {
    console.log("ABCD*******************");
    useEffect(()=>{
        fetch("/upload").then(res => {
            if(res.ok){
            return res.json();
            }

        }).then(jsonRes => setData(jsonRes));
    })

    console.log("******************************");
    console.log(data);
    }
    // function selectFile(e) {
    //     setFile(e.target.file);
    // }
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
                <input type="submit" value="submit" onSubmit = {() => GetData} />
                <br></br>
                
                <br></br>
                <h2>General Details</h2>
                <br></br>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridDOB">
                        <Form.Label>Select DOB</Form.Label>
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
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
                        <Form.Control placeholder="eg:- 932154XXXX" />
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
                        <Form.Control type="text" placeholder="Enter PG Course" />
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
                        <Form.Control type="text" placeholder="Enter Skill" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSkill2">
                        <Form.Label>Skill 2</Form.Label>
                        <Form.Control type="text" placeholder="Enter Skill" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridSkill3">
                        <Form.Label>Skill 3</Form.Label>
                        <Form.Control type="text" placeholder="Enter Skill" />
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
