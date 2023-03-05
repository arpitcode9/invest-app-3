import React, { useState, useEffect } from 'react';
import { Navigate , Routes, Route, Link, useLocation} from 'react-router-dom';
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const ListOfAllStartups = () => {
  const [startups, setStartups] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/startup/getAll');
        const data = await response.json();
        setStartups(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!currentUser) {
    return <Navigate to="/InvestorLogin" />;
  }

  return (
    <div className='container-fluid px-md-5'>
      <h3>View All Startups you can invest in : </h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell><b>S.No.</b></TableCell>
              <TableCell><b>Startup Name</b></TableCell>
              <TableCell><b>Industry</b></TableCell>
              <TableCell><b>Current Valuation</b></TableCell>
              <TableCell><b>Equity Available on NowAcquire</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {startups.map((startup , i) => (
              <TableRow key={startup.userName}>
                <TableCell>{i+1}</TableCell>
                <TableCell>
                <Link to={`/ViewStartup/${startup._id}`} style={{ textDecoration: 'none', color: "inherit" }}>
                  {startup.name}
                </Link>
                </TableCell>
                <TableCell>{startup.industry}</TableCell>
                <TableCell>{startup._id}</TableCell>
                <TableCell>{startup.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListOfAllStartups;
