import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const Footer = () => {

  return (
    <>
    <Container
        maxWidth="fluid"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [2, 4],
          bgcolor: "#2e7d32",
          color: "#fff"
        }}
      >
    <Container
        maxWidth="lg"
      >
        <Grid container spacing={4} justifyContent="space-evenly">

        <Grid item xs={6} sm={3} >
            <Typography variant="h6" color="text.primary.light" gutterBottom> Heading 1 </Typography>
            <ul>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 1 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 2 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 3 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 4 </Link> </li>
            </ul>
        </Grid>

        <Grid item xs={6} sm={3} >
            <Typography variant="h6" color="text.primary.light" gutterBottom> Heading 2 </Typography>
            <ul>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 1 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 2 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 3 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 4 </Link> </li>
            </ul>
        </Grid>

        <Grid item xs={6} sm={3} >
            <Typography variant="h6" color="text.primary.light" gutterBottom> Heading 3 </Typography>
            <ul>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 1 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 2 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 3 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 4 </Link> </li>
            </ul>
        </Grid>

        <Grid item xs={6} sm={3} >
            <Typography variant="h6" color="text.primary.light" gutterBottom> Heading 4 </Typography>
            <ul>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 1 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 2 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 3 </Link> </li>
            <li> <Link href="#" variant="subtitle1" color="primary.light"> Link 4 </Link> </li>
            </ul>
        </Grid>

        </Grid>
        
        <Typography variant="body2" color="text.primary.light" align="center" sx={{ mt: 1 }}>
            {'Copyright © All rights reserved. '}            
            {new Date().getFullYear()} - {new Date().getFullYear()+1}
            {'. '}
            <Link color="inherit" href="https://mui.com/" target={"_blank"}>
            Material UI
            </Link>
            {' '}
        </Typography>

      </Container>
      </Container>
    </>
  )
}

export default Footer