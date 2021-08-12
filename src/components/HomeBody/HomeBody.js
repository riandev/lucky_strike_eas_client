import React from "react";
import notice from "../../images/notice.gif";

const HomeBody = () => {
  return (
    <div>
      <div className="login-page container">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <h4 style={{ color: "red" }}>JTI Lucky Strick EAS</h4>
            <p>1. Login Before 9 AM</p>
            <p>2. Call Only Non Smokers</p>
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={notice} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
