import React from "react";
import { Link , Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

const StartupProfile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Startup Profile
        </h3>
      </header>
      <Button color="secondary" >
                <Link to={"/UpdateStartupProfile"} style={{ textDecoration: 'none', color: "inherit" }}>
                    Update your Financials and Profile
                </Link>
            </Button>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default StartupProfile;
