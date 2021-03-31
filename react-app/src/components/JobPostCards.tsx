import { type } from "os";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Modal from './Modal'
import "./JobPostCards.css";

export default function JobPostCards({ jobs }) {
  const [state, setState] = useState(false);
  const [data, setData] = useState(jobs);
  const [cart, setCart] = useState([]);
  let [navigate, setNavigate] = useState("");
  //   const result: ICourses[] = [];
  console.log("CARDS i =" + jobs.jobRole);

  return (
    <div>
      {
        <div className="card">
          <div className="course-name-div">
            <h4>{jobs.jobRole}</h4>
          </div>
          <div className="course-author">
            <p id="bb">{jobs.jobCtc}</p>
          </div>
          <div className="course-price">
            <p id="bb">
              <b>{jobs.jobOffer}</b>
            </p>
            <p id="bb">{jobs.jobId}</p>
          </div>
          <div>
            <p id="bb">
              <b>{jobs.skills1}</b>
            </p>
            <p id="bb">
              <b>{jobs.skills2}</b>
            </p>
            <p id="bb">
              <b>{jobs.skills3}</b>
            </p>
          </div>
        </div>
      }
    </div>
  );
}
