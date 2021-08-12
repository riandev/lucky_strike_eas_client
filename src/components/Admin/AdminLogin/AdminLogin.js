import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory, useLocation } from "react-router-dom";
import loginBg from "../../../images/loginBg.gif";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userContext } from "../../../App";

const AdminLogin = () => {
  const [adminInfo, setAdminInfo] = useContext(userContext);
  console.log(adminInfo);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/admin/cep" } };
  const [matchedAdmin, setMatchedAdmin] = useState({});
  console.log(adminInfo);
  const email = adminInfo.email;
  console.log(email);

  useEffect(() => {
    fetch("http://192.168.10.11:5005/admin?email=" + email)
      .then((res) => res.json())
      .then((data) => setMatchedAdmin(data))
      .catch((err) => console.log(err));
  }, [email]);
  const handleSignIn = (e) => {
    const newInfo = { ...adminInfo };
    newInfo[e.target.name] = e.target.value;
    setAdminInfo(newInfo);
  };
  const confirmSignIn = () => {
    if (
      adminInfo.email === matchedAdmin.email &&
      adminInfo.password === matchedAdmin.password
    ) {
      alert("Admin Matched");
      sessionStorage.setItem("admin", email);
      history.replace(from);
    } else {
      alert("Admin not Matched");
    }
  };
  return (
    <div>
      <div className="login-page">
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-md-6 shadow p-5">
            <div className="form-group">
              <label htmlFor="">Admin Email</label>
              <input
                onChange={handleSignIn}
                name="email"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Admin Password</label>
              <input
                onChange={handleSignIn}
                name="password"
                type="password"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-danger">
                Forgot your password?
              </label>
            </div>
            <div className="from-group mt-5">
              <button onClick={confirmSignIn} className="btn btn-danger">
                <FontAwesomeIcon icon={faSignInAlt} /> Sign In
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block align-self-end">
            <img className="img-fluid" src={loginBg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
