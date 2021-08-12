import React, { useState } from "react";
import "./UploadLead.css";
import ReactDOM from "react-dom";
import CSVReader from "react-csv-reader";

const UploadLead = () => {
  const [lead, setLead] = useState([]);
  const [status, setStatus] = useState(false);
  const handleForce = (data, fileInfo) => setLead(data);

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    // transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  const handleUploadLead = () => {
    fetch("https://enigmatic-tundra-20141.herokuapp.com/uploadLead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
    })
      .then((res) => res.json())
      .then((data) => setStatus(data));
  };
  return (
    <div>
      <div className="container">
        <CSVReader
          cssClass="react-csv-input"
          label="Select CSV to upload Lead"
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions}
        />
      </div>
      <div className="text-center">
        <button onClick={handleUploadLead} className="btn btn-danger">
          Upload
        </button>
      </div>
      <div
        style={{ display: status === true ? "block" : "none" }}
        className="mt-4"
      >
        <h3 style={{ color: "green", fontWeight: "bold" }}>Congratulations!</h3>
        <h5>Successfully Lead Uploaded to Database</h5>
        <p className="text-secondary">Now Go For Further Activity</p>
      </div>
    </div>
  );
};

export default UploadLead;
