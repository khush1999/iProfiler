import React, { Fragment, useState, useEffect } from "react";
import Message from "./Message";
import Progress from "./Progress";
import axios from "axios";
import Apply from "../pages/Apply";
import "./fileUpload.css";
import { NavigationBar } from "./NavigationBar";

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
    "Companies worked at": [],
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
    setDisableButton(!disableButton)
  };

  let form;

  const FormDisplay = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsForm(true);
      setIsLoading(false);
    }, 5000);
  }

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
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
    FormDisplay();
  };

  return (
    <Fragment>
      <NavigationBar />
      <br/> <br/> <br/>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={OnSubmit} className="mt-5 ml-5 mr-5">
        <h2>Resume Upload</h2>
        <div className="custom-file mb-4">
          <br></br>
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange} required
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>

      { progressBar && <Progress percentage={uploadPercentage} /> }

      { !disableButton && <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
      /> }
      </form>
      {console.log("Value is =", data)}
      {isLoading ? <div className="load"><img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" /></div> : " "}
      {isForm ? <Apply passData={data} /> : " "}
    </Fragment>
  );
};

export default FileUpload;
