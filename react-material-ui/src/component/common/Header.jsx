import React from 'react';
import { NavLink } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import StarIcon from '@mui/icons-material/StarBorder';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
// import GlobalStyles from '@mui/material/GlobalStyles';
// import Container from '@mui/material/Container';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';


const Header = () => {
  return (
    <>
    <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap', marginRight: "20px" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Material UI Learn
          </Typography>
          <nav>
            {/* <Link
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/login"
              sx={{ my: 1, mx: 1.5 }}
            >
              Login
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/register"
              sx={{ my: 1, mx: 1.5 }}
            >
              Register
            </Link> */}

            <NavLink to="/" className="navItem"> Home </NavLink> |
            <NavLink to="/login" className="navItem"> Login </NavLink> |
            <NavLink to="/register" className="navItem"> Register </NavLink> |
            <NavLink to="/listing" className="navItem" style={{  paddingRight: "0px" }}> Listing </NavLink>

          </nav>
          {/* <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button> */}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header