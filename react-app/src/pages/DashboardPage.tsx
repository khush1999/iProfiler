import Applicant from '../components/Applicants';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

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
    passData: IForm[],
}

const DashboardPage = () => {
    const [data, setData] = useState([]);

    // const applicants = useSelector((state) => state.users.profile);
    var applicant: TForm;
    
    function getData() {
        // fetch("/getData")
        // .then(res => res.json())
        // .then((out) => {
        // console.log('Checkout this JSON! ', out);
        // applicant = out;
        // console.log("***********",applicant);
        // })
        // .catch(err => { throw err });
  
        axios.get("/getData")
            .then(res => {
                console.log("////////////////////////////////////", res.data)
                
            })
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
        <br/>
        <br/>
        <br/>
        <Applicant/>
            {getData()}

            <div className="container">
  <div className="row">
    <div className="col-sm">
                        {
                            axios.get("/getData")
            .then(res => {
        res.data.map((user, key) => (
         <Applicant/>
            ))                                
            })
        // applicant.map((user, key) => (
        // ))
    }
        </div>
        </div>
    </div>
      </>
     
      );
    };
    
export default DashboardPage;