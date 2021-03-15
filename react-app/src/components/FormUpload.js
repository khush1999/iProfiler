import React, { useState, useEffect } from "react";
import UploadService from "../services/UploadFile";

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState(undefined);
  const [currentFile, setCurrentFile] = useState(undefined);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");
  const [fileInfos, setFileInfos] = useState([]);

  useEffect(() => {
    UploadService.getFiles().then((response) => {
      setFileInfos(response.data);
    });
  }, []);

  const selectFile = (event) => {
    setSelectedFiles(event.target.files);
  };
  
  const upload = () => {
    let currentFile = selectedFiles[0];

    // setProgress(0);
    setCurrentFile(currentFile);
    console.log("Current File 1:" + currentFile);

    UploadService.upload(currentFile, (event) => {
      console.log("ASTHA.................");
      console.log("Current File 2:" + currentFile);
      setProgress(Math.round((100 * event.loaded) / event.total));
      console.log("Progressss.................");
    })
      .then((response) => {
        console.log("ISHA.................");
        setMessage(response.data.message);
        console.log(message);
        return UploadService.getFiles();
      })
      .then((files) => {
        console.log("Pratik.................");
        setFileInfos(files.data);
      })
      .catch(() => {
        console.log("Khushal.................");
        setProgress(0);
        setMessage("Could not upload the file!");
        setCurrentFile(undefined);
      });

    setSelectedFiles(undefined);
  };

  return (
    <div>
      {currentFile && (
        <div className="progress">
          <div
            className="progress-bar progress-bar-info progress-bar-striped"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: progress + "%" }}
          >
            {progress}%
          </div>
        </div>
      )}

      <label className="btn btn-default">
        <input type="file" onChange={selectFile} />
      </label>

      <button
        className="btn btn-success"
        disabled={!selectedFiles}
        onClick={upload}
      >
        Upload
      </button>

      <div className="alert alert-light" role="alert">
        {message}
      </div>

      <div className="card">
        <div className="card-header">List of Files</div>
        <ul className="list-group list-group-flush">
          {fileInfos &&
            fileInfos.map((file, index) => (
              <li className="list-group-item" key={index}>
                <a href={file.url}>{file.name}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default UploadFiles;