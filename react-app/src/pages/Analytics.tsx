import React from "react";
import Iframe from "react-iframe";
import Data from "../assets/Data.png";
import { BannerDashboard } from "../components/BannerDashboard";
import { NavDashboard } from "../components/NavDashboard";
import "./analytics.css";

// Added Analytics for showing Applicant data overview
const Analytics = () => {
  return (
    <>
      {/* Nav Bar for this page */}
      <NavDashboard />
      <div className="content shadow-lg">

        {/* Dashboard banner */}
        <BannerDashboard />

        <div className="row tm-content-row">

          <div className="col-12">
            <div>
              <img src={Data} className="analytics-img-style" />
            </div>
          </div>

          <div className="col-12 tm-block-col">
            <h3 className="tm-block-title">
              Popular skills amongst applicants
            </h3>
            <div className="embed-responsive embed-responsive-16by9 z-depth-1">
              <Iframe
                url="https://charts.mongodb.com/charts-iprofiler-krpsa/embed/charts?id=d65c384c-25a5-46ff-a013-59d489e3583c&theme=dark"
                allowFullScreen
                className="embed-responsive-item applicant-stats-1"
              ></Iframe>
            </div>
          </div>

          <div className="col-12 tm-block-col">
            <h3 className="tm-block-title">Status of Applicants(in %)</h3>
            <div className="embed-responsive embed-responsive-16by9 z-depth-1">
              <Iframe
                url="https://charts.mongodb.com/charts-iprofiler-krpsa/embed/charts?id=0fd6f242-ac72-4357-95ef-8b70303b9bf4&theme=dark"
                allowFullScreen
                className="embed-responsive-item applicant-stats-1"
              ></Iframe>
            </div>
          </div>

          <div className="col-12 tm-block-col">
            <h3 className="tm-block-title">
              Applicant Count by Experience(in Years)
            </h3>
            <div className="embed-responsive embed-responsive-16by9 z-depth-1">
              <Iframe
                url="https://charts.mongodb.com/charts-iprofiler-krpsa/embed/charts?id=9af51764-664e-4fb1-96a2-56f019224b93&theme=dark"
                allowFullScreen
                className="embed-responsive-item applicant-stats-1"
              ></Iframe>
            </div>
          </div>

          <div className="col-12 tm-block-col">
            <h3 className="tm-block-title">Applicant Count by Job Role</h3>
            <div className="embed-responsive embed-responsive-16by9 z-depth-1">
              <Iframe
                url="https://charts.mongodb.com/charts-iprofiler-krpsa/embed/charts?id=2334b60a-0322-4857-8be5-d3dfb07f71cd&theme=dark"
                allowFullScreen
                className="embed-responsive-item applicant-stats-1"
              ></Iframe>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Analytics;
