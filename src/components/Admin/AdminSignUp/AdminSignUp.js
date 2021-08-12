import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminSignUp = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [signUpStatus, setSignUpStatus] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://enigmatic-tundra-20141.herokuapp.com/adminSignUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setSignUpStatus(data));
  };
  return (
    <div>
      <div className="mt-4">
        <form
          className="w-50 card m-auto p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              {...register("email")}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              {...register("password")}
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <input className="btn btn-primary btn-block" type="submit" />
          <p className="forgot-password text-right">
            Already registered <Link to="/">sign in?</Link>
          </p>
        </form>
        {signUpStatus === true && alert("Admin Signup Done")}
      </div>
    </div>
  );
};

export default AdminSignUp;
