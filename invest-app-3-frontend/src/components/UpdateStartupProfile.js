import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Routes, Route, Link, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
//import Login from "./Login";
import {  startup_update_profile } from "../actions/newAuth";

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

  const [companyValuation, setCompanyValuation] = useState("");
  const [promoterStake, setPromoterStake] = useState("");
  const [angelStake, setAngelStake] = useState("");
  const [institutionalStake, setInstitutionalStake] = useState("");
  const [equityOnNA, setEquityOnNA] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  const id = currentUser.id ;

  const onChangeCompanyValuation = (e) => {
    const companyValuation = e.target.value;
    setCompanyValuation(companyValuation);
  };
  const onChangePromoterStake = (e) => {
    const promoterStake = e.target.value;
    setPromoterStake(promoterStake);
  };
  const onChangeAngelStake = (e) => {
    const angelStake = e.target.value;
    setAngelStake(angelStake);
  };
  const onChangeInstitutionalStake = (e) => {
    const institutionalStake = e.target.value;
    setInstitutionalStake(institutionalStake);
  };
  const onChangeEquityOnNA = (e) => {
    const equityOnNA = e.target.value;
    setEquityOnNA(equityOnNA);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    const equityAvailableOnNA = equityOnNA;
    const equitySoldOnNA = 0;

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(startup_update_profile(companyValuation, promoterStake, angelStake, institutionalStake, equityOnNA,equityAvailableOnNA,equitySoldOnNA, id))
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
        Update StartUp Profile
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleUpdateProfile} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="company valuation">Company Valuation</label>
                <Input
                  type="text"
                  className="form-control"
                  name="company Valuation"
                  value={companyValuation}
                  onChange={onChangeCompanyValuation}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="PromoterStake">Promoter Stake</label>
                <Input
                  type="text"
                  className="form-control"
                  name="PromoterStake"
                  value={promoterStake}
                  onChange={onChangePromoterStake}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="angelStake">Angel Investor Stake</label>
                <Input
                  type="text"
                  className="form-control"
                  name="angelStake"
                  value={angelStake}
                  onChange={onChangeAngelStake}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="institutionalStake">Institutional Investor Stake</label>
                <Input
                  type="text"
                  className="form-control"
                  name="institutionalStake"
                  value={institutionalStake}
                  onChange={onChangeInstitutionalStake}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="equityOnNA">Equity on NowAcquire</label>
                <Input
                  type="text"
                  className="form-control"
                  name="equityOnNA"
                  value={equityOnNA}
                  onChange={onChangeEquityOnNA}
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
