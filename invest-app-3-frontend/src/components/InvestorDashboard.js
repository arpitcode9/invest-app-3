import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, IconButton } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useDispatch, useSelector } from "react-redux";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  graphContainer: {
    height: 300,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paginationContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
  },
  companyTableContainer: {
    marginBottom: theme.spacing(4),
  },
  tableCell: {
    textAlign: 'center',
  },
  portfolioTableCell: {
    width: '20%',
    textAlign: 'center',
  },
  logoTableCell: {
    width: '10%',
    textAlign: 'center',
  },
  recommendationContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    height: 200,
    overflow: 'auto',
  },
  recommendationCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const pnlData = [
  { month: 'Jan', pnl: 5000 },
  { month: 'Feb', pnl: 7000 },
  { month: 'Mar', pnl: 9000 },
  { month: 'Apr', pnl: 12000 },
  { month: 'May', pnl: 15000 },
  { month: 'Jun', pnl: 18000 },
];

const portfolioData = [
  { id: 1, logo: 'https://via.placeholder.com/50', name: 'Company A', percentage: 25, value: 5000 },
  { id: 2, logo: 'https://via.placeholder.com/50', name: 'Company B', percentage: 15, value: 3500 },
  { id: 3, logo: 'https://via.placeholder.com/50', name: 'Company C', percentage: 20, value: 7000 },
  { id: 4, logo: 'https://via.placeholder.com/50', name: 'Company D', percentage: 10, value: 2500 },
  { id: 5, logo: 'https://via.placeholder.com/50', name: 'Company E', percentage: 30, value: 9000 },
  { id: 6, logo: 'https://via.placeholder.com/50', name: 'Company F', percentage: 18, value: 6000 },
  { id: 7, logo: 'https://via.placeholder.com/50', name: 'Company G', percentage: 12, value: 4000 },
  { id: 8, logo: 'https://via.placeholder.com/50', name: 'Company H', percentage: 22, value: 8000 },
];

