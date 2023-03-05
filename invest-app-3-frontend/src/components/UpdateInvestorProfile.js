import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Routes, Route, Link, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
//import Login from "./Login";
import {  investor_update_profile } from "../actions/newAuth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const UpdateInvestorProfile = () => {
  const form = useRef();
  const checkBtn = useRef();
  const { user: currentUser } = useSelector((state) => state.auth);

  const [aadharNo, setAadhar] = useState("");
  const [panNo, setPan] = useState("");
  const [address, setAddress] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  const id = currentUser.id ;
  const onChangeAadhar = (e) => {
    const aadharNo = e.target.value;
    setAadhar(aadharNo);
  };
  const onChangePan = (e) => {
    const panNo = e.target.value;
    setPan(panNo);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(investor_update_profile(aadharNo , panNo , address , id))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <div className="col-md-12">
      <div className="card card-container">
        Update Investor Profile
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleUpdateProfile} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="username">Aadhar No</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={aadharNo}
                  onChange={onChangeAadhar}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Pan No</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={panNo}
                  onChange={onChangePan}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Address</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={address}
                  onChange={onChangeAddress}
                  validations={[required,]}
                />
              </div>


              <div className="form-group">
                <button className="btn btn-primary btn-block">Update Profile</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      {/* <div className="extra link">
      <center>
        Already registered ? <Link to={"/login"} className="nav-link">
          Sign IN
        </Link> instead</center>

        <Routes>

          <Route path="/login" element={<Login />} />

        </Routes>
      </div> */}
    </div>
  );
};

export default UpdateInvestorProfile;
