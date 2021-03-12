import axios from "axios";

const http = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
      "Content-type": "application/json",
    },
})

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append("file", file);

  return http.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return http.get("/files");
};

export default {
  upload,
  getFiles,
};