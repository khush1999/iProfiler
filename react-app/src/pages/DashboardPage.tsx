import Applicant from "../components/Applicants";
import { Row, Col, Dropdown, Nav, Navbar } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./DashboardPage.css";
import "font-awesome/css/font-awesome.min.css";
import { Link, useHistory } from "react-router-dom";
import iprofiler from "../assets/LogoFinal.png";
import { LinkContainer } from "react-router-bootstrap";
import Fuse from 'fuse.js'

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
  Companies_worked_at: string;
  address: string;
  dob: string;
  city: string;
  state: string;
  zip: string;
  resume_id: string;
}

const DashboardPage = () => {
  console.log("DashhhhhhhhhhhBoarddddddddddddddd")
  const ip = {
    email: "",
    phone1: "",
    phone2: "",
    fname: "",
    lname: "",
    dob: "",
    total_exp: 0,
    ug_University: "",
    pg_University: "",
    designition: "",
    ugDegree: "",
    pgDegree: "",
    pgPercentage: "",
    ugPercentage: "",
    skills1: "",
    skills2: "",
    skills3: "",
    Companies_worked_at: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    resume_id: "",
  };

  const [userData, setUserData] = useState(false);
  const [data, setData] = useState([ip]);
  const [Defdata, setDefData] = useState([ip]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [message, setMessage] = useState("");
  const [DropSkill, setDropSkill] = useState("");
  const [DropExp, setDropExp] = useState("");
  const [DropRole, setDropRole] = useState("");
  const [prevSkill, setPrevSkill] = useState("");
  const [prevExp, setPrevExp] = useState("");
  const [prevDes, setPrevDes] = useState("");
  const [applicantData, setApplicantData] = useState(data);
  const [homePage, setHomePage] = useState(false);

  const history = useHistory();

  function GetData() {
    useEffect(() => {
      if (userData == false) {
        axios.get("/getData").then((res) => {
          console.log("////////////////////////////////////", res.data);
          setData(res.data);
          setDefData(res.data);
          setApplicantData(res.data);
          setUserData(true);
        });
      } else {
        setIsSearched(!setIsSearched);
      }
    }, [data]);
  }
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("/logout");
      console.log("$$$$$$$$$$$$$$$$$$$$$$");
      console.log(res.data);
      if (res.data === "EmailID") {
        history.push("/Login");
      }
    } catch (err) {
      if (err.response.status == 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  const Courses = (courseType: string) => {
    if (
      (prevSkill != courseType || courseType === "All") &&
      prevExp === "" &&
      prevDes === ""
    ) {
      setData(Defdata);
    }
    setDropSkill(courseType);
    setPrevSkill(courseType);
  };

  const Experience = (expType: string) => {
    if (
      (prevExp != expType || expType === "All") &&
      prevExp === "" &&
      prevDes === ""
    ) {
      setData(Defdata);
    }
    setDropExp(expType);
    setPrevExp(expType);
  };

  const Role = (roleType: string) => {
    if (
      (prevDes != roleType || roleType === "All") &&
      prevExp === "" &&
      prevDes === ""
    ) {
      setData(Defdata);
    }
    setDropRole(roleType);
    setPrevDes(roleType);
  };

  const searchData = (pattern) => {
    if (!pattern) {
      setApplicantData(data);
      return;
    }
    const fuse = new Fuse(applicantData, {
      keys: ["fname", "lname"],
    });

    const result = fuse.search(pattern);
    const matches: IForm[] = [];
    if (!result.length) {
      setApplicantData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setApplicantData(matches);
    }
  };

  return (
    <>
      {GetData()}
      <div className="main-dashboard">
        <div className="sidebar" id="side">
          <Navbar.Brand href="#" className="brand-border" id="sidebar-logo">
            <img src={iprofiler} alt="iprofiler" className="logo-dashboard" />
          </Navbar.Brand>
          <Link to={{
            pathname: "/",
            state: !homePage
          }} >
            <i
              className="fa fa-home pr-2"
              style={{ fontSize: "1.75em" }}
            />
            Home
          </Link>
          <a className="active sidebar-link" href="#">
            <i
              className="fa fa-user pr-2"
              style={{ fontSize: "1.75em" }}
            />
            Applicants
          </a>
          <a href="#">
            <i
              className="fa fa-briefcase pr-2"
              style={{ fontSize: "1.75em" }}
            />
            Job Postings
          </a>
          <a href="#" onClick={handleClick}>
            <i
              className="fa fa-power-off pr-2"
              style={{ fontSize: "1.75em" }}
            />
            Logout
          </a>
        </div>

        <div className="content">
          <Row className="heading-style">
            <h3 className="display-applicant">Displaying Applicants</h3>
            <LinkContainer to="/SendEmail">
              <Nav.Link>
                <i
                  className="fa fa-user-plus"
                  style={{ fontSize: "1.75em", color: "#AE4DFF" }}
                ></i>
              </Nav.Link>
            </LinkContainer>
          </Row>

          <div className="filter">
            <Row className="filter-row">
              <Col md={6} className="dashboard-filters">
                <div className="select">
                  <select onChange={(e) => Courses(e.target.value)}>
                    <option value="none" selected disabled hidden>
                      Skills
                    </option>
                    <option value="All">All</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                    <option value="Django">Django</option>
                    <option value="C">C/C++</option>
                    <option value="React">React</option>
                    <option value="Javascript">Javascript</option>
                  </select>
                </div>

                <div className="select">
                  <select onChange={(e) => Experience(e.target.value)}>
                    <option value="none" selected disabled hidden>
                      Experience
                    </option>
                    <option value="All">All</option>
                    <option value="0-3 Years">0-3 Years</option>
                    <option value="3-6 Years">3-6 Years</option>
                    <option value="6-9 Years">6-9 Years</option>
                    <option value=">9 Years">{">"}9 Years</option>
                  </select>
                </div>

                <div className="select">
                  <select onChange={(e) => Role(e.target.value)}>
                    <option value="none" selected disabled hidden>
                      Designation
                    </option>
                    <option value="All">All</option>
                    <option value="SDE">SDE</option>
                    <option value="SDET">SDET</option>
                    <option value="HR">HR</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>
              </Col>
              <Col md={6} className="pr-0">
                <div className="search mr-0">
                  <input
                    type="search"
                    name="search"
                    id=""
                    placeholder="Search Applicant by Name"
                    className="search-input"
                    onChange={(e) => {
                      setIsSearched(!isSearched);
                      // setSearchTerm(e.target.value);
                      searchData(e.target.value);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <div className="grid-container justify-content-around">
            {!isSearched &&
              DropSkill === "" &&
              userData &&
              data.map((user) => <Applicant passData={user} />)}

            {/* For Search Functionality */}
            {userData &&
              isSearched &&
              applicantData.map((user) => <Applicant passData={user} />)}

            {DropSkill != "" &&
              data
                .filter(
                  (user) =>
                    user.skills1.toLowerCase() == DropSkill.toLowerCase() ||
                    user.skills2.toLowerCase() == DropSkill.toLowerCase() ||
                    user.skills3.toLowerCase() == DropSkill.toLowerCase()
                )
                .map((user) => <Applicant passData={user} />)}

            {DropExp != "" &&
              data
                .filter((user) =>
                  DropExp == "0-3 Years"
                    ? user.total_exp <= 3
                    : DropExp == "3-6 Years"
                      ? user.total_exp > 3 && user.total_exp <= 6
                      : DropExp == "6-9 Years"
                        ? user.total_exp > 6 && user.total_exp <= 9
                        : user.total_exp > 9
                )
                .map((user) => <Applicant passData={user} />)}

            {DropRole != "" &&
              data
                .filter((user) => user.designition === DropRole)
                .map((user) => <Applicant passData={user} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
