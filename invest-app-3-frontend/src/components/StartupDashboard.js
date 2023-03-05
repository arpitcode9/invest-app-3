import React, { useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useDispatch, useSelector } from "react-redux";
import getLatestStartupInfo from "../services/newUser.service";

const StartupDashboard = () => {

  const { user: currentUser } = useSelector((state) => state.auth);

  const [currentUserStartup, setCurrentUserStartup] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/startup/getProfile/'+id);
        const data = await response.json();
        setCurrentUserStartup(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const id = currentUser.id ; 
  const companyName = currentUser.user1._doc.name;


  return (
    <div className="container">
      <Typography variant="h4" gutterBottom>
            Welcome to your Dashboard <strong>{companyName}</strong>
      </Typography>
      {currentUser.id}
      {currentUserStartup.name}
          {/* <ul>
          <li>
          Your Current Company Valuation : {currentUserStartup.financials.companyValuation}
          </li>
          <li>
          Current Stake held by Promoters : {currentUserStartup.financials.promoterStake}
          </li>
          <li>
          Current Stake held by Angel Investors : {currentUserStartup.financials.angelStake}
          </li>
          <li>
          Current Stake held by Institutional Investors : {currentUserStartup.financials.institutionalStake}
          </li>
          <li>
          Stake diversified on NowAcquire : {currentUserStartup.financials.equityOnNA}
          </li>
        </ul> */}
        
      
      
    </div>
  );
};

export default StartupDashboard;
