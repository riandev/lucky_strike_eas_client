import React, { useEffect, useState } from "react";

const DeleteLeads = () => {
  const [dStatus, setDstatus] = useState(false);
  const [dates, setDates] = useState([]);
  const [ddStatus, setDDStatus] = useState(false);
  useEffect(() => {
    fetch("http://192.168.10.11:5005/reportDates")
      .then((res) => res.json())
      .then((data) => setDates(data));
  }, []);
  function handleDateDelete(ddate) {
    console.log(ddate);
    fetch("http://192.168.10.11:5005/deleteByDate?date=" + ddate, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setDDStatus(data));
    window.location.reload(true);
  }
  const handleDelete = () => {
    fetch("http://192.168.10.11:5005/deleteAll", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setDstatus(data));
  };
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {dates.map((date, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{date?.date}</td>
                <td>
                  <button
                    onClick={() => handleDateDelete(date?.date)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-5">
        <p className="text-secondary" style={{ color: "red" }}>
          Press here to Delete All Leads
        </p>
        <p style={{ color: "red" }}>
          !Warning This Will Delete All Leads and Call Datas
        </p>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete All Data
        </button>
      </div>
      <div
        style={{ display: dStatus === true ? "block" : "none" }}
        className="mt-4"
      >
        <h3 style={{ color: "green", fontWeight: "bold" }}>Congratulations!</h3>
        <h5>Successfully Lead Delete From Database</h5>
        <p className="text-secondary">Now Go For Further Activity</p>
      </div>
    </div>
  );
};

export default DeleteLeads;
