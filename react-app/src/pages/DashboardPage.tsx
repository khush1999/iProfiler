import Applicant from '../components/Applicants';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Applicants from '../components/Applicants';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`

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

// type TForm = {
//     passData: IForm[],
// }

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
    // let userData: TForm = new Array<IForm>();
    // const applicants = useSelector((state) => state.users.profile);
    // var applicant: TForm;

    function GetData() {
        // fetch("/getData")
        // .then(res => res.json())
        // .then((out) => {
        // console.log('Checkout this JSON! ', out);
        // applicant = out;
        // console.log("***********",applicant);
        // })
        // .catch(err => { throw err });

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
            <Styles>
                <Navbar expand="lg" fixed="top">
                    <Navbar.Brand href="/">Welcome, Start Hiring</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/">Home</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/">Applicants</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/">Job Postings</Link>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link>
                                    <Link to="/">Logout</Link>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Styles >
            <br />
            <br />
            <br />
            {/* <Applicant /> */}
            {GetData()}

            <div className="container">
            <input type="search" name="search" id="" placeholder="Search..." onChange={(e) => {
                            setIsSearched(!isSearched);
                            setSearchTerm(e.target.value)
                        }} />
                <div className="row">
                    <div className="col-sm">
                        {userData && data.map(user =>
                            <Applicant passData={user} />
                        )}
                    </div>
                </div>
            </div>
            <h2> Seperation </h2>
            {
                    userData && isSearched && data.filter(user => (user.fname == searchTerm || user.city == searchTerm || user.designition == searchTerm)).map((user) => (
                        <div className="preview">
                            <Applicant passData={user} />
                        </div>
                    ))
            }
        </>

    );
};

export default DashboardPage;