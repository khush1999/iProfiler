import React, { Fragment, useState, useEffect } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
import Apply from "../pages/Apply";
import "./fileUpload.css";
import { NavigationBar } from "./NavigationBar";
import { Row, Col, Container } from "react-bootstrap";
import { JobDes } from "./JobDes";
import iprofilerlogo from '../assets/LogoFinal.png';

/*This component allows applicant to upload resume */

const FileUpload = () => {

  /* Structure for Applicant Data */

  const ip = {
    email: "",
    phone: "",
    name: "",
    total_exp: 0,
    university: [],
    designition: "",
    degree: [],
    skills: [],
    Companies_worked_at: [],
    resume_id: "",
    status: "",
  };

  /* Managing states for file upload */

  const [file, setFile] = useState("");
  const [data, setData] = useState(ip);
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [progressBar, setProgressBar] = useState(true);
  const [loadText, setLoadText] = useState(false);

  /* Setting the target as the uploaded resume*/
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setDisableButton(!disableButton);
    setProgressBar(!progressBar);
  };

  let form;
  
  /*Function to display Loading icon */
  const FormDisplay = () => {
    setIsLoading(true);
    setLoadText(true);
    setTimeout(() => {
      setIsForm(true);
      setIsLoading(false);
      setLoadText(false);
    }, 5000);
  };


  /*Function for sending resume for parsing after successful submission */
  const OnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    /* Axios call to post the parsed resume data */
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setProgressBar(!progressBar), 10000);
        },
      });
  
      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });
      setData(res.data);
      setMessage("File Uploaded");
    } catch (err) {
      /* Setting message to handle error state */
      if (err.response.status === 500) {
        setMessage(
          "Your resume is not ATS Comaptible, Please try with another format"
        );
      } else {
        setMessage(err.response.data.msg);
      }
    }
    FormDisplay();
    setDisableButton(!disableButton);
    
  };

  return (
    <Fragment>
      <Row className="apply-nav">
        <Col md={8}>
      <img src={iprofilerlogo} alt="iprofiler" className="apply-logo"/>
      </Col>
      <Col md={4}>
      <h4>Excel your Career with Us...</h4>
      </Col>
      </Row>

      <Container
        className="text-center shadow-lg mb-5 bg-white rounde upload-main"
      >
        <Row>
          <Col sm={6} className="text-white font-weight-bold p-4 jd-col">
            <JobDes />
          </Col>
          <Col sm={6} className="bg-light text-dark form-container upload-col">
            <form onSubmit={OnSubmit} className="form-upload">
            {loadText && <p>Keep calm & sit back we are processing your resume!!</p>}
              {message ? <Message msg={message} /> : null}
              <h2 className="mb-3">Resume Upload</h2>
              <div className="custom-file mb-4">
                <br></br>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="custom-file-input"
                  id="customFile"
                  placeholder="(.doc,.pdf,.docx)"
                  onChange={onChange}
                  required
                />
                <label
                  className="custom-file-label text-left"
                  htmlFor="customFile"
                >
                  {filename}
                </label>
              </div>

              {progressBar && <Progress percentage={uploadPercentage} />}

              {!disableButton && (
                <input
                  type="submit"
                  value="Upload"
                  className="btn btn-dark btn-block mt-4"
                />
              )}
            </form>
          </Col>
        </Row>
      </Container>

      {/*Handling state of Loading icon */ }
      {isLoading ? (
          <img className="load" src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" />
      ) : (
        " "
      )}
      {isForm ? <Apply passData={data} /> : " "}
    </Fragment>
  );
};

export default FileUpload;
