import Applicant from '../components/Applicants';
import { Row, Col, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './DashboardPage.css';
import { Search, Briefcase, House, Person, Filter, ChevronBarRight } from 'react-bootstrap-icons';

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
        }, [data]);

    }
    return (
        <>
            {GetData()}
            <div className="main-dashboard">
                <div className="sidebar">
                    <div className="sidebar-head">
                        <h3>iProfiler</h3>
                    </div>
                    <a href="/"><House />Home</a>
                    <a className="active" href="#"> <Person />
                    Applicants</a>
                    <a href="#"><Briefcase />Job Postings</a>
                    <a href="#"><ChevronBarRight />Logout</a>
                </div>

                <div className="content">
                    <div>

                    </div>
                    <div className="search">
                        <Search />
                        <input type="search" name="search" id="" placeholder="Search..."
                            className="search-input" onChange={(e) => {
                                setIsSearched(!isSearched);
                                setSearchTerm(e.target.value)
                            }} />
                    </div>
                    <div className="filter">
                        <Row className="mr-lg-4 ml-lg-4 pr-0">
                            <Col md={11}>
                                <h4>Displaying Applicants</h4>
                            </Col>
                            <Col md={1} className="p-lg-0 ">
                                <Filter />
                                <Dropdown>
                                    <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                        Filter
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Skills</Dropdown.Item>
                                        <Dropdown.Item href="#">Designation</Dropdown.Item>
                                        <Dropdown.Item href="#">Experience</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                    <div className="grid-container">
                        {userData && data.map(user =>
                            <Applicant passData={user} />
                        )}
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