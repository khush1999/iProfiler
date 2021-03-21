import React, { Fragment, useState, useEffect } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
import Apply from "../pages/Apply";
import "./fileUpload.css";
import { NavigationBar } from "./NavigationBar";
import { Row, Col, Container } from "react-bootstrap";
import { JobDes } from "./JobDes";

const mainWidth = { width: "80%", marginTop: "10rem" };
const divColor = { backgroundColor: "#AE4DFF" };

const FileUpload = () => {
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
  };
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

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    setDisableButton(!disableButton);
  };

  let form;

  const FormDisplay = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsForm(true);
      setIsLoading(false);
    }, 5000);
  };

  const OnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
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
      if (err.response.status === 500) {
        setMessage(
          "Your resume is not ATS Comaptible, Please try with another format"
        );
      } else {
        setMessage(err.response.data.msg);
      }
    }
    FormDisplay();
  };

  return (
    <Fragment>
      <NavigationBar />
      <Container
        style={mainWidth}
        className="text-center shadow-lg mb-5 bg-white rounde upload-main"
      >
        <Row>
          <Col
            sm={6}
            style={divColor}
            className="text-white font-weight-bold p-4 jd-col"
          >
            <JobDes />
          </Col>
          <Col sm={6} className="bg-light text-dark form-container upload-col">
            <form onSubmit={OnSubmit} className="form-upload">
              {message ? <Message msg={message} /> : null}
              <h2>Resume Upload</h2>
              <div className="custom-file mb-4">
                <br></br>
                <input
                  type="file"
                  className="custom-file-input"
                  id="customFile"
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
      {console.log("Value is =", data)}
      {isLoading ? (
        <div className="load">
          <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" />
        </div>
      ) : (
        " "
      )}
      {isForm ? <Apply passData={data} /> : " "}
    </Fragment>
  );
};

export default FileUpload;
