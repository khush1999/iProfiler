import Applicant from "../components/Applicants";
import { Row, Col, Dropdown, Nav, Navbar, Button } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./DashboardPage.css";
import "font-awesome/css/font-awesome.min.css";
import { Link, useHistory } from "react-router-dom";
import iprofiler from "../assets/LogoFinal.png";
import { LinkContainer } from "react-router-bootstrap";
import Fuse from "fuse.js";
import FilterForm from "../components/FilterForm";

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

interface IFilterData {
  Skills: string;
  Experience: string;
  Designation: string;
}

const DashboardPage = () => {
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

  const filData = {
    Skills: "",
    Experience: "",
    Designation: "",
  };
  let processedData = [ip];

  const [filteredProcessedData, setFileteredProcessedData] = useState([ip]);

  const [userData, setUserData] = useState(false);
  const [data, setData] = useState([ip]);
  const [Defdata, setDefData] = useState([ip]);
  const [isSearched, setIsSearched] = useState(false);
  const [applicantData, setApplicantData] = useState(data);
  const [homePage, setHomePage] = useState(false);
  const [show, setShow] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [message, setMessage] = useState("");

  const history = useHistory();

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleFilterSubmit = async (filterData: any) => {
    console.log("!!!!!!!!!!!!!!!!!!!!!", filterData);

    setData(Defdata);
    if(isSearched) {
      setData(applicantData);
    }

    //If Skills is not all and a selected one
    if (filterData.Skills != "") {
      //filteredData consists of selected skill
      processedData = data.filter(
        (user) =>
          user.skills1.toLowerCase() == filterData.Skills.toLowerCase() ||
          user.skills2.toLowerCase() == filterData.Skills.toLowerCase() ||
          user.skills3.toLowerCase() == filterData.Skills.toLowerCase()
      );
      console.log("Ifffffff reached Skills", processedData);
    } else {
      //If skills is ALL
      processedData = Defdata;
      console.log("Elseeeeee reached Skills", processedData);
    } //Fine

    if (processedData.length > 0) {
      if (filterData.Experience != "") {
        processedData = processedData.filter((user) => {
          if (filterData.Experience.includes("0-3 Years")) {
            return user.total_exp <= 3;
          } else if (filterData.Experience.includes("3-6 Years")) {
            return user.total_exp > 3 && user.total_exp <= 6;
          } else if (filterData.Experience.includes("6-9 Years")) {
            return user.total_exp > 6 && user.total_exp <= 9;
          } else {
            return user.total_exp > 9;
          }
        });
        console.log("reached experience", processedData);
      }
    }

    if (processedData.length > 0) {
      if (filterData.Designation != "") {
        processedData = processedData.filter(
          (user) => user.designition === filterData.Designation
        );
        console.log("reached designation", processedData);
      }
    }
    console.log();

    setFileteredProcessedData(processedData);
    setIsFiltered(true);
    setIsSearched(false);
  };

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

  const searchData = (pattern) => {
    if (!pattern) {
      setApplicantData(data);
      return;
    }
    // If filter is applied and then we search
    if(isFiltered) {
      setApplicantData(processedData);
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
    setIsFiltered(false);
};

  return (
    <>
      {GetData()}
      <div className="main-dashboard">
        <FilterForm
          show={show}
          handleClose={handleClose}
          handleFilterSubmit={handleFilterSubmit}
        />
        <div className="sidebar" id="side">
          <Navbar.Brand href="#" className="brand-border" id="sidebar-logo">
            <img src={iprofiler} alt="iprofiler" className="logo-dashboard" />
          </Navbar.Brand>
          <Link
            to={{
              pathname: "/",
              state: !homePage,
            }}
          >
            <i className="fa fa-home pr-2" style={{ fontSize: "1.75em" }} />
            Home
          </Link>
          <a className="active sidebar-link" href="#">
            <i className="fa fa-user pr-2" style={{ fontSize: "1.75em" }} />
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
                <Button variant="dark" onClick={handleShow}>
                  Filters
                </Button>
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
                      searchData(e.target.value);
                    }}
                  />
                </div>
              </Col>
            </Row>
          </div>

          <p className="text-danger">{message}</p>
          <div className="grid-container justify-content-center">
            {/* For displaying all data*/}
            {!isSearched &&
              !isFiltered &&
              userData &&
              data.map((user) => <Applicant passData={user} />)}

            {/* For Search Functionality */}
            {userData &&
              isSearched &&
              applicantData.map((user) => <Applicant passData={user} />)}

            {/* For Filter Functionality */}
            {isFiltered && filteredProcessedData.length > 0 ? (
              filteredProcessedData.map((user) => <Applicant passData={user} />)
            ) : isFiltered ? (
              <h2>No such results found !!</h2>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
