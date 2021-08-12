import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import FinalUpdateQc from "../FinalUpdateQc/FinalUpdateQc";

const Qc = () => {
  const [qcNumber, setQcNumber] = useState(null);
  const [matchedQC, setMatchedQC] = useState({});
  const [update, setUpdate] = useState([]);
  console.log(matchedQC);
  const remarks = matchedQC.remarks;
  console.log(remarks);
  const handleText = (e) => {
    setQcNumber(e.target.value);
  };
  const handleSearch = () => {
    fetch(`https://enigmatic-tundra-20141.herokuapp.com/dMatched/${qcNumber}`)
      .then((res) => res.json())
      .then((data) => setMatchedQC(data));
  };
  const handleUpdate = (id) => {
    console.log(id);
    fetch(`https://enigmatic-tundra-20141.herokuapp.com/update/${id}`)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  };
  const qcBy = sessionStorage.getItem("admin");

  return (
    <div className="">
      <h4 className="mt-3 text-secondary">QC by Number</h4>
      <div className="mt-3">
        <input
          onChange={handleText}
          className="form-control w-25"
          type="text"
          name="serachNumber"
          placeholder="Search By Number"
        />
        <br />
        <button onClick={handleSearch} className="btn btn-danger">
          Search
        </button>
      </div>
      <h5 className="text-secondary mt-3">Permeters</h5>
      <div className="d-flex justify-content-evenly">
        <p className="mt-3 card bg-primary text-white m-2 p-2">
          Call Taken By: <b> {matchedQC?.agentID}</b>
        </p>
        <p className="mt-3 card bg-warning text-white m-2 p-2">
          Call Date: <b> {matchedQC?.callDate}</b>
        </p>
        <p className="mt-3 card bg-success text-white m-2 p-2">
          Call Time: <b> {matchedQC?.callTime}</b>
        </p>
      </div>
      <div className="d-flex justify-content-evenly">
        <p className="mt-3 card bg-primary text-white m-2 p-2">
          Last QC By: <b> {matchedQC?.qcChecked}</b>
        </p>
        <p className="mt-3 card bg-success text-white m-2 p-2">
          Last QC By: <b> {matchedQC?.qcDate}</b>
        </p>
        <p className="mt-3 card bg-warning text-white m-2 p-2">
          Last QC By: <b> {matchedQC?.qcTime}</b>
        </p>
      </div>
      <p className="mt-3 card bg-info text-white w-25 p-2">
        Rating: <b> {matchedQC?.rating}</b>
      </p>
      <div>
        <p>Remarks:</p>
        {remarks?.map((rm) => (
          <li>{rm.value}</li>
        ))}
      </div>
      <div>
        <table className="table table-borderless table-hover">
          <thead>
            <tr className="text-secondary">
              <th>Question1</th>
              <th>Question2</th>
              <th>Question3</th>
              <th>Question4</th>
              <th>Question5</th>
              <th>Question6</th>
              <th>Question7</th>
              <th>Question8</th>
              <th>Question9</th>
              <th>Question10</th>
              <th>Question11</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{matchedQC?.answer1}</td>
              <td>{matchedQC?.answer2}</td>
              <td>{matchedQC?.answer3}</td>
              <td>{matchedQC?.answer4}</td>
              <td>{matchedQC?.answer5}</td>
              <td>{matchedQC?.answer6}</td>
              <td>{matchedQC?.answer7}</td>
              <td>{matchedQC?.answer8}</td>
              <td>{matchedQC?.answer9}</td>
              <td>{matchedQC?.answer10}</td>
              <td>{matchedQC?.answer11}</td>
              <td>
                <button
                  onClick={() => handleUpdate(matchedQC._id)}
                  className="btn btn-danger"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <div style={{ display: update.length ? "block" : "none" }}>
          {update.map((ansData) => (
            <FinalUpdateQc qcBy={qcBy} ansData={ansData}></FinalUpdateQc>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Qc;
