import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { Routes, Route, Link, useLocation } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
//import Login from "./Login";
import { startup_register } from "../actions/newAuth";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vuserName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vContactNo = (value) => {
  if (value.length == 10) {
    return (
      <div className="alert alert-danger" role="alert">
        The Contact no should be of 10 Digits
      </div>
    );
  }
};

const StartupRegister = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfIncorp, setDateOfIncorp] = useState("");
  const [address, setAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [registrationNo, setRegistratonNo] = useState("");
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUserName = (e) => {
    const userName = e.target.value;
    setUserName(userName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const onChangeDateOfIncorp = (e) => {
    const dateOfIncorp = e.target.value;
    setDateOfIncorp(dateOfIncorp);
  };
  const onChangeAddress = (e) => {
    const address = e.target.value;
    setAddress(address);
  };
  const onChangeContactNo = (e) => {
    const contactNo = e.target.value;
    setContactNo(contactNo);
  };
  const onChangeRegistrationNo = (e) => {
    const registrationNo = e.target.value;
    setRegistratonNo(registrationNo);
  };

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onChangeIndustry = (e) => {
    const industry = e.target.value;
    setIndustry(industry);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(startup_register(name , userName,  password ,registrationNo,email,contactNo , address , industry , dateOfIncorp))
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
        Startp Registration Form
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="form-group">
                <label htmlFor="Name">Company Name</label>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[required]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userName">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="userName"
                  value={userName}
                  onChange={onChangeUserName}
                  validations={[required, vuserName]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Registration Number</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={registrationNo}
                  onChange={onChangeRegistrationNo}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Contact Number</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={contactNo}
                  onChange={onChangeContactNo}
                  validations={[required, vContactNo]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Address</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={address}
                  onChange={onChangeAddress}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">industry</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={industry}
                  onChange={onChangeIndustry}
                  validations={[required,]}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Date Of Incorporation</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={dateOfIncorp}
                  onChange={onChangeDateOfIncorp}
                  validations={[required,]}
                />
              </div>
              <div>
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
              </LocalizationProvider> */}
              </div>
              


              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className="form-group">
              <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default StartupRegister;
