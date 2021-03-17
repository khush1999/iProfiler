import Applicant from '../components/Applicants';
import { Row, Col, Dropdown, Nav } from 'react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { Search, Briefcase, House, Person, Filter, ChevronBarRight } from 'react-bootstrap-icons';
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
                    <div>

                    </div>
                    <div className="search">
                        <input type="search" name="search" id="" placeholder="Search Applicant by Name"
                            className="search-input" onChange={(e) => {
                                setIsSearched(!isSearched);
                                setSearchTerm(e.target.value)
                            }} />
                    </div>
                    <div className="filter">
                        <Row className="dashboard-row">
                            <Col sm={11}>
                                <h4>Displaying Applicants</h4>
                            </Col>
                            <Col sm={1}>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Filter
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#" onClick={() => {
                                            console.log("reached inside*****************")
                                            data.filter(user => (user.skills1 == "C & C++" ||
                                                user.skills2 == "Python" || user.skills3 == "JavaScript")).map((user) => (
                                                    <div className="preview">
                                                        {console.log("Looping inside")}                            
                                                        <Applicant passData={user} />
                                                    </div>
                                                ))
                                        }}>Skills</Dropdown.Item>
                                        <Dropdown.Item href="#" onClick={() => {
                                            data.filter(user => (user.designition.toLowerCase().includes("sde-1") ||
                                                user.designition.toLowerCase().includes("sdet-1"))).map((user) => (
                                                    <div className="preview">
                                                        <Applicant passData={user} />
                                                    </div>
                                                ))
                                        }}>Designation</Dropdown.Item>
                                        <Dropdown.Item href="#" onClick={() => {
                                            data.filter(user => (user.total_exp < 5)).map((user) => (
                                                <div className="preview">
                                                    <Applicant passData={user} />
                                                </div>
                                            ))
                                        }}>Experience</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                    <div className="grid-container justify-content-around">
                        {!isSearched && userData && data.map(user =>
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
