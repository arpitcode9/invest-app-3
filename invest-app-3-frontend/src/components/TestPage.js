import React from "react";
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import UpdateInvestorProfile from "./UpdateInvestorProfile";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Button from '@mui/material/Button';

const TestPage = () => {
    const { user: currentUser } = useSelector((state) => state.auth);

    return (
        <div className="container">
            <div className='container-fluid border'>
                <div className='col border'>
                    <div className='row-1 border'>
                        1111111111111111111111111
                    </div>
                    <div className='row-8 border d-flex'>
                        <div className='col-5 border'>
                            22222222222222222222222222
                        </div>
                        <div className='col-7 border'>
                            322222222222222222222222222222
                        </div>
                    </div>
                    <div className='row-3 border'>
                        42222222222222222222222
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;














{/* <header className="jumbotron">
                <h3>
                    <strong>{currentUser.username}</strong> investor Profile
                </h3>
            </header>
            <Button color="secondary" >
                <Link to={"/UpdateInvestorProfile"} style={{ textDecoration: 'none', color: "inherit" }}>
                    <ManageAccountsIcon fontSize="small" />Update your Profile (KYC)
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
            </ul> */}