import Applicant from '../components/Applicants';
import { Row, Col, Dropdown, Nav } from 'react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import 'font-awesome/css/font-awesome.min.css';
import { Link, useHistory } from 'react-router-dom';

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

const DashboardPage = () => {

    const ip = {
        "email": "", "phone1": "", "phone2": "", "fname": "", "lname": "", "dob": "",
        "total_exp": 0, "ug_University": "", "pg_University": "",
        "designition": "", "ugDegree": "", "pgDegree": "", "pgPercentage": "", "ugPercentage": "",
        "skills1": "", "skills2": "", "skills3": "",
        "Companies_worked_at": [], "address": "", "city": "", "state": "", "zip": "", "resume": ""
    }

    const [userData, setUserData] = useState(false);
    const [data, setData] = useState([ip]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearched, setIsSearched] = useState(false);
    const [message, setMessage] = useState('');
    const [DropSkill,setDropSkill] = useState('');
    const [DropExp,setDropExp] = useState('');
    const [DropRole,setDropRole] = useState('');
    var exp,exp1;
    

    const history = useHistory();

    function GetData() {

        useEffect(() => {
            if (userData == false) {
                axios.get("/getData")
                    .then(res => {
                        console.log("////////////////////////////////////", res.data);
                        setData(res.data);
                        setUserData(true);
                    })
            }
            else {
                setIsSearched(!setIsSearched)
            }
        }, [data]);

    }
    const handleClick = async (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append("email", email);
        // formData.append("password", password);
        try {
            const res = await axios.get('/logout');
            console.log("$$$$$$$$$$$$$$$$$$$$$$")
            console.log(res.data);
            if (res.data === "EmailID") {
                history.push('/Login');
            }

        } catch (err) {
            if (err.response.status == 500) {
                setMessage("There was a problem with the server");
            } else {
                setMessage(err.response.data.msg);
            }
        }

    }

    const Courses = (courseType: string) => {
        setDropSkill(courseType);
    }

    const Experience = (expType: string) => {
        setDropExp(expType);
    }

    const Role = (roleType: string) => {
        setDropRole(roleType);
    }

    return (
        <>
            {GetData()}
            <div className="main-dashboard">
                <div className="sidebar">
                    <div className="sidebar-head">
                        <h3>iProfiler</h3>
                    </div>
                    <a href="/"><i className="fa fa-fw fa-home pr-2" style={{ fontSize: '1.75em' }} />
                    Home</a>
                    <a className="active" href="#"><i className="fa fa-fw fa-user pr-2"
                        style={{ fontSize: '1.75em' }} />
                        Applicants</a>
                    <a href="#"><i className="fa fa-fw fa-briefcase pr-2" style={{ fontSize: '1.75em' }} />
                    Job Postings</a>
                    <a href="#" onClick={handleClick}><i className="fa fa-fw fa-power-off pr-2" style={{ fontSize: '1.75em' }} />
                    Logout</a>
                </div>

                <div className="content">

                    <h4 className="mt-2 ml-2">Displaying Applicants</h4>

                    <div className="filter">
                        <Row className="filter-row">
                            <Col md={5} className="dashboard-filters">
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Skills
                                    </Dropdown.Toggle>
                                    <div className="custom">
                                    <select onChange={(e) => Courses(e.target.value)}>
                                        <option value="Java">Java</option>
                                        <option value="Python">Python</option>
                                        <option value="Django">Django</option>
                                        <option value="C">C/C++</option>
                                        <option value="React">React</option>
                                        <option value="Javascript">Javascript</option>
                                    </select>
                                    </div>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Experience
                                    </Dropdown.Toggle>
                                    <div className="custom">
                                    <select onChange={(e) => Experience(e.target.value)}>
                                        <option>0-3 Years</option>
                                        <option>3-6 Years</option>
                                        <option>6-9 Years</option>
                                        <option>{">"}9 Years</option>
                                    </select>
                                    </div>
                                </Dropdown>

                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Designation
                                    </Dropdown.Toggle>
                                    <div className="custom">
                                    <select onChange={(e) => Role(e.target.value)}>
                                        <option>SDE</option>
                                        <option>SDET</option>
                                        <option>HR</option>
                                        <option>DevOps</option>
                                    </select>
                                    </div>
                                </Dropdown>
                            </Col>
                            <Col md={7} className="pr-0">
                                <div className="search mr-0">
                                    <input type="search" name="search" id="" placeholder="Search Applicant by Name"
                                        className="search-input" onChange={(e) => {
                                            setIsSearched(!isSearched);
                                            setSearchTerm(e.target.value)
                                        }} />
                                </div>
                            </Col>
                        </Row>
                    </div>


                    <div className="grid-container justify-content-around">
                        {!isSearched &&  (DropSkill==="") && userData && data.map(user =>
                            <Applicant passData={user} />
                        )}
                    </div>
                    <hr />
                    
                    <div className="grid-container justify-content-around">
                        {
                            userData && isSearched && data.filter(user => (user.fname == searchTerm ||
                                user.lname == searchTerm || user.city == searchTerm || user.designition
                                == searchTerm)).map((user) => (

                                    <Applicant passData={user} />

                                ))
                        }
                    </div>

                    <div className="grid-container justify-content-around">
                        {
                            (DropSkill!="") && data.filter(user => (user.skills1 == DropSkill ||
                            user.skills2 == DropSkill || user.skills3 == DropSkill)).map((user) => (
                                <div>
                                                        {console.log("Looping inside",user)} 
                                                        <Applicant passData={user} />
                                </div>

                                ))
                        }
                    </div>

                    <div className="grid-container justify-content-around">
                        
        
                            {(DropExp!="") && data.filter(user => (DropExp=="0-3 Years" ? 
                            user.total_exp<=3:(DropExp=="3-6 Years" ? 
                            (user.total_exp>3 && user.total_exp<=6):(DropExp=="6-9 Years" ? (user.total_exp>6 && user.total_exp<=9) :(user.total_exp>9))))).map((user) => (
                                <div>
                                                        {console.log("Looping inside",user)} 
                                                        <Applicant passData={user} />
                                </div>
                               

                                ))}
                            
                        
                    </div>

                    <div className="grid-container justify-content-around">
                        {
                            (DropRole!="") && data.filter(user => (user.designition=== DropRole)).map((user) => (
                                <div>
                                                        {console.log("Looping inside",user)} 
                                                        <Applicant passData={user} />
                                </div>

                                ))
                        }
                    </div>

                </div>
                <h2> Seperation </h2>
                {
                    userData && isSearched && data.filter(user => (user.fname == searchTerm ||
                        user.lname == searchTerm || user.city == searchTerm || user.designition
                        == searchTerm)).map((user) => (
                            <div className="preview">
                                <Applicant passData={user} />
                            </div>
                        ))
                }
            </div>
        </>

    );
};

export default DashboardPage;
