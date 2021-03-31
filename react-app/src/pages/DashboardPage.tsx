import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Nav,
  Navbar,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
// import iprofiler from "../assets/LogoFinal.png";
import Applicant from "../components/Applicants";
import FilterForm from "../components/FilterForm";
import "./DashboardPage.css";
import { NavDashboard } from "../components/NavDashboard";
import { BannerDashboard } from "../components/BannerDashboard";
import Iframe from 'react-iframe';


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
  status: string;
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
    status: "available",
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
  // const [message, setMessage] = useState("");

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
    // if (isSearched) {
    //   setData(applicantData);
    //   console.log("Hiiiii");
    // }

    console.log("After set applicant data", applicantData);
    console.log("After set applicant data", data);

    //If Skills is not all and a selected one
    if (filterData.Skills != "") {
      //filteredData consists of selected skill
      if (!isSearched) {
        processedData = data.filter(
          (user) =>
            user.skills1.toLowerCase() == filterData.Skills.toLowerCase() ||
            user.skills2.toLowerCase() == filterData.Skills.toLowerCase() ||
            user.skills3.toLowerCase() == filterData.Skills.toLowerCase()
        );
      } else {
        processedData = applicantData.filter(
          (user) =>
            user.skills1.toLowerCase() == filterData.Skills.toLowerCase() ||
            user.skills2.toLowerCase() == filterData.Skills.toLowerCase() ||
            user.skills3.toLowerCase() == filterData.Skills.toLowerCase()
        );
      }
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

    setFileteredProcessedData(processedData);
    setIsFiltered(true);
    setIsSearched(false);
    console.log("Filterrrrr", processedData);
    console.log("Filterrrrr", applicantData);
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

  const searchData = (pattern) => {
    if (!pattern) {
      setApplicantData(data);
      return;
    }
    // If filter is applied and then we search
    if (isFiltered) {
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
        <NavDashboard />

        <div className="content shadow-lg">
          <BannerDashboard />

          <div className="filter">
            <Row className="filter-row">
              <Col md={7}>
                <h3 className="display-applicant">Displaying Applicants</h3>
              </Col>
              <Col md={1} className="dashboard-filters">
                <Button variant="dark" onClick={handleShow}>
                  Filters
                </Button>
              </Col>
              <Col md={4} className="pr-0">
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

          <hr className="filter-hr" />

          {/* <p className="text-danger">{message}</p> */}
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

      <div>
        <Iframe url="https://charts.mongodb.com/charts-iprofiler-krpsa/embed/charts?id=0fd6f242-ac72-4357-95ef-8b70303b9bf4&theme=dark" styles={{ background: "#21313C", border: "none", borderRadius: "2px", boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)", width: "640", height: "480" }}></Iframe>
      </div>
    </>
  );
};

export default DashboardPage;
