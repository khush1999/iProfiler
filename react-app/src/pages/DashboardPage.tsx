import axios from "axios";
import "font-awesome/css/font-awesome.min.css";
import Fuse from "fuse.js";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Row
} from "react-bootstrap";
import Applicant from "../components/Applicants";
import { BannerDashboard } from "../components/BannerDashboard";
import FilterForm from "../components/FilterForm";
import { NavDashboard } from "../components/NavDashboard";
import "./DashboardPage.css";

// Interface structure for Applicant data
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

// Structure for data filtering options
interface IFilterData {
  Skills: string;
  Experience: string;
  Designation: string;
}

// Main Dashboard Page
const DashboardPage = () => {

  // Structure for Applicant data
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

  // Storing Filtered data
  let processedData = [ip];

  // States for dashboard functionalities
  const [filteredProcessedData, setFileteredProcessedData] = useState([ip]);
  const [userData, setUserData] = useState(false);
  const [data, setData] = useState([ip]);
  const [Defdata, setDefData] = useState([ip]);
  const [isSearched, setIsSearched] = useState(false);
  const [applicantData, setApplicantData] = useState(data);
  const [show, setShow] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  // Toggling the state of filter modal
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  // Applying filter functionalities
  const handleFilterSubmit = async (filterData: any) => {
    setData(Defdata);

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
      } 
      // Filtering after Search is applied
      else {
        processedData = applicantData.filter(
          (user) =>
            user.skills1.toLowerCase() == filterData.Skills.toLowerCase() ||
            user.skills2.toLowerCase() == filterData.Skills.toLowerCase() ||
            user.skills3.toLowerCase() == filterData.Skills.toLowerCase()
        );
      }
    } else {
      //If skills is ALL
      processedData = Defdata;
    }

    // Filter based on Experience
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
      }
    }

    // Filter based on Job Roles
    if (processedData.length > 0) {
      if (filterData.Designation != "") {
        processedData = processedData.filter(
          (user) => user.designition.toLowerCase() === filterData.Designation.toLowerCase()
        );
      }
    }

    // Setting filtered data
    setFileteredProcessedData(processedData);

    // Setting search and filter state
    setIsFiltered(true);
    setIsSearched(false);
  };

  // Getting applicants data from database (Backend)
  function GetData() {
    useEffect(() => {
      if (userData == false) {
        axios.get("/getData").then((res) => {
          // Storing applicant data in our state
          setData(res.data);
          setDefData(res.data);
          setApplicantData(res.data);
          setUserData(true);
        });
      } 
      // Toggling for search state, showing only searched results
      else {
        setIsSearched(!setIsSearched);
      }
    }, [data]); // After axios call, whenever data will change use effect will triger
  }

  // Search Functionality using Fuse.js Library
  const searchData = (pattern) => {
    if (!pattern) {
      setApplicantData(data);
      return;
    }
    // If filter is applied and then we set applicant data since we want search to happen over it
    if (isFiltered) {
      setApplicantData(processedData);
    }

    const fuse = new Fuse(applicantData, {
      keys: ["fname", "lname"],
    });

    // Fuzzy based searching
    const result = fuse.search(pattern);

    // For storing our searched results
    const matches: IForm[] = [];
    // If no results match we store empty array
    if (!result.length) {
      setApplicantData([]);
    } else {
      result.forEach(({ item }) => {
        matches.push(item);
      });
      setApplicantData(matches);
    }

    // Toggling between both the filter and search functionalities
    setIsFiltered(false);
  };

  return (
    <>

      {/* Getting applicants data from get API */}
      {GetData()}

      <div className="main-dashboard">
        <FilterForm
          show={show}
          handleClose={handleClose}
          handleFilterSubmit={handleFilterSubmit} />

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
                    placeholder="Search by Name"
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
