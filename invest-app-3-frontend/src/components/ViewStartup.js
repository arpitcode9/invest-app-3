import React, { useState, useEffect } from "react";
import { Navigate, useParams, Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import Button from '@mui/material/Button';

const ViewStartup = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const { id } = useParams();

  const [thisStartup, setThisStartup] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/startup/getProfile/' + id);
        const data = await response.json();
        setThisStartup(data);
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
    <div className="container">

      <h3>{thisStartup.name}</h3>
      <h1>current user is : {currentUser.userName}</h1>
      <b>Industry :</b> {thisStartup.industry}
      <h5>
        Financials
      </h5>
      <ul>
        <li>
          Current Company Valuation : {thisStartup.financials.companyValuation}
        </li>
        <li>
          Current Stake held by Promoters : {thisStartup.financials.promoterStake}
        </li>
        <li>
          Current Stake held by Angel Investors : {thisStartup.financials.angelStake}
        </li>
        <li>
          Current Stake held by Institutional Investors : {thisStartup.financials.institutionalStake}
        </li>
        <li>
          Stake diversified on NowAcquire : {thisStartup.financials.equityOnNA}
          <ul>
            <li>
              Stake Sold On NowAcquire : {thisStartup.financials.equitySoldOnNA}
            </li>
            <li>
              Stake Avaialable On NowAcquire : {thisStartup.financials.equityAvailableOnNA}
            </li>
          </ul>
        </li>
      </ul>

      <Button color="secondary">
                        <Link style={{ textDecoration: 'none', color: "inherit" }} >
                          BUY Stake
                        </Link>
                      </Button>
    </div>
  );
};

export default ViewStartup;