const movies = [
  { name: 'One Co', imageURL: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/988/posts/32707/image/Placeit_2.jpg" },
  { name: 'Connect', imageURL: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/01/Horizontal-Tech-Logo-Styles.png' },
  { name: 'Ola', imageURL: 'https://i.pinimg.com/originals/e9/3a/6e/e93a6ead3f6784c21a6620d1102ea88f.jpg' },
  { name: 'Zomato', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png' },
  { name: 'Oyo', imageURL: 'https://seeklogo.com/images/O/oyo-rooms-logo-6C301512FE-seeklogo.com.png' },
  { name: 'One Co1', imageURL: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/988/posts/32707/image/Placeit_2.jpg" },
  // { name: 'Connect1', imageURL: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/01/Horizontal-Tech-Logo-Styles.png' },
  // { name: 'Ola1', imageURL: 'https://i.pinimg.com/originals/e9/3a/6e/e93a6ead3f6784c21a6620d1102ea88f.jpg' },
  // { name: 'Zomato1', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png' },
  // { name: 'Oyo1', imageURL: 'https://seeklogo.com/images/O/oyo-rooms-logo-6C301512FE-seeklogo.com.png' },
  // { name: 'One Co2', imageURL: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/988/posts/32707/image/Placeit_2.jpg" },
  // { name: 'Connect2', imageURL: 'https://venngage-wordpress.s3.amazonaws.com/uploads/2019/01/Horizontal-Tech-Logo-Styles.png' },
  // { name: 'Ola2', imageURL: 'https://i.pinimg.com/originals/e9/3a/6e/e93a6ead3f6784c21a6620d1102ea88f.jpg' },
  // { name: 'Zomato2', imageURL: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png' },
  // { name: 'Oyo2', imageURL: 'https://seeklogo.com/images/O/oyo-rooms-logo-6C301512FE-seeklogo.com.png' },
];

const recommendationData = [
  { id: 1, name: 'Company I' },
  { id: 2, name: 'Company J' },
  { id: 2, name: 'Company k' },
  { id: 2, name: 'Company l' },
  { id: 2, name: 'Company m' },
  { id: 2, name: 'Company n' },
  { id: 2, name: 'Company o' },
  { id: 2, name: 'Company p' },
  { id: 3, name: 'Company q' },]

const InvestorDashboard = () => {

  const { user: currentUser } = useSelector((state) => state.auth);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const fname = capitalizeFirstLetter(currentUser.user1._doc.firstName);
  const lname = capitalizeFirstLetter(currentUser.user1._doc.lastName);
  const space = " ";

  const classes = useStyles();

  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const renderGraph = () => {
    // Code to generate the PnL graph using the pnlData array
    return <div>Placeholder for PnL graph</div>;
  };

  const renderPortfolioTable = () => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const portfolioDataPaginated = portfolioData.slice(startIndex, endIndex);

    return (
      <div>
        <TableContainer component={Paper} className={classes.companyTableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.logoTableCell}></TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Stage Percentage</TableCell>
                <TableCell>Current Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {portfolioDataPaginated.map((company) => (
                <TableRow key={company.id}>
                  <TableCell className={classes.logoTableCell}>
                    <img src={company.logo} alt={company.name} />
                  </TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>{company.percentage}%</TableCell>
                  <TableCell>${company.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {portfolioData.length > rowsPerPage && (
            <div className={classes.paginationContainer}>
              <Pagination
                count={Math.ceil(portfolioData.length / rowsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="small"
                showFirstButton
                showLastButton
                siblingCount={1}
                boundaryCount={1}
                renderItem={(item) => (
                  <PaginationItem
                    component={Button}
                    {...item}
                    disabled={item.type === 'start-ellipsis' || item.type === 'end-ellipsis'}
                  />
                )}
                prevIconButtonProps={{ size: 'small' }}
                nextIconButtonProps={{ size: 'small' }}
                siblingIconButtonProps={{ size: 'small' }}
                boundaryIconButtonProps={{ size: 'small' }}
                showZeroCount={false}
              />
            </div>
          )}
        </TableContainer>
      </div>
    );
  };

  const renderRecommendationList = () => {
    return (
      <div className={classes.recommendationContainer}>
        <Typography variant="h6" gutterBottom>
          Other Companies You Can Invest In
        </Typography>
        {recommendationData.map((company) => (
          <div className={classes.recommendationCard} key={company.id}>
            <Typography>{company.name}</Typography>
          </div>
        ))}
      </div>
    );
  };

  const RecommendedCompaniesList = () => {


    const handleScrollPosition = (direction) => {
      const container = document.getElementById('movie-list-container');
      const containerScrollPosition = container.scrollLeft;
      const containerWidth = container.clientWidth;

      if (direction === 'left') {
        setScrollPosition(containerScrollPosition - containerWidth);
      } else if (direction === 'right') {
        setScrollPosition(containerScrollPosition + containerWidth);
      }
    };

    return (
      <div style={{ height: 150, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" gutterBottom>
          Other Companies You Can Invest In
        </Typography>
        <IconButton onClick={() => handleScrollPosition('left')}>
          <ArrowLeftIcon />
        </IconButton>
        <div style={{ overflowX: 'auto', scrollBehavior: 'smooth', width: '100%' }}>
          <Grid container spacing={2} id="movie-list-container" style={{ display: 'flex', transform: `translateX(-${scrollPosition}px)` }}>
            {movies.map((movie) => (
              <Grid item key={movie.name} style={{ flexShrink: 0 }}>
                <div style={{ margin: '0 10px' }}>
                  <figure>
                    <img src={movie.imageURL} alt={movie.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <figcaption>
                      <center>
                      <Typography variant="caption" align="center">{movie.name}</Typography>
                      </center>
                    </figcaption>
                  </figure>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <IconButton onClick={() => handleScrollPosition('right')}>
          <ArrowRightIcon />
        </IconButton>
      </div>
    );
  };

  return (
    <div className='container-fluid border'>
      <div className='col border'>
        <div className='row-1 border'>
          <Typography variant="h4" gutterBottom>
            Welcome to your Dashboard <strong>{fname + space + lname + space + "!"}</strong>
            {currentUser.user1._doc.financials.investments.companies.map((company) => {
              <div className={classes.recommendationCard} key={company.name}>
                <Typography>{company.name}</Typography>
              </div>
            }

            )}
          </Typography>
        </div>
        <div className='row-8 border d-flex'>
          <div className='col-5 border'>
            {renderGraph()}
          </div>
          <div className='col-7 border'>
            {renderPortfolioTable()}
          </div>
        </div>
        <div className='row-3 border'>
          <div className='h-25 strict'>
            {RecommendedCompaniesList()}
          </div>


        </div>
      </div>
    </div>

  );
};

export default InvestorDashboard;

{/* your investments : {currentUser.user1._doc.financials.investments.companies.map((company)=>(
          <div className={classes.recommendationCard} key={company.id}>
          <Typography>{company.name}</Typography>
        </div>
        ))} */}