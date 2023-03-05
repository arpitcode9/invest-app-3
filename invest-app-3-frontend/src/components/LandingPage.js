import React, { useState, useRef } from "react";
import logo from "./images/logo.png";
import LandingNavbar from "./LandingNavbar.js";
import './components.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Theme';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./components.css"
import { Routes, Route, Link, useLocation } from "react-router-dom";


const LandingPage = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <div className="container-fluid border">
                <div className="column border">

                    <div className="row border">
                        <div className="col-6 border">
                            <div className="row-6 d-flex align-items-center justify-content-center border">
                                <img src={logo} className="BigLogo" alt="logo" />
                            </div>
                            <div className="row-6 d-flex align-items-center justify-content-center border">
                                <center>
                                    <Typography
                                        variant="h3"
                                        noWrap
                                        component="a"
                                        href="/"
                                        color="secondary"
                                        sx={{
                                            mr: 2,
                                            display: { xs: 'none', md: 'flex' },
                                            fontWeight: 700,
                                            fontStyle: 'oblique',
                                            textDecoration: 'none',
                                            textAlign: 'center',
                                            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                                            '&:hover': {
                                                color: 'secondary.main', // change the color on hover
                                                textDecoration: 'none', // remove the underline on hover
                                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // add a shadow on hover
                                            },
                                        }}
                                    >
                                      {'        '} NowAcquire
                                    </Typography>
                                </center>
                            </div>

                        </div>
                        <div className="col-6 d-flex align-items-center justify-content-center border">
                            <Typography>
                                Investing in Startups is Just One Click Away
                                {'\n'}
                            </Typography>
                            {'\n'}
                            <Button variant="contained" color="secondary" size="small">
                                <Link to={"/investorRegister"} style={{ textDecoration: 'none', color: "inherit" }}>
                                    Investor Signup
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="row footer align-items-bottom justify-content-center border" style={{ background: "#cec2e3" }} >
                        <center>
                            Get Your First Equity Free . Limitations Apply .
                            <br></br>
                            rights  reserved
                        </center>
                    </div>

                </div>
            </div>
        </ThemeProvider>
    );
};

export default LandingPage;
